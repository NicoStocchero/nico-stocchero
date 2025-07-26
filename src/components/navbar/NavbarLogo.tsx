"use client";

import Link from "next/link";
import Image from "next/image";
import { useNavbarScroll } from "@/components/navbar/hooks/useNavbarScroll";

export const NavbarLogo = () => {
  const { scrolled } = useNavbarScroll();

  return (
    <Link
      href="/"
      aria-label="Ir a inicio"
      className={`
    flex items-center justify-center
    px-8 py-2
    rounded-xl
    transition
    focus-visible:ring-2 focus-visible:ring-brand-primary
    group
  `}
    >
      <Image
        src={scrolled ? "/logo-ns.svg" : "/logo-ns-negative.svg"}
        alt="Nico Stocchero"
        width={32}
        height={32}
        priority
        draggable={false}
        className={`
      transition-transform transition-opacity duration-200
      group-hover:scale-105 group-hover:opacity-80
      drop-shadow-sm
    `}
        style={{
          background: "transparent",
        }}
      />
    </Link>
  );
};
