import type { ReactNode } from "react";

export interface LogoSliderItem {
  /** Unique identifier for the item */
  id: string;
  /** Content to display (can be any React node) */
  content: React.ReactNode;
  /** Optional URL to navigate to when clicked */
  href?: string;
}

export interface LogoSliderProps {
  /** Array of logo/content items to display */
  items: LogoSliderItem[];
  /** Animation speed (lower = faster) */
  speed?: number;
  /** Whether to pause animation on hover */
  pauseOnHover?: boolean;
  /** Enable blur effects on edges */
  enableBlur?: boolean;
  /** Blur intensity (0-10) */
  blurIntensity?: number;
  /** Container height */
  height?: string;
  /** Container width */
  width?: string;
  /** Gap between items */
  gap?: string;
  /** Scale factor for the entire component */
  scale?: number;
  /** Direction of animation */
  direction?: "horizontal" | "vertical";
  /** Whether animation is initially playing */
  autoPlay?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Enable grid background pattern */
  showGridBackground?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Callback when item is clicked */
  onItemClick?: (item: LogoSliderItem) => void;
  /** Whether to show spill effect outside container */
  enableSpillEffect?: boolean;
  /** Number of animation steps for smooth transition */
  animationSteps?: number;
  /** Whether to show play/pause controls */
  showControls?: boolean;
}

// Alias for backward compatibility
export type SlidingLogoMarqueeItem = LogoSliderItem;
export type SlidingLogoMarqueeProps = LogoSliderProps;
