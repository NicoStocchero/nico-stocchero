import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarCTA } from "./NavbarCTA";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarLogo } from "./NavbarLogo";
import { navItems } from "./constants";

export const NavbarShell = () => (
  <header id="main-navbar">
    <nav className="max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex-1 flex items-center min-w-[128px]">
        <NavbarLogo />
      </div>
      {/* Centro (desktop) */}
      <div className="flex-[2] flex items-center justify-center">
        {/* Desktop menu: visible solo en desktop */}
        <div className="hidden md:flex w-full justify-center">
          <NavbarDesktop navItems={navItems} />
        </div>
      </div>
      {/* CTA y mobile trigger */}
      <div className="flex-1 flex items-center justify-end gap-2">
        {/* CTA visible en desktop */}
        <div className="hidden md:inline-flex">
          <NavbarCTA />
        </div>
        {/* Mobile menu trigger visible solo en mobile */}
        <div className="md:hidden">
          <NavbarMobile navItems={navItems} />
        </div>
      </div>
    </nav>
  </header>
);
