// Navbar Types
export interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface NavbarBehaviorProps {
  navItems: NavItem[];
}

export interface NavbarShellProps {
  className?: string;
}