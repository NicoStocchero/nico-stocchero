// src/lib/seo.ts

interface SEOContent {
  title: string;
  description: string;
}

interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface OpenGraph {
  type: string;
  locale: string;
  url: string;
  site_name: string;
  title: string;
  description: string;
  images: OpenGraphImage[];
}

interface Twitter {
  card: string;
  site: string;
  creator: string;
}

interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  author: string;
  keywords: string[];
  openGraph: OpenGraph;
  twitter: Twitter;
  instagram: string;
}

type SupportedLanguage = "es" | "en";

export const baseUrl: string = "https://www.nicostocchero.com";

const seoContent: Record<SupportedLanguage, SEOContent> = {
  es: {
    title: "Nicolás Stocchero — UX, Strategy & Development",
    description:
      "Combino UX/UI, estrategia digital y desarrollo full-stack para construir productos digitales coherentes, escalables y con visión de negocio.",
  },
  en: {
    title: "Nicolás Stocchero — UX, Strategy & Development",
    description:
      "I combine UX/UI, digital strategy, and full-stack development to build coherent, scalable digital products with business vision.",
  },
};

const defaultKeywords: string[] = [
  "UX Designer",
  "UI Designer",
  "Full Stack Developer",
  "Digital Strategy",
  "Product Design",
  "Web Development",
  "React Developer",
  "Next.js",
  "TypeScript",
  "Nicolás Stocchero",
];

const generateSEO = (lang: SupportedLanguage = "es"): SEOMetadata => {
  const content = seoContent[lang];
  const langUrl = lang === "en" ? `${baseUrl}/en` : baseUrl;

  return {
    title: content.title,
    description: content.description,
    canonical: langUrl,
    robots: "index, follow",
    author: "Nicolás Stocchero",
    keywords: defaultKeywords,
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "es_AR",
      url: langUrl,
      site_name: "Nicolás Stocchero",
      title: content.title,
      description: content.description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Nicolás Stocchero",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@nicostocchero",
      creator: "@nicostocchero",
    },
    instagram: "@nicostocchero",
  };
};

export default generateSEO;
