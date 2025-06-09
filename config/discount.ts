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
    id: "humantay-lake",
    images: ["/tours/humantay-lake.webp"],
    featured: true,
    rating: 4.8,
    reviews: 124,
    location: "Cusco",
    duration: "Full Day",
    price: 65,
    discountPrice: 45,
    serviceType: "both",
    translations: {
      en: {
        title: "Humantay Lake Tour",
        description:
          "Beautiful turquoise lagoon at the foot of the snowy Humantay.",
        itineraryLink: "/en/tours/humantay-lake",
      },
      es: {
        title: "Tour Laguna Humantay",
        description: "Hermosa laguna turquesa al pie del nevado Humantay.",
        itineraryLink: "/es/tours/laguna-humantay",
      },
    },
  },
  {
    id: "rainbow-mountain",
    images: ["/tours/rainbow-mountain.webp"],
    rating: 4.7,
    reviews: 156,
    location: "Vinicunca",
    duration: "Full Day",
    price: 65,
    discountPrice: 45,
    serviceType: "both",
    translations: {
      en: {
        title: "Rainbow Mountain Tour",
        description:
          "The famous mountain of 7 colors at 5,200 meters above sea level.",
        itineraryLink: "/en/tours/rainbow-mountain",
      },
      es: {
        title: "Tour Montaña de 7 Colores",
        description:
          "La famosa montaña de 7 colores a 5,200 metros sobre el nivel del mar.",
        itineraryLink: "/es/tours/montana-colores",
      },
    },
  },
  {
    id: "machupicchu-expedition",
    images: ["/tours/machupicchu-expedition.jpg"],
    rating: 4.9,
    reviews: 210,
    location: "Machu Picchu",
    duration: "Full Day",
    price: 310,
    discountPrice: 290,
    serviceType: "group",
    translations: {
      en: {
        title: "Machu Picchu by Expedition",
        description:
          "Visit the wonder of the world with the Expedition train service.",
        itineraryLink: "/en/tours/machupicchu-expedition",
      },
      es: {
        title: "Machu Picchu by Expedition",
        description:
          "Visita la maravilla del mundo con el servicio de tren Expedition.",
        itineraryLink: "/es/tours/machupicchu-expedition",
      },
    },
  },
];
