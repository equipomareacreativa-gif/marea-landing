"use client"

import Image from "next/image"
import { clientes } from "@/content/site"
import { Aparece } from "./piezas"

/** Franja de marcas en loop infinito. La lista se duplica para que el loop no tenga corte. */
export function Clientes() {
  const fila = (oculta: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={oculta || undefined}>
      {clientes.marcas.map((m) => (
        <li key={m.logo} className="flex items-center">
          {/* Mismo "peso visual" para todos: los logos anchos van más bajos y los cuadrados más altos */}
          <Image
            src={m.logo}
            alt={oculta ? "" : m.nombre}
            width={m.ancho}
            height={m.alto}
            className="mx-8 w-auto opacity-85 md:mx-12"
            style={{ height: `calc(var(--alto-logo) * ${Math.pow(m.ancho / m.alto, -0.4).toFixed(3)})` }}
          />
          <span aria-hidden="true" className="relative block h-4 w-4 md:h-5 md:w-5">
            <Image src="/brand/marea-isotipo.png" alt="" fill sizes="20px" className="object-contain" />
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <section aria-labelledby="titulo-clientes" className="bg-arena pb-14 pt-6 md:pb-20 md:pt-10">
      <Aparece>
        <h2 id="titulo-clientes" className="px-5 text-center text-sm font-semibold tracking-[0.18em] text-azul/70 md:text-base">
          {clientes.titulo}
        </h2>
      </Aparece>
      <div
        className="group mt-8 flex overflow-hidden [--alto-logo:4.25rem] md:[--alto-logo:5.75rem] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:mt-10"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {fila(false)}
          {fila(true)}
        </div>
      </div>
    </section>
  )
}
