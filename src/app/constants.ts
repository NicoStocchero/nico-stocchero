import { Feature } from "@/components/glowing-cards/types";

interface GlowingCardItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  glowColor: string;
  features: Feature[];
}

export const carouselItems = [
  {
    id: 1,
    title: "Tienda online para Renace Padel",
    brand: "Renace Club",
    description:
      "E-commerce completo con sistema de pagos, gestión de stock, y diseño adaptado al público deportivo.",
    tags: ["React", "Tailwind", "Firebase", "UX"],
    imageUrl:
      "https://images.unsplash.com/photo-1606813903122-589dfe3088f1?w=400&h=300&fit=crop",
    link: "/proyectos/renace-ecommerce",
  },
  {
    id: 2,
    title: "App de pedidos para panaderías",
    brand: "Panify",
    description:
      "App móvil con catálogo táctil, pedidos rápidos, y control de caja desde tablet. Pensada para empleados sin formación técnica.",
    tags: ["React Native", "Expo", "Supabase"],
    imageUrl:
      "https://images.unsplash.com/photo-1601979031925-3ccde5a1b4c6?w=400&h=300&fit=crop",
    link: "/proyectos/panaderia-app",
  },
  {
    id: 3,
    title: "Web profesional para abogados",
    brand: "Estudio Legal Córdoba",
    description:
      "Sitio institucional claro y confiable con branding sobrio, foco en contacto rápido y posicionamiento local.",
    tags: ["Next.js", "SEO", "Diseño Legal"],
    imageUrl:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop",
    link: "/proyectos/estudio-legal",
  },
  {
    id: 4,
    title: "Dashboard de métricas comerciales",
    brand: "Vision+",
    description:
      "Panel con indicadores clave, diseñado para emprendedores que necesitan claridad sin complicaciones técnicas.",
    tags: ["Vite", "Recharts", "Supabase"],
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    link: "/proyectos/vision-dashboard",
  },
  {
    id: 5,
    title: "Portfolio para creativos",
    brand: "Autónomos + Freelancers",
    description:
      "Scroll narrativo para mostrar historia, habilidades y proyectos con estilo moderno y personalidad visual.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&h=300&fit=crop",
    link: "/proyectos/portfolio-creative",
  },
];

export const glowingCardsItems: GlowingCardItem[] = [
  {
    id: 1,
    title: "Performance real",
    description:
      "Sitios optimizados desde el código hasta el diseño. Cada milisegundo cuenta.",
    icon: "Zap",
    glowColor: "#6B7A99",
    features: [
      { text: "Carga instantánea", icon: "Gauge" },
      { text: "Responsive real", icon: "Monitor" },
    ],
  },
  {
    id: 2,
    title: "Diseño con intención",
    description:
      "UX/UI bien pensado: claridad, jerarquía visual y coherencia de marca.",
    icon: "Sparkles",
    glowColor: "#B8A98A",
    features: [
      { text: "Visual atractivo", icon: "Eye" },
      { text: "Accesibilidad total", icon: "Accessibility" },
    ],
  },
  {
    id: 3,
    title: "Escalabilidad simple",
    description:
      "Código modular, mantenible y listo para crecer con tu negocio.",
    icon: "Crown",
    glowColor: "#9A8B6A",
    features: [
      { text: "Componentes reutilizables", icon: "Layers" },
      { text: "Documentación clara", icon: "FileText" },
    ],
  },
];
