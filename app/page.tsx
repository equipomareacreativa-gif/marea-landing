import { Encabezado } from "@/components/marea/encabezado"
import { Portada } from "@/components/marea/portada"
import { Clientes } from "@/components/marea/clientes"
import { PorQue } from "@/components/marea/por-que"
import { Servicios } from "@/components/marea/servicios"
import { Trabajos } from "@/components/marea/trabajos"
import { Metodologia } from "@/components/marea/metodologia"
import { Nosotros } from "@/components/marea/nosotros"
import { CtaFinal, Pie, WhatsappFlotante } from "@/components/marea/cierre"

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main>
        {/* La página es una marea que sube: cielo y sol arriba, arena, agua cada vez más honda */}
        <Portada />
        <Clientes />
        <PorQue />
        <Servicios />
        <Trabajos />
        <Metodologia />
        <Nosotros />
        <CtaFinal />
      </main>
      <Pie />
      <WhatsappFlotante />
    </>
  )
}
