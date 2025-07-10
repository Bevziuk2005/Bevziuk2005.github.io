// All website data
const portfolioData = {
  // Translations
  translations: {
    ua: {
      // Navigation
      about: "Про мене",
      resume: "Резюме",
      skills: "Навички",
      projects: "Проєкти",

      // Section headers
      hardSkills: "Технічні навички",
      softSkills: "Особисті навички",
      contacts: "Контакти",
      navigation: "Навігація",

      // Buttons and actions
      expandResume: "Розгорнути резюме",
      collapseResume: "Згорнути резюме",
      downloadPDF: "Завантажити PDF",
      demo: "Демо",
      code: "Код",

      // Footer
      copyright: "Всі права захищені",
      portfolioDescription: "Створено з любов'ю та увагою до деталей. Готовий до нових викликів та цікавих проєктів.",

      // General
      portfolio: "Портфоліо",
      technologies: "Технології",
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

      // General
      portfolio: "Portfolio",
      technologies: "Technologies",
    },
  },

  // Personal information
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
      ua: "Привіт! Я досвідчений розробник з понад 5 роками досвіду у створенні веб-додатків. Спеціалізуюся на React, Node.js та сучасних технологіях. Люблю створювати інтуїтивні користувацькі інтерфейси та ефективні серверні рішення. Завжди прагну до вивчення нових технологій та вдосконалення своїх навичок.",
      en: "Hello! I'm an experienced developer with over 5 years of experience in creating web applications. I specialize in React, Node.js and modern technologies. I love creating intuitive user interfaces and efficient server solutions. I always strive to learn new technologies and improve my skills.",
    },
    location: {
      ua: "Київ, Україна",
      en: "Kyiv, Ukraine",
    },
  },

  // Social links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    telegram: "https://t.me/yourusername",
  },

  // Resume
  resume: {
    ua: {
      url: "resume-ua.pdf",
      sections: [
        {
          title: "Досвід роботи",
          content:
            "Senior Full Stack Developer в Tech Company (2022-теперішній час)\n• Розробка та підтримка веб-додатків\n• Керівництво командою з 3 розробників\n• Впровадження нових технологій\n\nMiddle Full Stack Developer в StartUp Inc (2020-2022)\n• Створення MVP продуктів\n• Робота з React та Node.js\n• Інтеграція з третіми сервісами",
        },
        {
          title: "Освіта",
          content:
            "Магістр комп'ютерних наук\nКиївський національний університет (2018-2020)\n\nБакалавр інформаційних технологій\nКиївський політехнічний інститут (2014-2018)",
        },
        {
          title: "Сертифікати",
          content:
            "• AWS Certified Developer\n• Google Cloud Professional\n• MongoDB Certified Developer\n• Scrum Master Certification",
        },
      ],
    },
    en: {
      url: "resume-en.pdf",
      sections: [
        {
          title: "Work Experience",
          content:
            "Senior Full Stack Developer at Tech Company (2022-present)\n• Development and maintenance of web applications\n• Leading a team of 3 developers\n• Implementation of new technologies\n\nMiddle Full Stack Developer at StartUp Inc (2020-2022)\n• Creating MVP products\n• Working with React and Node.js\n• Third-party service integrations",
        },
        {
          title: "Education",
          content:
            "Master of Computer Science\nKyiv National University (2018-2020)\n\nBachelor of Information Technology\nKyiv Polytechnic Institute (2014-2018)",
        },
        {
          title: "Certifications",
          content:
            "• AWS Certified Developer\n• Google Cloud Professional\n• MongoDB Certified Developer\n• Scrum Master Certification",
        },
      ],
    },
  },

  // Skills
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

  // Projects
  projects: {
    ua: [
      {
        id: 1,
        title: "Project Alpha",
        description:
          "Сучасний веб-додаток для управління проектами з інтуїтивним інтерфейсом та потужним функціоналом.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Alpha",
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Project Beta",
        description: "E-commerce платформа з адаптивним дизайном та інтеграцією платіжних систем.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Beta",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Project Gamma",
        description: "Мобільний додаток для трекінгу фітнесу з соціальними функціями та аналітикою.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Gamma",
        technologies: ["React Native", "Firebase", "Redux"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 4,
        title: "Project Delta",
        description: "Система управління контентом з можливістю кастомізації та SEO оптимізацією.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Delta",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 5,
        title: "Project Epsilon",
        description: "Платформа для онлайн навчання з інтерактивними курсами та системою оцінювання.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Epsilon",
        technologies: ["Angular", "Django", "Redis"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 6,
        title: "Project Zeta",
        description: "Інструмент для аналізу даних з візуалізацією та експортом звітів у різних форматах.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Zeta",
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
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Alpha",
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Project Beta",
        description: "E-commerce platform with responsive design and payment system integration.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Beta",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Project Gamma",
        description: "Mobile fitness tracking app with social features and analytics.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Gamma",
        technologies: ["React Native", "Firebase", "Redux"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 4,
        title: "Project Delta",
        description: "Content management system with customization capabilities and SEO optimization.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Delta",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 5,
        title: "Project Epsilon",
        description: "Online learning platform with interactive courses and assessment system.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Epsilon",
        technologies: ["Angular", "Django", "Redis"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 6,
        title: "Project Zeta",
        description: "Data analysis tool with visualization and report export in various formats.",
        image: "https://via.placeholder.com/300x200/00AEEF/white?text=Project+Zeta",
        technologies: ["Python", "D3.js", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#",
      },
    ],
  },
}
