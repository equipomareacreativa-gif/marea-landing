"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section id="cta-section" className="w-full relative overflow-hidden">
      {/* Gradient background */}
      <div className="bg-gradient-to-b from-marea-dark via-[#053349] to-marea-dark py-28 md:py-40 lg:py-52 px-6 relative">
        {/* Animated glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f7ad1b] blur-[180px] pointer-events-none"
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none animate-grain opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
          {/* Text that "emerges" slowly */}
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-marea-accent text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight uppercase text-balance"
          >
            SI LLEGASTE HASTA ACA, NO ES CASUALIDAD<span className="animate-dot-pulse inline-block">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Tal vez viste nuestro trabajo, alguien nos recomendo o simplemente tu
            marca esta pidiendo un cambio de{" "}
            <span className="text-white font-medium">marea</span>
            <span className="text-marea-accent font-medium animate-dot-pulse inline-block">.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Button
              className="bg-marea-accent text-marea-dark hover:bg-transparent hover:text-marea-accent border-2 border-marea-accent hover:scale-[1.04] active:scale-[0.97] px-12 py-6 h-auto rounded-full font-bold text-lg md:text-xl shadow-[0_0_40px_rgba(247,173,27,0.25)] hover:shadow-[0_0_60px_rgba(247,173,27,0.35)] transition-all duration-500 ease-out"
              onClick={() => {
                window.open("https://wa.me/", "_blank")
              }}
            >
              Hablemos de tu marca
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
