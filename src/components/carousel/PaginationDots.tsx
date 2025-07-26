import React from "react";
import { cn } from "@/lib/utils";

export const PaginationDots: React.FC<{
  totalItems: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  isMobile?: boolean;
}> = ({ totalItems, activeIndex, onDotClick, isMobile = false }) => {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 flex justify-center items-center space-x-3 z-30",
        isMobile ? "bottom-6" : "bottom-6"
      )}
    >
      {Array.from({ length: totalItems }, (_, idx) => (
        <button
          key={idx}
          className={cn(
            "rounded-full transition-all duration-300",
            activeIndex === idx
              ? "w-5 h-2 bg-white"
              : "w-2 h-2 bg-white/50 hover:bg-white/70"
          )}
          onClick={() => onDotClick(idx)}
          aria-label={`Go to item ${idx + 1}`}
        />
      ))}
    </div>
  );
};
