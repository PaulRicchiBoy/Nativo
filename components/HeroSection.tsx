"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[600px] md:h-[800px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/LogoWallpaper.png"
          alt="Nativo Adventure Tours"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-2xl mx-auto drop-shadow-md">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full p-1 max-w-xl mx-auto mb-10 flex items-center shadow-lg">
          <input
            type="text"
            placeholder={t("hero.searchPlaceholder")}
            className="flex-1 px-6 py-3 text-gray-900 bg-transparent outline-none rounded-l-full text-sm md:text-base"
          />
          <Button
            size="sm"
            className="rounded-full bg-[#C62828] hover:bg-[#8B3A3A] h-full aspect-square"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours">
            <Button
              size="lg"
              className="bg-[#C62828] hover:bg-[#8B3A3A] text-white font-bold px-8 py-6 text-lg shadow-lg transition-all hover:scale-105"
            >
              {t("hero.exploreTours")}
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg transition-all hover:scale-105"
          >
            {t("hero.learnMore")}
          </Button>
        </div>
      </div>
    </section>
  );
}
