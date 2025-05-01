import Link from "next/link"
import { Instagram, Github, Linkedin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-500">G</span>ilberto <span className="text-red-500">G</span>odoy
            </h3>
            <p className="text-gray-400 mb-4">Transformando ideias em landing pages de alta conversão.</p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-red-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red-500 transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Assine para receber atualizações sobre novos projetos e dicas.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-gray-900 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Gilberto Godoy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
