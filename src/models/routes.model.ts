export interface Route {
  name: {
    es: string;
    en: string;
  };
  path: {
    es: string;
    en: string;
  };
  icon?: string;
  isActive?: boolean;
}

export const routes: Route[] = [
  {
    name: {
      es: "Inicio",
      en: "Home",
    },
    path: {
      es: "/",
      en: "/en",
    },
  },
  {
    name: {
      es: "Sobre mí",
      en: "About",
    },
    path: {
      es: "/sobre-mi",
      en: "/en/about",
    },
    isActive: false,
  },
  {
    name: {
      es: "Contacto",
      en: "Contact",
    },
    path: {
      es: "/contacto",
      en: "/en/contact",
    },
    isActive: false,
  },
];
