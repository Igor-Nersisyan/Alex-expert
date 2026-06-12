import { execSync } from 'child_process';

const GITHUB_KEY = process.env.GITHUB_KEY;

if (!GITHUB_KEY) {
  console.error('Error: GITHUB_KEY is missing');
  process.exit(1);
}

const REPO_NAME = 'Alex-expert';
const OWNER = 'Igor-Nersisyan';
const REPO_ORIGIN = `github.com/${OWNER}/${REPO_NAME}.git`;
const AUTH_URL = `https://x-access-token:${GITHUB_KEY}@${REPO_ORIGIN}`;
const MASKED_URL = `https://x-access-token:***@${REPO_ORIGIN}`;

function runCommand(command: string, logCommand = true) {
  const displayCommand = command.replace(GITHUB_KEY, '***');
  if (logCommand) {
    console.log(`> Working: ${displayCommand}`);
  }
  try {
    const result = execSync(command, { stdio: 'pipe' }).toString().trim();
    if (result) {
      console.log(result.replace(GITHUB_KEY, '***'));
    }
  } catch (error: any) {
    console.error(`Error executing: ${displayCommand}`);
    if (error.stderr) {
      console.error(error.stderr.toString().replace(GITHUB_KEY, '***'));
    } else {
      console.error(error.message.replace(GITHUB_KEY, '***'));
    }
    throw error;
  }
}

async function createRepo() {
  console.log(`Attempting to automatically create the repository "${REPO_NAME}"...`);
  try {
    const res = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_KEY}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'node-fetch'
      },
      body: JSON.stringify({
        name: REPO_NAME,
        private: false, // Create it as a public repository
        description: 'Portfolio project for Alex Expert'
      })
    });

    if (res.status === 201) {
      console.log(`Success! Repository "${OWNER}/${REPO_NAME}" has been created.`);
      return true;
    } else if (res.status === 422) {
      console.log(`Repository "${OWNER}/${REPO_NAME}" might already exist or name check failed (Status ${res.status}).`);
      return true;
    } else {
      console.log(`Unable to automatically create repository. Status: ${res.status}`);
      const errText = await res.text();
      console.log('Response:', errText);
      return false;
    }
  } catch (error: any) {
    console.error('Error during repository creation:', error.message);
    return false;
  }
}

async function start() {
  // Try to create the repository
  const createdOrExists = await createRepo();

  if (!createdOrExists) {
    console.log('\nWarning: Could not verify if the repository was created. Trying to push anyway...');
  }

  try {
    console.log('\n--- Initializing Git and Preparing Push ---');

    // 1. Initialize local repository
    console.log('\nInitializing git...');
    runCommand('git init');

    // 2. Configure user name & email
    console.log('\nConfiguring git user...');
    runCommand(`git config --global user.name "${OWNER}"`);
    runCommand(`git config --global user.email "slavik.sychyov@gmail.com"`);
    runCommand('git config --global --add safe.directory /');

    // 3. Stage files
    console.log('\nStaging files...');
    runCommand('git add .');

    // 4. Commit changes
    console.log('\nCreating commit...');
    runCommand('git commit -m "Auto-export from AI Studio Build"');

    // 5. Set branch to main
    console.log('\nSetting default branch to main...');
    runCommand('git branch -M main');

    // 6. Add remote URL
    console.log('\nAdding remote url...');
    try {
      runCommand('git remote remove origin');
    } catch (e) {}
    runCommand(`git remote add origin ${AUTH_URL}`, false);

    // 7. Push to Main
    console.log('\nPushing content to GitHub...');
    runCommand('git push -u origin main --force', false);

    console.log('\n--- Project Successfully Pushed to GitHub! ---');
  } catch (err: any) {
    console.error('\n--- Push failed during Git operations ---');
    process.exit(1);
  }
}

start();
