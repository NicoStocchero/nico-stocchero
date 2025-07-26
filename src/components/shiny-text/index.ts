// Main component
export { ShinyText, default as ShinyTextDefault } from "./ShinyText";

// Types
export type { ShinyTextProps } from "./types";

// Hooks
export { useShinyText } from "./hooks";

// Services
export {
  SIZE_CLASSES,
  WEIGHT_CLASSES,
  DIRECTION_CONFIG,
  getGradientDirection,
  createGradient,
  createAnimationVariants,
} from "./services";
