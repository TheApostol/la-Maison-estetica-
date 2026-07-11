export type Treatment = {
  slug: string;
  name: string;
  category: string;
  label?: string;
  summary: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
  ctaHref: string;
};

const whatsapp = "https://wa.me/5491160340037";

export const featuredTreatments: Treatment[] = [
  {
    slug: "liporganic",
    name: "Liporganic",
    category: "Corporal modelador",
    label: "Promo pública observada en el sitio actual",
    summary:
      "Tratamiento presentado como modelador y reductor, con foco en una propuesta corporal de alta demanda dentro del sitio auditado.",
    highlights: [
      "Lipocavitación",
      "Madero terapia",
      "Electrodos",
      "Lipolaser",
    ],
    image: {
      src: "/images/treatments/liporganic.webp",
      alt: "Tratamiento Liporganic de La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20Liporganic.%20%C2%BFTienen%20disponibilidad%3F`,
  },
  {
    slug: "ultracavitacion-cavix",
    name: "Ultracavitación (Cavix)",
    category: "Corporal modelador",
    label: "Pack de sesiones",
    summary:
      "La página pública la presenta como una opción para reducir adiposidad localizada y ordenar mejor el trabajo sobre silueta.",
    highlights: [
      "Ultrasonido focalizado",
      "Reduce adiposidad localizada",
      "Modela y define la silueta",
    ],
    image: {
      src: "/images/treatments/ultracavitacion.webp",
      alt: "Tratamiento de ultracavitación en La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20Ultracavitaci%C3%B3n%20(Cavix).%20%C2%BFTienen%20disponibilidad%3F`,
  },
  {
    slug: "velaslim-plus",
    name: "VelaSlim Plus",
    category: "Corporal modelador",
    label: "Pack de sesiones",
    summary:
      "El sitio la describe como tecnología 4 en 1, asociada a reducción, reafirmación y trabajo sobre celulitis.",
    highlights: [
      "Tecnología 4 en 1",
      "Reduce y reafirma",
      "Combate la celulitis",
    ],
    image: {
      src: "/images/treatments/velaslim.webp",
      alt: "Tratamiento VelaSlim Plus en La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20VelaSlim%20Plus.%20%C2%BFTienen%20disponibilidad%3F`,
  },
  {
    slug: "ondas-rusas",
    name: "Ondas Rusas",
    category: "Corporal modelador",
    label: "Pack de sesiones",
    summary:
      "La descripción pública se enfoca en tonificación y fortalecimiento de la musculatura, con una lectura más clara y menos recargada.",
    highlights: [
      "Gimnasia pasiva",
      "Tonificación muscular",
      "Trabajo progresivo por sesiones",
    ],
    image: {
      src: "/images/treatments/velaslim.webp",
      alt: "Espacio de tratamiento corporal en La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20Ondas%20Rusas.%20%C2%BFTienen%20disponibilidad%3F`,
  },
] as const;

export const treatmentCategories = [
  {
    name: "Corporal modelador",
    summary:
      "Agrupa la oferta corporal más visible del sitio actual, con tratamientos presentados para modelar, reducir o acompañar procesos de tonificación.",
    items: [
      "Liporganic",
      "Ultracavitación (Cavix)",
      "VelaSlim Plus",
      "Ondas Rusas",
      "Drenajes linfáticos",
    ],
  },
  {
    name: "Facial antiage",
    summary:
      "La página pública menciona una línea facial que combina aparatología y procedimientos orientados a firmeza, textura y luminosidad.",
    items: [
      "HIFU 12D MAX",
      "Armonización facial",
      "Peeling",
      "Dermapen",
      "Peptonas",
    ],
  },
  {
    name: "Anticelulítico & estrías",
    summary:
      "Sección visible enfocada en textura, celulitis y estrías, con referencias públicas a Endopeel #GlúteosUp.",
    items: ["Anticelulítico", "Estrías", "Endopeel · #GlúteosUp"],
  },
  {
    name: "Belleza y apoyo estético",
    summary:
      "Incluye depilación, micropigmentación, maquillaje profesional y asesoramiento de imagen.",
    items: [
      "Polaser / fotodepilación",
      "Micropigmentación de labios",
      "Micropigmentación de cejas",
      "Maquillaje profesional",
      "Asesoramiento de imagen",
    ],
  },
] as const;

export const treatmentDetailCopy: Record<string, Treatment> = Object.fromEntries(
  featuredTreatments.map((treatment) => [treatment.slug, treatment]),
);
