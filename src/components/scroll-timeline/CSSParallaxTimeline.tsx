"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineEvent } from "./types";
import { TimelineNode, TimelineCard, TimelineTag } from "./components";
import { timelineTips } from "./lib/texts";
import { useTimelineProgress } from "./hooks";
import { useResponsive } from "@/hooks/useResponsive";
import { AnimationService } from "@/services";
import { TIMELINE_LAYOUT } from "./lib/constants";

interface CSSParallaxTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CSSParallaxTimeline: React.FC<CSSParallaxTimelineProps> = ({
  events,
  title = "Mi Journey",
  subtitle = "Mi trayectoria profesional",
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, progress, progressHeight } = useTimelineProgress(
    events.length,
    scrollRef
  );
  const { isDesktop } = useResponsive();
  const [openTagIndex, setOpenTagIndex] = useState<number | null>(null);

  return (
    <div
      ref={scrollRef}
      className={cn("relative min-h-screen w-full", className)}
    >
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accessible-primary">
          {title}
        </h2>
        <p className="text-lg text-accessible-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-36">
        {/* Static vertical line */}
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 h-full bg-brand-primary/20",
            TIMELINE_LAYOUT.LINE_WIDTH
          )}
        />

        {/* Animated progress line */}
        <motion.div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full",
            TIMELINE_LAYOUT.LINE_WIDTH
          )}
          style={{ height: progressHeight }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(208,195,165,0)",
              "0 0 8px rgba(208,195,165,0.4)",
              "0 0 0px rgba(208,195,165,0)",
            ],
          }}
          transition={{
            duration: AnimationService.getProgressGlowDuration(),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Soft blur glow */}
        <motion.div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 rounded-full",
            TIMELINE_LAYOUT.LINE_WIDTH
          )}
          style={{
            background: `linear-gradient(to bottom, rgba(208,195,165,0.4) 0%, rgba(208,195,165,0.2) 50%, transparent 100%)`,
            height: progressHeight,
            filter: "blur(2px)",
          }}
        />

        {/* Timeline items */}
        <div className="relative flex flex-col gap-y-24 sm:gap-y-20">
          {events.map((event, index) => {
            const tip = timelineTips[index] || {
              text: "UX Tip",
              subtext: "Mejorá la experiencia del usuario.",
            };
            const isOpen = openTagIndex === index;
            const side = index % 2 === 0 ? "right" : "left";

            // 👇 Tolerancia para el tag: visible si está cerca del activeIndex
            const isTagVisible =
              (isDesktop && activeIndex === index) || activeIndex === index + 1;

            return (
              <div
                key={event.id || index}
                data-index={index}
                className="relative flex flex-col items-start scroll-mt-24"
                style={{
                  transform: `translateY(${index * 10}px)`,
                  transition: "transform 0.3s ease-out",
                  minHeight: "120px",
                }}
              >
                <TimelineNode
                  index={index}
                  activeIndex={activeIndex}
                  progress={progress}
                />

                <TimelineCard
                  event={event}
                  index={index}
                  isTagOpen={!isDesktop && isOpen}
                  onToggle={() =>
                    setOpenTagIndex((prev) => (prev === index ? null : index))
                  }
                />

                {isTagVisible && (
                  <TimelineTag
                    text={tip.text}
                    subtext={tip.subtext}
                    index={index}
                    side={side}
                    isVisible
                    className="hidden lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Optional 3D hover effect */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .parallax-container {
            perspective: 1000px;
            perspective-origin: center;
          }

          .parallax-item {
            transform-style: preserve-3d;
            transition: transform 0.3s ease-out;
          }

          .parallax-item:hover {
            transform: translateZ(20px) translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};
