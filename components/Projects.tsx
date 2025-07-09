"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

interface ProjectsProps {
  data: {
    ua: Project[]
    en: Project[]
  }
}

export default function Projects({ data }: ProjectsProps) {
  const { language, t } = useLanguage()

  // Функція для обробки шляхів зображень для GitHub Pages
  const getImageUrl = (url: string) => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      const basePath = "/your-repo-name"
      return url.startsWith("/") ? `${basePath}${url}` : url
    }
    return url
  }

  const projects = data[language]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("projects")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={getImageUrl(project.image) || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#00AEEF]/0 group-hover:bg-[#00AEEF]/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">{t("technologies")}:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#00AEEF]/10 text-[#00AEEF] rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white flex-1"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("demo")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t("code")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
