"use client"

import { motion } from "framer-motion"
import { WaveDivider } from "./wave-divider"

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="6" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 30C6 30 10 22 18 22C26 22 30 30 30 30" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8C30 6 32 8 30 10C28 12 26 10 28 8Z" stroke="#f7ad1b" strokeWidth="1.5" fill="#f7ad1b" fillOpacity="0.3"/>
      </svg>
    ),
    title: "Produccion de Contenido",
    description: "Fotos y videos que cuentan historias reales. Contenido que tu audiencia quiere ver y compartir.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="24" height="24" rx="6" stroke="#f7ad1b" strokeWidth="2"/>
        <path d="M12 18C12 18 15 13 18 13C21 13 24 18 24 18C24 18 21 23 18 23C15 23 12 18 12 18Z" stroke="#f7ad1b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="#f7ad1b"/>
      </svg>
    ),
    title: "Gestion de Redes Sociales",
    description: "Estrategia, diseno y contenido con coherencia. Tu marca, presente y activa donde importa.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28V14L18 6L28 14V28H22V22C22 20 20 18 18 18C16 18 14 20 14 22V28H8Z" stroke="#f7ad1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 6L4 16" stroke="#f7ad1b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M18 6L32 16" stroke="#f7ad1b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "Pauta Publicitaria",
    description: "Campanas pensadas para crecer, no solo para mostrar. Inversion inteligente, resultados medibles.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function BentoSection() {
  return (
    <section id="servicios-section" className="w-full relative">
      <div className="bg-marea-dark py-24 md:py-36 lg:py-44 px-6 relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f7ad1b] blur-[200px]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-marea-accent text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight uppercase mb-6">
              NUESTROS SERVICIOS
            </h2>
            <p className="text-white/40 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Soluciones creativas integrales para que tu marca destaque en el mundo digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{
                  y: -10,
                  borderColor: "rgba(247, 173, 27, 0.6)",
                  boxShadow: "0 0 40px rgba(247, 173, 27, 0.1), 0 20px 60px rgba(0,0,0,0.2)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="group rounded-2xl p-9 lg:p-10 flex flex-col items-start gap-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-marea-accent/[0.08] flex items-center justify-center group-hover:bg-marea-accent/[0.15] transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl lg:text-2xl font-semibold leading-tight tracking-tight group-hover:text-marea-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-white/50 text-base lg:text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition to light section */}
      <WaveDivider fillColor="#ffffff" />
    </section>
  )
}
