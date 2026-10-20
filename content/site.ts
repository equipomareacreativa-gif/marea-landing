/**
 * Contenido de la landing de Marea.
 * Todos los textos y datos de contacto se editan acá.
 * Los textos están aprobados: cambiarlos solo si Denise lo pide.
 */

export const contacto = {
  // Número de WhatsApp en formato internacional, solo dígitos (ej: "5492346123456").
  // Mientras esté vacío, los botones llevan a la sección de contacto.
  whatsapp: "5492346567140",
  whatsappMensaje: "Hola Marea, quiero hablar de mi marca.",
  // Usuario de Instagram sin @ (ej: "marea.agenciacreativa")
  instagram: "marea.agenciacreativa",
  mail: "equipo.mareacreativa@gmail.com",
  ciudad: "Chivilcoy, Buenos Aires",
  // Dominio propio, para SEO y Open Graph (ej: "https://marea.com.ar")
  sitioUrl: "",
}

export const header = {
  menu: [
    { nombre: "Servicios", href: "#servicios" },
    { nombre: "Metodología", href: "#metodologia" },
    { nombre: "Nosotros", href: "#nosotros" },
  ],
  boton: "Contactanos",
}

export const hero = {
  antetitulo: "HOLA, SOMOS",
  titulo: "marea",
  bajada:
    "Una agencia creativa que potencia marcas con contenido auténtico, estrategia digital y una mirada que conecta.",
  secundaria:
    "Creatividad con propósito, procesos claros y marcas que se animan a crecer desde su identidad.",
  cta: "Quiero empezar mi cambio de marea",
}

export const porQue = {
  titulo: "¿Por qué elegirnos?",
  items: [
    {
      icono: "esencia",
      titulo: "Esencia única",
      texto: "Te ayudamos a diferenciarte sin perder lo que te hace vos. Tu marca, potenciada.",
    },
    {
      icono: "compromiso",
      titulo: "Compromiso real",
      texto: "Nos involucramos como parte de tu equipo. Tu éxito es nuestro éxito.",
    },
    {
      icono: "calidad",
      titulo: "Calidad sobre cantidad",
      texto: "Estrategia y contenido con intención, no por cumplir. Cada pieza cuenta.",
    },
  ],
} as const

export const servicios = {
  titulo: "Nuestros servicios",
  bajada: "Soluciones creativas integrales para que tu marca destaque en el mundo digital.",
  items: [
    {
      id: "contenido",
      titulo: "Producción de Contenido",
      texto: "Fotos y videos que cuentan historias reales. Contenido que tu audiencia quiere ver y compartir.",
      // Cuando haya fotos o videos de trabajos reales, poner la ruta acá (ej: "/trabajos/contenido.jpg")
      imagen: "/images/hero-bg.jpg",
    },
    {
      id: "redes",
      titulo: "Gestión de Redes Sociales",
      texto: "Estrategia, diseño y contenido con coherencia. Tu marca, presente y activa donde importa.",
      imagen: "",
    },
    {
      id: "pauta",
      titulo: "Pauta Publicitaria",
      texto: "Campañas pensadas para crecer, no solo para mostrar. Inversión inteligente, resultados medibles.",
      imagen: "",
    },
  ],
} as const

export const metodologia = {
  titulo: "Nuestra metodología",
  bajada: "Un proceso claro y transparente para que sepas exactamente cómo trabajamos.",
  pasos: [
    "Brief de Marca",
    "Planificación Mensual",
    "Producción de Contenido",
    "Diseño + Copies",
    "Revisión y Aprobación",
    "Publicación",
    "Revisión y Métricas",
  ],
}

export const ctaFinal = {
  titulo: "SI LLEGASTE HASTA ACÁ, NO ES CASUALIDAD.",
  texto:
    "Tal vez viste nuestro trabajo, alguien nos recomendó o simplemente tu marca está pidiendo un cambio de marea.",
  boton: "Hablemos de tu marca",
}

export const footer = {
  copyright: "© 2026 Marea Agencia Creativa",
}

/** Link de WhatsApp con mensaje, o la sección de contacto si todavía no hay número. */
export function linkContacto() {
  if (!contacto.whatsapp) return "#contacto"
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMensaje)}`
}
