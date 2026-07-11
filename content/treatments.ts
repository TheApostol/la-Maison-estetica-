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
    label: "Modelado corporal",
    summary:
      "Nuestro tratamiento corporal más pedido: modela, reduce y trabaja la silueta combinando varias técnicas en una misma sesión.",
    highlights: [
      "Lipocavitación",
      "Maderoterapia",
      "Electrodos",
      "Lipoláser",
    ],
    image: {
      src: "/images/treatments/liporganic.webp",
      alt: "Sesión de tratamiento corporal Liporganic en La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20Liporganic.%20%C2%BFTienen%20disponibilidad%3F`,
  },
  {
    slug: "ultracavitacion-cavix",
    name: "Ultracavitación (Cavix)",
    category: "Corporal modelador",
    label: "Pack de sesiones",
    summary:
      "Ultrasonido focalizado para reducir adiposidad localizada y definir mejor la silueta, en un trabajo progresivo por sesiones.",
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
      "Tecnología 4 en 1 orientada a reducir, reafirmar y trabajar sobre la celulitis con una experiencia cómoda y acompañada.",
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
      "Gimnasia pasiva que tonifica y fortalece la musculatura mediante electroestimulación, en un trabajo progresivo por sesiones.",
    highlights: [
      "Gimnasia pasiva",
      "Tonificación muscular",
      "Trabajo progresivo por sesiones",
    ],
    image: {
      src: "/images/treatments/ondas-rusas.webp",
      alt: "Sesión de tratamiento corporal modelador en La Maison",
    },
    ctaHref: `${whatsapp}?text=%C2%A1Hola%20La%20Maison!%20Quiero%20un%20turno%20para%20Ondas%20Rusas.%20%C2%BFTienen%20disponibilidad%3F`,
  },
] as const;

export const treatmentCategories = [
  {
    name: "Corporal modelador",
    summary:
      "Tratamientos para modelar, reducir y acompañar procesos de tonificación corporal.",
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
      "Una línea facial que combina aparatología y procedimientos orientados a firmeza, textura y luminosidad.",
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
      "Trabajo sobre textura, celulitis y estrías, con propuestas como Endopeel #GlúteosUp.",
    items: ["Anticelulítico", "Estrías", "Endopeel · #GlúteosUp"],
  },
  {
    name: "Belleza y apoyo estético",
    summary:
      "Depilación, micropigmentación, maquillaje profesional y asesoramiento de imagen.",
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
