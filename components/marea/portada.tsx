"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { hero, linkContacto } from "@/content/site"
import { Ola, Sol } from "./piezas"

export function Portada() {
  const reducir = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  // Al bajar, el agua sube y el sol se hunde un poco: arranca el "cambio de marea".
  const aguaY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
    const contacto = linkContacto()
  const externo = contacto.startsWith("http")
  const letras = hero.titulo.split("")

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

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 pt-28 md:px-10 md:pt-36">
        <motion.p
          initial={reducir ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg font-semibold text-white/90 md:text-2xl"
        >
          {hero.antetitulo}
        </motion.p>

        <h1 className="titulo -ml-[0.04em] flex items-end text-[clamp(5.5rem,29vw,20rem)] leading-[0.85]">
          <span className="sr-only">{hero.titulo}.</span>
          <span aria-hidden="true" className="flex">
            {letras.map((l, i) => (
              <motion.span
                key={i}
                initial={reducir ? false : { y: "0.6em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {l}
              </motion.span>
            ))}
          </span>
          {/* El punto de marea es el sol */}
          <motion.span
            aria-hidden="true"
            initial={reducir ? false : { y: "-1.6em", opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.75, ease: [0.34, 1.3, 0.64, 1] }}
            className="mb-[0.06em] ml-[0.02em] inline-block"
          >
            <Sol priority className="h-[0.34em] w-[0.34em]" />
          </motion.span>
        </h1>

        <motion.div
          initial={reducir ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16"
        >
          <div className="max-w-xl">
            <p className="text-xl leading-snug text-white md:text-2xl">{hero.bajada}</p>
            <p className="mt-4 text-base italic leading-relaxed text-white/80 md:text-lg">{hero.secundaria}</p>
          </div>
          <div className="md:justify-self-end">
            <a
              href={contacto}
              {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="boton-sol w-full text-lg md:w-auto"
            >
              {hero.cta}
            </a>
          </div>
        </motion.div>
      </div>

      <Ola color="var(--arena)" variante={1} className="-mb-px" />
    </section>
  )
}
