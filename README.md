# Portfolio Website

Адаптивний сайт-портфоліо створений з Next.js та Tailwind CSS для розгортання на GitHub Pages.

## 🚀 Деплой на GitHub Pages

### Крок 1: Підготовка репозиторію
1. Створіть новий репозиторій на GitHub
2. Замініть `your-repo-name` в `next.config.mjs` на назву вашого репозиторію
3. Завантажте код в репозиторій

### Крок 2: Налаштування GitHub Pages
1. Перейдіть в Settings вашого репозиторію
2. Знайдіть розділ "Pages" в лівому меню
3. В Source виберіть "GitHub Actions"

### Крок 3: Додайте файли
1. Додайте ваші PDF резюме в папку `public/`:
   - `public/resume-ua.pdf`
   - `public/resume-en.pdf`
2. Додайте зображення проектів в `public/images/`
3. Оновіть дані в `config/data.js`

### Крок 4: Деплой
1. Зробіть push в main гілку
2. GitHub Actions автоматично збудує та задеплоїть сайт
3. Ваш сайт буде доступний за адресою: `https://yourusername.github.io/your-repo-name`

## 📁 Структура файлів

\`\`\`
public/
├── resume-ua.pdf          # Українське резюме
├── resume-en.pdf          # Англійське резюме
└── images/               # Зображення проектів
    ├── project1.jpg
    ├── project2.jpg
    └── ...

config/
└── data.js               # Всі дані сайту

components/               # React компоненти
├── Header.tsx
├── Hero.tsx
├── Resume.tsx
└── ...
\`\`\`

## ⚙️ Налаштування

1. **Оновіть дані**: Змініть інформацію в `config/data.js`
2. **Додайте резюме**: Розмістіть PDF файли в папці `public/`
3. **Зображення**: Додайте фото проектів в `public/images/`
4. **Базовий шлях**: Змініть `your-repo-name` в конфігурації

## 🛠 Локальна розробка

\`\`\`bash
# Встановлення залежностей
npm install

# Запуск в режимі розробки
npm run dev

# Збірка для продакшену
npm run build
\`\`\`

## 📱 Особливості

- ✅ Повністю адаптивний дизайн
- ✅ Підтримка двох мов (UA/EN)
- ✅ Статичний експорт для GitHub Pages
- ✅ Автоматичний деплой через GitHub Actions
- ✅ SEO оптимізований
- ✅ Швидке завантаження
