import { useState, useEffect } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useTimelineProgress = (
  eventsLength: number,
  scrollRef: React.RefObject<HTMLDivElement | null>
) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setProgress(v);
      const newIndex = Math.floor(v * eventsLength);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < eventsLength
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, eventsLength, activeIndex]);

  return {
    activeIndex,
    progress,
    isInView,
    smoothProgress,
    progressHeight,
    setActiveIndex,
    setProgress,
    setIsInView,
  };
};
