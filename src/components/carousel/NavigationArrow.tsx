"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useGlowEffect } from "@/hooks/useGlowEffect";

export const NavigationArrow: React.FC<{
  direction: "left" | "right";
  position: string;
  onClick: () => void;
}> = ({ direction, position, onClick }) => {
  const {
    mousePosition,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    ref: buttonRef,
  } = useMousePosition<HTMLButtonElement>();

  const glowColor = "#3C4966";
  const { glowStyle } = useGlowEffect({
    isHovered,
    glowColor,
    mousePosition,
    intensity: 1.5,
    radius: 60,
    opacity: 0.3,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      ref={buttonRef}
      className={`absolute ${position} top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-accessible-primary hover:bg-brand-primary/80 z-30 shadow-lg transition-all duration-300 hover:scale-110 border border-brand-secondary/30 hover:border-brand-secondary/60`}
      onClick={handleClick}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-500 opacity-0"
        style={glowStyle}
      />

      <Icon
        className={`w-6 h-6 relative z-10 transition-all duration-300 group-hover:scale-110 ${
          direction === "left" ? "-translate-x-0.45" : "translate-x-0.45"
        }`}
      />
    </button>
  );
};
