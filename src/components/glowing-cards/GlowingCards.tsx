import React from "react";
import { cn } from "@/lib/utils";
import { GlowingCard } from "./GlowingCard";
import { GlowingCardsProps } from "./types";

export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  enableGlow = true,
  glowRadius = 30,
  glowOpacity = 0.8,
  animationDuration = 300,
  gap = "2rem",
  maxWidth = "80rem",
  padding = "2rem",
  responsive = true,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        responsive && "px-4 sm:px-6 lg:px-8",
        className
      )}
      style={{
        maxWidth,
        padding,
      }}
    >
      <div
        className="grid gap-6 md:gap-8 lg:gap-10"
        style={{
          gap,
          gridTemplateColumns: responsive
            ? "repeat(auto-fit, minmax(300px, 1fr))"
            : "repeat(auto-fit, minmax(350px, 1fr))",
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // Only pass valid props to GlowingCard components
            const validProps = {
              enableGlow,
              glowRadius,
              glowOpacity,
              animationDuration,
            };

            return React.cloneElement(
              child as React.ReactElement<any>,
              validProps
            );
          }
          return child;
        })}
      </div>
    </div>
  );
};
