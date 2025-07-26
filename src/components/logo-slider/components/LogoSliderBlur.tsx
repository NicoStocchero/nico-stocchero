import React from "react";
import { generateBlurDivs } from "../services";

interface LogoSliderBlurProps {
  side: "left" | "right";
  animationSteps: number;
  className?: string;
}

export function LogoSliderBlur({
  side,
  animationSteps,
  className,
}: LogoSliderBlurProps) {
  const blurDivs = generateBlurDivs(animationSteps);

  return (
    <div
      className={`sliding-marquee-blur sliding-marquee-blur--${side} ${
        className || ""
      }`}
    >
      {blurDivs}
    </div>
  );
}
