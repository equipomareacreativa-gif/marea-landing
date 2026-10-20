"use client"

import { porQue } from "@/content/site"
import { Destacado } from "./destacado"
import { Aparece } from "./piezas"

export function PorQue() {
  return (
    <section id="por-que" className="relative bg-arena px-5 pb-20 pt-10 md:px-10 md:pb-32 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)] text-azul md:sticky md:top-32 md:self-start">
          {porQue.titulo}
        </Aparece>

        <ul className="border-t border-azul/15">
          {porQue.items.map((item, i) => (
            <Aparece como="li" demora={i * 0.1} key={item.titulo}>
              <article className="group relative grid gap-3 border-b border-azul/15 py-8 md:py-10">
                <h3 className="titulo text-[2.25rem] md:text-5xl">{item.titulo}</h3>
                <p className="max-w-[46ch] text-lg text-azul/75"><Destacado texto={item.texto} /></p>
                {/* Línea amarilla que crece al pasar el mouse */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-[3px] w-full origin-left scale-x-0 bg-sol transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </article>
            </Aparece>
          ))}
        </ul>
      </div>
    </section>
  )
}
