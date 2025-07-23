"use client";

import { useState, useCallback } from "react";

interface UseTouchSwipeProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  minSwipeDistance?: number;
}

interface UseTouchSwipeReturn {
  touchStart: number | null;
  touchEnd: number | null;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
}

/**
 * Hook for detecting touch swipe gestures
 */
export const useTouchSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 50,
}: UseTouchSwipeProps): UseTouchSwipeReturn => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance && onSwipeLeft) {
      onSwipeLeft();
    } else if (distance < -minSwipeDistance && onSwipeRight) {
      onSwipeRight();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, minSwipeDistance, onSwipeLeft, onSwipeRight]);

  return {
    touchStart,
    touchEnd,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
