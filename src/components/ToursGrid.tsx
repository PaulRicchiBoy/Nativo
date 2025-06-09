import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tours } from "@/config/tours";

interface ToursGridProps {
  featured?: boolean;
}

export function ToursGrid({ featured = false }: ToursGridProps) {
  const displayTours = featured ? tours.slice(0, 3) : tours;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayTours.map((tour) => {
        const translation = tour.translations.en;

        return (
          <div
            key={tour.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={tour.images[0] || "/placeholder.svg"}
                alt={translation.title}
                fill
                className="object-cover"
              />
              {tour.featured && (
                <Badge className="absolute top-3 left-3 bg-primary">
                  Featured
                </Badge>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ({tour.reviews} reviews)
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 line-clamp-2">
                {translation.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {translation.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ${tour.price}
                  <span className="text-sm font-normal text-gray-600">
                    /person
                  </span>
                </div>
                <Link href={`/tours/${tour.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
