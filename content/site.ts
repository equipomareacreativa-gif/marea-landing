/**
 * Contenido de la landing de Marea.
 * Todos los textos y datos de contacto se editan acá.
 * Los textos están aprobados: cambiarlos solo si Denise lo pide.
 * Lo que va entre **dobles asteriscos** se muestra en negrita.
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
  bajada: "**Marketing, contenido y pauta** para marcas que quieren **crecer sin dejar de ser ellas.**",
  secundaria:
    "Producimos todo —foto, video, diseño y estrategia— desde Buenos Aires, con **procesos claros** y **mirada creativa**.",
  cta: "Quiero empezar mi cambio de marea",
  ctaSecundario: { texto: "Ver servicios", href: "#servicios" },
}

/** Franja de marcas. Para sumar una: poner el logo en public/clientes/ (azul, fondo transparente) y agregarla acá. */
export const clientes = {
  titulo: "MARCAS QUE CONFÍAN EN NOSOTROS",
  marcas: [
    { nombre: "Goblet Fuerza & Movimiento", logo: "/clientes/goblet.png", ancho: 593, alto: 133 },
    { nombre: "La Bitácora Almacén Gourmet", logo: "/clientes/la-bitacora.png", ancho: 464, alto: 200 },
    { nombre: "La Bulonera Club del Sandwich", logo: "/clientes/la-bulonera.png", ancho: 640, alto: 133 },
    { nombre: "Bogliolo Farmacia Perfumería", logo: "/clientes/bogliolo.png", ancho: 437, alto: 124 },
    { nombre: "Lado C", logo: "/clientes/lado-c.png", ancho: 515, alto: 198 },
    { nombre: "iN", logo: "/clientes/in.png", ancho: 200, alto: 200 },
    { nombre: "Maxi Kiosco Almafuerte", logo: "/clientes/maxi-kiosco-almafuerte.png", ancho: 273, alto: 200 },
    { nombre: "Blue Perfumes", logo: "/clientes/blue-perfumes.png", ancho: 416, alto: 200 },
    { nombre: "Dolce Ragazza", logo: "/clientes/dolce-ragazza.png", ancho: 465, alto: 200 },
    { nombre: "Yema", logo: "/clientes/yema.png", ancho: 199, alto: 200 },
    { nombre: "Glim", logo: "/clientes/glim.png", ancho: 398, alto: 200 },
    { nombre: "Domingo Pastas Caseras", logo: "/clientes/domingo.png", ancho: 428, alto: 200 },
    { nombre: "Chacinados El Pato", logo: "/clientes/chacinados-el-pato.png", ancho: 425, alto: 200 },
  ],
}

export const porQue = {
  titulo: "¿Por qué Marea?",
  items: [
    {
      titulo: "Todo en casa",
      texto: "Pensamos, filmamos, editamos, diseñamos y publicamos. **Sin tercerizar, sin teléfono descompuesto.**",
    },
    {
      titulo: "Cerca de verdad",
      texto:
        "Estamos en Chivilcoy, conocemos el mercado y nos podés ver la cara. **Nos metemos en tu marca como parte del equipo.**",
    },
    {
      titulo: "Con intención",
      texto: "Cada pieza tiene un porqué. Planificamos, medimos y ajustamos. **Calidad sobre cantidad.**",
    },
  ],
  /** `hasta`: si es un número, se anima contando. `antes`/`despues` van pegados al número. */
  numeros: [
    { antes: "+", hasta: 30, despues: "", texto: "marcas acompañadas" },
    { valor: "miles de", texto: "piezas por mes" },
    { antes: "", hasta: 2025, desde: 2000, despues: "", texto: "nace Marea" },
    { antes: "", hasta: 100, despues: "%", texto: "producción propia" },
  ],
} as const

export const servicios = {
  titulo: "Nuestros servicios",
  bajada: "**Soluciones creativas integrales** para que tu marca **destaque** en el mundo digital.",
  items: [
    {
      id: "contenido",
      titulo: "Producción de Contenido",
      texto: "Fotos y videos que cuentan **historias reales** y que tu audiencia **quiere ver y compartir**.",
      incluye: ["Jornadas de producción", "Reels y videos verticales", "Fotografía de producto y marca", "Edición de video"],
      // Cuando haya fotos o videos de trabajos reales, poner la ruta acá (ej: "/trabajos/contenido.jpg")
      imagen: "",
    },
    {
      id: "redes",
      titulo: "Gestión de Redes Sociales",
      texto: "Estrategia, diseño y contenido **con coherencia**. Tu marca, **presente y activa** donde importa.",
      incluye: ["Planificación mensual", "Diseño de piezas y copies", "Programación y publicación", "Community management"],
      imagen: "",
    },
    {
      id: "pauta",
      titulo: "Pauta Publicitaria",
      texto: "Campañas pensadas **para crecer**, no solo para mostrar. Inversión inteligente, **resultados medibles**.",
      incluye: ["Campañas en Meta Ads", "Segmentación de públicos", "Optimización constante", "Reportes de resultados"],
      imagen: "",
    },
  ],
} as const

export const metodologia = {
  titulo: "Nuestra metodología",
  bajada: "Un proceso **claro y transparente** para que sepas exactamente **cómo trabajamos**.",
  pasos: [
    { titulo: "Brief de Marca", texto: "Conocemos tu marca: quién sos, a quién le hablás y a dónde querés llegar." },
    { titulo: "Planificación Mensual", texto: "Armamos el plan del mes: objetivos, ideas y calendario." },
    { titulo: "Producción de Contenido", texto: "Salimos a producir fotos y videos, con guion y dirección." },
    { titulo: "Diseño + Copies", texto: "Convertimos el material en piezas listas, con el tono de tu marca." },
    { titulo: "Revisión y Aprobación", texto: "Ves todo antes de que salga. Ajustamos hasta que te represente." },
    { titulo: "Publicación", texto: "Programamos y publicamos en el momento justo, sin que tengas que estar encima." },
    { titulo: "Revisión y Métricas", texto: "Medimos qué funcionó y lo usamos para que el próximo mes rinda más." },
  ],
}

export const nosotros = {
  titulo: "Nosotros",
  parrafos: [
    "Marea nació en 2025 en Chivilcoy con una idea simple: que las marcas de acá puedan **comunicar con nivel**, sin perder lo que las hace únicas.",
    "Somos un equipo creativo —producción, diseño, edición, community y estrategia— que se involucra en cada marca **como si fuera propia**.",
    "Creemos en las personas reales detrás de cada negocio, en el contenido que se siente auténtico y en los procesos claros. Y en que, a veces, lo que una marca necesita es un **cambio de marea**.",
  ],
  // Cuando esté la foto del equipo, poner la ruta acá (ej: "/equipo/marea.jpg")
  foto: "",
}

export const ctaFinal = {
  titulo: "SI LLEGASTE HASTA ACÁ, NO ES CASUALIDAD.",
  texto:
    "Tal vez viste nuestro trabajo, alguien nos recomendó o simplemente tu marca está pidiendo un **cambio de marea**.",
  boton: "Hablemos de tu marca",
  mailIntro: "¿Preferís mail? Escribinos a",
}

export const footer = {
  copyright: "© 2026 Marea Agencia Creativa",
}

/** Link de WhatsApp con mensaje, o la sección de contacto si todavía no hay número. */
export function linkContacto() {
  if (!contacto.whatsapp) return "#contacto"
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMensaje)}`
}
