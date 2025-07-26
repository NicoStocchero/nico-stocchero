"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavbarScroll } from "@/components/navbar/hooks/useNavbarScroll";
import type { NavItem } from "./types";

interface NavbarDesktopProps {
  navItems: NavItem[];
}

export const NavbarDesktop = ({ navItems }: NavbarDesktopProps) => {
  const { scrolled } = useNavbarScroll();
  const linkColor = scrolled ? "text-gray-800" : "text-gray-100";
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownGlassClass = scrolled
    ? `
      bg-white/90
      border border-gray-200/50
      shadow-xl
      backdrop-blur-xl
      backdrop-saturate-150
      rounded-b-2xl
    `
    : `
      bg-white/85
      border border-white/30
      shadow-2xl
      backdrop-blur-xl
      backdrop-saturate-150
      rounded-b-2xl
    `;

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -8,
      pointerEvents: "none",
      transition: { duration: 0.18 },
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: 0.18 },
    },
  };

  return (
    <ul className="flex items-center gap-1 text-base font-semibold justify-center">
      {navItems.map((item) =>
        item.hasDropdown ? (
          <li
            key={item.id}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`
                flex items-center gap-1 px-4 py-2 focus:outline-none
                transition-colors hover:bg-white/10 rounded-md ${linkColor}
              `}
              aria-haspopup="menu"
              aria-expanded={openDropdown === item.id}
            >
              {item.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === item.id ? "rotate-180" : ""
                } ${linkColor}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {openDropdown === item.id && (
                <motion.div
                  key={item.id}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                  className={`
                    absolute left-1/2 top-full -translate-x-1/2 w-56 rounded-b-2xl py-2 z-40
                    ${dropdownGlassClass}
                  `}
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    borderTop: "1.5px solid rgba(255,255,255,0.22)",
                  }}
                >
                  {item.dropdownItems?.map((d) => (
                    <Link
                      key={d.id}
                      href={d.href}
                      className={`
                        block px-4 py-2 mx-2 rounded-md
                        text-gray-900 font-medium tracking-tight
                        hover:bg-white/95 hover:text-black
                        transition-colors duration-150
                        shadow-none hover:shadow
                      `}
                      tabIndex={0}
                    >
                      {d.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ) : (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`relative px-4 py-2 transition-colors ${linkColor}`}
            >
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
