"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconService } from "@/services";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useGlowEffect } from "@/hooks/useGlowEffect";
import { Feature } from "./types";

export interface GlowingCardProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: string;
  icon?: string | LucideIcon;
  title: string;
  description: string;
  features?: Feature[];
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "#3C4966",
  icon,
  title,
  description,
  features = [],
  ...props
}) => {
  const {
    mousePosition,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    ref: cardRef,
  } = useMousePosition();

  const { glowStyle } = useGlowEffect({
    isHovered,
    glowColor,
    mousePosition,
    intensity: 0.8,
    radius: 80,
    opacity: 0.1,
  });

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative p-6 rounded-xl border border-[#3C4966] bg-[#0D1526]/50 backdrop-blur-sm",
        "transition-all duration-300 ease-out cursor-pointer",
        "hover:border-opacity-100",
        "dark:border-[#3C4966] dark:bg-[#0D1526]/50",
        "light:border-[#D0C3A5] light:bg-[#FCFCF7]/50",
        className
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl transition-all duration-300",
          "opacity-0"
        )}
        style={glowStyle}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div
              className="text-2xl transition-colors duration-300"
              style={{
                color: isHovered ? "#FCFCF7" : glowColor,
              }}
            >
              {typeof icon === "string"
                ? React.createElement(IconService.getFeatureIcon(icon), {
                    size: 24,
                    className: "transition-all duration-300",
                  })
                : React.createElement(icon, {
                    size: 24,
                    className: "transition-all duration-300",
                  })}
            </div>
          )}
          <h3 className="text-xl font-bold text-accessible-primary drop-shadow-sm">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-accessible-secondary text-sm mb-4 leading-relaxed drop-shadow-sm">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-accessible-tertiary drop-shadow-sm"
              >
                {feature.icon ? (
                  <div className="flex-shrink-0">
                    {typeof feature.icon === "string"
                      ? React.createElement(
                          IconService.getFeatureIcon(feature.icon),
                          {
                            size: 16,
                            className:
                              "transition-all duration-300 text-accessible-secondary",
                          }
                        )
                      : React.createElement(feature.icon, {
                          size: 16,
                          className:
                            "transition-all duration-300 text-accessible-secondary",
                        })}
                  </div>
                ) : (
                  React.createElement(
                    IconService.getIcon("CheckCircle", "general"),
                    {
                      size: 16,
                      className: "text-accessible-secondary",
                    }
                  )
                )}
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
