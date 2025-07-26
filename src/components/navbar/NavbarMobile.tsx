"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavbarScroll } from "@/components/navbar/hooks/useNavbarScroll";
import type { NavItem } from "./types";

interface NavbarMobileProps {
  navItems: NavItem[];
}

export const NavbarMobile = ({ navItems }: NavbarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { scrolled } = useNavbarScroll();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const handleToggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const renderDropdown = (item: NavItem) => {
    const isOpen = openDropdown === item.id;

    return (
      <>
        <button
          type="button"
          onClick={() => handleToggleDropdown(item.id)}
          className="
            flex items-center justify-between w-full px-3 py-2 rounded-lg
            text-left text-gray-900 hover:bg-white/60 transition-colors
          "
          aria-expanded={!!isOpen}
          aria-controls={`dropdown-${item.id}`}
          aria-haspopup="true"
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`dropdown-${item.id}`}
              role="region"
              aria-label={`Submenú de ${item.label}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 mt-1 space-y-1 overflow-hidden"
            >
              {item.dropdownItems?.map((subItem) => (
                <Link
                  key={subItem.id}
                  href={subItem.href}
                  className="
                    block px-3 py-2 rounded-lg text-gray-700 font-medium
                    hover:bg-white/70 hover:text-black
                    transition-colors
                  "
                  onClick={handleToggleMenu}
                >
                  {subItem.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  const renderNavItems = () => (
    <ul className="space-y-1 text-base font-semibold" role="list">
      {navItems.map((item) => (
        <li key={item.id} role="listitem">
          {item.hasDropdown ? (
            renderDropdown(item)
          ) : (
            <Link
              href={item.href}
              className="
                block px-3 py-2 rounded-lg text-gray-900 font-medium
                hover:bg-white/60 hover:text-black
                transition-colors
              "
              onClick={handleToggleMenu}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const mobilePanel = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={handleToggleMenu}
          />

          <motion.aside
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-button"
            className="
              fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm
              bg-white/85 border-l border-white/30
              shadow-2xl backdrop-blur-xl backdrop-saturate-150
              px-6 py-6 overflow-y-auto
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Menu close button (puede ir el logo fuera de este comp si querés) */}
            <div className="flex items-center justify-end mb-6">
              <button
                onClick={handleToggleMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <nav aria-label="Navegación principal">{renderNavItems()}</nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        id="mobile-menu-button"
        type="button"
        className="md:hidden p-2 transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={!!isOpen}
        aria-controls="mobile-menu-panel"
        aria-haspopup="dialog"
        onClick={handleToggleMenu}
        style={{
          color: scrolled ? "#18181b" : "#f4f4f5",
        }}
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>
      {mounted && createPortal(mobilePanel, document.body)}
    </>
  );
};
