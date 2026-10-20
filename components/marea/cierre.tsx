"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Instagram, Mail, MapPin } from "lucide-react"
import { contacto, ctaFinal, footer, linkContacto } from "@/content/site"
import { Aparece, IconoWhatsapp, Ola, Sol } from "./piezas"

export function CtaFinal() {
  const reducir = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 80%"] })
  // El sol sale del agua a medida que llegás al final
  const solY = useTransform(scrollYProgress, [0, 1], ["35%", "0%"])
  const link = linkContacto()
  const externo = link.startsWith("http")

  return (
    <section ref={ref} id="contacto" className="relative bg-arena">
      <Ola color="var(--azul)" variante={2} className="-mb-px" />
      <div className="grano relative isolate overflow-hidden bg-azul px-5 pb-28 pt-16 text-white md:px-10 md:pb-44 md:pt-24">
        <div aria-hidden="true" className="absolute inset-x-0 -bottom-[44vw] -z-10 flex justify-center md:-bottom-[24vw]">
          <motion.div style={reducir ? undefined : { y: solY }} className="relative h-[80vw] w-[80vw] md:h-[38vw] md:w-[38vw]">
            <div className="absolute inset-[-30%] rounded-full bg-[radial-gradient(circle,rgba(247,173,27,0.45)_0%,transparent_60%)] blur-2xl" />
            <Sol className="h-full w-full" />
          </motion.div>
        </div>
        {/* Línea de agua delante del sol */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[22%] bg-gradient-to-b from-azul/0 via-azul/90 to-azul" />

        <div className="mx-auto max-w-6xl text-center">
          <Aparece como="h2" className="titulo mx-auto max-w-5xl text-[clamp(2.75rem,10vw,7.5rem)] !leading-[1.02]">
            {ctaFinal.titulo}
          </Aparece>
          <Aparece demora={0.1} className="mx-auto mt-8 max-w-2xl text-lg text-white/90 md:text-2xl">
            {ctaFinal.texto}
          </Aparece>
          <Aparece demora={0.2} className="mt-10">
            <a
              href={link}
              {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="boton-sol px-9 py-5 text-lg md:text-xl"
            >
              <IconoWhatsapp className="h-6 w-6" />
              {ctaFinal.boton}
            </a>
          </Aparece>
        </div>
      </div>
    </section>
  )
}

export function Pie() {
  const wa = linkContacto()
  return (
    <footer className="bg-azul-hondo px-5 py-12 text-white md:px-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image src="/brand/marea-logo-completo.png" alt="marea agencia creativa" width={998} height={239} className="h-12 w-auto md:h-14" />
          <p className="mt-6 flex items-center gap-2 text-white/75">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {contacto.ciudad}
          </p>
        </div>

        <ul className="flex flex-col gap-3 text-white/90 md:items-end">
          {contacto.instagram && (
            <li>
              <a
                href={`https://www.instagram.com/${contacto.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sol"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />@{contacto.instagram}
              </a>
            </li>
          )}
          {contacto.whatsapp && (
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sol">
                <IconoWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </li>
          )}
          {contacto.mail && (
            <li>
              <a href={`mailto:${contacto.mail}`} className="inline-flex items-center gap-2 break-all hover:text-sol">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                {contacto.mail}
              </a>
            </li>
          )}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/60">{footer.copyright}</p>
    </footer>
  )
}

/** Botón flotante de WhatsApp, solo en celular. */
export function WhatsappFlotante() {
  if (!contacto.whatsapp) return null
  return (
    <a
      href={linkContacto()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sol text-azul shadow-[0_12px_30px_-8px_rgba(4,43,64,0.55)] transition-transform active:scale-95 md:hidden"
    >
      <IconoWhatsapp className="h-7 w-7" />
    </a>
  )
}
