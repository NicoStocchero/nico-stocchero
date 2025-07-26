import { Feature } from "@/components/glowing-cards/types";

interface GlowingCardItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  glowColor: string;
  features: Feature[];
}

interface carouselItems {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export const carouselItems: carouselItems[] = [
  {
    id: 1,
    title: "Tienda online para Renace Padel Club",
    brand: "Renace Club",
    description:
      "Plataforma e-commerce integral con sistema de pagos, gestión de stock y diseño orientado a deportistas, que facilita la venta y fidelización.",
    tags: ["E-commerce", "Gestión de stock", "UX/UI", "Plataforma deportiva"],
    imageUrl: "https://picsum.photos/400/300?random=1",
    link: "/proyectos/renace-ecommerce",
  },
  {
    id: 2,
    title: "App táctil para pedidos y caja en panaderías",
    brand: "Panify",
    description:
      "Aplicación móvil intuitiva para gestionar pedidos y caja desde tablet, ideal para empleados sin experiencia técnica.",
    tags: [
      "App móvil",
      "Experiencia táctil",
      "Gestión de pedidos",
      "Simplificación operativa",
    ],
    imageUrl: "https://picsum.photos/400/300?random=2",
    link: "/proyectos/panaderia-app",
  },
  {
    id: 3,
    title: "Web institucional para estudios legales",
    brand: "Estudio Legal Córdoba",
    description:
      "Sitio corporativo claro y confiable, con branding sobrio y foco en contacto rápido y posicionamiento local para estudios jurídicos.",
    tags: [
      "Branding profesional",
      "Posicionamiento local",
      "Confianza digital",
      "Contacto directo",
    ],
    imageUrl: "https://picsum.photos/400/300?random=3",
    link: "/proyectos/estudio-legal",
  },
  {
    id: 4,
    title: "Dashboard simple de métricas comerciales",
    brand: "Vision+",
    description:
      "Panel intuitivo con indicadores clave, pensado para emprendedores que buscan claridad y control sin complicaciones técnicas.",
    tags: [
      "Dashboard",
      "Métricas clave",
      "Claridad visual",
      "Control comercial",
    ],
    imageUrl: "https://picsum.photos/400/300?random=4",
    link: "/proyectos/vision-dashboard",
  },
  {
    id: 5,
    title: "Portfolio narrativo para creativos",
    brand: "Autónomos + Freelancers",
    description:
      "Web de storytelling visual que destaca habilidades, proyectos y personalidad, diseñada para freelancers y autónomos modernos.",
    tags: [
      "Portfolio creativo",
      "Storytelling digital",
      "Marca personal",
      "Experiencia visual",
    ],
    imageUrl: "https://picsum.photos/400/300?random=5",
    link: "/proyectos/portfolio-creative",
  },
];

export const glowingCardsItems: GlowingCardItem[] = [
  {
    id: 1,
    title: "Performance real",
    description:
      "Sitios web ultra rápidos y optimizados en cada detalle. Porque cada milisegundo suma.",
    icon: "Zap",
    glowColor: "#6B7A99",
    features: [
      { text: "Carga instantánea para no perder clientes", icon: "Gauge" },
      { text: "Navegación fluida y sin interrupciones", icon: "Monitor" },
    ],
  },
  {
    id: 2,
    title: "Diseño con intención",
    description:
      "UX/UI pensado para que tu marca transmita confianza, profesionalismo y claridad.",
    icon: "Sparkles",
    glowColor: "#B8A98A",
    features: [
      { text: "Diseño atractivo y fácil de usar", icon: "Eye" },
      { text: "Adaptado a todos los dispositivos", icon: "Smartphone" },
    ],
  },
  {
    id: 3,
    title: "Escalabilidad simple",
    description:
      "Tu proyecto crece sin complicaciones gracias a una estructura sólida y flexible.",
    icon: "Crown",
    glowColor: "#7D6B3A",
    features: [
      { text: "Actualizaciones sencillas y rápidas", icon: "RefreshCw" },
      { text: "Fácil de mantener y mejorar con el tiempo", icon: "Settings" },
    ],
  },
];

// Social media and contact links for conversion
export const socialMediaLinks = [
  {
    id: "github",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    alt: "GitHub - Ver mis proyectos",
    width: 48,
    height: 48,
    className: "w-12 h-12 hover:scale-110 transition-transform filter invert",
    href: "https://github.com/nicostocchero",
    label: "Proyectos en GitHub",
    analytics: "social_github_click",
  },
  {
    id: "linkedin",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    alt: "LinkedIn - Conectemos profesionalmente",
    width: 48,
    height: 48,
    className: "w-12 h-12 hover:scale-110 transition-transform filter invert",
    href: "https://linkedin.com/in/nicostocchero",
    label: "Conectar en LinkedIn",
    analytics: "social_linkedin_click",
  },
  {
    id: "instagram",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    alt: "Instagram - Seguí mi proceso creativo",
    width: 48,
    height: 48,
    className: "w-12 h-12 hover:scale-110 transition-transform filter invert",
    href: "https://instagram.com/nicostocchero",
    label: "Seguir en Instagram",
    analytics: "social_instagram_click",
  },
  {
    id: "whatsapp",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg",
    alt: "WhatsApp - Hablemos directamente",
    width: 48,
    height: 48,
    className: "w-12 h-12 hover:scale-110 transition-transform filter invert",
    href: "https://wa.me/5493543530443?text=Hola%20Nico%2C%20estuve%20viendo%20tu%20web%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20podr%C3%ADas%20ayudarme%20con%20mi%20sitio.",
    label: "Escribir por WhatsApp",
    analytics: "contact_whatsapp_click",
  },
  {
    id: "email",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg",
    alt: "Email - Contacto profesional",
    width: 48,
    height: 48,
    className: "w-12 h-12 hover:scale-110 transition-transform filter invert",
    href: "mailto:nico@nicostocchero.com?subject=Consulta%20sobre%20desarrollo%20web",
    label: "Enviar email",
    analytics: "contact_email_click",
  },
];
