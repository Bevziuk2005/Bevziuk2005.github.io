"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ua" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  translations: {
    ua: Record<string, string>
    en: Record<string, string>
  }
}

export function LanguageProvider({ children, translations }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("ua")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
