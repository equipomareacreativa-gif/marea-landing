"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

/** El sol de Marea. Gira muy lento; se queda quieto si la persona pidió menos movimiento. */
export function Sol({
  className = "",
  priority = false,
  gira = true,
}: {
  className?: string
  priority?: boolean
  gira?: boolean
}) {
  return (
    <span className={`relative inline-block ${className}`} aria-hidden="true">
      <Image
        src="/brand/marea-isotipo.png"
        alt=""
        fill
        sizes="(max-width: 768px) 40vw, 320px"
        priority={priority}
        className={`object-contain ${gira ? "animate-sol-gira motion-reduce:animate-none" : ""}`}
      />
    </span>
  )
}

/** Ola que separa secciones. `color` es el color de la sección que viene abajo. */
export function Ola({
  color,
  className = "",
  variante = 1,
}: {
  color: string
  className?: string
  variante?: 1 | 2 | 3
}) {
  const caminos = {
    1: "M0 64C160 24 320 24 480 52C640 80 800 96 960 76C1120 56 1280 20 1440 36V120H0Z",
    2: "M0 40C200 80 360 92 560 70C760 48 880 12 1080 22C1240 30 1340 64 1440 72V120H0Z",
    3: "M0 80C120 60 260 20 420 28C600 38 700 92 900 92C1080 92 1260 40 1440 30V120H0Z",
  }
  return (
    <div className={`pointer-events-none w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[clamp(48px,8vw,120px)] w-full"
      >
        <path d={caminos[variante]} fill={color} />
      </svg>
    </div>
  )
}

/** Texto que sube suave al entrar en pantalla. */
export function Aparece({
  children,
  className = "",
  demora = 0,
  como = "div",
}: {
  children: ReactNode
  className?: string
  demora?: number
  como?: "div" | "p" | "h2" | "li"
}) {
  const reducir = useReducedMotion()
  const M = motion[como]
  return (
    <M
      className={className}
      initial={reducir ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: demora, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

/** Ícono de WhatsApp */
export function IconoWhatsapp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.3 11.3 0 0 0 12.03.7C5.77.7.67 5.8.67 12.06c0 2 .52 3.96 1.52 5.68L.57 23.65l6.04-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.04-1.18-5.89-3.33-8.04z" />
    </svg>
  )
}
