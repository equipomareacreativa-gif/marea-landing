"use client"

import { Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="w-full bg-marea-dark py-14 md:py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <img src="/brand/marea-logo-completo.png" alt="marea agencia creativa" className="h-12 w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/30 text-sm text-center"
        >
          Creatividad con proposito. Todos los derechos reservados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-5"
        >
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/30 hover:text-marea-accent transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="text-white/30 hover:text-marea-accent transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
