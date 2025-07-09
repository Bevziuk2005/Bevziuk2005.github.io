"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

interface ResumeProps {
  data: {
    ua: {
      url: string
      sections: Array<{
        title: string
        content: string
      }>
    }
    en: {
      url: string
      sections: Array<{
        title: string
        content: string
      }>
    }
  }
}

export default function Resume({ data }: ResumeProps) {
  const { language, t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  const currentResume = data[language]

  // Для GitHub Pages використовуємо відносні шляхи
  const getResumeUrl = (url: string) => {
    if (typeof window !== "undefined") {
      const basePath = process.env.NODE_ENV === "production" ? "/your-repo-name" : ""
      return `${basePath}${url}`
    }
    return url
  }

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("resume")}</h2>

          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    {t("collapseResume")}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    {t("expandResume")}
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white bg-transparent"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = getResumeUrl(currentResume.url)
                  link.download = `resume-${language}.pdf`
                  link.target = "_blank"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                {t("downloadPDF")}
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Для GitHub Pages показуємо текстову версію замість iframe */}
              <div className="p-8">
                {currentResume.sections.map((section, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-[#00AEEF]">{section.title}</h3>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">{section.content}</div>
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Button
                    variant="outline"
                    className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white bg-transparent"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = getResumeUrl(currentResume.url)
                      link.target = "_blank"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("downloadPDF")} - Повна версія
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
