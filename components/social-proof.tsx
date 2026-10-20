"use client"

import { motion } from "framer-motion"
import { WaveDivider } from "./wave-divider"

const valueCards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C12 8 6 12 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 12 20 8 16 4Z" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 28C13.8 28 12 25.3 12 22C12 18.7 16 14 16 14C16 14 20 18.7 20 22C20 25.3 18.2 28 16 28Z" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Esencia unica",
    description: "Te ayudamos a diferenciarte sin perder lo que te hace vos. Tu marca, potenciada.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16C8 16 12 8 16 8C20 8 24 16 24 16C24 16 20 24 16 24C12 24 8 16 8 16Z" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="3" stroke="#f7ad1b" strokeWidth="2"/>
        <path d="M4 16H8M24 16H28" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Compromiso real",
    description: "Nos involucramos como parte de tu equipo. Tu exito es nuestro exito.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26C6 26 10 18 16 18C22 18 26 26 26 26" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20C6 20 10 14 16 14C22 14 26 20 26 20" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <path d="M6 14C6 14 10 8 16 8C22 8 26 14 26 14" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25"/>
      </svg>
    ),
    title: "Calidad sobre cantidad",
    description: "Estrategia y contenido con intencion, no por cumplir. Cada pieza cuenta.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function SocialProof() {
  return (
    <section id="nosotros-section" className="w-full relative">
      {/* Subtle texture overlay */}
      <div className="bg-marea-gray py-24 md:py-36 lg:py-44 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #063f5d 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-marea-dark text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight uppercase text-balance">
              {"?POR QUE ELEGIRNOS?"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group bg-white rounded-2xl p-9 lg:p-10 flex flex-col items-start gap-5 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-marea-dark/[0.04] flex items-center justify-center group-hover:bg-marea-accent/10 transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="text-marea-dark text-xl lg:text-2xl font-semibold leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-marea-dark/55 text-base lg:text-lg leading-relaxed">
                  {card.description}
                </p>
                {/* Animated orange bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.18, ease: [0.25, 0.4, 0.25, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-marea-accent origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition to dark section */}
      <WaveDivider fillColor="#063f5d" />
    </section>
  )
}
