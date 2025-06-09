"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tours } from "@/config/tours";

interface ToursGridProps {
  featured?: boolean;
}

export function ToursGrid({ featured = false }: ToursGridProps) {
  const { language, t } = useLanguage();
  const displayTours = featured ? tours.slice(0, 3) : tours;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {displayTours.map((tour) => {
        const translation = tour.translations[language];

        return (
          <div
            key={tour.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative h-52">
              <Image
                src={tour.images[0] || "/placeholder.svg"}
                alt={translation.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={featured}
              />
              {tour.featured && (
                <Badge className="absolute top-3 left-3 bg-[#C62828] hover:bg-[#8B3A3A] text-white">
                  {t("tours.featured")}
                </Badge>
              )}
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{tour.rating}</span>
                <span className="text-sm text-gray-500 ml-1">
                  ({tour.reviews} {t("tours.reviews")})
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                {translation.title}
              </h3>

              <p className="text-gray-600 line-clamp-3 text-sm">
                {translation.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#C62828]" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#C62828]" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-2xl font-bold text-[#C62828]">
                    ${tour.price}
                  </span>
                  <span className="text-sm font-normal text-gray-600 block">
                    /{t("tours.person")}
                  </span>
                </div>
                <Link href={`/tours/${tour.id}`}>
                  <Button
                    className="bg-[#C62828] hover:bg-[#8B3A3A] text-white transition-all"
                    size="sm"
                  >
                    {t("tours.viewDetails")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
