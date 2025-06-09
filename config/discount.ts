export interface DiscountTour {
  id: string;
  images: string[];
  featured?: boolean;
  rating: number;
  reviews: number;
  location: string;
  duration: string;
  price: number;
  discountPrice?: number;
  serviceType: "group" | "private" | "both";
  translations: {
    [key: string]: {
      title: string;
      description: string;
      itineraryLink: string;
    };
  };
}

export const discountTours: DiscountTour[] = [
  {
    id: "qeros-cultural-immersion",
    images: ["/tours/qeros.jpg"],
    featured: true,
    rating: 4.9,
    reviews: 68,
    location: "Comunidad Q'eros, Cusco",
    duration: "3 días",
    price: 350,
    discountPrice: 295,
    serviceType: "group",
    translations: {
      en: {
        title: "Q'eros Nation: Andean Wisdom Immersion",
        description:
          "Live an authentic experience with the Q'eros, recognized as the last Inca descendants.",
        itineraryLink: "/en/tours/qeros-cultural-immersion",
      },
      es: {
        title: "Nación Q'eros: Inmersión en la Sabiduría Andina",
        description:
          "Vive una experiencia auténtica con los Q'eros, reconocidos como los últimos descendientes incas.",
        itineraryLink: "/es/tours/qeros-cultural-immersion",
      },
    },
  },
  {
    id: "manu-biocultural",
    images: ["/tours/manu.jpg"],
    featured: true,
    rating: 4.8,
    reviews: 92,
    location: "Reserva de Biósfera del Manu",
    duration: "5 días",
    price: 850,
    discountPrice: 725,
    serviceType: "both",
    translations: {
      en: {
        title: "Manu Biocultural Expedition",
        description:
          "Deep in the Amazon, share with the Matsiguenka people their ancestral knowledge of the jungle.",
        itineraryLink: "/en/tours/manu-biocultural",
      },
      es: {
        title: "Expedición Biocultural al Manu",
        description:
          "En lo profundo de la Amazonía, comparte con el pueblo Matsiguenka sus saberes ancestrales sobre la selva.",
        itineraryLink: "/es/tours/manu-biocultural",
      },
    },
  },
  {
    id: "machupicchu-community",
    images: ["/tours/machu-picchu.jpg"],
    featured: false,
    rating: 4.6,
    reviews: 124,
    location: "Valle Sagrado y Machu Picchu",
    duration: "2 días",
    price: 550,
    discountPrice: 475,
    serviceType: "both",
    translations: {
      en: {
        title: "Machu Picchu + Andean Communities",
        description:
          "Combine the wonder of Machu Picchu with an authentic encounter with the Huilloc people.",
        itineraryLink: "/en/tours/machupicchu-community",
      },
      es: {
        title: "Machu Picchu + Comunidades Andinas",
        description:
          "Combina la maravilla de Machu Picchu con un encuentro auténtico con el pueblo Huilloc.",
        itineraryLink: "/es/tours/machupicchu-community",
      },
    },
  },
];
