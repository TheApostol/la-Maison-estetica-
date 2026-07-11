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

export const hero = {
  eyebrow: "Tratamientos estéticos en Palermo Soho",
  titleLead: "Belleza que se siente,",
  titleEmphasis: "resultados que se notan.",
  description:
    "Estética facial y corporal en Palermo Soho, con tecnología de vanguardia para realzar tu mejor versión.",
  treatments: [
    "HIFU 12D",
    "Liporganic",
    "Plasma",
    "Dermapen",
    "Radiofrecuencia",
    "Limpiezas faciales",
  ],
  imageCaption: {
    title: "Tu mejor versión empieza hoy.",
    description: "Agendá tu valoración personalizada por WhatsApp.",
  },
} as const;

export const heroStats = [
  { value: "7800+", label: "Clientas felices" },
  { value: "100%", label: "Turnos por WhatsApp" },
  { value: "15+", label: "Años de experiencia" },
] as const;

export const credibility = {
  eyebrow: "Tratamientos estéticos",
  titleLead: "Belleza real,",
  titleEmphasis: "resultados reales.",
  description: "Estética facial y corporal en Palermo Soho.",
  points: [
    "15 años de experiencia",
    "Dermocosmiatra UBA",
    "Asesoramiento de imagen",
    "Tecnología de última generación",
    "Planes personalizados",
  ],
} as const;

export const ownerSection = {
  eyebrow: "Atención cercana",
  title: "Detrás de cada tratamiento, una atención genuinamente personal.",
  description:
    "Te acompañamos desde el primer mensaje hasta el seguimiento de cada sesión, con un plan pensado para vos y una experiencia cálida de principio a fin.",
  points: [
    "Atención personalizada desde el primer mensaje.",
    "Seguimiento directo durante todo el tratamiento.",
    "Una experiencia cálida y profesional en Palermo Soho.",
  ],
} as const;

export const storyPoints = [
  {
    title: "Atención personalizada",
    description:
      "Cada plan se piensa a partir de tu objetivo y de una evaluación inicial, sin fórmulas genéricas.",
  },
  {
    title: "Tecnología de vanguardia",
    description:
      "Aparatología de última generación para acompañar tratamientos faciales y corporales.",
  },
  {
    title: "Foco facial y corporal",
    description:
      "Una oferta ordenada entre lo facial, lo corporal y la belleza complementaria, fácil de recorrer.",
  },
  {
    title: "Palermo Soho",
    description:
      "Un espacio cálido y cercano en Gurruchaga 1341, con coordinación simple por WhatsApp.",
  },
] as const;

export const processSteps = [
  {
    title: "Consulta",
    description:
      "Escribinos por WhatsApp y coordinamos el primer contacto en minutos.",
  },
  {
    title: "Evaluación",
    description:
      "Analizamos tu objetivo con una lectura personalizada de piel y cuerpo.",
  },
  {
    title: "Plan a medida",
    description:
      "Definimos los tratamientos y la cantidad de sesiones que mejor se adaptan a vos.",
  },
  {
    title: "Seguimiento",
    description:
      "Acompañamos cada sesión para cuidar la experiencia y sostener los resultados.",
  },
] as const;
