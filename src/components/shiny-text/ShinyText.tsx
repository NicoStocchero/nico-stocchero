"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ShinyTextProps } from "./types.ts";
import {
  SIZE_CLASSES,
  WEIGHT_CLASSES,
  DIRECTION_CONFIG,
  createGradient,
  createAnimationVariants,
} from "./services";

export function ShinyText({
  children,
  disabled = false,
  speed = 3,
  className,
  size = "base",
  weight = "medium",
  baseColor,
  shineColor,
  intensity = 1,
  direction = "left-to-right",
  shineWidth = 0,
  delay = 0,
  repeat = "infinite",
  pauseOnHover = false,
  gradientType = "linear",
}: ShinyTextProps) {
  // Default colors based on project theme
  const defaultBaseColor = "#3C4966";
  const defaultShineColor = "#D0C3A5";

  const finalBaseColor = baseColor || defaultBaseColor;
  const finalShineColor = shineColor || defaultShineColor;

  const gradient = createGradient(
    finalBaseColor,
    finalShineColor,
    direction,
    gradientType,
    shineWidth,
    intensity
  );

  const config = DIRECTION_CONFIG[direction as keyof typeof DIRECTION_CONFIG];
  const animationVariants = createAnimationVariants(
    direction as NonNullable<ShinyTextProps["direction"]>,
    disabled,
    speed,
    delay,
    repeat
  );

  // Early return for disabled state
  if (disabled) {
    return (
      <span
        className={cn(
          "inline-block",
          SIZE_CLASSES[size as keyof typeof SIZE_CLASSES],
          WEIGHT_CLASSES[weight as keyof typeof WEIGHT_CLASSES],
          "text-accessible-primary",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent inline-block",
        SIZE_CLASSES[size as keyof typeof SIZE_CLASSES],
        WEIGHT_CLASSES[weight as keyof typeof WEIGHT_CLASSES],
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: config.backgroundSize,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        opacity: intensity,
      }}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      whileHover={pauseOnHover ? "initial" : "hover"}
    >
      {children}
    </motion.span>
  );
}

export default ShinyText;
