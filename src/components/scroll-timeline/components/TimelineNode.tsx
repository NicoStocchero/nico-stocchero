"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTimelineNode } from "../hooks";
import { AnimationService } from "@/services";
import { TIMELINE_LAYOUT } from "../lib/constants";

interface TimelineNodeProps {
  index: number;
  activeIndex: number;
  progress: number;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  index,
  activeIndex,
  progress,
}) => {
  const { isActive, setIsHovered, glowIntensity } = useTimelineNode(
    index,
    activeIndex,
    progress
  );

  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center",
        TIMELINE_LAYOUT.NODE_SIZE,
        "top-0 -translate-y-full", // 📱 Mobile: posicionar por encima
        "lg:top-1/2 lg:translate-y-[-50%]" // 🖥️ Desktop: centro vertical
      )}
    >
      {/* Nodo principal */}
      <motion.div
        className={cn(
          TIMELINE_LAYOUT.NODE_SIZE,
          "rounded-full border-2 border-brand-dark relative",
          isActive
            ? "bg-gradient-to-br from-brand-primary to-brand-secondary"
            : "bg-brand-secondary/30"
        )}
        animate={
          isActive
            ? {
                scale: AnimationService.getNodeScaleAnimation(),
                boxShadow: [
                  "0 0 0px rgba(60,73,102,0)",
                  "0 0 15px rgba(60,73,102,0.6)",
                  "0 0 0px rgba(60,73,102,0)",
                ],
              }
            : {}
        }
        transition={{
          duration: AnimationService.getNodeGlowDuration(),
          repeat: Infinity,
          repeatDelay: AnimationService.getNodeGlowRepeatDelay(),
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.4 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      />

      {/* Efecto de glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: AnimationService.generateRadialGradient(
            "rgba(208,195,165,",
            glowIntensity * 0.3
          ),
          boxShadow: isActive
            ? AnimationService.generateGlowBoxShadow(
                "rgba(208,195,165,",
                glowIntensity * 0.5
              )
            : "none",
        }}
        animate={
          isActive
            ? {
                scale: AnimationService.getGlowScaleAnimation(),
                opacity: AnimationService.getGlowOpacityAnimation(),
              }
            : {}
        }
        transition={{
          duration: AnimationService.getProgressGlowDuration(),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
