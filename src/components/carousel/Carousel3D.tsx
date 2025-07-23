"use client";

import React, { useRef, useEffect, useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { useTouchSwipe } from "@/hooks/useTouchSwipe";
import { cn } from "@/lib/utils";
import { CarouselCard } from "./CarouselCard";
import { NavigationArrow } from "./NavigationArrow";
import { PaginationDots } from "./PaginationDots";
import type { Carousel3DProps } from "./types";

export const Carousel3D = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  title = "From Textile to Intelligence",
  subtitle = "Customer Cases",
  tagline = "Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.",
  isMobileSwipe = true,
}: Carousel3DProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Optimized navigation functions with immediate visual feedback
  const goToNext = () => {
    const nextIndex = (active + 1) % items.length;
    setActive(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (active - 1 + items.length) % items.length;
    setActive(prevIndex);
  };

  const goToIndex = (index: number) => {
    setActive(index);
  };

  // Touch swipe handlers
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    minSwipeDistance: 50,
  });

  useEffect(() => {
    if (autoRotate && isInView && !isHovering && !isMobile) {
      const interval = setInterval(() => {
        goToNext();
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [
    isInView,
    isHovering,
    autoRotate,
    rotateInterval,
    items.length,
    isMobile,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCardAnimationClass = (index: number) => {
    if (isMobile) {
      // Mobile: Simple stack layout
      if (index === active) return "scale-100 opacity-100 z-20 transform-gpu";
      return "scale-95 opacity-0 transform-gpu";
    }

    // Desktop: 3D carousel layout
    if (index === active) return "scale-100 opacity-100 z-20 transform-gpu";
    if (index === (active + 1) % items.length)
      return "translate-x-[55%] scale-85 opacity-40 z-10 transform-gpu";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-55%] scale-85 opacity-40 z-10 transform-gpu";
    return "scale-75 opacity-0 transform-gpu";
  };

  return (
    <section id="carousel3d" className="bg-background w-full mx-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className={cn(
            "relative overflow-hidden",
            isMobile ? "h-[600px] py-8" : "h-[750px] py-16"
          )}
          onMouseEnter={() => !isMobile && setIsHovering(true)}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
          onTouchStart={isMobileSwipe ? handleTouchStart : undefined}
          onTouchMove={isMobileSwipe ? handleTouchMove : undefined}
          onTouchEnd={isMobileSwipe ? handleTouchEnd : undefined}
          ref={carouselRef}
        >
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full flex items-center justify-center",
              isMobile ? "pt-8" : "pt-12"
            )}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ease-out ${getCardAnimationClass(
                  index
                )}`}
              >
                <CarouselCard item={item} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
              <NavigationArrow
                direction="left"
                position="left-8"
                onClick={goToPrevious}
              />
              <NavigationArrow
                direction="right"
                position="right-8"
                onClick={goToNext}
              />
            </>
          )}

          {/* Pagination Dots */}
          <PaginationDots
            totalItems={items.length}
            activeIndex={active}
            onDotClick={goToIndex}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
};
