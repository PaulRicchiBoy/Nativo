"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.tours"), href: "/tours" },
    { name: t("nav.experiences"), href: "/experiences" },
    { name: t("nav.fulldays"), href: "/fulldays" },
    { name: t("nav.jungle"), href: "/peruvian-jungle" },
    { name: t("nav.traking"), href: "/adventure-trekking" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className="w-10 h-10 bg-[#C62828] rounded-lg flex items-center justify-center 
              transition-all duration-300 group-hover:bg-[#8B3A3A]"
            >
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              NATIVO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white hover:text-[#C62828] transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-[#C62828] hover:bg-[#8B3A3A] text-white font-bold px-6 py-2 rounded-md transition-colors">
              {t("nav.bookNow")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:bg-transparent focus:ring-2 focus:ring-[#C62828]"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-2 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-black hover:text-[#C62828] transition-colors font-medium border-b border-gray-100 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-2 bg-[#C62828] hover:bg-[#8B3A3A] text-white font-bold py-3 rounded-md transition-colors">
                {t("nav.bookNow")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
