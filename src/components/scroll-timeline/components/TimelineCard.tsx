import React from "react";
import { motion } from "framer-motion";
import { TimelineEvent } from "../types";
import { TimelineTag } from ".";
import { timelineTips } from "../lib/texts";
import { IconService, AnimationService } from "@/services";
import { cn } from "@/lib/utils";
import { TIMELINE_LAYOUT } from "../lib/constants";

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isTagOpen?: boolean;
  onToggle?: () => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  index,
  isTagOpen = false,
  onToggle,
}) => {
  const IconComponent = IconService.getTimelineIcon(event.icon);
  const tip = timelineTips[index] || {
    text: "UX Tip",
    subtext: "Mejorá la experiencia del usuario.",
  };

  return (
    <div
      className={cn(
        "w-full flex lg:block justify-center",
        index % 2 === 0 ? "lg:mr-[calc(50%+20px)]" : "lg:ml-[calc(50%+40px)]"
      )}
      onClick={() => {
        if (
          typeof window !== "undefined" &&
          window.innerWidth < 1024 &&
          onToggle
        ) {
          onToggle();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: AnimationService.getCardDuration(),
          delay: AnimationService.getCardDelay(index),
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.03, y: -3 }}
        className={cn(
          "relative z-10 w-full flex-shrink-0 bg-[#0D1526]/50 backdrop-blur-sm border border-[#3C4966] rounded-2xl transition-all duration-300 ease-out hover:border-opacity-100 hover:bg-[#0D1526]/70 hover:scale-[1.02]",
          TIMELINE_LAYOUT.CARD_MAX_WIDTH,
          TIMELINE_LAYOUT.CARD_PADDING
        )}
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white/5 border-white/10 text-brand-secondary mb-4">
          {IconComponent && (
            <IconComponent size={14} className="text-brand-secondary" />
          )}
          {event.badgeLabel}
        </div>

        <h3 className="text-2xl font-bold text-accessible-primary mb-2">
          {event.title}
        </h3>

        {event.subtitle && (
          <p className="text-lg text-accessible-secondary font-medium mb-3">
            {event.subtitle}
          </p>
        )}

        {event.description && (
          <p className="text-sm text-accessible-tertiary leading-relaxed">
            {event.description}
          </p>
        )}

        {/* Solo en mobile */}
        {isTagOpen && (
          <div className="block lg:hidden mt-4">
            <TimelineTag
              text={tip.text}
              subtext={tip.subtext}
              index={index}
              side="center"
              isVisible
              className="relative mx-auto max-w-sm"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};
