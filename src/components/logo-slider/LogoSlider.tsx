"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { LogoSliderProps } from "./types";
import { useSlidingMarquee } from "./hooks";
import {
  generateSlidingMarqueeStyles,
  generateSlidingBlurDivs,
} from "./services";
import {
  LogoSliderControls,
  LogoSliderItem,
  LogoSliderBlur,
  SlidingControls,
} from "./components";

export function LogoSlider({
  items,
  speed = 60,
  pauseOnHover = true,
  enableBlur = true,
  blurIntensity = 1,
  height = "100px",
  width = "100%",
  gap = "0.5rem",
  scale = 1,
  direction = "horizontal",
  autoPlay = true,
  backgroundColor,
  showGridBackground = false,
  className,
  onItemClick,
  enableSpillEffect = false,
  animationSteps = 8,
  showControls = true,
}: LogoSliderProps) {
  const {
    containerRef,
    isPlaying,
    dimensions,
    togglePlayState,
    handleItemClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlidingMarquee({
    autoPlay,
    pauseOnHover,
    onItemClick,
  });

  // Generate CSS styles
  const animationStyles = generateSlidingMarqueeStyles({
    items,
    speed,
    scale,
    blurIntensity,
    animationSteps,
    height,
    gap,
  });

  // Generate blur divs
  const blurDivs = generateSlidingBlurDivs(animationSteps);

  return (
    <>
      <style>{animationStyles}</style>

      <div
        ref={containerRef}
        className={cn("sliding-marquee-container relative", className)}
        style={{
          width,
          background: backgroundColor,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showGridBackground && <div className="" />}

        <div
          className="sliding-marquee-resizable"
          data-translate="items"
          data-direction={direction}
          data-blurring={enableBlur}
          data-play-state={isPlaying ? "running" : "paused"}
          data-spill={enableSpillEffect}
        >
          <div className="sliding-marquee-inner">
            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--left">
                {blurDivs}
              </div>
            )}

            <ul className="sliding-marquee-list text-foreground">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className="sliding-marquee-item text-foreground"
                  style={{ "--index": index } as React.CSSProperties}
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleItemClick(item);
                    }
                  }}
                >
                  {item.content}
                </li>
              ))}
            </ul>

            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--right">
                {blurDivs}
              </div>
            )}
          </div>
        </div>

        <SlidingControls
          isPlaying={isPlaying}
          onToggle={togglePlayState}
          showControls={showControls}
        />
      </div>
    </>
  );
}

export default LogoSlider;
