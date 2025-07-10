// Global variables
let currentLanguage = "ua"
let isResumeExpanded = false
let isMobileMenuOpen = false
let lucide // Declare lucide variable
let portfolioData // Declare portfolioData variable

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  window.lucide.createIcons()

  // Set current year
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Load initial content
  loadContent()

  // Setup scroll listener for header
  setupScrollListener()

  // Load saved language preference
  const savedLanguage = localStorage.getItem("portfolio-language")
  if (savedLanguage && (savedLanguage === "ua" || savedLanguage === "en")) {
    changeLanguage(savedLanguage)
  } else {
    // Ensure both language switchers are synchronized on initial load
    changeLanguage(currentLanguage)
  }
})

// Setup scroll listener for header visibility
function setupScrollListener() {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header")
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      if (window.scrollY > heroBottom - 100) {
        header.classList.add("header-visible")
      } else {
        header.classList.remove("header-visible")
      }
    }
  })
}

// Change language
function changeLanguage(lang) {
  currentLanguage = lang

  // Update all language buttons (both in header and fixed)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
    // Check both header and fixed language buttons
    if (btn.id === `lang-${lang}` || btn.id === `fixed-lang-${lang}`) {
      btn.classList.add("active")
    }
  })

  // Save language preference
  localStorage.setItem("portfolio-language", lang)

  // Update all content
  loadContent()
  updateTranslations()
}

// Load content based on current language
function loadContent() {
  const data = window.portfolioData

  // Update hero section
  document.getElementById("hero-name").textContent = data.personal.name[currentLanguage]
  document.getElementById("hero-title").textContent = data.personal.title[currentLanguage]
  document.getElementById("hero-about").textContent = data.personal.about[currentLanguage]

  // Update footer location
  document.getElementById("footer-location").textContent = data.personal.location[currentLanguage]

  // Load skills
  loadSkills()

  // Load projects
  loadProjects()

  // Load resume content
  loadResumeContent()
}

// Update all translations
function updateTranslations() {
  const translations = window.portfolioData.translations[currentLanguage]

  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[key]) {
      element.textContent = translations[key]
    }
  })
}

// Load skills
function loadSkills() {
  const data = window.portfolioData.skills

  // Hard skills
  const hardSkillsContainer = document.getElementById("hard-skills")
  hardSkillsContainer.innerHTML = ""
  data.hard.forEach((skill) => {
    const skillElement = document.createElement("span")
    skillElement.className = "skill-hard"
    skillElement.textContent = skill
    hardSkillsContainer.appendChild(skillElement)
  })

  // Soft skills
  const softSkillsContainer = document.getElementById("soft-skills")
  softSkillsContainer.innerHTML = ""
  data.soft[currentLanguage].forEach((skill) => {
    const skillElement = document.createElement("span")
    skillElement.className = "skill-soft"
    skillElement.textContent = skill
    softSkillsContainer.appendChild(skillElement)
  })
}

// Load projects
function loadProjects() {
  const projects = window.portfolioData.projects[currentLanguage]
  const projectsContainer = document.getElementById("projects-grid")
  const translations = window.portfolioData.translations[currentLanguage]

  projectsContainer.innerHTML = ""

  projects.forEach((project) => {
    const projectElement = document.createElement("div")
    projectElement.className = "project-card"

    projectElement.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">${project.title}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">${project.description}</p>
        <div class="mb-4">
          <p class="text-sm font-medium text-gray-500 mb-2">${translations.technologies}:</p>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map((tech) => `<span class="project-tech">${tech}</span>`).join("")}
          </div>
        </div>
        <div class="flex gap-3">
          <button onclick="openLink('${project.demoUrl}')" class="btn-primary flex-1 text-sm py-2">
            <i data-lucide="external-link" class="w-4 h-4 mr-2"></i>
            ${translations.demo}
          </button>
          <button onclick="openLink('${project.githubUrl}')" class="btn-outline flex-1 text-sm py-2">
            <i data-lucide="github" class="w-4 h-4 mr-2"></i>
            ${translations.code}
          </button>
        </div>
      </div>
    `

    projectsContainer.appendChild(projectElement)
  })

  // Reinitialize Lucide icons for new elements
  window.lucide.createIcons()
}

// Load resume content
function loadResumeContent() {
  const resumeData = window.portfolioData.resume[currentLanguage]
  const resumeSections = document.getElementById("resume-sections")

  resumeSections.innerHTML = ""

  resumeData.sections.forEach((section, index) => {
    const sectionElement = document.createElement("div")
    sectionElement.className = "mb-8 last:mb-0"
    sectionElement.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-900 mb-4 text-primary">${section.title}</h3>
      <div class="text-gray-700 whitespace-pre-line leading-relaxed">${section.content}</div>
      ${index < resumeData.sections.length - 1 ? '<hr class="mt-6 border-gray-200">' : ""}
    `
    resumeSections.appendChild(sectionElement)
  })

  // Add download button at the bottom
  const downloadSection = document.createElement("div")
  downloadSection.className = "mt-8 pt-6 border-t border-gray-200 text-center"
  downloadSection.innerHTML = `
    <button onclick="downloadResume()" class="btn-outline">
      <i data-lucide="download" class="w-4 h-4 mr-2"></i>
      <span data-translate="downloadPDF">Завантажити PDF</span> - ${currentLanguage === "ua" ? "Повна версія" : "Full Version"}
    </button>
  `
  resumeSections.appendChild(downloadSection)

  // Reinitialize Lucide icons
  window.lucide.createIcons()
}

// Toggle resume visibility
function toggleResume() {
  const resumeContent = document.getElementById("resume-content")
  const toggleButton = document.getElementById("resume-toggle")
  const translations = window.portfolioData.translations[currentLanguage]

  isResumeExpanded = !isResumeExpanded

  if (isResumeExpanded) {
    resumeContent.style.maxHeight = "800px"
    resumeContent.style.opacity = "1"
    toggleButton.innerHTML = `
      <i data-lucide="chevron-up" class="w-4 h-4 mr-2"></i>
      <span>${translations.collapseResume}</span>
    `
  } else {
    resumeContent.style.maxHeight = "0"
    resumeContent.style.opacity = "0"
    toggleButton.innerHTML = `
      <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i>
      <span>${translations.expandResume}</span>
    `
  }

  // Reinitialize Lucide icons
  window.lucide.createIcons()
}

// Download resume
function downloadResume() {
  const resumeData = window.portfolioData.resume[currentLanguage]
  const resumeUrl = resumeData.url

  // Create download link
  const link = document.createElement("a")
  link.href = resumeUrl
  link.download = `resume-${currentLanguage}.pdf`
  link.target = "_blank"

  // Trigger download
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Optional: Show notification
  console.log(`Downloading ${currentLanguage === "ua" ? "Ukrainian" : "English"} resume...`)
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")

  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  } else {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// Scroll to section
function scrollToSection(selector) {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }
}

// Open external link
function openLink(url) {
  window.open(url, "_blank")
}

// Import Lucide icons and portfolioData
window.lucide = window.lucide || require("lucide")
window.portfolioData = window.portfolioData || require("./portfolioData.json")
