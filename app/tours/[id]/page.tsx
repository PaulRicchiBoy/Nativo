import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { tours } from "@/config/tours"

interface TourDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params
  const tour = tours.find((tour) => tour.id === id)

  if (!tour) {
    notFound()
  }

  const translation = tour.translations.en

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image src={tour.images[0] || "/placeholder.svg"} alt={translation.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{translation.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
              <p className="text-gray-600 leading-relaxed">{translation.description}</p>
            </div>

            {/* Tour Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">Duration</div>
                  <div className="text-sm text-gray-600">{tour.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">Group Size</div>
                  <div className="text-sm text-gray-600">{tour.maxGroupSize} people</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-gray-600">{tour.location}</div>
                </div>
              </div>
            </div>

            {/* Includes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <div className="flex flex-wrap gap-2">
                {tour.includes.map((item, index) => (
                  <Badge key={index} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${tour.price}
                  <span className="text-base font-normal text-gray-600">/person</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tour.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({tour.reviews} reviews)</span>
                </div>
              </div>

              <Button className="w-full mb-4" size="lg">
                Book Now
              </Button>

              <div className="text-center text-sm text-gray-500">Free cancellation up to 24 hours before</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
