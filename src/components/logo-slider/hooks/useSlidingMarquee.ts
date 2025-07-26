import { useRef, useEffect, useState } from "react";
import type { LogoSliderItem } from "../types";

interface UseSlidingMarqueeProps {
  autoPlay?: boolean;
  pauseOnHover?: boolean;
  onItemClick?: (item: LogoSliderItem) => void;
}

export function useSlidingMarquee({
  autoPlay = true,
  pauseOnHover = true,
  onItemClick,
}: UseSlidingMarqueeProps) {
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

  const handleItemClick = (item: LogoSliderItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    onItemClick?.(item);
  };

  const togglePlayState = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPlaying(true);
    }
  };

  return {
    containerRef,
    isPlaying,
    dimensions,
    togglePlayState,
    handleItemClick,
    handleMouseEnter,
    handleMouseLeave,
  };
}
