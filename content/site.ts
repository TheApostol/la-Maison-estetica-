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
} as const;

export const heroActions = [
  {
    title: "Estética facial y corporal",
    description: "Ver tratamientos destacados y categorías",
    href: "/tratamientos",
    eventName: "cta_click",
    eventPayload: { placement: "hero_chip_treatments" },
  },
  {
    title: "Palermo Soho, CABA",
    description: "Abrir ubicación y datos de contacto",
    href: "https://www.google.com/maps/search/?api=1&query=Gurruchaga+1341+Palermo+Soho+CABA",
    eventName: "map_click",
    eventPayload: { placement: "hero_chip_map" },
  },
  {
    title: "Turnos por WhatsApp",
    description: "Escribir ahora y coordinar en minutos",
    href: whatsappBase,
    eventName: "whatsapp_click",
    eventPayload: { placement: "hero_chip_whatsapp" },
  },
] as const;

export const valuePillars = [
  {
    title: "Reserva simple",
    description:
      "Un camino directo a WhatsApp, sin formularios eternos ni pasos innecesarios.",
    href: whatsappBase,
    eventName: "whatsapp_click",
    eventPayload: { placement: "value_strip_whatsapp" },
  },
  {
    title: "Ubicación clara",
    description:
      "Dirección, horarios y barrio visibles desde el primer scroll.",
    href: "https://www.google.com/maps/search/?api=1&query=Gurruchaga+1341+Palermo+Soho+CABA",
    eventName: "map_click",
    eventPayload: { placement: "value_strip_map" },
  },
  {
    title: "Selección guiada",
    description:
      "Tratamientos ordenados para entender rápido qué puede interesarte.",
    href: "/tratamientos",
    eventName: "cta_click",
    eventPayload: { placement: "value_strip_treatments" },
  },
  {
    title: "Atención cercana",
    description:
      "Una experiencia pensada para resolver dudas y acompañar la reserva con claridad.",
    href: whatsappBase,
    eventName: "whatsapp_click",
    eventPayload: { placement: "value_strip_owner" },
  },
] as const;

export const storyPoints = [
  {
    title: "Más deseo, menos fricción",
    description:
      "La página ahora empuja mejor hacia la consulta, con mensajes más cortos, CTAs más visibles y menos bloques compitiendo entre sí.",
  },
  {
    title: "Servicios mejor presentados",
    description:
      "Lo facial, corporal y complementario queda agrupado con más intención comercial y lectura más rápida.",
  },
  {
    title: "Ubicación que convierte",
    description:
      "La ubicación deja de sentirse como un bloque aparte y pasa a ser parte natural del recorrido de contacto.",
  },
  {
    title: "Contenido más confiable",
    description:
      "Se mantienen solo señales públicas verificables y se elimina lo que distraía o restaba credibilidad.",
  },
] as const;

export const ownerSection = {
  eyebrow: "Atención cercana",
  title: "Un cierre más humano para reforzar confianza antes de escribir.",
  description:
    "En lugar de usar la imagen principal al comienzo, la movimos al final para que funcione como respaldo de cercanía y atención directa en el momento de decidir la consulta.",
  points: [
    "Atención personalizada desde el primer mensaje.",
    "Seguimiento directo durante la coordinación del turno.",
    "Una presencia más cálida al final del recorrido comercial.",
  ],
} as const;

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
