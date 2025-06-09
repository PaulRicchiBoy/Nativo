"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { advantagesContent } from "@/config/advantagesContent";
import { CalendarCheck, Globe2, Wallet, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const AdvantagesSection = () => {
  const { language } = useLanguage();
  const content = advantagesContent[language as keyof typeof advantagesContent];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(127, 29, 29, 0.2)",
    },
  };

  // Advantage items configuration
  const advantages = [
    {
      text: content.advantage1,
      icon: <CalendarCheck className="w-12 h-12  text-black" />,
      bgColor: "bg-red-950/10",
      borderColor: "border-red-900/20",
    },
    {
      text: content.advantage2,
      icon: <Globe2 className="w-12 h-12  text-black" />,
      bgColor: "bg-red-950/10",
      borderColor: "border-red-900/20",
    },
    {
      text: content.advantage3,
      icon: <Wallet className="w-12 h-12  text-black" />,
      bgColor: "bg-red-950/10",
      borderColor: "border-red-900/20",
    },
    {
      text: content.advantage4,
      icon: <CreditCard className="w-12 h-12  text-black" />,
      bgColor: "bg-red-950/10",
      borderColor: "border-red-900/20",
    },
  ];

  return (
    <motion.section
      id="advantages"
      className="py-16 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-black"
          variants={itemVariants}
        >
          {content.title}
        </motion.h2>

        <motion.p
          className="text-center mb-8 max-w-2xl mx-auto  text-black"
          variants={itemVariants}
        >
          {content.description1}
        </motion.p>

        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto   text-black"
          variants={itemVariants}
        >
          {content.description2}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-8 rounded-xl ${advantage.bgColor} border ${advantage.borderColor} transition-all`}
              variants={itemVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="mb-4 p-3 rounded-full bg-red-900/20 backdrop-blur-sm">
                {advantage.icon}
              </div>
              <p className="whitespace-pre-line text-center font-medium text-black">
                {advantage.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
