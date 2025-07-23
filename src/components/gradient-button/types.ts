export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  gradientColors?: string[];
  animationSpeed?: number;
  glowEffect?: boolean;
  glowSize?: number;
  variant?: "default" | "outline" | "ghost";
  gradientType?: "brand" | "warm" | "cool";
}
