import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'marea. | Agencia Creativa',
  icons: {
    icon: [{ url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/brand/marea-isotipo.png', type: 'image/png' }],
    apple: '/brand/apple-icon.png',
  },
  description: 'Una agencia creativa especializada en potenciar marcas con contenido autentico, estrategia digital y una mirada que conecta.',
}

export const viewport: Viewport = {
  themeColor: '#063f5d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
