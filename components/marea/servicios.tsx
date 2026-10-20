"use client"

import Image from "next/image"
import { servicios } from "@/content/site"
import { Destacado } from "./destacado"
import { Aparece } from "./piezas"

// Mientras no haya fotos de trabajos reales, cada bloque muestra otra parte del agua.
const encuadres = ["object-[50%_20%]", "object-[20%_70%]", "object-[80%_95%]"]

export function Servicios() {
  return (
    <section id="servicios" className="bg-arena px-3 pb-3 md:px-6 md:pb-6">
      <div className="grano relative overflow-hidden rounded-[2.5rem] bg-azul px-5 py-16 text-white md:rounded-[3.5rem] md:px-12 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)]">
              {servicios.titulo}
            </Aparece>
            <Aparece demora={0.1} className="max-w-md text-lg text-white/80 md:pb-3">
              <Destacado texto={servicios.bajada} claro />
            </Aparece>
          </div>

          <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
            {servicios.items.map((s, i) => (
              <Aparece como="li" demora={i * 0.12} key={s.id} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-azul-hondo">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.imagen || "/images/hero-bg.jpg"}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={s.imagen ? { objectPosition: s.encuadre } : undefined}
                      className={`object-cover transition duration-[1200ms] ease-out group-hover:scale-105 ${
                        s.imagen ? "" : `opacity-70 ${encuadres[i]}`
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <span aria-hidden="true" className="mb-6 block h-[3px] w-10 bg-sol transition-all duration-500 group-hover:w-20" />
                    <h3 className="titulo text-[2.5rem] md:text-5xl">{s.titulo}</h3>
                    <p className="mb-6 mt-4 max-w-[34ch] text-white/80"><Destacado texto={s.texto} claro /></p>
                    <div className="mt-auto border-t border-white/15 pt-5">
                      <p className="text-sm font-semibold text-celeste">Incluye</p>
                      <ul className="mt-3 space-y-2">
                        {s.incluye.map((x) => (
                          <li key={x} className="flex items-center gap-3 text-[0.95rem] text-white/90">
                            <span aria-hidden="true" className="h-[2px] w-4 shrink-0 bg-celeste" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Aparece>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
