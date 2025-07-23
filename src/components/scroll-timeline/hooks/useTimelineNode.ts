import { useState, useEffect } from "react";

export const useTimelineNode = (
  index: number,
  activeIndex: number,
  progress: number
) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determinar si el nodo está activo
  useEffect(() => {
    setIsActive(index <= activeIndex);
  }, [index, activeIndex]);

  // Efectos de animación basados en el progreso
  const scale = isActive ? 1.2 : 1;
  const opacity = isActive ? 1 : 0.6;
  const glowIntensity = isActive ? 1 : 0.3;

  return {
    isActive,
    isHovered,
    setIsHovered,
    scale,
    opacity,
    glowIntensity,
  };
};
