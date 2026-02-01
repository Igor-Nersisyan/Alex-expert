import { Project, PricingTier, ProcessStep } from './types';

export const DEVELOPER_INFO = {
  name: "Алекс",
  title: "Разработчик нового поколения | AI-Automation Expert",
  description: "Превращаю ваши идеи в работающие приложения за дни, а не месяцы. Использую возможности современного AI (LLM, нейросети, low-code), чтобы создавать мощные инструменты для бизнеса: от CRM-систем до голосовых ассистентов. Мой подход: минимум бюрократии, максимум функционала. Вы получаете готовый продукт, пока конкуренты только пишут ТЗ.",
  avatarUrl: "https://i.postimg.cc/qMTFCsYR/image.png" 
};

export const PROJECTS: Project[] = [
  {
    id: '10',
    title: 'AI News Nexus - Техно-новости',
    description: 'Новостной агрегатор в сфере искусственного интеллекта. Уникальная особенность — возможность обсудить любую новость с нейросетью прямо в интерфейсе: получить краткую выжимку, анализ трендов или ответы на вопросы по статье.',
    imageUrl: 'https://i.postimg.cc/gkHTywFz/Screenshot-6.jpg',
    link: 'https://ai-news-nexus-298924443818.us-west1.run.app/',
    tags: ['News Tech', 'AI Chat', 'React', 'Trends'],
    price: '200 000 ₽'
  },
  {
    id: '9',
    title: 'Content AI - Генератор контента',
    description: 'Универсальная платформа для автоматизации маркетинга. Генерирует контент-планы, email-рассылки, сценарии подкастов, видео-аватары, лонгриды, SEO-статьи и лид-магниты. Полный цикл производства контента в одном окне.',
    imageUrl: 'https://i.postimg.cc/65fmV7J5/Screenshot-4.jpg',
    link: 'https://content-ai.replit.app/',
    tags: ['Content Gen', 'AI Marketing', 'Video AI', 'SEO'],
    price: '350 000 ₽'
  },
  {
    id: '7',
    title: 'Russian Cities AI - Умный Гид',
    description: 'Интерактивный AI-консультант по городам России. Помогает строить туристические маршруты, рассказывает исторические факты и дает рекомендации по достопримечательностям в формате живого диалога.',
    imageUrl: 'https://i.postimg.cc/dtYfT2Xh/Screenshot-2.jpg',
    link: 'https://russian-cities.replit.app/',
    tags: ['Travel Tech', 'AI Guide', 'React', 'RAG'],
    price: '150 000 ₽'
  },
  {
    id: '8',
    title: 'Bank Onboarding - Адаптация персонала',
    description: 'Веб-платформа для адаптации банковских сотрудников. Включает интерактивные обучающие модули, систему тестирования и AI-ассистента, который 24/7 отвечает на вопросы по регламентам и продуктам банка.',
    imageUrl: 'https://i.postimg.cc/L63bkqK4/Screenshot-3.jpg',
    link: 'https://bank-employee-onboarding.replit.app/',
    tags: ['FinTech', 'HR Tech', 'Onboarding', 'AI Assistant'],
    price: '450 000 ₽'
  },
  {
    id: '1',
    title: 'Rent Pilot AI - CRM для недвижимости',
    description: 'CRM-система для автоматизации управления арендой. Включает дашборд с финансовой аналитикой, контроль задолженностей и функцию голосового ввода данных для быстрого заполнения карточек объектов.',
    imageUrl: 'https://i.postimg.cc/65XPGrSB/image.jpg', 
    link: 'https://rent-pilot-ai-rimilik134.replit.app',
    tags: ['React', 'AI Voice', 'Analytics', 'Dashboard'],
    price: '300 000 ₽'
  },
  {
    id: '5',
    title: 'IT Sales AI - Экосистема продаж',
    description: 'Веб-приложение для отделов продаж: Нейро-КК, генератор коммерческих предложений, скрипты и AI-тренажер для менеджеров (голосовые звонки с ИИ) для отработки возражений. Дашборд для отслеживания успехов команды.',
    imageUrl: 'https://i.postimg.cc/kXmHtQZG/IT-sales.jpg',
    link: 'https://hello-who-are-you--rimilik134.replit.app',
    tags: ['AI Trainer', 'Sales Tech', 'Analytics', 'QC Automation'],
    price: '500 000 ₽'
  },
  {
    id: '6',
    title: 'Mira AI - HR Агент',
    description: 'Интеллектуальный AI-рекрутер для подбора персонала. Уникальный веб-интерфейс с Generative UI: контент и структура сайта перестраиваются в реальном времени под запросы пользователя (AI пишет код на лету).',
    imageUrl: 'https://i.postimg.cc/Prj78WcN/Mira-AI.jpg',
    link: 'https://mira-ai-templates.replit.app',
    tags: ['HR Tech', 'Generative UI', 'AI Agent', 'Real-time Coding'],
    price: '400 000 ₽'
  },
  {
    id: '2',
    title: 'Replit Designer - AI Интерьеры',
    description: 'Веб-сервис для трансформации помещений с помощью нейросетей. Загрузка исходного фото, генерация вариантов дизайна по текстовому промпту и возможность редактирования деталей на естественном языке.',
    imageUrl: 'https://i.postimg.cc/ncJWQ45x/image-(1).jpg', 
    link: 'https://replit-designer.mybegetdomain.website',
    tags: ['Generative AI', 'Image Processing', 'Interior Design'],
    price: '250 000 ₽'
  },
  {
    id: '3',
    title: 'Aura Estate - Архитектурный AI',
    description: 'Интеллектуальная платформа для проектирования частных домов. Генерирует планировочные решения, создает 3D-визуализации фасадов и автоматически рассчитывает предварительную смету материалов на основе предпочтений заказчика.',
    imageUrl: 'https://i.postimg.cc/4Ng0h6MT/Aura-Estate.png', 
    link: 'https://aura-estate-ai-665142568070.us-west1.run.app/',
    tags: ['Architecture', '3D Visualization', 'Cost Estimation'],
    price: '550 000 ₽'
  },
  {
    id: '4',
    title: 'Event Wizard - Генератор событий',
    description: 'Умный помощник для event-агентств. Создает креативные концепции мероприятий, формирует тайминг, подбирает референсы декора и помогает в логистике. Полный цикл планирования от идеи до чек-листа.',
    imageUrl: 'https://i.postimg.cc/02s4JY3k/Event-wizard.png', 
    link: 'https://event-wizard-ai-982821910152.us-west1.run.app',
    tags: ['Event Tech', 'Planning', 'Creative AI'],
    price: '350 000 ₽'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  // Deprecated but kept for type compatibility if needed, though not used in UI
];

export const PROCESS_STEPS: ProcessStep[] = [
  { 
    number: '01', 
    title: 'Обсуждение задачи', 
    description: 'Мы начинаем с глубокого погружения в ваши бизнес-процессы. Я анализирую текущие боли, изучаю конкурентов и помогаю сформулировать KPI для будущего продукта. Мы определяем, где именно AI принесет максимальную пользу, а где достаточно классических алгоритмов.'
  },
  { 
    number: '02', 
    title: 'ТЗ и Прототипы', 
    description: 'На этом этапе идеи превращаются в документацию. Я готовлю техническое задание, схему архитектуры базы данных и UI/UX прототипы. Вы заранее видите, как будет выглядеть приложение, и мы утверждаем стек технологий, чтобы исключить сюрпризы в будущем.'
  },
  { 
    number: '03', 
    title: 'Договор и Гарантии', 
    description: 'Прозрачные юридические условия. Мы подписываем договор, в котором четко зафиксированы сроки, стоимость и этапы работ. Обязательный пункт — NDA (соглашение о неразглашении), гарантирующий полную безопасность ваших коммерческих данных.'
  },
  { 
    number: '04', 
    title: 'Предоплата 50%', 
    description: 'Внесение аванса бронирует время команды разработчиков и позволяет нам немедленно приступить к настройке серверов и окружения. Мы используем безопасные способы оплаты с предоставлением всех закрывающих документов для бухгалтерии.'
  },
  { 
    number: '05', 
    title: 'Разработка (Спринты)', 
    description: 'Мы работаем по методологии Agile недельными спринтами. Каждые 7 дней я демонстрирую вам рабочий функционал. Это позволяет гибко вносить изменения "на лету" и гарантирует, что итоговый продукт будет именно таким, каким вы его представляли.'
  },
  { 
    number: '06', 
    title: 'Тесты и Запуск', 
    description: 'Финальная стадия включает нагрузочное тестирование, проверку безопасности и деплой на ваши "боевые" сервера (или в облако). Я провожу обучение ваших сотрудников, передаю исходный код и все доступы. Проект переходит в вашу полную собственность.'
  },
  { 
    number: '07', 
    title: 'Финальный расчет', 
    description: 'Постоплата 50% производится только после успешного приема работ и подписания акта. После этого начинается гарантийный период, в течение которого любые выявленные баги исправляются бесплатно и в приоритетном порядке.'
  },
];

export const NAV_LINKS = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contact' },
];