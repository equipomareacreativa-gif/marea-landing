"use client"

import Image from "next/image"
import { nosotros } from "@/content/site"
import { Destacado } from "./destacado"
import { Aparece, Sol } from "./piezas"

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-arena px-5 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)]">
            {nosotros.titulo}
          </Aparece>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-azul/80">
            {nosotros.parrafos.map((p, i) => (
              <Aparece como="p" demora={0.08 * (i + 1)} key={i} className="max-w-[54ch]">
                <Destacado texto={p} />
              </Aparece>
            ))}
          </div>
        </div>

        <Aparece demora={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-celeste md:aspect-[4/3]">
            {nosotros.foto ? (
              <Image
                src={nosotros.foto}
                alt="El equipo de Marea"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sol className="h-28 w-28 md:h-36 md:w-36" />
              </div>
            )}
          </div>
        </Aparece>
      </div>
    </section>
  )
}
