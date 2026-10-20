"use client"

import { animate, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { porQue } from "@/content/site"
import { Destacado } from "./destacado"
import { Aparece } from "./piezas"

type Numero = (typeof porQue.numeros)[number]

/** Número que cuenta hasta su valor la primera vez que entra en pantalla. */
function Contador({ n }: { n: Numero }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visto = useInView(ref, { once: true, margin: "-80px" })
  const reducir = useReducedMotion()
  const esNumero = "hasta" in n
  const final = esNumero ? n.hasta : 0
  const inicio = esNumero && "desde" in n ? n.desde : 0
  const [valor, setValor] = useState(esNumero && !reducir ? inicio : final)

  useEffect(() => {
    if (!esNumero || !visto || reducir) return
    const c = animate(inicio, final, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValor(Math.round(v)),
    })
    return () => c.stop()
  }, [visto, reducir, esNumero, inicio, final])

  return (
    <span ref={ref} className="titulo block text-[clamp(2.75rem,9vw,5.5rem)] text-azul">
      {esNumero ? (
        <>
          {n.antes}
          <span className="tabular-nums">{valor}</span>
          {n.despues}
          <span className="sr-only">
            {" "}
            ({n.antes}
            {final}
            {n.despues})
          </span>
        </>
      ) : (
        n.valor
      )}
    </span>
  )
}

export function PorQue() {
  return (
    <section id="por-que" className="relative bg-arena px-5 pb-20 pt-6 md:px-10 md:pb-32 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <Aparece como="h2" className="titulo text-[clamp(3rem,10vw,6.5rem)] text-azul md:sticky md:top-32 md:self-start">
          {porQue.titulo}
        </Aparece>

        <ul className="border-t border-azul/15">
          {porQue.items.map((item, i) => (
            <Aparece como="li" demora={i * 0.1} key={item.titulo}>
              <article className="group relative grid gap-3 border-b border-azul/15 py-8 md:py-10">
                <h3 className="titulo text-[2.25rem] md:text-5xl">{item.titulo}</h3>
                <p className="max-w-[46ch] text-lg text-azul/75">
                  <Destacado texto={item.texto} />
                </p>
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

      <dl className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4 md:gap-8">
        {porQue.numeros.map((n, i) => (
          <Aparece key={n.texto} demora={i * 0.1} className="border-t-2 border-celeste pt-5">
            <dt className="sr-only">{n.texto}</dt>
            <dd>
              <Contador n={n} />
              <span aria-hidden="true" className="mt-2 block text-base text-azul/70 md:text-lg">{n.texto}</span>
            </dd>
          </Aparece>
        ))}
      </dl>
    </section>
  )
}
