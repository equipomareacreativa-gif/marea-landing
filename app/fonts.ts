import localFont from "next/font/local"

/**
 * Tipografías de Marea.
 * Títulos: Besom · Cuerpo: The Seasons.
 * Mientras no estén los archivos, se usan Fraunces (títulos) y Lora (cuerpo) como respaldo.
 * Para cambiarlas: copiar los archivos a app/fonts/ y reemplazar `src` abajo.
 */
export const fontDisplay = localFont({
  src: "./fonts/fraunces-latin-full-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
  fallback: ["Georgia", "serif"],
})

export const fontBody = localFont({
  src: [
    { path: "./fonts/lora-latin-wght-normal.woff2", style: "normal", weight: "400 700" },
    { path: "./fonts/lora-latin-wght-italic.woff2", style: "italic", weight: "400 700" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "serif"],
})
