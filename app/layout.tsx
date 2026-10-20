import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { fontBody, fontDisplay } from "./fonts"
import { contacto, hero } from "@/content/site"
import "./globals.css"

const sitio = contacto.sitioUrl || "https://v0-pointer-ai-landing-page-one-pi-57.vercel.app"
const descripcion = hero.bajada

export const metadata: Metadata = {
  metadataBase: new URL(sitio),
  title: "marea. | Agencia Creativa en Chivilcoy",
  description: descripcion,
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/marea-isotipo.png", type: "image/png" },
    ],
    apple: "/brand/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Marea Agencia Creativa",
    title: "marea. | Agencia Creativa",
    description: descripcion,
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "marea agencia creativa" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
}

export const viewport: Viewport = {
  themeColor: "#063f5d",
}

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marea Agencia Creativa",
  description: descripcion,
  url: sitio,
  image: `${sitio}/brand/og.png`,
  logo: `${sitio}/brand/marea-isotipo.png`,
  email: contacto.mail || undefined,
  telephone: contacto.whatsapp ? `+${contacto.whatsapp}` : undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chivilcoy",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: "AR",
  foundingDate: "2025-09",
  sameAs: contacto.instagram ? [`https://www.instagram.com/${contacto.instagram}`] : undefined,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
