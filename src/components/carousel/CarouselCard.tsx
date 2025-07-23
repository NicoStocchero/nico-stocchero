"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useGlowEffect } from "@/hooks/useGlowEffect";
import { Carousel3DItem } from "./types";

// Glow Effect refinado
const GlowEffect: React.FC<{
  isHovered: boolean;
  glowColor: string;
  mousePosition: { x: number; y: number };
}> = ({ isHovered, glowColor, mousePosition }) => {
  const { glowStyle } = useGlowEffect({
    isHovered,
    glowColor,
    mousePosition,
    intensity: 1,
    radius: 60,
    opacity: 0.25,
  });

  return (
    <div
      className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 ease-out"
      style={{
        ...glowStyle,
        opacity: isHovered ? 0.25 : 0,
      }}
    />
  );
};

export const CarouselCard: React.FC<{
  item: Carousel3DItem;
  className?: string;
}> = ({ item, className }) => {
  const {
    mousePosition,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    ref: cardRef,
  } = useMousePosition();

  const glowColor = "#3C4966";

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative overflow-hidden border rounded-3xl border-[#3C4966] bg-[#0D1526]/90",
        "transition-all duration-500 ease-out cursor-pointer",
        "hover:scale-105 hover:z-30 hover:shadow-2xl hover:shadow-[#3C4966]/20",
        "hover:border-[#D0C3A5]",
        "backdrop-blur-sm will-change-transform",
        "h-[500px] flex flex-col my-8",
        "dark:border-[#3C4966] dark:bg-[#0D1526]/90",
        "light:border-[#D0C3A5] light:bg-[#FCFCF7]/90",
        className
      )}
    >
      {/* Glow Effect */}
      <GlowEffect
        isHovered={isHovered}
        glowColor={glowColor}
        mousePosition={mousePosition}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header visual con animación sutil */}
        <div
          className="relative p-6 flex items-center justify-center h-48 overflow-hidden"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="relative z-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">
              {item.brand.toUpperCase()}
            </h3>
            <div className="w-12 h-1 bg-white mx-auto mb-2" />
            <p className="text-sm">{item.title}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-1 text-accessible-primary">
            {item.title}
          </h3>
          <p className="text-accessible-secondary text-sm font-medium mb-2">
            {item.brand}
          </p>
          <p className="text-accessible-tertiary text-sm flex-grow leading-relaxed">
            <strong className="text-accessible-primary">
              {item.highlight}
            </strong>{" "}
            {item.description}
          </p>

          {/* Tags */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs border bg-[#3C4966]/50 dark:bg-[#3C4966]/50 light:bg-[#D0C3A5]/50 text-[#FCFCF7] dark:text-[#FCFCF7] light:text-[#0D1526] border-[#3C4966] dark:border-[#3C4966] light:border-[#D0C3A5] transition-all duration-300 hover:bg-[#3C4966]/80 dark:hover:bg-[#3C4966]/80 light:hover:bg-[#D0C3A5]/80 hover:border-[#D0C3A5] dark:hover:border-[#D0C3A5] light:hover:border-[#3C4966] hover:text-[#FCFCF7] dark:hover:text-[#FCFCF7] light:hover:text-[#0D1526] hover:scale-110 hover:shadow-md cursor-pointer font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Mejorado */}
            <div className="relative mt-2">
              <Link
                href={item.link}
                className="group inline-flex items-center gap-1 font-medium text-accessible-primary hover:text-brand-secondary transition-all duration-300"
              >
                {/* Texto + subrayado */}
                <span className="relative inline-block">
                  <span className="text-sm font-semibold transition-colors group-hover:text-brand-secondary">
                    Ver más
                  </span>

                  {/* Línea subrayado con tu color secondary */}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-brand-secondary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_4px_rgba(208,195,165,0.6)]" />
                </span>

                {/* Icono → */}
                <ArrowRight className="ml-1 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105" />

                {/* Badge ✓ */}
                <span className="ml-1 w-4 h-4 bg-emerald-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-[0_0_4px_rgba(0,255,150,0.5)] scale-90 group-hover:scale-100 transition-all duration-300">
                  ✓
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
