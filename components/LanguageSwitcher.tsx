"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="inline-flex rounded-lg border border-gray-200 p-1">
      <button
        onClick={() => setLanguage("ua")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === "ua" ? "bg-[#00AEEF] text-white shadow-sm" : "text-gray-700 hover:text-[#00AEEF]"
        }`}
        title={t("ukrainian")}
      >
        UA
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === "en" ? "bg-[#00AEEF] text-white shadow-sm" : "text-gray-700 hover:text-[#00AEEF]"
        }`}
        title={t("english")}
      >
        EN
      </button>
    </div>
  )
}
