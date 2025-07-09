"use client"

import { useLanguage } from "@/contexts/LanguageContext"

interface AboutProps {
  data: {
    about: {
      ua: string
      en: string
    }
  }
}

export default function About({ data }: AboutProps) {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t("about")}</h2>
          <p className="text-lg text-gray-600">Ця секція може містити додаткову інформацію або бути видалена</p>
        </div>
      </div>
    </section>
  )
}
