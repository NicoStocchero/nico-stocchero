import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  MousePointerClick,
  Code2,
  Handshake,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineTagProps {
  text: string;
  subtext: string;
  side: "left" | "right" | "center";
  index: number;
  isVisible: boolean;
  className?: string;
}

const getIconForIndex = (index: number) => {
  const icons = [Target, MousePointerClick, Code2, Handshake];
  return icons[index] || Lightbulb;
};

export function TimelineTag({
  text,
  subtext,
  side = "right",
  index,
  isVisible,
  className,
}: TimelineTagProps) {
  if (!isVisible) return null;

  const IconComponent = getIconForIndex(index);
  const isCenter = side === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      whileHover={{
        boxShadow: "0 0 12px rgba(208,195,165,0.4)",
        filter: "drop-shadow(0 0 4px rgba(208,195,165,0.2))",
      }}
      className={cn(
        isCenter
          ? "relative w-full text-center flex flex-col items-center justify-center gap-3 px-4 py-2 rounded-xl bg-brand-dark/90 border border-brand-secondary text-brand-secondary backdrop-blur-md font-semibold pointer-events-auto shadow-sm"
          : `absolute top-1/2 z-30 ${
              side === "left"
                ? "right-[calc(50%+36px)]"
                : "left-[calc(50%+36px)]"
            } -translate-y-1/2
            bg-brand-dark/90 border border-brand-secondary text-brand-secondary
            rounded-xl px-4 py-2 backdrop-blur-md
            flex items-center gap-3
            font-semibold select-none
            pointer-events-none
            min-w-[200px] shadow-sm`,
        className
      )}
    >
      <IconComponent className="w-5 h-5 shrink-0 text-brand-secondary/80" />
      <div>
        <div className="text-sm">{text}</div>
        {subtext && (
          <div className="text-xs text-brand-secondary/60 mt-1">{subtext}</div>
        )}
      </div>
    </motion.div>
  );
}
