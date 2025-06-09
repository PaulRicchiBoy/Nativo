"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { HeroSection } from "@/components/HeroSection";
import { ToursGrid } from "@/components/ToursGrid";
import { NewsletterSection } from "@/components/NewsletterSection";
import Ofertas from "@/components/Ofertas";
import { discountTours } from "@/config/discount"; // Asegúrate de importar tus datos
import AdvantagesSection from "@/components/AdvantagesSection";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.featured.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.featured.description")}
            </p>
          </div>
          <ToursGrid featured={true} />
        </div>
      </section>
      <div>
        <Ofertas tours={discountTours} />
      </div>
      <div>
        <AdvantagesSection />
      </div>
      <NewsletterSection />
    </div>
  );
}
