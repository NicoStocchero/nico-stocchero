import { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    id: "servicios",
    label: "Servicios",
    href: "/servicios",
    hasDropdown: true,
    dropdownItems: [
      { id: "web", label: "Sitios web", href: "/servicios/web" },
      { id: "ecommerce", label: "E-commerce", href: "/servicios/ecommerce" },
      { id: "apps", label: "Aplicaciones", href: "/servicios/apps" },
    ],
  },

  {
    id: "proyectos",
    label: "Proyectos",
    href: "/proyectos",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "renace",
        label: "E-commerce para club deportivo",
        href: "/proyectos/renace-ecommerce",
      },
      {
        id: "panaderia",
        label: "App para panaderías",
        href: "/proyectos/panaderia-app",
      },
      {
        id: "abogado",
        label: "Web para estudio legal",
        href: "/proyectos/estudio-legal",
      },
      {
        id: "dashboard",
        label: "Dashboard comercial",
        href: "/proyectos/vision-dashboard",
      },
      {
        id: "portfolio",
        label: "Portfolio para creativos",
        href: "/proyectos/portfolio-creative",
      },
    ],
  },

  { id: "proceso", label: "Proceso", href: "/proceso" },
  { id: "sobre-mi", label: "Sobre mí", href: "/sobre-mi" },
];
