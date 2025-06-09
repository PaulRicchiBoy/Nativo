import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=700&width=1200"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Discover Amazing Adventures</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Explore the world's most beautiful destinations with our curated tours
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-full p-2 max-w-md mx-auto mb-8 flex items-center">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 px-4 py-2 text-gray-900 bg-transparent outline-none"
          />
          <Button size="sm" className="rounded-full">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Tours
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
