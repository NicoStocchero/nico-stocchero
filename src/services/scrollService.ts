/**
 * Service for handling scroll-related calculations and progress tracking
 */
export class ScrollService {
  /**
   * Calculates scroll progress based on element position
   */
  static calculateScrollProgress(
    elementTop: number,
    elementHeight: number,
    windowHeight: number
  ): number {
    return Math.max(
      0,
      Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
    );
  }

  /**
   * Calculates active index based on scroll progress and total events
   */
  static calculateActiveIndex(progress: number, totalEvents: number): number {
    const newActiveIndex = Math.floor(progress * totalEvents);
    return Math.min(newActiveIndex, totalEvents - 1);
  }

  /**
   * Converts progress percentage to CSS height value
   */
  static progressToHeight(progress: number): string {
    return `${progress * 100}%`;
  }

  /**
   * Calculates element position relative to viewport
   */
  static getElementPosition(element: HTMLElement): {
    top: number;
    height: number;
    rect: DOMRect;
  } {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      height: rect.height,
      rect,
    };
  }

  /**
   * Checks if element is in viewport
   */
  static isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }

  /**
   * Calculates scroll offset for smooth animations
   */
  static calculateScrollOffset(index: number, baseOffset: number = 10): number {
    return index * baseOffset;
  }

  /**
   * Generates scroll event handler
   */
  static createScrollHandler(
    element: HTMLElement,
    totalEvents: number,
    onProgressChange: (progress: number) => void,
    onActiveIndexChange: (index: number) => void
  ) {
    return () => {
      const { top, height } = ScrollService.getElementPosition(element);
      const windowHeight = window.innerHeight;

      const progress = ScrollService.calculateScrollProgress(
        top,
        height,
        windowHeight
      );

      const activeIndex = ScrollService.calculateActiveIndex(
        progress,
        totalEvents
      );

      onProgressChange(progress);
      onActiveIndexChange(activeIndex);
    };
  }
}
