"use client";

import { useState, useEffect } from "react";

/**
 * Hook to manage timeline node interactions
 */
export const useTimelineNode = (
  index: number,
  activeIndex: number,
  progress: number
) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = index <= activeIndex;
  const glowIntensity = isActive ? 1 : isHovered ? 0.5 : 0;

  return {
    isActive,
    isHovered,
    setIsHovered,
    glowIntensity,
  };
};

/**
 * Hook to manage timeline progress
 */
export const useTimelineProgress = (
  totalEvents: number,
  scrollRef: React.RefObject<HTMLDivElement | null>
) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cards = container.querySelectorAll("[data-index]");
      let foundIndex = 0;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const offset = rect.top + rect.height * 0.4; // margen permisivo
        if (offset < window.innerHeight) {
          const index = parseInt(card.getAttribute("data-index") || "0", 10);
          foundIndex = index;
        }
      });

      setActiveIndex(foundIndex);

      // Calcular progreso general de la barra
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - containerRect.top) /
            (windowHeight + containerRect.height)
        )
      );

      setProgress(scrollProgress);
      setProgressHeight(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalEvents, scrollRef]);

  return {
    activeIndex,
    progress,
    progressHeight: `${progressHeight}%`,
  };
};
