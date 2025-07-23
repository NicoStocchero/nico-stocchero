"use client";

import { useState, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionReturn<T extends HTMLElement> {
  mousePosition: MousePosition;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  handleMouseMove: (e: React.MouseEvent<T>) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  ref: React.RefObject<T | null>;
}

/**
 * Hook for tracking mouse position and hover state
 */
export const useMousePosition = <
  T extends HTMLElement = HTMLDivElement
>(): UseMousePositionReturn<T> => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    mousePosition,
    isHovered,
    setIsHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    ref,
  };
};
