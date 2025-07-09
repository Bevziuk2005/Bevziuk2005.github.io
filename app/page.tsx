"use client"

import { useState, useEffect } from "react"
import { portfolioData } from "@/config/data"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Resume from "@/components/Resume"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowNavigation(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <LanguageProvider translations={portfolioData.translations}>
      <div className="min-h-screen bg-white">
        <Header showNavigation={showNavigation} />
        <main>
          <Hero data={portfolioData.personal} social={portfolioData.social} />
          <About data={portfolioData.personal} />
          <Resume data={portfolioData.resume} />
          <Skills data={portfolioData.skills} />
          <Projects data={portfolioData.projects} />
        </main>
        <Footer data={portfolioData.personal} />
      </div>
    </LanguageProvider>
  )
}
