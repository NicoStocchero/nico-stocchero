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

  const glowColor = "#6D83F2";
  const { glowStyle } = useGlowEffect({
    isHovered,
    glowColor,
    mousePosition,
    intensity: 1.2,
    radius: 64,
    opacity: 0.25,
  });

  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      ref={buttonRef}
      className={`absolute ${position} top-1/2 -translate-y-1/2
        w-12 h-12 z-30
        bg-brand-dark/70 backdrop-blur-md
        rounded-full border border-white/10
        flex items-center justify-center
        text-accessible-primary
        ring-1 ring-white/10 hover:ring-brand-secondary/40
        shadow-md hover:shadow-brand-glow hover:shadow-xl
        transition-[transform,box-shadow] duration-300 ease-out
        hover:scale-110
        after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-white/5 after:pointer-events-none
      `}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-500 pointer-events-none"
        style={glowStyle}
      />

      <Icon
        className={`w-6 h-6 relative z-10 transition-transform duration-300 ease-out ${
          direction === "left" ? "-translate-x-[1px]" : "translate-x-[1px]"
        }`}
      />
    </button>
  );
};
