"use client"

import { motion } from "framer-motion"
import { WaveDivider } from "./wave-divider"

const steps = [
  { number: "01", title: "Brief de Marca" },
  { number: "02", title: "Planificacion Mensual" },
  { number: "03", title: "Produccion de Contenido" },
  { number: "04", title: "Diseno + Copies" },
  { number: "05", title: "Revision y Aprobacion" },
  { number: "06", title: "Publicacion" },
  { number: "07", title: "Revision y Metricas" },
]

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function LargeTestimonial() {
  return (
    <section id="metodologia-section" className="w-full relative">
      <div className="bg-white py-24 md:py-36 lg:py-44 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-marea-dark text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight uppercase mb-6">
              NUESTRA METODOLOGIA
            </h2>
            <p className="text-marea-dark/45 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Un proceso claro y transparente para que sepas exactamente como trabajamos.
            </p>
          </motion.div>

          {/* Desktop: horizontal wave timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting wave line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[60px] left-0 right-0 origin-left"
            >
              <svg viewBox="0 0 1000 30" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: 30 }}>
                <path
                  d="M0 15C71 5 143 25 214 15C285 5 357 25 428 15C500 5 571 25 643 15C714 5 786 25 857 15C928 5 1000 25 1000 15"
                  stroke="#f7ad1b"
                  strokeWidth="2"
                  strokeOpacity="0.25"
                  fill="none"
                />
              </svg>
            </motion.div>

            <div className="grid grid-cols-7 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.span
                    className="text-5xl xl:text-6xl font-bold text-marea-accent leading-none mb-6 block relative"
                    whileHover={{ scale: 1.12, transition: { duration: 0.3 } }}
                  >
                    {step.number}
                    {/* Glow on hover */}
                    <span className="absolute inset-0 rounded-full bg-marea-accent/0 group-hover:bg-marea-accent/10 blur-xl transition-all duration-500" />
                  </motion.span>
                  {/* Dot marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: "backOut" }}
                    className="w-3 h-3 rounded-full bg-marea-accent mb-5 relative z-10 shadow-[0_0_12px_rgba(247,173,27,0.4)]"
                  />
                  <h3 className="text-marea-dark text-sm xl:text-base font-semibold leading-tight tracking-tight">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: vertical timeline */}
          <div className="lg:hidden relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute left-[30px] md:left-[38px] top-0 bottom-0 w-[2px] bg-marea-accent/20 origin-top"
            />
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="flex items-center gap-6 py-7 relative"
                >
                  <span className="text-4xl md:text-5xl font-bold text-marea-accent leading-none shrink-0 w-16 md:w-20 text-center relative z-10">
                    {step.number}
                  </span>
                  {/* Dot on line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1, ease: "backOut" }}
                    className="absolute left-[26px] md:left-[34px] w-[10px] h-[10px] rounded-full bg-marea-accent shadow-[0_0_10px_rgba(247,173,27,0.4)]"
                  />
                  <div className="flex-1 pl-4">
                    <h3 className="text-marea-dark text-lg md:text-xl font-semibold leading-tight tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition to dark CTA */}
      <WaveDivider fillColor="#063f5d" />
    </section>
  )
}
