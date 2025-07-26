import { useAnimationControls } from "framer-motion";
import type { ShinyTextProps } from "../types";

export const useShinyText = ({
  disabled = false,
  speed = 3,
  delay = 0,
  repeat = "infinite",
  pauseOnHover = false,
}: Pick<
  ShinyTextProps,
  "disabled" | "speed" | "delay" | "repeat" | "pauseOnHover"
>) => {
  const controls = useAnimationControls();

  const startAnimation = () => {
    if (!disabled) {
      controls.start("animate");
    }
  };

  const stopAnimation = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const pauseAnimation = () => {
    if (pauseOnHover) {
      controls.set("initial");
    }
  };

  return {
    controls,
    startAnimation,
    stopAnimation,
    pauseAnimation,
  };
};
