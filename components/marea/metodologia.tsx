"use client"

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { metodologia } from "@/content/site"
import { Destacado } from "./destacado"
import { Aparece } from "./piezas"

const pasos = metodologia.pasos
const N = pasos.length

// Recorrido horizontal (desktop): una ola que avanza de izquierda a derecha.
const ANCHO = 1400
const ALTO = 300
const yH = (x: number) => ALTO / 2 + 56 * Math.sin((x / ANCHO) * Math.PI * 3 - Math.PI / 2)
const xNodo = (i: number) => 100 + i * ((ANCHO - 200) / (N - 1))
const caminoH = (() => {
  let d = `M0 ${yH(0).toFixed(1)}`
  for (let x = 10; x <= ANCHO; x += 10) d += ` L${x} ${yH(x).toFixed(1)}`
  return d
})()

// Recorrido vertical (celular): la ola baja serpenteando.
const FILA = 168
const ANCHO_V = 64
const xV = (y: number) => ANCHO_V / 2 + 18 * Math.sin((y / FILA) * Math.PI)
const caminoV = (() => {
  const alto = FILA * N
  let d = `M${xV(0).toFixed(1)} 0`
  for (let y = 6; y <= alto; y += 6) d += ` L${xV(y).toFixed(1)} ${y}`
  return d
})()

export function Metodologia() {
  const reducir = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] })
  const progreso = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })
  const [activos, setActivos] = useState(reducir ? N : 0)

  useMotionValueEvent(progreso, "change", (v) => {
    if (reducir) return
    setActivos(Math.min(N, Math.floor(v * (N - 1) + 1.02)))
  })

  const largo = reducir ? 1 : progreso

  return (
    <section id="metodologia" className="relative overflow-hidden bg-arena px-5 pb-12 pt-20 md:px-10 md:pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <Aparece como="h2" className="titulo text-[clamp(3rem,11vw,7.5rem)]">
            {metodologia.titulo}
          </Aparece>
          <Aparece demora={0.1} className="max-w-md text-lg text-azul/80 md:pb-3 md:text-xl">
            <Destacado texto={metodologia.bajada} />
          </Aparece>
        </div>

        <div ref={ref} className="mt-14 md:mt-24">
          {/* Desktop: ola horizontal */}
          <div className="relative mb-36 hidden md:block" style={{ aspectRatio: `${ANCHO} / ${ALTO}` }}>
            <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <path d={caminoH} fill="none" stroke="var(--azul)" strokeOpacity="0.12" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
              <motion.path d={caminoH} fill="none" stroke="var(--azul)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: largo }} />
            </svg>
            <ol className="absolute inset-0">
              {pasos.map((paso, i) => {
                const x = xNodo(i)
                const y = yH(x)
                const on = i < activos
                return (
                  <li
                    key={paso.titulo}
                    className="absolute w-40 -translate-x-1/2 text-center"
                    style={{
                      left: `${(x / ANCHO) * 100}%`,
                      top: `${(y / ALTO) * 100}%`,
                    }}
                  >
                    <span
                      className={`absolute left-1/2 top-0 block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-arena transition-all duration-500 ${on ? "scale-125 bg-sol" : "bg-azul/20"}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`titulo absolute bottom-5 left-1/2 block -translate-x-1/2 text-5xl transition-all duration-700 ${on ? "text-azul" : "translate-y-2 text-azul/25"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`absolute left-1/2 top-6 block w-[10.5rem] -translate-x-1/2 transition-all duration-700 ${on ? "opacity-100" : "-translate-y-2 opacity-30"}`}
                    >
                      <span className="block font-bold leading-tight">{paso.titulo}</span>
                      <span className="mt-2 block text-sm leading-snug text-azul/70">{paso.texto}</span>
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Celular: ola vertical */}
          <div className="relative grid grid-cols-[64px_1fr] gap-x-4 md:hidden">
            <svg
              viewBox={`0 0 ${ANCHO_V} ${FILA * N}`}
              className="h-auto w-16 overflow-visible"
              style={{ height: FILA * N }}
              aria-hidden="true"
            >
              <path d={caminoV} fill="none" stroke="var(--azul)" strokeOpacity="0.12" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
              <motion.path d={caminoV} fill="none" stroke="var(--azul)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: largo }} />
              {pasos.map((paso, i) => {
                const y = FILA * i + FILA / 2
                return (
                  <circle
                    key={paso.titulo}
                    cx={xV(y)}
                    cy={y}
                    r={i < activos ? 10 : 7}
                    fill={i < activos ? "var(--sol)" : "rgba(6,63,93,0.2)"}
                    stroke="var(--arena)"
                    strokeWidth="4"
                    className="transition-all duration-500"
                  />
                )
              })}
            </svg>
            <ol>
              {pasos.map((paso, i) => (
                <li
                  key={paso.titulo}
                  className={`flex flex-col justify-center transition-opacity duration-700 ${i < activos ? "opacity-100" : "opacity-35"}`}
                  style={{ height: FILA }}
                >
                  <span className="titulo text-4xl text-azul">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-bold leading-tight">{paso.titulo}</span>
                  <span className="mt-1.5 text-[0.95rem] leading-snug text-azul/75">{paso.texto}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
