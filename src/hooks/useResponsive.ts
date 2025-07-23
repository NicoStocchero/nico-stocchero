"use client";

import { useState, useEffect, useCallback } from "react";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  viewportWidth: number;
  viewportHeight: number;
}

interface ResponsiveClasses {
  container: string;
  card: string;
  node: string;
}

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

/**
 * Comprehensive responsive hook that replaces ResponsiveService
 */
export const useResponsive = (): ResponsiveState & {
  getResponsiveClasses: () => ResponsiveClasses;
  shouldShowTagsOnDesktop: () => boolean;
  shouldShowTagsOnMobile: () => boolean;
} => {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    viewportWidth: 0,
    viewportHeight: 0,
  });

  const updateResponsiveState = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setState({
      isMobile: width < BREAKPOINTS.MOBILE,
      isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET,
      isDesktop: width >= BREAKPOINTS.TABLET,
      viewportWidth: width,
      viewportHeight: height,
    });
  }, []);

  useEffect(() => {
    // Initial check
    updateResponsiveState();

    // Add resize listener
    window.addEventListener("resize", updateResponsiveState);

    // Cleanup
    return () => window.removeEventListener("resize", updateResponsiveState);
  }, [updateResponsiveState]);

  const getResponsiveClasses = useCallback((): ResponsiveClasses => {
    if (state.isMobile) {
      return {
        container: "flex flex-col gap-y-24",
        card: "w-full max-w-md",
        node: "top-0 -translate-y-full",
      };
    }

    if (state.isTablet) {
      return {
        container: "flex flex-col gap-y-20",
        card: "w-full max-w-lg",
        node: "top-1/2 -translate-y-1/2",
      };
    }

    return {
      container: "flex flex-col gap-y-16",
      card: "w-full max-w-xl",
      node: "top-1/2 -translate-y-1/2",
    };
  }, [state.isMobile, state.isTablet]);

  const shouldShowTagsOnDesktop = useCallback((): boolean => {
    return state.isDesktop;
  }, [state.isDesktop]);

  const shouldShowTagsOnMobile = useCallback((): boolean => {
    return state.isMobile;
  }, [state.isMobile]);

  return {
    ...state,
    getResponsiveClasses,
    shouldShowTagsOnDesktop,
    shouldShowTagsOnMobile,
  };
};

/**
 * Simple mobile-only hook (backward compatibility)
 */
export const useIsMobile = (): boolean => {
  const { isMobile } = useResponsive();
  return isMobile;
};
