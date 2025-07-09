"use client"

import { Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

interface HeroProps {
  data: {
    name: {
      ua: string
      en: string
    }
    title: {
      ua: string
      en: string
    }
    about: {
      ua: string
      en: string
    }
  }
  social: {
    github: string
    linkedin: string
    telegram: string
  }
}

export default function Hero({ data, social }: HeroProps) {
  const { language } = useLanguage()

  const socialLinks = [
    { icon: Github, href: social.github, label: "GitHub" },
    { icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
    { icon: Send, href: social.telegram, label: "Telegram" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00AEEF]/5 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Ліва частина - Ім'я, посада та соціальні мережі */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {data.name[language]}
                </h1>
                <p className="text-xl md:text-2xl text-[#00AEEF] font-medium mb-8">{data.title[language]}</p>

                {/* Соціальні мережі в рядок */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="lg"
                      className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all duration-300 bg-transparent"
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <link.icon className="w-5 h-5 mr-2" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Права частина - Про себе */}
            <div className="space-y-6">
              {/* Блок про себе */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p className="text-lg leading-relaxed text-gray-700">{data.about[language]}</p>
              </div>
            </div>
          </div>

          {/* Стрілка вниз */}
          <div className="text-center mt-12 animate-bounce">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#00AEEF] hover:text-[#00AEEF]/80 transition-colors"
            >
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
