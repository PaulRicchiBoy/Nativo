export interface Tour {
  id: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  location: string;
  maxGroupSize: number;
  featured: boolean;
  includes: string[];
  difficulty?: "Fácil" | "Moderado" | "Difícil";
  translations: {
    en: {
      title: string;
      description: string;
    };
    es: {
      title: string;
      description: string;
    };
  };
}

export const tours: Tour[] = [
  {
    id: "qeros-cultural-immersion",
    images: ["/tours/qeros.jpg"],
    price: 350,
    rating: 4.9,
    reviews: 68,
    duration: "3 días",
    location: "Comunidad Q'eros, Cusco",
    maxGroupSize: 8,
    featured: true,
    difficulty: "Moderado",
    includes: [
      "Alojamiento en casa comunal",
      "Alimentación tradicional",
      "Guía local quechua hablante",
      "Ceremonia de pago a la tierra",
      "Taller de tejidos andinos",
    ],
    translations: {
      en: {
        title: "Q'eros Nation: Andean Wisdom Immersion",
        description:
          "Live an authentic experience with the Q'eros, recognized as the last Inca descendants. Participate in their daily activities, learn about their cosmovision and medicinal plants, and connect with the sacred Apus through ancestral ceremonies.",
      },
      es: {
        title: "Nación Q'eros: Inmersión en la Sabiduría Andina",
        description:
          "Vive una experiencia auténtica con los Q'eros, reconocidos como los últimos descendientes incas. Participa en sus actividades cotidianas, conoce su cosmovisión y plantas medicinales, y conéctate con los Apus sagrados a través de ceremonias ancestrales.",
      },
    },
  },
  {
    id: "manu-biocultural",
    images: ["/tours/manu.jpg"],
    price: 850,
    rating: 4.8,
    reviews: 92,
    duration: "5 días",
    location: "Reserva de Biósfera del Manu",
    maxGroupSize: 6,
    featured: true,
    difficulty: "Moderado",
    includes: [
      "Alojamiento en albergues comunales",
      "Guía naturalista bilingüe",
      "Avistamiento de fauna silvestre",
      "Intercambio con comunidad Matsiguenka",
      "Caminatas nocturnas en selva",
    ],
    translations: {
      en: {
        title: "Manu Biocultural Expedition",
        description:
          "Deep in the Amazon, share with the Matsiguenka people their ancestral knowledge of the jungle. Learn to recognize medicinal plants, fish with traditional methods, and discover how they coexist harmoniously with one of the most biodiverse ecosystems on the planet.",
      },
      es: {
        title: "Expedición Biocultural al Manu",
        description:
          "En lo profundo de la Amazonía, comparte con el pueblo Matsiguenka sus saberes ancestrales sobre la selva. Aprende a reconocer plantas medicinales, pesca con métodos tradicionales y descubre cómo conviven en armonía con uno de los ecosistemas más biodiversos del planeta.",
      },
    },
  },
  {
    id: "amarakaeri-experience",
    images: ["/tours/amarakeri.jpg"],
    price: 720,
    rating: 4.7,
    reviews: 45,
    duration: "4 días",
    location: "Reserva Comunal Amarakaeri",
    maxGroupSize: 10,
    featured: true,
    difficulty: "Moderado",
    includes: [
      "Transporte fluvial",
      "Guía Harakmbut",
      "Taller de artesanía con semillas",
      "Ritual de bienvenida",
      "Avistamiento de guacamayos",
    ],
    translations: {
      en: {
        title: "Amarakaeri: Heart of the Harakmbut",
        description:
          "In the protected heart of Madre de Dios, the Harakmbut people will show you their sacred territory. Navigate jungle rivers, learn their creation myths, and contribute directly to the conservation of their ancestral lands through responsible tourism.",
      },
      es: {
        title: "Amarakaeri: Corazón del Pueblo Harakmbut",
        description:
          "En el corazón protegido de Madre de Dios, el pueblo Harakmbut te mostrará su territorio sagrado. Navega por ríos selváticos, conoce sus mitos de creación y contribuye directamente con la conservación de sus tierras ancestrales mediante el turismo responsable.",
      },
    },
  },
  {
    id: "andes-amazon-trail",
    images: ["/tours/andes.jpg"],
    price: 1200,
    rating: 4.9,
    reviews: 37,
    duration: "7 días",
    location: "Cusco a Madre de Dios",
    maxGroupSize: 8,
    featured: false,
    difficulty: "Difícil",
    includes: [
      "Traslados terrestres y fluviales",
      "Alojamiento en comunidades",
      "Guía especializado",
      "Todas las comidas",
      "Talleres interculturales",
    ],
    translations: {
      en: {
        title: "Andes to Amazon: Ancestral Paths",
        description:
          "This transformative journey takes you from Andean villages to Amazonian communities, experiencing the cultural and ecological transition. Participate in potato planting at 4,000 masl and tropical fruit harvesting in the lowlands, connecting with indigenous wisdom throughout the route.",
      },
      es: {
        title: "De los Andes a la Amazonía: Caminos Ancestrales",
        description:
          "Este viaje transformador te lleva desde pueblos andinos hasta comunidades amazónicas, viviendo la transición cultural y ecológica. Participa en la siembra de papas a 4,000 msnm y en la cosecha de frutos tropicales en la selva baja, conectando con saberes indígenas a lo largo del recorrido.",
      },
    },
  },
  {
    id: "machupicchu-community",
    images: ["/tours/machu-picchu.jpg"],
    price: 550,
    rating: 4.6,
    reviews: 124,
    duration: "2 días",
    location: "Valle Sagrado y Machu Picchu",
    maxGroupSize: 12,
    featured: false,
    difficulty: "Fácil",
    includes: [
      "Visita a comunidad Huilloc",
      "Tren a Machu Picchu",
      "Entrada a ciudadela",
      "Almuerzo comunitario",
      "Demostración textil",
    ],
    translations: {
      en: {
        title: "Machu Picchu + Andean Communities",
        description:
          "Combine the wonder of Machu Picchu with an authentic encounter with the Huilloc people in the Sacred Valley. Learn about traditional weaving techniques, share a pachamanca (earth oven meal), and understand how contemporary communities preserve their Inca heritage.",
      },
      es: {
        title: "Machu Picchu + Comunidades Andinas",
        description:
          "Combina la maravilla de Machu Picchu con un encuentro auténtico con el pueblo Huilloc en el Valle Sagrado. Aprende técnicas textiles tradicionales, comparte una pachamanca y comprende cómo las comunidades actuales preservan su herencia inca.",
      },
    },
  },
  {
    id: "parrot-clay-lick",
    images: ["/tours/collpa.webp"],
    price: 480,
    rating: 4.7,
    reviews: 58,
    duration: "3 días",
    location: "Reserva Tambopata",
    maxGroupSize: 8,
    featured: false,
    difficulty: "Fácil",
    includes: [
      "Observación de colpa de guacamayos",
      "Caminata nocturna",
      "Visita a lago Sandoval",
      "Alojamiento en lodge comunitario",
      "Guía local especializado",
    ],
    translations: {
      en: {
        title: "Clay Lick & Native Wisdom",
        description:
          "Witness the spectacular gathering of hundreds of parrots and macaws at the clay licks of Tambopata, while learning from the Ese'Eja people about their deep connection with these colorful birds and the importance of conservation in their culture.",
      },
      es: {
        title: "Colpa de Loros y Sabiduría Nativa",
        description:
          "Presencia el espectacular encuentro de cientos de loros y guacamayos en las colpas de Tambopata, mientras aprendes del pueblo Ese'Eja sobre su profunda conexión con estas aves coloridas y la importancia de la conservación en su cultura.",
      },
    },
  },
];
