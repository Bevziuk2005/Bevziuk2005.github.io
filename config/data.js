export const portfolioData = {
  // Розширені переклади для всього сайту
  translations: {
    ua: {
      // Навігація
      about: "Про мене",
      resume: "Резюме",
      skills: "Навички",
      projects: "Проєкти",

      // Заголовки секцій
      hardSkills: "Технічні навички",
      softSkills: "Особисті навички",
      contacts: "Контакти",
      navigation: "Навігація",

      // Кнопки та дії
      expandResume: "Розгорнути резюме",
      collapseResume: "Згорнути резюме",
      downloadPDF: "Завантажити PDF",
      demo: "Демо",
      code: "Код",

      // Футер
      copyright: "Всі права захищені",
      portfolioDescription: "Створено з любов'ю та увагою до деталей. Готовий до нових викликів та цікавих проєктів.",

      // Контактна інформація
      email: "Електронна пошта",
      phone: "Телефон",
      location: "Місцезнаходження",

      // Проєкти
      technologies: "Технології",
      viewProject: "Переглянути проєкт",
      viewCode: "Переглянути код",

      // Загальні
      portfolio: "Портфоліо",
      language: "Мова",
      ukrainian: "Українська",
      english: "English",
    },
    en: {
      // Navigation
      about: "About Me",
      resume: "Resume",
      skills: "Skills",
      projects: "Projects",

      // Section headers
      hardSkills: "Technical Skills",
      softSkills: "Soft Skills",
      contacts: "Contacts",
      navigation: "Navigation",

      // Buttons and actions
      expandResume: "Expand Resume",
      collapseResume: "Collapse Resume",
      downloadPDF: "Download PDF",
      demo: "Demo",
      code: "Code",

      // Footer
      copyright: "All rights reserved",
      portfolioDescription:
        "Created with love and attention to detail. Ready for new challenges and interesting projects.",

      // Contact information
      email: "Email",
      phone: "Phone",
      location: "Location",

      // Projects
      technologies: "Technologies",
      viewProject: "View Project",
      viewCode: "View Code",

      // General
      portfolio: "Portfolio",
      language: "Language",
      ukrainian: "Українська",
      english: "English",
    },
  },

  // Персональна інформація
  personal: {
    name: {
      ua: "Ім'я Прізвище",
      en: "First Last",
    },
    title: {
      ua: "Full Stack Розробник",
      en: "Full Stack Developer",
    },
    about: {
      ua: "Привіт! Я досвідчений розробник з понад 5 роками досвіду у створенні веб-додатків. Спеціалізуюся на React, Node.js та сучасних технологіях. Люблю створювати інтуїтивні користувацькі інтерфейси та ефективні серверні рішення. Завжди прагну до вивчення нових технологій та вдосконалення своїх навичок. У вільний час займаюся відкритими проектами та ментоством молодих розробників.",
      en: "Hello! I'm an experienced developer with over 5 years of experience in creating web applications. I specialize in React, Node.js and modern technologies. I love creating intuitive user interfaces and efficient server solutions. I always strive to learn new technologies and improve my skills. In my free time, I work on open source projects and mentor young developers.",
    },
    email: "your.email@example.com",
    phone: "+380 XX XXX XX XX",
    location: {
      ua: "Київ, Україна",
      en: "Kyiv, Ukraine",
    },
  },

  // Соціальні мережі
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    telegram: "https://t.me/yourusername",
  },

  // Резюме
  resume: {
    ua: {
      url: "/resume-ua.pdf",
      sections: [
        {
          title: "Досвід роботи",
          content:
            "Senior Full Stack Developer в Tech Company (2022-теперішній час)\n• Розробка та підтримка веб-додатків\n• Керівництво командою з 3 розробників\n• Впровадження нових технологій",
        },
        {
          title: "Освіта",
          content: "Магістр комп'ютерних наук\nКиївський національний університет (2018-2020)",
        },
      ],
    },
    en: {
      url: "/resume-en.pdf",
      sections: [
        {
          title: "Work Experience",
          content:
            "Senior Full Stack Developer at Tech Company (2022-present)\n• Development and maintenance of web applications\n• Leading a team of 3 developers\n• Implementation of new technologies",
        },
        {
          title: "Education",
          content: "Master of Computer Science\nKyiv National University (2018-2020)",
        },
      ],
    },
  },

  // Навички
  skills: {
    hard: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST API",
      "GraphQL",
      "Tailwind CSS",
      "SASS",
    ],
    soft: {
      ua: [
        "Командна робота",
        "Лідерство",
        "Комунікація",
        "Проблемне мислення",
        "Адаптивність",
        "Тайм-менеджмент",
        "Критичне мислення",
        "Креативність",
      ],
      en: [
        "Team Work",
        "Leadership",
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Time Management",
        "Critical Thinking",
        "Creativity",
      ],
    },
  },

  // Проєкти
  projects: {
    ua: [
      {
        id: 1,
        title: "Project Alpha",
        description:
          "Сучасний веб-додаток для управління проектами з інтуїтивним інтерфейсом та потужним функціоналом.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Project Beta",
        description: "E-commerce платформа з адаптивним дизайном та інтеграцією платіжних систем.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Project Gamma",
        description: "Мобільний додаток для трекінгу фітнесу з соціальними функціями та аналітикою.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React Native", "Firebase", "Redux"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 4,
        title: "Project Delta",
        description: "Система управління контентом з можливістю кастомізації та SEO оптимізацією.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 5,
        title: "Project Epsilon",
        description: "Платформа для онлайн навчання з інтерактивними курсами та системою оцінювання.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Angular", "Django", "Redis"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 6,
        title: "Project Zeta",
        description: "Інструмент для аналізу даних з візуалізацією та експортом звітів у різних форматах.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Python", "D3.js", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#",
      },
    ],
    en: [
      {
        id: 1,
        title: "Project Alpha",
        description:
          "Modern web application for project management with intuitive interface and powerful functionality.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Project Beta",
        description: "E-commerce platform with responsive design and payment system integration.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Project Gamma",
        description: "Mobile fitness tracking app with social features and analytics.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React Native", "Firebase", "Redux"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 4,
        title: "Project Delta",
        description: "Content management system with customization capabilities and SEO optimization.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 5,
        title: "Project Epsilon",
        description: "Online learning platform with interactive courses and assessment system.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Angular", "Django", "Redis"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 6,
        title: "Project Zeta",
        description: "Data analysis tool with visualization and report export in various formats.",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Python", "D3.js", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#",
      },
    ],
  },
}
