"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { newsletterTranslations } from "@/config/newsletters";

export function NewsletterSection() {
  const { language } = useLanguage();
  const t =
    newsletterTranslations[language as keyof typeof newsletterTranslations];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple de email
    if (/^\S+@\S+\.\S+$/.test(email)) {
      // Aquí iría la lógica para enviar el email a tu servicio
      console.log("Email submitted:", email);
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-16 bg-[#8B3A3A]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-[#C62828] rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">{t.subtitle}</p>

          {status === "success" ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg max-w-md mx-auto flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              {t.successMessage}
            </div>
          ) : status === "error" ? (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg max-w-md mx-auto flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {t.errorMessage}
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  className="bg-white/95 border-none focus-visible:ring-2 focus-visible:ring-[#C62828] px-4 py-3 h-auto"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#C62828] hover:bg-[#6B2A2A] text-white font-medium px-6 py-3 text-base transition-all hover:scale-[1.02]"
                >
                  {t.button}
                </Button>
              </form>
              <p className="text-sm text-white/70 mt-4">{t.privacy}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
