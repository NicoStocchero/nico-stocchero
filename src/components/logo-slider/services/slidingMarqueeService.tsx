import React from "react";
import type { LogoSliderProps } from "../types";

/**
 * Generate CSS styles for sliding marquee animations
 */
export const generateSlidingMarqueeStyles = (
  props: LogoSliderProps
): string => {
  const {
    speed = 60,
    items,
    scale = 1,
    blurIntensity = 1,
    animationSteps = 8,
    height = "100px",
    gap = "0.5rem",
  } = props;

  return `
    .sliding-marquee-container {
      --speed: ${speed};
      --count: ${items.length};
      --scale: ${scale};
      --blur: ${blurIntensity};
      --blurs: ${animationSteps};
    }

    .sliding-marquee-resizable {
      overflow: clip;
      container-type: size;
      scale: var(--scale);
      width: 100%;
      height: ${height};
      min-height: 100px;
      min-width: 300px;
    }

    /* Tablet breakpoint */
    @media (min-width: 600px) {
      .sliding-marquee-resizable {
        min-width: 500px;
      }
    }

    /* PC breakpoint */
    @media (min-width: 1024px) {
      .sliding-marquee-resizable {
        min-width: 800px;
      }
    }

    .sliding-marquee-resizable[data-spill="true"] .sliding-marquee-inner::after {
      content: "";
      position: fixed;
      top: 50%;
      left: 50%;
      width: calc(var(--scale) * 10000vw);
      height: calc(var(--scale) * 10000vh);
      pointer-events: none;
      translate: -50% -50%;
      mask: linear-gradient(white, white) 50% 50% / 100% 100% no-repeat,
          linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat;
      mask-composite: exclude;
    }

    .sliding-marquee-inner {
      height: 100%;
      width: 100%;
      position: relative;
      mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
      display: grid;
      min-height: 100px;
      min-width: 300px;
      pointer-events: none;
    }

    .sliding-marquee-blur {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 25%;
      z-index: 2;
      pointer-events: none;
    }

    .sliding-marquee-blur--right {
      right: 0;
    }

    .sliding-marquee-blur--left {
      left: 0;
      rotate: 180deg;
    }

    .sliding-marquee-blur div {
      position: absolute;
      inset: 0;
      z-index: var(--index);
      mask: linear-gradient(90deg,
          transparent calc(var(--index) * calc((100 / var(--blurs)) * 1%)),
          black calc((var(--index) + 1) * calc((100 / var(--blurs)) * 1%)),
          black calc((var(--index) + 2) * calc((100 / var(--blurs)) * 1%)),
          transparent calc((var(--index) + 3) * calc((100 / var(--blurs)) * 1%)));
      backdrop-filter: blur(calc((var(--index, 0) * var(--blur, 0)) * 1px));
    }

    .sliding-marquee-list {
      display: flex;
      gap: ${gap};
      padding: 0;
      margin: 0;
      list-style-type: none;
      height: 100%;
      width: fit-content;
      align-items: center;
      pointer-events: auto;
    }

    .sliding-marquee-item {
      height: 80%;
      aspect-ratio: 16 / 9;
      font-size: clamp(1rem, 3vw + 0.5rem, 4rem);
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: transform 0.2s ease;
      pointer-events: auto;
    }

    .sliding-marquee-item:hover {
      transform: scale(1.05);
    }

    .sliding-marquee-item svg {
      height: 65%;
    }

    [data-play-state="running"] .sliding-marquee-list,
    [data-play-state="running"] .sliding-marquee-item {
      animation-play-state: running !important;
    }

    [data-play-state="paused"] .sliding-marquee-list,
    [data-play-state="paused"] .sliding-marquee-item {
      animation-play-state: paused !important;
    }

    @media (prefers-reduced-motion: no-preference) {
      [data-translate="items"] .sliding-marquee-list {
        gap: 0;
      }

      [data-translate="items"][data-direction="horizontal"] .sliding-marquee-inner {
        padding-inline: 0;
      }

      [data-translate="items"] .sliding-marquee-item {
        --duration: calc(var(--speed) * 1s);
        --delay: calc((var(--duration) / var(--count)) * (var(--index, 0) * -1));
        animation: slide var(--duration) var(--delay) infinite linear paused;
        translate: var(--origin-x) var(--origin-y);
      }

      [data-translate="items"][data-direction="horizontal"] .sliding-marquee-item {
        --origin-x: calc(((var(--count) - var(--index)) + var(--inset, 0)) * 100%);
        --origin-y: 0;
        --destination-x: calc(calc((var(--index) + 1 + var(--outset, 0)) * -100%));
        --destination-y: 0;
      }

      @keyframes slide {
        100% {
          translate: var(--destination-x) var(--destination-y);
        }
      }
    }
  `;
};

/**
 * Generate blur div elements for animation
 */
export const generateBlurDivs = (
  animationSteps: number
): React.ReactElement[] => {
  return Array.from({ length: animationSteps }, (_, index) => (
    <div key={index} style={{ "--index": index } as React.CSSProperties} />
  ));
};
