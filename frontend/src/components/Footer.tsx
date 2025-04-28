'use client'

import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100878] text-white py-8 w-full m-0">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="font-[roboto-standard] text-3xl md:text-4xl text-[#ffffff] tracking-wide"
            >
              HC soluções
            </Link>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-[roboto-standard] text-xl md:text-2xl text-[#ffffff] mb-4">
              Contato
            </h3>
            <p className="font-[roboto-standard] text-sm md:text-base">
              Email: contato@seusite.com
            </p>
            <p className="font-[roboto-standard] text-sm md:text-base">
              Telefone: (11) 1234-5678
            </p>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-[roboto-standard] text-xl md:text-2xl text-[#ffffff] mb-4">
              Siga-nos
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link
                href="https://instagram.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#ffffff] text-2xl hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://facebook.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[#ffffff] text-2xl hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://wa.me/551112345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-[#ffffff] text-2xl hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="font-[roboto-standard] max-w-7xl mx-auto mt-8 text-center text-sm text-[#ffffff]/80">
          © {new Date().getFullYear()} Seu Site. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer