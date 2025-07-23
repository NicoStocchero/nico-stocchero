import { LucideIcon } from "lucide-react";

// ============================================================================
// ICON SERVICE TYPES
// ============================================================================

export interface IconType {
  name: string;
  component: LucideIcon;
  category: "timeline" | "feature" | "general";
}

export interface IconConfig {
  timeline: Record<string, LucideIcon>;
  feature: Record<string, LucideIcon>;
  general: Record<string, LucideIcon>;
}

// ============================================================================
// ANIMATION SERVICE TYPES
// ============================================================================

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
  repeat?: number;
  repeatDelay?: number;
}

export interface GlowConfig {
  color: string;
  intensity: number;
  blur: number;
  spread: number;
}

export interface ScaleConfig {
  from: number;
  to: number;
  duration: number;
}

// ============================================================================
// SCROLL SERVICE TYPES
// ============================================================================

export interface ScrollConfig {
  threshold: number;
  rootMargin: string;
  root?: Element | null;
}

export interface ViewportConfig {
  width: number;
  height: number;
  scrollY: number;
  scrollX: number;
}

export interface ElementPosition {
  top: number;
  left: number;
  width: number;
  height: number;
  rect: DOMRect;
}

// ============================================================================
// RESPONSIVE SERVICE TYPES
// ============================================================================

export interface ResponsiveConfig {
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
    wide: number;
  };
  orientations: {
    portrait: string;
    landscape: string;
  };
}

export interface ResponsiveClasses {
  container: string;
  card: string;
  node: string;
  text: string;
}

export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";
export type Orientation = "portrait" | "landscape";
