"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { contacto, trabajos } from "@/content/site"
import { Aparece, Sol } from "./piezas"

/** La tarjeta de Instagram ocupa lo que sobra de la última fila (2 columnas en tablet, 3 en compu). */
function anchoInstagram(n: number) {
  const tablet = n % 2 === 0 ? "sm:col-span-2" : ""
  const compu = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"][n % 3]
  return `${tablet} ${compu}`
}

/**
 * Galería de trabajos en grilla pareja.
 * Al final siempre hay una tarjeta que lleva al Instagram de Marea.
 */

export function Trabajos() {
  return (
    <section id="trabajos" className="bg-arena px-5 pb-8 pt-20 md:px-10 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)]">
          {trabajos.titulo}
        </Aparece>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
          {trabajos.items.map((t, i) => (
            <li key={t.foto}>
              <Aparece demora={0.06 * (i % 3)}>
                <figure className="group relative overflow-hidden rounded-[2rem] bg-azul-hondo">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={t.foto}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-x-3 rounded-2xl bg-white/90 px-5 py-3 sm:rounded-full text-azul backdrop-blur md:inset-x-4 md:bottom-4">
                    <span className="font-bold">{t.marca}</span>
                    <span className="text-sm text-azul/70">{t.tipo}</span>
                  </figcaption>
                </figure>
              </Aparece>
            </li>
          ))}

          {contacto.instagram && (
            <li className={anchoInstagram(trabajos.items.length)}>
              <Aparece demora={0.12} className="h-full">
                <a
                  href={`https://www.instagram.com/${contacto.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-celeste p-7 text-azul-hondo md:p-8"
                >
                  <span aria-hidden="true" className="absolute -right-12 -top-12 h-52 w-52 transition-transform duration-700 group-hover:rotate-45">
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
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
