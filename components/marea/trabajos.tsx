"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { contacto, trabajos } from "@/content/site"
import { Aparece, Sol } from "./piezas"

/**
 * Galería de trabajos. La primera foto va grande; las demás llenan la grilla.
 * Al final siempre hay una tarjeta que lleva al Instagram de Marea.
 */
export function Trabajos() {
  const [primera, ...resto] = trabajos.items

  return (
    <section id="trabajos" className="bg-arena px-5 pb-8 pt-20 md:px-10 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)]">
          {trabajos.titulo}
        </Aparece>

        <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {primera && (
            <Aparece como="li" className="md:col-span-2 md:row-span-2">
              <Foto item={primera} grande />
            </Aparece>
          )}
          {resto.map((t, i) => (
            <Aparece como="li" demora={0.08 * (i + 1)} key={t.foto}>
              <Foto item={t} />
            </Aparece>
          ))}

          {contacto.instagram && (
            <Aparece como="li" demora={0.15} className={resto.length === 0 ? "md:row-span-2" : ""}>
              <a
                href={`https://www.instagram.com/${contacto.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-celeste p-7 text-azul-hondo md:p-8"
              >
                <span aria-hidden="true" className="absolute -right-10 -top-10 h-44 w-44 transition-transform duration-700 group-hover:rotate-45">
                  <Sol gira={false} className="h-full w-full" />
                </span>
                <Instagram className="relative h-8 w-8" aria-hidden="true" />
                <span className="relative">
                  <span className="titulo block text-3xl md:text-4xl">{trabajos.instagram.texto}</span>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 group-hover:decoration-sol">
                    @{contacto.instagram}
                  </span>
                </span>
              </a>
            </Aparece>
          )}
        </ul>
      </div>
    </section>
  )
}

function Foto({ item, grande = false }: { item: (typeof trabajos.items)[number]; grande?: boolean }) {
  return (
    <figure className={`group relative overflow-hidden rounded-[2rem] bg-azul-hondo ${grande ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-[4/5]"}`}>
      <Image
        src={item.foto}
        alt={item.alt}
        fill
        sizes={grande ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        className="object-cover object-[50%_65%] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-full bg-white/90 px-5 py-3 text-azul backdrop-blur md:inset-x-4 md:bottom-4">
        <span className="font-bold">{item.marca}</span>
        <span className="text-sm text-azul/70">{item.tipo}</span>
      </figcaption>
    </figure>
  )
}
