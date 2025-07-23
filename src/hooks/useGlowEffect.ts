"use client";

import { useMemo } from "react";

interface GlowEffectProps {
  isHovered: boolean;
  glowColor: string;
  mousePosition: { x: number; y: number };
  intensity?: number;
  radius?: number;
  opacity?: number;
}

interface UseGlowEffectReturn {
  glowStyle: React.CSSProperties;
  glowBoxShadow: string;
}

/**
 * Hook for generating glow effect styles
 */
export const useGlowEffect = ({
  isHovered,
  glowColor,
  mousePosition,
  intensity = 1,
  radius = 60,
  opacity = 0.2,
}: GlowEffectProps): UseGlowEffectReturn => {
  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${mousePosition.x}px ${
        mousePosition.y
      }px, ${glowColor}${Math.floor(
        opacity * 100
      )} 0%, transparent ${radius}%)`,
      boxShadow: isHovered
        ? `0 0 ${20 * intensity}px ${glowColor}${Math.floor(
            opacity * 50
          )}, 0 0 ${40 * intensity}px ${glowColor}${Math.floor(opacity * 30)}`
        : "none",
      opacity: isHovered ? intensity : 0,
      transform: isHovered ? "scale(1.02)" : "scale(1)",
    }),
    [isHovered, glowColor, mousePosition, intensity, radius, opacity]
  );

  const glowBoxShadow = useMemo(
    () =>
      isHovered
        ? `0 0 ${15 * intensity}px ${glowColor}${Math.floor(opacity * 25)}`
        : "none",
    [isHovered, glowColor, intensity, opacity]
  );

  return {
    glowStyle,
    glowBoxShadow,
  };
};
