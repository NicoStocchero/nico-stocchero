import { LucideIcon } from "lucide-react";

export interface Feature {
  text: string;
  icon?: string | LucideIcon;
}

export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  glowRadius?: number;
  glowOpacity?: number;
  animationDuration?: number;
  gap?: string;
  maxWidth?: string;
  padding?: string;
  responsive?: boolean;
}
