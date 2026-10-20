"use client"

import { porQue } from "@/content/site"
import { Aparece } from "./piezas"

/** Íconos ilustrados propios: caracol (esencia), nudo marinero (compromiso), perla (calidad). */
function Ilustracion({ tipo }: { tipo: string }) {
  const linea = { stroke: "var(--azul)", strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  const trazo = { ...linea, fill: "none" }
  if (tipo === "esencia") {
    return (
      <svg viewBox="0 0 96 96" className="h-full w-full">
        <path d="M14 70c0-30 22-52 48-52 14 0 22 9 22 20 0 13-10 22-22 22-10 0-16-7-16-14 0-7 5-11 11-11 5 0 8 3 8 7" fill="var(--sol)" fillOpacity={0.35} {...linea} />
        <path d="M8 74c18 4 50 6 80-2" {...trazo} />
        <circle cx="70" cy="30" r="2.5" fill="var(--azul)" />
      </svg>
    )
  }
  if (tipo === "compromiso") {
    return (
      <svg viewBox="0 0 96 96" className="h-full w-full">
        <circle cx="38" cy="48" r="22" fill="var(--celeste)" fillOpacity={0.35} />
        <circle cx="58" cy="48" r="22" fill="var(--sol)" fillOpacity={0.35} />
        <path d="M38 26a22 22 0 1 0 0 44" {...trazo} />
        <path d="M58 70a22 22 0 1 0 0-44" {...trazo} />
        <path d="M38 70c10 0 14-8 20-22s10-22 0-22" {...trazo} />
        <path d="M38 26c6 0 10 6 12 12" {...trazo} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 96 96" className="h-full w-full">
      <path d="M10 60c10-20 66-20 76 0-6 14-24 22-38 22S16 74 10 60z" fill="var(--celeste)" fillOpacity={0.35} {...linea} />
      <circle cx="48" cy="44" r="15" fill="var(--sol)" stroke="var(--azul)" strokeWidth={4} />
      <path d="M42 38c2-2 5-3 8-2" {...trazo} stroke="#fff" />
      <path d="M48 16v6M70 24l-4 5M26 24l4 5" {...trazo} />
    </svg>
  )
}

export function PorQue() {
  return (
    <section id="por-que" className="relative bg-arena px-5 pb-20 pt-10 md:px-10 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <Aparece como="h2" className="titulo max-w-3xl text-[clamp(3rem,11vw,7.5rem)] text-azul">
          {porQue.titulo}
        </Aparece>

        <ul className="mt-10 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {porQue.items.map((item, i) => (
            <Aparece como="li" demora={i * 0.12} key={item.titulo}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-7 transition-transform duration-500 ease-out hover:-translate-y-1.5 md:p-9">
                <div className="h-20 w-20 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110 md:h-24 md:w-24">
                  <Ilustracion tipo={item.icono} />
                </div>
                <h3 className="titulo mt-6 text-3xl md:text-4xl">{item.titulo}</h3>
                <p className="mt-3 max-w-[32ch] text-azul/80">{item.texto}</p>
                {/* Ola que sube al pasar el mouse */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2 origin-bottom bg-sol transition-transform duration-500 ease-out group-hover:scale-y-[2.5]"
                />
              </article>
            </Aparece>
          ))}
        </ul>
      </div>
    </section>
  )
}
