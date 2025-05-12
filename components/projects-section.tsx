'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Code, Eye } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "TechCorp Landing Page",
    description: "Uma landing page de alta conversão para uma empresa de SaaS.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Fitness App Homepage",
    description: "Landing page para uma aplicação de fitness com modelo de assinatura",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Product Page",
    description: "Página de produto de alta conversão para uma loja de e-commerce",
    image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg",
    techStack: ["React", "CSS Modules", "Redux"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Real Estate Listing",
    description: "Página de listagem de imóveis com opções avançadas de filtragem",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "Crypto Dashboard",
    description: "Painel interativo para rastreamento de criptomoedas",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    techStack: ["React", "Chart.js", "Styled Components"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Travel Agency Homepage",
    description: "Landing page visualmente impressionante para uma agência de viagens",
    image: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg",
    techStack: ["Next.js", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos <span className="text-red-500">Selecionados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma coleção de landing pages e aplicativos web que projetei e desenvolvi para clientes em várias indústrias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs bg-black/50 text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 hover:border-red-500 hover:text-red-500"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Online
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 hover:border-red-500 hover:text-red-500"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Detalhes
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-gray-700 hover:border-red-500 hover:text-red-500">
            Ver Todos os Projetos
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}