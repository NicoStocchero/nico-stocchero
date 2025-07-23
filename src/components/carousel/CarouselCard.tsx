"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useGlowEffect } from "@/hooks/useGlowEffect";
import { Carousel3DItem } from "./types";

// Enhanced Glow Effect Component
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
    opacity: 0.2,
  });

  return (
    <div
      className={cn(
        "absolute inset-0 rounded-3xl transition-all duration-500 ease-out",
        "opacity-0"
      )}
      style={glowStyle}
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
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden border rounded-3xl border-[#3C4966] bg-[#0D1526]/90",
        "transition-all duration-500 ease-out cursor-pointer",
        "hover:border-opacity-100 hover:scale-105 hover:z-30 hover:shadow-2xl",
        "hover:shadow-[#3C4966]/20 hover:border-[#D0C3A5]",
        "backdrop-blur-sm will-change-transform",
        "h-[500px] flex flex-col my-8",
        "dark:border-[#3C4966] dark:bg-[#0D1526]/90",
        "light:border-[#D0C3A5] light:bg-[#FCFCF7]/90",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <GlowEffect
        isHovered={isHovered}
        glowColor={glowColor}
        mousePosition={mousePosition}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Image Header */}
        <div
          className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">
              {item.brand.toUpperCase()}
            </h3>
            <div className="w-12 h-1 bg-white mx-auto mb-2" />
            <p className="text-sm">{item.title}</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-1 text-accessible-primary">
            {item.title}
          </h3>
          <p className="text-accessible-secondary text-sm font-medium mb-2">
            {item.brand}
          </p>
          <p className="text-accessible-tertiary text-sm flex-grow leading-relaxed">
            {item.description}
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs border bg-[#3C4966]/50 dark:bg-[#3C4966]/50 light:bg-[#D0C3A5]/50 text-[#FCFCF7] dark:text-[#FCFCF7] light:text-[#0D1526] border-[#3C4966] dark:border-[#3C4966] light:border-[#D0C3A5] transition-all duration-300 hover:bg-[#3C4966]/80 dark:hover:bg-[#3C4966]/80 light:hover:bg-[#D0C3A5]/80 hover:border-[#D0C3A5] dark:hover:border-[#D0C3A5] light:hover:border-[#3C4966] hover:text-[#FCFCF7] dark:hover:text-[#FCFCF7] light:hover:text-[#0D1526] hover:scale-110 hover:shadow-lg cursor-pointer font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={item.link}
              className="flex items-center transition-all duration-300 relative group text-accessible-secondary hover:text-accessible-primary hover:scale-105"
              onClick={() => {
                if (item.link.startsWith("/")) {
                  window.scrollTo(0, 0);
                }
              }}
            >
              <span className="relative z-10 font-medium">Ver más</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accessible-primary transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
