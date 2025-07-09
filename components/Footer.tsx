"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface FooterProps {
  data: {
    email: string
    phone: string
    location: {
      ua: string
      en: string
    }
  }
}

export default function Footer({ data }: FooterProps) {
  const { language, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-[#00AEEF]">{t("contacts")}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-[#00AEEF]" />
                  <span className="text-sm">{data.email}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2 text-[#00AEEF]" />
                  <span className="text-sm">{data.phone}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-[#00AEEF]" />
                  <span className="text-sm">{data.location[language]}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-[#00AEEF]">{t("navigation")}</h3>
              <div className="space-y-2">
                {[
                  { href: "#about", label: t("about") },
                  { href: "#resume", label: t("resume") },
                  { href: "#skills", label: t("skills") },
                  { href: "#projects", label: t("projects") },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="block w-full text-sm text-gray-300 hover:text-[#00AEEF] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-[#00AEEF]">{t("portfolio")}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{t("portfolioDescription")}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} {t("portfolio")}. {t("copyright")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
