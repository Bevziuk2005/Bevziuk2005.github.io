"use client"

import { useLanguage } from "@/contexts/LanguageContext"

interface SkillsProps {
  data: {
    hard: string[]
    soft: {
      ua: string[]
      en: string[]
    }
  }
}

export default function Skills({ data }: SkillsProps) {
  const { language, t } = useLanguage()

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("skills")}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-6 text-center">{t("hardSkills")}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {data.hard.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#00AEEF] text-white rounded-full text-sm font-medium hover:bg-[#00AEEF]/90 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-6 text-center">{t("softSkills")}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {data.soft[language].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 cursor-default border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
