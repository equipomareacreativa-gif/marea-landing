"use client"

import Image from "next/image"
import { servicios } from "@/content/site"
import { Aparece } from "./piezas"

/** Motivos gráficos para los servicios que todavía no tienen foto o video propio. */
function Motivo({ id }: { id: string }) {
  if (id === "redes") {
    // Pantallas apiladas que se abren en abanico
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
        {[-14, 0, 14].map((r, i) => (
          <g
            key={r}
            className="origin-[100px_170px] transition-transform duration-700 ease-out [transform-box:view-box] [transform:rotate(var(--r))] group-hover:[transform:rotate(var(--r2))]"
            style={{ ["--r" as string]: `${r}deg`, ["--r2" as string]: `${r * 1.8}deg` }}
          >
            <rect x="62" y="30" width="76" height="136" rx="16" fill={i === 1 ? "#fff" : "var(--azul)"} fillOpacity={i === 1 ? 1 : 0.18} stroke="var(--azul)" strokeWidth="3" />
            {i === 1 && (
              <>
                <circle cx="100" cy="78" r="18" fill="var(--sol)" />
                <rect x="76" y="110" width="48" height="6" rx="3" fill="var(--azul)" />
                <rect x="76" y="122" width="32" height="6" rx="3" fill="var(--azul)" fillOpacity="0.5" />
              </>
            )}
          </g>
        ))}
      </svg>
    )
  }
  // Pauta: olas que crecen como un gráfico
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${170 - i * 34}C40 ${150 - i * 40} 70 ${185 - i * 34} 110 ${150 - i * 44}S170 ${110 - i * 40} 200 ${92 - i * 34}V200H0Z`}
          fill="#fff"
          fillOpacity={0.18 + i * 0.14}
          className="transition-transform duration-700 ease-out group-hover:-translate-y-3"
          style={{ transitionDelay: `${i * 80}ms` }}
        />
      ))}
    </svg>
  )
}

const estilos: Record<string, { fondo: string; texto: string; subtexto: string }> = {
  contenido: { fondo: "bg-azul-hondo", texto: "text-white", subtexto: "text-white/85" },
  redes: { fondo: "bg-celeste", texto: "text-azul-hondo", subtexto: "text-azul-hondo" },
  pauta: { fondo: "bg-sol", texto: "text-azul", subtexto: "text-azul" },
}

export function Servicios() {
  return (
    <section id="servicios" className="bg-arena px-3 pb-3 md:px-6 md:pb-6">
      <div className="grano relative overflow-hidden rounded-[2.5rem] bg-azul px-5 py-16 text-white md:rounded-[3.5rem] md:px-12 md:py-24">
        {/* Brillo celeste difuso, como luz bajo el agua */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-celeste/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Aparece como="h2" className="titulo text-[clamp(3rem,11vw,7.5rem)]">
              {servicios.titulo}
            </Aparece>
            <Aparece demora={0.1} className="max-w-md text-lg text-white/85 md:pb-3 md:text-xl">
              {servicios.bajada}
            </Aparece>
          </div>

          <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
            {servicios.items.map((s, i) => {
              const e = estilos[s.id]
              return (
                <Aparece como="li" demora={i * 0.12} key={s.id}>
                  <article
                    className={`group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-7 md:min-h-[34rem] md:p-8 ${e.fondo}`}
                  >
                    {s.imagen ? (
                      <>
                        <Image
                          src={s.imagen}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-azul-hondo via-azul-hondo/70 to-azul-hondo/10" />
                      </>
                    ) : (
                      <div className={`absolute ${s.id === "pauta" ? "inset-x-0 bottom-0 top-[12%]" : "inset-x-0 top-0 h-[60%] p-6 md:p-8"}`}>
                        <Motivo id={s.id} />
                      </div>
                    )}
                    <div className="relative">
                      <h3 className={`titulo text-[2.5rem] md:text-5xl ${e.texto}`}>{s.titulo}</h3>
                      <p className={`mt-4 max-w-[34ch] ${e.subtexto}`}>{s.texto}</p>
                    </div>
                  </article>
                </Aparece>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
