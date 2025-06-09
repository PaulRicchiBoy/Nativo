"use client";

import React, { useState, useEffect } from "react";
import { DiscountTour } from "@/config/discount";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, ChevronRight } from "lucide-react";

interface OfertasProps {
  tours: DiscountTour[];
}

const Ofertas: React.FC<OfertasProps> = ({ tours }) => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const getServiceType = (type: "group" | "private" | "both") => {
    return type === "group"
      ? "Grupal"
      : type === "private"
      ? "Privado"
      : "Grupal/Privado";
  };

  // Efecto de carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % tours.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tours.length]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  // Texto destacado
  const featuredText = {
    es: {
      title: "Ofertas Exclusivas",
      subtitle: "Experiencias inolvidables",
      description:
        "Descubre nuestras promociones especiales en tours premium con descuentos limitados.",
      cta: "Ver todas las ofertas",
    },
    en: {
      title: "Exclusive Offers",
      subtitle: "Unforgettable experiences",
      description:
        "Discover our special promotions on premium tours with limited discounts.",
      cta: "View all offers",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-black">
      {/* Encabezado con texto al lado */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600">
            {featuredText[language].title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            {featuredText[language].subtitle}
          </h2>
          <p className="text-lg text-black">
            {featuredText[language].description}
          </p>
          <Link
            href={language === "es" ? "/es/ofertas" : "/en/offers"}
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {featuredText[language].cta}
            <ChevronRight className="ml-2" />
          </Link>
        </div>

        {/* Carrusel */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-2xl">
          <div className="relative h-96 w-full">
            {tours.map((tour, index) => {
              const translation = tour.translations[language];
              const position =
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full";

              return (
                <div
                  key={tour.id}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${position} ${
                    direction === "right" ? "slide-in-right" : "slide-in-left"
                  }`}
                >
                  <Image
                    src={tour.images[0]}
                    alt={translation.title}
                    fill
                    className="object-cover"
                    priority={index === currentIndex}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {translation.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-red-400 font-bold mr-2">
                        ${tour.discountPrice || tour.price}
                      </span>
                      {tour.discountPrice && (
                        <span className="text-gray-300 line-through text-sm">
                          ${tour.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Grid de Tours con animaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, index) => {
          const translation = tour.translations[language];

          return (
            <div
              key={tour.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Imagen con efecto hover */}
              <div className="relative h-60 overflow-hidden">
                <Link href={translation.itineraryLink}>
                  <Image
                    src={tour.images[0]}
                    alt={translation.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-black/80 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                    {tour.duration}
                  </span>
                </Link>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block bg-red-900/50 text-red-400 text-xs px-3 py-1 rounded-full">
                    {getServiceType(tour.serviceType)}
                  </span>
                  {tour.rating && (
                    <div className="flex items-center bg-black/50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{tour.rating}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  <Link
                    href={translation.itineraryLink}
                    className="hover:text-red-400 transition-colors"
                  >
                    {translation.title}
                  </Link>
                </h3>

                {/* Precios */}
                <div className="my-4">
                  {tour.discountPrice && (
                    <span className="text-gray-400 line-through mr-2 text-sm">
                      {language === "es" ? "Antes:" : "Before:"} ${tour.price}
                    </span>
                  )}
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-red-500">
                      {language === "es" ? "Desde:" : "From:"} $
                      {tour.discountPrice || tour.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      /{language === "es" ? "persona" : "person"}
                    </span>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex flex-col space-y-3 mt-4">
                  <Link
                    href={translation.itineraryLink}
                    className="flex items-center justify-center text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
                  >
                    {language === "es" ? "Ver detalles" : "View details"}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link
                    href="#book-now"
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {language === "es" ? "Reservar ahora" : "Book now"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ofertas;
