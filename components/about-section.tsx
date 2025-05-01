"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, LineChart } from "lucide-react"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Bootstrap",
  "PHP",
  "MySQL",
  "UI/UX Design",
  "Responsive Design",
  "SEO",
  "Performance Optimization",
  "Conversion Rate Optimization",
]

const timeline = [
  {
    year: "2021",
    title: "Estudando Desenvolvimento Full-Stack",
    description: "Comecei a estudar desenvolvimento full-stack no Senac e através de cursos online e projetos pessoais.",
  },
  {
    	year: "2022",
    title: "Manipulador de Tintas",
    description: "Consegui meu primeiro emprego como manipulador de tintas na empresa Acefer.",
  },
  {
    year: "2023",
    title: "Colorista Automotivo",
    description: "Comecei a trabalhar como colorista automotivo na empresa Acefer.",
  },
  {
    year: "2024",
    title: "Colorista Automotivo",
    description: "Ainda como colorista na Acefer, queria aprofundar meus conhecimentos em desenvolvimento web.",
  },
  {
    year: "2025",
    title: "Desempregado",
    description: "Muitos se assustam com isso, mas não é o fim do mundo, é apenas o começo de uma nova jornada.",
  },
  {
    year: "2025",
    title: "Desenvolvedor Front-End",
    description: "Hoje desenvolvo landing para empresas pequenhas e grandes, com foco em conversão e performance.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-red-500">Mim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            De colorista automotivo a desenvolvedor front-end, minha jornada foi impulsionada por uma paixão pelo design e
            funcionalidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Minha Abordagem</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <Palette className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Desenvolvimento Driven por Design</h4>
                  <p className="text-gray-400">
                    Combino sensibilidade estética com expertise técnica para criar sites visualmente impressionantes e
                    funcionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <LineChart className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Desenvolvimento com Foco em Conversão</h4>
                  <p className="text-gray-400">
                    Cada decisão de design é feita com o objetivo de maximizar as conversões, garantindo que a landing page
                    proporcione resultados.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Código Limpo e Eficiente</h4>
                  <p className="text-gray-400">
                    Escrevo código mantido, otimizado para garantir tempos de carregamento rápidos e experiências de usuário
                    suaves.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Habilidades e Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-gray-800 hover:bg-gray-700 text-white">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">
            Minha <span className="text-red-500">Jornada</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row md:justify-end" : "flex-row-reverse md:justify-end"
                  }`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 max-w-md">
                        <div className="text-red-500 font-bold mb-2">{item.year}</div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-red-500 h-4 w-4 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
