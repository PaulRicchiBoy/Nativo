export interface Tour {
  id: string
  images: string[]
  price: number
  rating: number
  reviews: number
  duration: string
  location: string
  maxGroupSize: number
  featured: boolean
  includes: string[]
  translations: {
    en: {
      title: string
      description: string
    }
    es: {
      title: string
      description: string
    }
  }
}

export const tours: Tour[] = [
  {
    id: "paris-city-tour",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 299,
    rating: 4.8,
    reviews: 124,
    duration: "8 hours",
    location: "Paris, France",
    maxGroupSize: 15,
    featured: true,
    includes: ["Professional guide", "Transportation", "Lunch", "Museum tickets"],
    translations: {
      en: {
        title: "Paris City Highlights Tour",
        description:
          "Discover the magic of Paris with our comprehensive city tour. Visit iconic landmarks including the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and cruise along the Seine River. Experience the romance and culture of the City of Light with our expert local guides.",
      },
      es: {
        title: "Tour de los Puntos Destacados de París",
        description:
          "Descubre la magia de París con nuestro tour completo de la ciudad. Visita monumentos icónicos incluyendo la Torre Eiffel, el Museo del Louvre, la Catedral de Notre-Dame, y navega por el río Sena. Experimenta el romance y la cultura de la Ciudad de la Luz con nuestros guías locales expertos.",
      },
    },
  },
  {
    id: "tokyo-cultural-experience",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 450,
    rating: 4.9,
    reviews: 89,
    duration: "Full day",
    location: "Tokyo, Japan",
    maxGroupSize: 12,
    featured: true,
    includes: ["Tea ceremony", "Sushi making class", "Temple visits", "Traditional lunch"],
    translations: {
      en: {
        title: "Tokyo Cultural Immersion",
        description:
          "Immerse yourself in authentic Japanese culture with this comprehensive Tokyo experience. Participate in a traditional tea ceremony, learn sushi making from a master chef, visit ancient temples, and explore traditional neighborhoods like Asakusa and Shibuya.",
      },
      es: {
        title: "Inmersión Cultural en Tokio",
        description:
          "Sumérgete en la auténtica cultura japonesa con esta experiencia completa de Tokio. Participa en una ceremonia del té tradicional, aprende a hacer sushi con un chef maestro, visita templos antiguos y explora barrios tradicionales como Asakusa y Shibuya.",
      },
    },
  },
  {
    id: "machu-picchu-adventure",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 899,
    rating: 4.7,
    reviews: 156,
    duration: "4 days",
    location: "Cusco, Peru",
    maxGroupSize: 10,
    featured: true,
    includes: ["Accommodation", "All meals", "Professional guide", "Transportation", "Entrance fees"],
    translations: {
      en: {
        title: "Machu Picchu Adventure Trek",
        description:
          "Embark on an unforgettable journey to the ancient Inca citadel of Machu Picchu. This 4-day adventure includes hiking through the Sacred Valley, exploring Inca ruins, and witnessing one of the world's most spectacular archaeological sites at sunrise.",
      },
      es: {
        title: "Aventura de Trekking a Machu Picchu",
        description:
          "Embárcate en un viaje inolvidable a la antigua ciudadela inca de Machu Picchu. Esta aventura de 4 días incluye caminatas por el Valle Sagrado, exploración de ruinas incas y presenciar uno de los sitios arqueológicos más espectaculares del mundo al amanecer.",
      },
    },
  },
  {
    id: "santorini-sunset-cruise",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 180,
    rating: 4.6,
    reviews: 203,
    duration: "5 hours",
    location: "Santorini, Greece",
    maxGroupSize: 20,
    featured: false,
    includes: ["Boat cruise", "Dinner", "Wine tasting", "Hotel pickup"],
    translations: {
      en: {
        title: "Santorini Sunset Cruise",
        description:
          "Experience the breathtaking beauty of Santorini from the sea. Sail around the volcanic islands, swim in hot springs, enjoy a delicious Greek dinner, and witness the world-famous Santorini sunset with a glass of local wine in hand.",
      },
      es: {
        title: "Crucero del Atardecer en Santorini",
        description:
          "Experimenta la belleza impresionante de Santorini desde el mar. Navega alrededor de las islas volcánicas, nada en aguas termales, disfruta de una deliciosa cena griega y presencia el mundialmente famoso atardecer de Santorini con una copa de vino local en la mano.",
      },
    },
  },
  {
    id: "safari-kenya",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 1299,
    rating: 4.9,
    reviews: 78,
    duration: "7 days",
    location: "Masai Mara, Kenya",
    maxGroupSize: 8,
    featured: false,
    includes: ["Accommodation", "All meals", "Game drives", "Professional guide", "Park fees"],
    translations: {
      en: {
        title: "Kenya Safari Adventure",
        description:
          "Witness the incredible wildlife of Kenya on this 7-day safari adventure. Experience the Great Migration, spot the Big Five, visit Masai villages, and stay in luxury safari lodges while exploring the Masai Mara National Reserve.",
      },
      es: {
        title: "Aventura de Safari en Kenia",
        description:
          "Presencia la increíble vida salvaje de Kenia en esta aventura de safari de 7 días. Experimenta la Gran Migración, avista los Cinco Grandes, visita aldeas masai y hospédate en lodges de safari de lujo mientras exploras la Reserva Nacional Masai Mara.",
      },
    },
  },
  {
    id: "iceland-northern-lights",
    images: ["/placeholder.svg?height=400&width=600"],
    price: 650,
    rating: 4.8,
    reviews: 92,
    duration: "3 days",
    location: "Reykjavik, Iceland",
    maxGroupSize: 16,
    featured: false,
    includes: ["Accommodation", "Northern lights tour", "Blue Lagoon entry", "Transportation"],
    translations: {
      en: {
        title: "Iceland Northern Lights Experience",
        description:
          "Chase the magical Northern Lights across Iceland's stunning landscapes. This 3-day tour includes visits to the Blue Lagoon, Golden Circle attractions, ice caves, and multiple opportunities to witness the Aurora Borealis dancing across the Arctic sky.",
      },
      es: {
        title: "Experiencia de Auroras Boreales en Islandia",
        description:
          "Persigue las mágicas Auroras Boreales a través de los impresionantes paisajes de Islandia. Este tour de 3 días incluye visitas a la Laguna Azul, atracciones del Círculo Dorado, cuevas de hielo y múltiples oportunidades para presenciar la Aurora Boreal danzando por el cielo ártico.",
      },
    },
  },
]
