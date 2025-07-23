"use client";
import React from "react";
import { AnimationService } from "@/services";
import { GradientButtonProps } from "./types";
import { cn } from "@/lib/utils";

// Size classes mapping
const sizeClasses = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-base px-6 py-2 rounded-full",
  lg: "text-lg px-8 py-3 rounded-full",
  xl: "text-2xl px-10 py-4 rounded-full",
};

// Border styles based on variant
const borderStyles = {
  default: "border-transparent",
  outline: "border-current",
  ghost: "border-transparent bg-opacity-10",
};

export function GradientButton({
  children,
  size = "md",
  className = "",
  gradientColors = [
    "#0D1526", // Azul muy oscuro
    "#3C4966", // Azul medio
    "#D0C3A5", // Beige claro
    "#FCFCF7", // Crema muy claro
  ],
  animationSpeed = 2,
  glowEffect = true,
  glowSize = 4,
  variant = "default",
  gradientType = "brand", // Nuevo prop para diferentes gradientes
  ...props
}: GradientButtonProps) {
  // Generate gradient string based on type
  const getGradientColors = () => {
    switch (gradientType) {
      case "warm":
        return [
          "#0D1526",
          "#3C4966",
          "#D0C3A5",
          "#FCFCF7",
          "#D0C3A5",
          "#3C4966",
        ];
      case "cool":
        return [
          "#FCFCF7",
          "#D0C3A5",
          "#3C4966",
          "#0D1526",
          "#3C4966",
          "#D0C3A5",
        ];
      default: // brand
        return gradientColors;
    }
  };

  const gradientString = getGradientColors().join(", ");

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .btn-gradient::before {
            content: "";
            background: linear-gradient(90deg, ${gradientString});
            height: 30%;
            width: 80%;
            position: absolute;
            bottom: -1%;
            z-index: 0;
            background-size: 200%;
            animation: gradient-animate ${animationSpeed}s infinite linear;
            filter: blur(calc(${glowSize} * 0.2rem));
          }

          .btn-gradient:hover,
          .btn-gradient:hover::before {
            animation: gradient-animate ${animationSpeed / 4}s infinite linear;
          }

          @keyframes gradient-animate {
            0% {
              background-position: 0;
            }
            100% {
              background-position: 200%;
            }
          }

          .btn-gradient {
            animation: gradient-animate ${animationSpeed}s infinite linear;
          }
        `,
        }}
      />

      <button
        className={cn(
          "relative overflow-hidden rounded-full font-semibold transition-all duration-300",
          "bg-gradient-to-r from-brand-primary to-brand-secondary",
          "text-accessible-primary hover:text-accessible-primary",
          "border-2 border-transparent",
          "hover:scale-105 hover:shadow-lg",
          "focus:outline-none focus:ring-2 focus:ring-brand-primary/50",
          "active:scale-95",
          sizeClasses[size],
          borderStyles[variant],
          glowEffect && "btn-gradient",
          className
        )}
        style={{
          boxShadow: glowEffect
            ? AnimationService.generateGlowBoxShadow("#3C4966", 0.3)
            : "none",
        }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    </>
  );
}
