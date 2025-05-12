"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote:
      "Gilberto transformou nossa landing page e aumentou nossa taxa de conversão em 45%. Seu cuidado com os detalhes e foco na experiência do usuário fez toda a diferença.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, FitLife App",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote:
      "Trabalhe com Gilberto foi uma experiência incrível para o nosso startup. Ele criou uma landing page que comunicou perfeitamente nossa proposta de valor e ajudou a adquirir nossos primeiros 1,000 usuários.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "E-commerce Manager, StyleShop",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote:
      "O redesign da página de produto por Gilberto aumentou as vendas em 30%. Seu entendimento dos princípios de otimização de conversão é excepcional.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO, PropertyFinder",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote:
      "O trabalho de Gilberto na nossa plataforma imobiliária melhorou a engajamento do usuário. Seu enfoque em design responsivo garante uma experiência perfeita em qualquer dispositivo.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Clientes <span className="text-red-500">Testemunhas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não acredite apenas na minha palavra. Aqui está o que meus clientes têm a dizer sobre trabalhar comigo.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="absolute -top-2 -left-2">
                          <Quote className="h-8 w-8 text-red-500 opacity-50" />
                        </div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-20 w-20 rounded-full object-cover border-2 border-red-500"
                        />
                      </div>
                      <p className="text-lg italic mb-6 text-gray-300">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-red-500" : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}