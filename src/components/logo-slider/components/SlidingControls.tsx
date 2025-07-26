import React from "react";
import { Pause, Play } from "lucide-react";

interface SlidingControlsProps {
  isPlaying: boolean;
  onToggle: () => void;
  showControls?: boolean;
}

export function SlidingControls({
  isPlaying,
  onToggle,
  showControls = true,
}: SlidingControlsProps) {
  if (!showControls) return null;

  return (
    <button
      onClick={onToggle}
      className="absolute top-0 right-0 z-10 px-2 py-1 text-xs bg-white/10 text-foreground
      rounded hover:bg-background/20 transition-colors"
      aria-label={isPlaying ? "Pause animation" : "Play animation"}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
