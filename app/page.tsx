import { Encabezado } from "@/components/marea/encabezado"
import { Portada } from "@/components/marea/portada"
import { PorQue } from "@/components/marea/por-que"
import { Servicios } from "@/components/marea/servicios"
import { Metodologia } from "@/components/marea/metodologia"
import { CtaFinal, Pie, WhatsappFlotante } from "@/components/marea/cierre"

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main>
        {/* La página es una marea que sube: cielo y sol arriba, arena, agua cada vez más honda */}
        <Portada />
        <PorQue />
        <Servicios />
        <Metodologia />

        {/* Nosotros: contenido a definir */}
        <section id="nosotros" className="bg-arena px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border-2 border-dashed border-azul/25 p-8 md:p-12">
            <h2 className="titulo text-5xl md:text-7xl">Nosotros</h2>
            <p className="mt-4 font-bold text-azul/70">[PENDIENTE: contenido de la sección Nosotros]</p>
          </div>
        </section>

        <CtaFinal />
      </main>
      <Pie />
      <WhatsappFlotante />
    </>
  )
}
