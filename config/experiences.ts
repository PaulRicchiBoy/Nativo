// @/config/experiences.ts

type Language = "es" | "en";

type ExperienceCategory = {
  es:
    | "aventura"
    | "cultural"
    | "naturaleza"
    | "gastronomía"
    | "relajación"
    | "espiritualidad";
  en:
    | "adventure"
    | "cultural"
    | "nature"
    | "gastronomy"
    | "relaxation"
    | "spirituality";
};

export interface Experience {
  id: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  description: Record<Language, string>;
  category: ExperienceCategory;
  location: Record<Language, string>;
  duration: string;
  price: number;
  rating: number;
  image: string;
  highlights: Record<Language, string[]>;
  included: Record<Language, string[]>;
  requirements?: Record<Language, string[]>;
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: {
      es: "Ritual del Kintu y la Hoja de Coca",
      en: "Kintu and Coca Leaf Ritual",
    },
    shortDescription: {
      es: "Conexión andina con la hoja sagrada de coca en una ceremonia ancestral",
      en: "Andean connection with the sacred coca leaf in an ancestral ritual",
    },
    description: {
      es: "Sumérgete en el mundo espiritual andino a través del Kintu: una ceremonia de respeto, conexión y ofrenda con la hoja de coca, guiada por sabios de la comunidad nativa.",
      en: "Immerse yourself in the Andean spiritual world through Kintu: a ceremony of respect, connection, and offering with the coca leaf, guided by native community elders.",
    },
    category: {
      es: "espiritualidad",
      en: "spirituality",
    },
    location: {
      es: "Santa Rosa de Huacaria, Cusco, Perú",
      en: "Santa Rosa de Huacaria, Cusco, Peru",
    },
    duration: "2 horas",
    price: 35,
    rating: 4.8,
    image: "experiencies/kintu.jpg",
    highlights: {
      es: [
        "Ceremonia tradicional guiada por sabios",
        "Explicación del uso ancestral de la coca",
      ],
      en: [
        "Traditional ceremony guided by elders",
        "Explanation of ancestral coca use",
      ],
    },
    included: {
      es: ["Hoja de coca", "Guía espiritual local", "Traducción al inglés"],
      en: ["Coca leaves", "Local spiritual guide", "English translation"],
    },
    requirements: {
      es: ["Respeto cultural", "Actitud abierta"],
      en: ["Cultural respect", "Open attitude"],
    },
  },
  {
    id: "exp2",
    title: {
      es: "Ceremonia de Ayahuasca",
      en: "Ayahuasca Ceremony",
    },
    shortDescription: {
      es: "Explora tu interior con la guía de maestros amazónicos",
      en: "Explore your inner self guided by Amazonian masters",
    },
    description: {
      es: "Participa en una auténtica ceremonia de Ayahuasca realizada con respeto y cuidado por sabios indígenas. Una vivencia espiritual intensa y transformadora en medio de la selva.",
      en: "Participate in an authentic Ayahuasca ceremony carried out with respect and care by indigenous elders. A deep and transformative spiritual experience in the jungle.",
    },
    category: {
      es: "espiritualidad",
      en: "spirituality",
    },
    location: {
      es: "Kosñipata, Cusco, Perú",
      en: "Kosñipata, Cusco, Peru",
    },
    duration: "1 noche y 1 día",
    price: 160,
    rating: 4.9,
    image: "experiencies/ayahuasca.png",
    highlights: {
      es: [
        "Guía experimentado y entorno natural",
        "Ceremonia segura con acompañamiento",
      ],
      en: [
        "Experienced guide and natural setting",
        "Safe ceremony with support",
      ],
    },
    included: {
      es: [
        "Transporte local",
        "Hospedaje básico",
        "Dieta previa e infusiones naturales",
      ],
      en: [
        "Local transport",
        "Basic lodging",
        "Prior diet and herbal infusions",
      ],
    },
    requirements: {
      es: [
        "No medicamentos ni alcohol por 3 días",
        "Acompañamiento emocional recomendado",
      ],
      en: [
        "No medication or alcohol 3 days prior",
        "Emotional support recommended",
      ],
    },
  },
];

export type SimplifiedExperience = {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  image: string;
  price: number;
};

export const getExperiences = (
  lang: Language = "es"
): SimplifiedExperience[] => {
  return experiences.map((exp) => ({
    id: exp.id,
    title: exp.title[lang],
    shortDescription: exp.shortDescription[lang],
    category: exp.category[lang],
    image: exp.image,
    price: exp.price,
  }));
};

export const getExperienceById = (id: string, lang: Language = "es") => {
  const exp = experiences.find((e) => e.id === id);
  if (!exp) return null;

  return {
    ...exp,
    title: exp.title[lang],
    shortDescription: exp.shortDescription[lang],
    description: exp.description[lang],
    category: exp.category[lang],
    location: exp.location[lang],
    highlights: exp.highlights[lang],
    included: exp.included[lang],
    requirements: exp.requirements?.[lang],
  };
};
