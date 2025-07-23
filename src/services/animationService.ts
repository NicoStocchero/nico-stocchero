/**
 * Service for handling timeline animation logic
 */
export class AnimationService {
  /**
   * Animation constants
   */
  private static readonly ANIMATION_CONFIG = {
    CARD_DELAY: 0.15,
    CARD_DURATION: 0.7,
    NODE_GLOW_DURATION: 1,
    NODE_GLOW_REPEAT_DELAY: 4,
    PROGRESS_GLOW_DURATION: 2,
  } as const;

  /**
   * Calculates animation delay based on index
   */
  static getCardDelay(index: number): number {
    return index * this.ANIMATION_CONFIG.CARD_DELAY;
  }

  /**
   * Gets the standard card animation duration
   */
  static getCardDuration(): number {
    return this.ANIMATION_CONFIG.CARD_DURATION;
  }

  /**
   * Gets the node glow animation duration
   */
  static getNodeGlowDuration(): number {
    return this.ANIMATION_CONFIG.NODE_GLOW_DURATION;
  }

  /**
   * Gets the node glow repeat delay
   */
  static getNodeGlowRepeatDelay(): number {
    return this.ANIMATION_CONFIG.NODE_GLOW_REPEAT_DELAY;
  }

  /**
   * Gets the progress glow animation duration
   */
  static getProgressGlowDuration(): number {
    return this.ANIMATION_CONFIG.PROGRESS_GLOW_DURATION;
  }

  /**
   * Calculates glow intensity based on active state and hover
   */
  static calculateGlowIntensity(isActive: boolean, isHovered: boolean): number {
    if (isActive) return 1;
    if (isHovered) return 0.5;
    return 0;
  }

  /**
   * Generates glow box shadow CSS value
   */
  static generateGlowBoxShadow(color: string, intensity: number): string {
    return `0 0 ${20 * intensity}px ${color}${Math.floor(intensity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  }

  /**
   * Generates radial gradient for glow effect
   */
  static generateRadialGradient(color: string, intensity: number): string {
    return `radial-gradient(circle, ${color}${Math.floor(intensity * 255)
      .toString(16)
      .padStart(2, "0")} 0%, transparent 70%)`;
  }

  /**
   * Calculates scale animation values for nodes
   */
  static getNodeScaleAnimation(): number[] {
    return [1, 1.3, 1];
  }

  /**
   * Calculates opacity animation values for glow effects
   */
  static getGlowOpacityAnimation(): number[] {
    return [0, 0.8, 0];
  }

  /**
   * Calculates scale animation values for glow effects
   */
  static getGlowScaleAnimation(): number[] {
    return [1, 1.5, 1];
  }
}
