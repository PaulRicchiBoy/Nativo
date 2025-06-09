import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest travel deals and destination guides delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white" />
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-white/70 mt-4">We respect your privacy and never share your email</p>
        </div>
      </div>
    </section>
  )
}
