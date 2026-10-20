"use client"

import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { WaveDivider } from "./wave-divider"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay on video for contrast */}
        <div className="absolute inset-0 bg-[#063f5d]/70" />
      </div>

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none animate-grain opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Organic floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#f7ad1b] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-[#0a7ab5] blur-[100px]"
        />
      </div>

      <Header variant="dark" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 py-24 md:py-32 lg:py-44 max-w-5xl mx-auto">
        {/* H1 single line */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.9] tracking-tight uppercase whitespace-nowrap"
        >
          {'HOLA, SOMOS '}
          <span className="normal-case">marea</span>
          <span className="normal-case text-marea-accent animate-dot-pulse inline-block">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 text-white/80 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl text-balance"
        >
          Una agencia creativa que potencia marcas con contenido
          autentico, estrategia digital y una mirada que conecta.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-5 text-white/40 text-base md:text-lg leading-relaxed max-w-xl"
        >
          Creatividad con proposito, procesos claros y marcas que
          se animan a crecer desde su identidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-14"
        >
          <Link href="#cta-section">
            <Button className="bg-marea-accent text-marea-dark hover:bg-transparent hover:text-marea-accent border-2 border-marea-accent hover:scale-[1.04] active:scale-[0.97] px-10 py-5 h-auto rounded-full font-semibold text-base md:text-lg shadow-[0_0_30px_rgba(247,173,27,0.2)] hover:shadow-[0_0_40px_rgba(247,173,27,0.3)] transition-all duration-500 ease-out">
              Quiero empezar mi cambio de marea
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Wave transition to next section */}
      <WaveDivider fillColor="#d9d9d9" />
    </section>
  )
}
