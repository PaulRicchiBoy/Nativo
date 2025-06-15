"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { t } = useLanguage();

  const whatsappNumber = "51912345678"; // Reemplaza con tu número
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] flex flex-col">
      {/* Imagen de fondo con animación */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/Nativoverde.png"
          alt="Nativo Adventure Tours"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Texto en la parte superior */}
      <motion.div
        className="relative z-10 pt-12 md:pt-16 px-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
          {t("hero.subtitle")}
        </p>
      </motion.div>

      {/* Contenido anclado al pie */}
      <div className="relative z-10 mt-auto pb-12 md:pb-16 lg:pb-20 px-4">
        {/* Barra de búsqueda */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl mx-auto w-full mb-6 md:mb-8"
        >
          <div className="bg-white rounded-full p-1 flex items-center shadow-lg border-2 border-emerald-500">
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              className="flex-1 px-4 sm:px-5 py-2 text-gray-900 bg-transparent outline-none rounded-l-full text-sm md:text-base"
            />
            <Button
              size="sm"
              className="rounded-full bg-emerald-600 hover:bg-emerald-500 h-10 w-10 transition-colors"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Botones compactos y alineados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center w-full px-4"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-[400px] mx-auto">
            <Link href="/tours" className="sm:flex-1 w-full sm:w-auto">
              <Button className="w-full sm:w-[180px] bg-emerald-700 hover:bg-emerald-600 h-12 text-white font-medium">
                {t("hero.exploreTours")}
              </Button>
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:flex-1 w-full sm:w-auto"
            >
              <Button className="w-full sm:w-[180px] bg-[#25D366] hover:bg-[#128C7E] h-12 text-white font-medium flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{t("hero.contactUs")}</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
