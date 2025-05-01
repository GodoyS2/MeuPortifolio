"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageSquare, Instagram, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-red-500">Conectar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem um projeto na mente ou quer discutir como posso ajudar a melhorar as conversões da sua landing page?
            Entre em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">gilbertogodoy190@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-400">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <Instagram className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Instagram</h4>
                  <p className="text-gray-400">@gilbertoo.godoy</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <MessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-400">+55 (11) 99999-9999</p>
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
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-red-500 focus:ring-red-500 min-h-[150px]"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-red-500 hover:bg-red-600 text-white">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <div className="bg-green-500/10 text-green-500 p-4 rounded-md text-center">
                  Obrigado! Sua mensagem foi enviada com sucesso.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
