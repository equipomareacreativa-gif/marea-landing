"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { header, linkContacto } from "@/content/site"

export function Encabezado() {
  const [abierto, setAbierto] = useState(false)
  const contacto = linkContacto()
  const externo = contacto.startsWith("http")

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:pt-5">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-white/15 bg-azul/75 py-2 pl-4 pr-2 text-white shadow-[0_12px_40px_-16px_rgba(4,43,64,0.6)] backdrop-blur-xl md:pl-6"
      >
        <a href="#inicio" aria-label="marea agencia creativa, ir al inicio" className="shrink-0">
          <Image
            src="/brand/marea-logo-completo.png"
            alt="marea agencia creativa"
            width={998}
            height={239}
            priority
            className="hidden h-8 w-auto md:block"
          />
          <Image
            src="/brand/marea-logo-corto.png"
            alt="marea agencia creativa"
            width={674}
            height={291}
            priority
            className="h-8 w-auto md:hidden"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {header.menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-[0.95rem] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={contacto}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hidden rounded-full bg-sol px-5 py-2.5 text-[0.95rem] font-bold text-azul transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            {header.boton}
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10 md:hidden"
          >
            {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </nav>

      {abierto && (
        <div
          id="menu-movil"
          className="mx-auto mt-2 max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-azul/95 p-3 text-white backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {header.menu.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className="titulo block rounded-2xl px-4 py-3 text-3xl hover:bg-white/10"
                >
                  {item.nombre}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contacto}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => setAbierto(false)}
            className="boton-sol mt-2 w-full"
          >
            {header.boton}
          </a>
        </div>
      )}
    </header>
  )
}
