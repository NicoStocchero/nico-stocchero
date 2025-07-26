import type { ShinyTextProps } from "../types";

// Constants
export const SIZE_CLASSES = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
} as const;

export const WEIGHT_CLASSES = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
} as const;

export const DIRECTION_CONFIG = {
  "left-to-right": {
    backgroundPosition: ["100% 0%", "-100% 0%"],
    backgroundSize: "200% 100%",
  },
  "right-to-left": {
    backgroundPosition: ["-100% 0%", "100% 0%"],
    backgroundSize: "200% 100%",
  },
  "top-to-bottom": {
    backgroundPosition: ["0% 100%", "0% -100%"],
    backgroundSize: "100% 200%",
  },
  "bottom-to-top": {
    backgroundPosition: ["0% -100%", "0% 100%"],
    backgroundSize: "100% 200%",
  },
} as const;

// Utility functions
export const getGradientDirection = (
  direction: ShinyTextProps["direction"]
) => {
  switch (direction) {
    case "left-to-right":
    case "right-to-left":
      return "90deg";
    case "top-to-bottom":
      return "180deg";
    case "bottom-to-top":
      return "0deg";
    default:
      return "90deg";
  }
};

export const createGradient = (
  baseColor: string,
  shineColor: string,
  direction: ShinyTextProps["direction"],
  gradientType: ShinyTextProps["gradientType"],
  shineWidth: number,
  intensity: number
) => {
  const gradientDirection = getGradientDirection(direction);
  const transparentStartPos = Math.max(0, 50 - shineWidth / 2);
  const transparentEndPos = Math.min(100, 50 + shineWidth / 2);

  const shineStart = `${shineColor} ${transparentStartPos}%`;
  const shineEnd = `${shineColor} ${transparentEndPos}%`;

  if (gradientType === "radial") {
    return `radial-gradient(ellipse at center, ${shineColor} ${
      intensity * 100
    }%, transparent)`;
  }

  return `linear-gradient(${gradientDirection}, ${baseColor}, transparent ${
    transparentStartPos - 5
  }%, ${shineStart}, ${shineEnd}, transparent ${
    transparentEndPos + 5
  }%, ${baseColor})`;
};

export const createAnimationVariants = (
  direction: NonNullable<ShinyTextProps["direction"]>,
  disabled: boolean,
  speed: number,
  delay: number,
  repeat: number | "infinite"
) => {
  const config = DIRECTION_CONFIG[direction];

  return {
    initial: {
      backgroundPosition: config.backgroundPosition[0],
    },
    animate: disabled
      ? {
          backgroundPosition: config.backgroundPosition[0],
          transition: {
            duration: 0,
            delay: 0,
            repeat: 0,
            ease: "linear" as const,
          },
        }
      : {
          backgroundPosition: config.backgroundPosition[1],
          transition: {
            duration: speed,
            delay,
            repeat: typeof repeat === "number" ? repeat : Infinity,
            ease: "linear" as const,
          },
        },
    hover: {},
  };
};
