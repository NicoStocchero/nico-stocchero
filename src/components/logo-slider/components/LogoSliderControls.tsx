import React from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoSliderControlsProps {
  isPlaying: boolean;
  onToggle: () => void;
  showControls?: boolean;
  className?: string;
}

export function LogoSliderControls({
  isPlaying,
  onToggle,
  showControls = true,
  className,
}: LogoSliderControlsProps) {
  if (!showControls) return null;

  return (
    <button
      onClick={onToggle}
      className={cn(
        "absolute top-0 right-0 z-10 px-2 py-1 text-xs bg-white/10 text-foreground",
        "rounded hover:bg-background/20 transition-colors",
        className
      )}
      aria-label={isPlaying ? "Pause animation" : "Play animation"}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
