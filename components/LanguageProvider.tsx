"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Traducciones simples
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",

    "nav.tours": "Tours",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",
    "nav.experiences": "Experiences",
    "nav.about": "we are natives",

    // Hero
    "hero.title": "Discover Amazing Adventures",
    "hero.subtitle":
      "Explore the world's most beautiful destinations with our curated tours",
    "hero.searchPlaceholder": "Where do you want to go?",
    "hero.exploreTours": "Explore Tours",
    "hero.learnMore": "Learn More",

    // Home
    "home.featured.title": "Featured Tours",
    "home.featured.description":
      "Discover our most popular and highly-rated tour experiences",

    // Tours
    "tours.title": "All Tours",
    "tours.description":
      "Browse our complete collection of amazing tour experiences",
    "tours.featured": "Featured",
    "tours.reviews": "reviews",
    "tours.person": "person",
    "tours.viewDetails": "View Details",

    // Tour Detail
    "tourDetail.about": "About This Tour",
    "tourDetail.duration": "Duration",
    "tourDetail.groupSize": "Group Size",
    "tourDetail.location": "Location",
    "tourDetail.includes": "What's Included",
    "tourDetail.bookNow": "Book Now",
    "tourDetail.freeCancel": "Free cancellation up to 24 hours before",
    "tourDetail.people": "people",

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.description":
      "Get the latest travel deals and destination guides delivered to your inbox",
    "newsletter.emailPlaceholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.privacy": "We respect your privacy and never share your email",

    // Footer
    "footer.description":
      "Your trusted partner for unforgettable travel experiences around the world.",
    "footer.quickLinks": "Quick Links",
    "footer.support": "Support",
    "footer.contactUs": "Contact Us",
    "footer.home": "Home",
    "footer.tours": "Tours",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.help": "Help Center",
    "footer.faq": "FAQ",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.allRightsReserved": "All rights reserved.",
    "footer.rights": "Todos los derechos reservados.",

    // Contact
    "contact.title": "Contact Us",
    "contact.description":
      "Get in touch with us for any questions about our tours or to plan your next adventure.",
    "contact.sendMessage": "Send us a message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your travel plans...",
    "contact.send": "Send Message",
    "contact.getInTouch": "Get in Touch",
    "contact.officeHours": "Office Hours",
    "contact.monday": "Monday - Friday",
    "contact.saturday": "Saturday",
    "contact.sunday": "Sunday",
    "contact.closed": "Closed",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",

    "nav.tours": "Tours",
    "nav.contact": "Contacto",
    "nav.bookNow": "Reservar Ahora",
    "nav.traking": "Aventura-Trekking",
    "nav.experiences": "Experiencias",
    "nav.about": "Somos Nativos",

    // Hero
    "hero.title": "Descubre Aventuras Increíbles",
    "hero.subtitle":
      "Explora los destinos más hermosos del mundo con nuestros tours seleccionados",
    "hero.searchPlaceholder": "¿A dónde quieres ir?",
    "hero.exploreTours": "Explorar Tours",
    "hero.learnMore": "Saber Más",

    // Home
    "home.featured.title": "Tours Destacados",
    "home.featured.description":
      "Descubre nuestras experiencias de tours más populares y mejor valoradas",

    // Tours
    "tours.title": "Todos los Tours",
    "tours.description":
      "Navega por nuestra colección completa de experiencias de tours increíbles",
    "tours.featured": "Destacado",
    "tours.reviews": "reseñas",
    "tours.person": "persona",
    "tours.viewDetails": "Ver Detalles",

    // Tour Detail
    "tourDetail.about": "Acerca de Este Tour",
    "tourDetail.duration": "Duración",
    "tourDetail.groupSize": "Tamaño del Grupo",
    "tourDetail.location": "Ubicación",
    "tourDetail.includes": "Qué Incluye",
    "tourDetail.bookNow": "Reservar Ahora",
    "tourDetail.freeCancel": "Cancelación gratuita hasta 24 horas antes",
    "tourDetail.people": "personas",

    // Newsletter
    "newsletter.title": "Mantente Actualizado",
    "newsletter.description":
      "Recibe las últimas ofertas de viaje y guías de destinos en tu bandeja de entrada",
    "newsletter.emailPlaceholder": "Ingresa tu email",
    "newsletter.subscribe": "Suscribirse",
    "newsletter.privacy":
      "Respetamos tu privacidad y nunca compartimos tu email",

    // Footer
    "footer.description":
      "Tu socio de confianza para experiencias de viaje inolvidables alrededor del mundo.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.support": "Soporte",
    "footer.contactUs": "Contáctanos",
    "footer.home": "Inicio",
    "footer.tours": "Tours",
    "footer.about": "Acerca de",
    "footer.contact": "Contacto",
    "footer.help": "Centro de Ayuda",
    "footer.faq": "Preguntas Frecuentes",
    "footer.terms": "Términos de Servicio",
    "footer.privacy": "Política de Privacidad",
    "footer.allRightsReserved": "Todos los derechos reservados.",
    "footer.rights": "Todos los derechos reservados.",

    // Contact
    "contact.title": "Contáctanos",
    "contact.description":
      "Ponte en contacto con nosotros para cualquier pregunta sobre nuestros tours o para planificar tu próxima aventura.",
    "contact.sendMessage": "Envíanos un mensaje",
    "contact.firstName": "Nombre",
    "contact.lastName": "Apellido",
    "contact.email": "Email",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos sobre tus planes de viaje...",
    "contact.send": "Enviar Mensaje",
    "contact.getInTouch": "Ponte en Contacto",
    "contact.officeHours": "Horarios de Oficina",
    "contact.monday": "Lunes - Viernes",
    "contact.saturday": "Sábado",
    "contact.sunday": "Domingo",
    "contact.closed": "Cerrado",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Cargar idioma del localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
