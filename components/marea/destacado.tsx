import { Fragment } from "react"

/**
 * Muestra un texto marcando en negrita lo que va entre **dobles asteriscos**.
 * `claro` es para fondos oscuros: la negrita va en blanco pleno.
 */
export function Destacado({ texto, claro = false }: { texto: string; claro?: boolean }) {
  const partes = texto.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {partes.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={`font-semibold ${claro ? "text-white" : "text-azul"}`}>
            {p}
          </strong>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  )
}

/** El mismo texto sin las marcas, para metadatos y SEO. */
export const textoPlano = (texto: string) => texto.replace(/\*\*/g, "")
