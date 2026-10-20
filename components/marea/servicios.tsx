"use client"

import Image from "next/image"
import { servicios } from "@/content/site"
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
              {servicios.bajada}
            </Aparece>
          </div>

          <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
            {servicios.items.map((s, i) => (
              <Aparece como="li" demora={i * 0.12} key={s.id}>
                <article className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-azul-hondo p-7 md:min-h-[32rem] md:p-8">
                  <Image
                    src={s.imagen || "/images/hero-bg.jpg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover opacity-60 grayscale-[35%] transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 ${s.imagen ? "" : encuadres[i]}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-azul-hondo via-azul-hondo/75 to-azul-hondo/20" />
                  <div className="relative">
                    <span aria-hidden="true" className="mb-6 block h-[3px] w-10 bg-sol transition-all duration-500 group-hover:w-20" />
                    <h3 className="titulo text-[2.5rem] md:text-5xl">{s.titulo}</h3>
                    <p className="mt-4 max-w-[34ch] text-white/80">{s.texto}</p>
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
