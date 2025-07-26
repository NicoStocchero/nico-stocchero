"use client";

import Link from "next/link";
import { useNavbarScroll } from "@/components/navbar/hooks/useNavbarScroll";

export const NavbarCTA = () => {
  const { scrolled } = useNavbarScroll();

  const ctaClass = scrolled
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white border border-black/30 hover:from-black hover:via-gray-900 hover:to-gray-800 shadow-xl"
    : "bg-gradient-to-r from-white/80 via-gray-100/70 to-white/80 text-gray-900 border border-white/30 hover:from-white hover:via-gray-200 hover:to-white shadow-lg";

  return (
    <Link
      href="https://calendly.com/nicostocchero/30min"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        hidden md:inline-flex rounded-lg
        px-6 py-2 text-base font-bold
        focus:outline-none transition-all duration-200
        backdrop-blur
        ${ctaClass}
      `}
    >
      Reservá una llamada
    </Link>
  );
};
