const GITHUB_KEY = process.env.GITHUB_KEY;

if (!GITHUB_KEY) {
  console.error('Error: GITHUB_KEY is missing');
  process.exit(1);
}

async function checkGithub() {
  console.log('Fetching authenticated user details...');
  try {
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${GITHUB_KEY}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'node-fetch'
      }
    });

    if (userRes.ok) {
      const userData = await userRes.json() as any;
      console.log('Success! Authenticated as GitHub User:');
      console.log(`- Login: ${userData.login}`);
      console.log(`- Name: ${userData.name}`);
      console.log(`- Type: ${userData.type}`);
    } else {
      console.error(`Failed to get user: ${userRes.status} ${userRes.statusText}`);
      const errText = await userRes.text();
      console.error(errText);
    }
  } catch (error: any) {
    console.error('Network error checking user:', error.message);
  }

  console.log('\nChecking access to Igor-Nersisyan/Alex-expert...');
  try {
    const repoRes = await fetch('https://api.github.com/repos/Igor-Nersisyan/Alex-expert', {
      headers: {
        'Authorization': `token ${GITHUB_KEY}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'node-fetch'
      }
    });

    if (repoRes.ok) {
      const repoData = await repoRes.json() as any;
      console.log('Success! Repository exists and is accessible:');
      console.log(`- Full Name: ${repoData.full_name}`);
      console.log(`- Private: ${repoData.private}`);
      console.log(`- Permissions:`, repoData.permissions);
    } else {
      console.error(`Failed to find repository: ${repoRes.status} ${repoRes.statusText}`);
      const errText = await repoRes.text();
      try {
        const parsed = JSON.parse(errText);
        console.error('Message:', parsed.message);
      } catch {
        console.error(errText);
      }
    }
  } catch (error: any) {
    console.error('Network error checking repository:', error.message);
  }
}

checkGithub();
