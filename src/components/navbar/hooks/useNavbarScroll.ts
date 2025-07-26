"use client";

import { useState, useEffect } from "react";

export const useNavbarScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementById("main-navbar");
    if (header) {
      header.className = `
        fixed left-1/2 -translate-x-1/2 top-4 z-30 transition-all duration-700
        max-w-7xl w-[calc(100%-2rem)] mx-auto
        rounded-2xl border shadow-lg backdrop-blur-xl
        ${
          scrolled
            ? "bg-white/85 border-gray-200/50 shadow-xl [filter:drop-shadow(0_8px_32px_rgba(31,38,135,0.10))]"
            : "bg-white/10 border border-white/10 shadow-2xl"
        }
        backdrop-saturate-150
        will-change-transform
      `;
    }
  }, [scrolled]);

  return { scrolled };
};
