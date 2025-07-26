import { useRef, useEffect, useState, useCallback } from "react";
import type { LogoSliderProps } from "../types";

interface UseLogoSliderProps {
  autoPlay: boolean;
  pauseOnHover: boolean;
  onItemClick?: LogoSliderProps["onItemClick"];
}

interface UseLogoSliderReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  isPlaying: boolean;
  dimensions: { width: number; height: number };
  togglePlayState: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useLogoSlider = ({
  autoPlay,
  pauseOnHover,
  onItemClick,
}: UseLogoSliderProps): UseLogoSliderReturn => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const togglePlayState = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPlaying(true);
    }
  }, [pauseOnHover]);

  return {
    containerRef,
    isPlaying,
    dimensions,
    togglePlayState,
    handleMouseEnter,
    handleMouseLeave,
  };
};
