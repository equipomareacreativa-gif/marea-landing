import localFont from "next/font/local"

/**
 * Tipografías de Marea.
 * Madre (títulos y destacados): Sergio Trendy · Secundaria (textos): Inter.
 * Sergio Trendy necesita la licencia comercial (la demo no tiene tildes ni ñ).
 * Hasta tenerla, los títulos usan Fraunces. Para cambiarla: poner el archivo en
 * app/fonts/sergio-trendy.woff2, cambiar `src` abajo y `weight` a "400",
 * y en globals.css (.titulo) usar font-weight 400 sin font-variation-settings.
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
    { path: "./fonts/inter-variable.woff2", style: "normal", weight: "100 900" },
    { path: "./fonts/inter-variable-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
})
