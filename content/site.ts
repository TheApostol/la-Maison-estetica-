const whatsappBase =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5491160340037";

export const siteConfig = {
  name: "La Maison · Estética & Belleza",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  meta: {
    title: "Tratamientos estéticos en Palermo Soho",
    description:
      "Rediseño editorial y accesible para La Maison · Estética & Belleza: tratamientos faciales y corporales en Palermo Soho, con contacto directo por WhatsApp.",
  },
  whatsappUrl: whatsappBase,
  whatsappFaqUrl: `${whatsappBase}?text=%C2%A1Hola%20La%20Maison!%20Tengo%20una%20consulta%20antes%20de%20reservar%20un%20turno.`,
  instagramUrl: "https://www.instagram.com/lamaisonbelleza/",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Gurruchaga+1341+Palermo+Soho+CABA",
  address: {
    street: "Gurruchaga 1341",
    neighborhood: "Palermo Soho",
    city: "CABA",
    postalCode: "C1425",
  },
  hours: ["Lunes a Viernes: 10:00 – 20:00", "Sábados: 10:00 – 14:00"],
  heroHighlights: [
    "Estética facial y corporal",
    "Palermo Soho, CABA",
    "Turnos por WhatsApp",
  ],
} as const;

export const valuePillars = [
  {
    title: "Atención personalizada",
    description:
      "El sitio público insiste en el acompañamiento cercano y en la propuesta adaptada a cada caso.",
  },
  {
    title: "Palermo Soho",
    description:
      "La dirección y el barrio aparecen como referencia principal de ubicación en toda la experiencia.",
  },
  {
    title: "Reserva directa",
    description:
      "WhatsApp se mantiene como canal principal porque es el único flujo de contacto público claramente verificado.",
  },
  {
    title: "Oferta ordenada",
    description:
      "La nueva arquitectura separa categorías, tratamientos y preguntas frecuentes para facilitar la lectura.",
  },
] as const;

export const storyPoints = [
  {
    title: "Facial y corporal",
    description:
      "La oferta visible combina tratamientos faciales y corporales en un mismo recorrido, sin mezclar todo en una sola lista larga.",
  },
  {
    title: "Consulta guiada",
    description:
      "La lógica del nuevo contenido prioriza diagnóstico, propuesta personalizada y seguimiento antes que métricas dudosas.",
  },
  {
    title: "Horarios y dirección",
    description:
      "La información operativa queda más cerca de las decisiones reales: dónde está, cuándo abre y cómo reservar.",
  },
  {
    title: "Sin secciones demo",
    description:
      "Los testimonios de muestra, los resultados ilustrativos y los contadores inconsistentes se eliminan del flujo principal.",
  },
] as const;

export const processSteps = [
  {
    title: "Consulta",
    description:
      "El primer contacto se resuelve por WhatsApp, con una vía más directa y visible desde cualquier sección.",
  },
  {
    title: "Evaluación",
    description:
      "La propuesta se apoya en la evaluación inicial y en una lectura personalizada del objetivo de cada persona.",
  },
  {
    title: "Propuesta",
    description:
      "El sitio público habla de planes y combinaciones de tratamientos. El rediseño traduce eso a un paso claro y fácil de entender.",
  },
  {
    title: "Seguimiento",
    description:
      "La narrativa finaliza con continuidad y acompañamiento, sin prometer resultados que no puedan verificarse.",
  },
] as const;
