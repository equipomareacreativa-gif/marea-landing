"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { hero, linkContacto } from "@/content/site"
import { Ola, Sol } from "./piezas"
import { Logotipo } from "./logotipo"
import { Destacado } from "./destacado"

export function Portada() {
  const reducir = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  // Al bajar, el agua sube y el sol se hunde un poco: arranca el "cambio de marea".
  const aguaY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
  const contacto = linkContacto()
  const externo = contacto.startsWith("http")

  return (
    <section
      ref={ref}
      id="inicio"
      className="grano relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-[#1a6687] via-azul to-azul text-white"
    >

      {/* Agua */}
      <motion.div
        style={reducir ? undefined : { y: aguaY }}
        className="absolute inset-x-0 bottom-0 -z-10 h-[60%] [mask-image:linear-gradient(to_bottom,transparent,black_35%)]"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-azul via-transparent to-azul/70" />
      </motion.div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-6 pt-28 md:px-10 md:pb-2 md:pt-28">
        <motion.p
          initial={reducir ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-2xl font-semibold tracking-wide text-white/90 md:text-3xl"
        >
          {hero.antetitulo}
        </motion.p>

        {/* "marea" con el logotipo real; sube desde el agua al cargar */}
        <h1 className="mt-3 flex w-full max-w-[66rem] items-end gap-[1.5%] md:mt-4 md:max-w-[min(60rem,calc((100svh-25rem)*5.2))]">
          <span className="sr-only">{hero.titulo}.</span>
          <motion.span
            aria-hidden="true"
            initial={reducir ? false : { clipPath: "inset(100% 0 0 0)", y: "18%" }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: "0%" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block min-w-0 flex-1"
          >
            <Logotipo className="block h-auto w-full text-white" />
          </motion.span>
          {/* El punto de marea es el sol */}
          <motion.span
            aria-hidden="true"
            initial={reducir ? false : { y: "-160%", opacity: 0, rotate: -90 }}
            animate={{ y: "0%", opacity: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.75, ease: [0.34, 1.3, 0.64, 1] }}
            className="mb-[0.4%] block w-[10%] shrink-0"
          >
            <Sol priority className="block aspect-square w-full" />
          </motion.span>
        </h1>

        <motion.div
          initial={reducir ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-7 grid gap-7 md:mt-9 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12"
        >
          <div className="max-w-xl">
            <p className="text-xl leading-snug text-white/85 md:text-2xl"><Destacado texto={hero.bajada} claro /></p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg"><Destacado texto={hero.secundaria} claro /></p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col md:items-end md:justify-self-end lg:flex-row lg:items-center">
            <a
              href={contacto}
              {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="boton-sol w-full text-base sm:w-auto sm:text-lg"
            >
              {hero.cta}
            </a>
            <a
              href={hero.ctaSecundario.href}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/40 px-7 py-[0.875rem] text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
            >
              {hero.ctaSecundario.texto}
            </a>
          </div>
        </motion.div>
      </div>

      <Ola color="var(--arena)" variante={1} className="-mb-px" />
    </section>
  )
}
