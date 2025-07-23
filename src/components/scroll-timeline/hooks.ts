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

      const element = scrollRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate progress based on scroll position
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        )
      );

      setProgress(scrollProgress);
      setProgressHeight(scrollProgress * 100);

      // Calculate active index
      const newActiveIndex = Math.floor(scrollProgress * totalEvents);
      setActiveIndex(Math.min(newActiveIndex, totalEvents - 1));
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
