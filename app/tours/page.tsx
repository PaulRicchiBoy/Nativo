import { ToursGrid } from "@/components/ToursGrid"

export default function ToursPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Tours</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of amazing tour experiences
          </p>
        </div>
        <ToursGrid />
      </div>
    </div>
  )
}
