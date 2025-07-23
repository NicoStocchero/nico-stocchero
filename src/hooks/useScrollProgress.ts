"use client";

import { useState, useEffect, useCallback } from "react";

interface UseScrollProgressProps {
  targetRef: React.RefObject<HTMLElement>;
  threshold?: number;
  offset?: [string, string];
}

interface UseScrollProgressReturn {
  progress: number;
  isInView: boolean;
  activeIndex: number;
  progressHeight: string;
}

/**
 * Hook for tracking scroll progress and intersection
 */
export const useScrollProgress = ({
  targetRef,
  threshold = 0.2,
  offset = ["start start", "end end"],
}: UseScrollProgressProps): UseScrollProgressReturn => {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!targetRef.current) return;

    const element = targetRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    // Calculate progress based on scroll position
    const scrollProgress = Math.max(
      0,
      Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
    );

    setProgress(scrollProgress);
  }, [targetRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          handleScroll();
        }
      },
      { threshold, rootMargin: offset.join(" ") }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef, threshold, offset, handleScroll]);

  const progressHeight = `${progress * 100}%`;

  return {
    progress,
    isInView,
    activeIndex,
    progressHeight,
  };
};
