"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-500/10 text-red-500 rounded-full mb-4">
              Desenvolvedor de Landing Page
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-4xl"
          >
            Transformando Ideias em <span className="text-red-500">Landing Pages de Alta Impacto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl"
          >
            Desenvolvedor de landing page focado em design, UX e conversões
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-md text-lg"
            >
              Ver Meu Trabalho
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:border-red-500 hover:text-red-500 px-8 py-6 rounded-md text-lg"
            >
              Vamos Trabalhar
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Role para baixo</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown className="h-6 w-6 text-red-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
