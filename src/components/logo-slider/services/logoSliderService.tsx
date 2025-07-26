import type { LogoSliderProps, LogoSliderItem } from "../types";
import type { ReactElement } from "react";

/**
 * Default configuration values for LogoSlider
 */
export const DEFAULT_CONFIG = {
  speed: 60,
  pauseOnHover: true,
  enableBlur: true,
  blurIntensity: 1,
  height: "100px",
  width: "100%",
  gap: "0.5rem",
  scale: 1,
  direction: "horizontal" as const,
  autoPlay: true,
  showGridBackground: false,
  enableSpillEffect: false,
  animationSteps: 8,
  showControls: true,
} as const;

/**
 * CSS class names for LogoSlider components
 */
export const CSS_CLASSES = {
  container: "sliding-marquee-container",
  resizable: "sliding-marquee-resizable",
  inner: "sliding-marquee-inner",
  blur: "sliding-marquee-blur",
  blurLeft: "sliding-marquee-blur--left",
  blurRight: "sliding-marquee-blur--right",
  list: "sliding-marquee-list",
  item: "sliding-marquee-item",
} as const;

/**
 * Generate unique blur filter ID
 */
export const generateBlurId = (): string => {
  return `blur-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Handle item click with navigation
 */
export const handleItemClick = (
  item: LogoSliderItem,
  onItemClick?: LogoSliderProps["onItemClick"]
): void => {
  if (item.href) {
    window.open(item.href, "_blank", "noopener,noreferrer");
  }
  onItemClick?.(item);
};

/**
 * Handle keyboard navigation
 */
export const handleKeyDown = (
  e: React.KeyboardEvent,
  item: LogoSliderItem,
  onItemClick?: LogoSliderProps["onItemClick"]
): void => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleItemClick(item, onItemClick);
  }
};

/**
 * Generate blur div elements for animation
 */
export const generateBlurDivs = (animationSteps: number): ReactElement[] => {
  return Array.from({ length: animationSteps }, (_, index) => (
    <div key={index} style={{ "--index": index } as React.CSSProperties} />
  ));
};
