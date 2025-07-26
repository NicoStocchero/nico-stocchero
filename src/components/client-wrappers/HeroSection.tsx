"use client";

import Image from "next/image";
import { LogoSlider as SlidingLogoMarquee } from "@/components/logo-slider";
import { GradientButton } from "@/components";

interface SocialMediaItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  href: string;
  label: string;
  analytics: string;
}

interface LogoItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  href: string;
  label?: string;
  analytics?: string;
  style?: React.CSSProperties;
}

interface HeroSectionProps {
  partnerLogos: LogoItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ partnerLogos }) => {
  // Analytics tracking function
  const trackSocialClick = (item: LogoItem) => {
    // Google Analytics 4 event tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "social_media_click", {
        social_platform: item.id,
        link_text: item.label || item.alt,
        event_category: "engagement",
        event_label: item.analytics || item.id,
      });
    }

    // Console log for development
    console.log(`Social media click: ${item.id} - ${item.label || item.alt}`);

    // Optional: Send to custom analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ event: 'social_click', platform: item.id })
    // });
  };

  const handleItemClick = (item: any) => {
    const logoItem = partnerLogos.find((logo) => logo.id === item.id);
    if (logoItem) {
      trackSocialClick(logoItem);

      // Open link in new tab for external links, same tab for email/tel
      if (
        logoItem.href.startsWith("mailto:") ||
        logoItem.href.startsWith("tel:")
      ) {
        window.location.href = logoItem.href;
      } else {
        window.open(logoItem.href, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 text-center overflow-hidden">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-white leading-tight">
          Transformo tu web en tu mejor vendedor
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Diseño, estrategia y desarrollo con foco en confianza, claridad y
          resultados reales.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="w-full max-w-4xl mx-auto mb-6 overflow-hidden">
        <SlidingLogoMarquee
          items={partnerLogos.map((logo) => ({
            id: logo.id,
            content: (
              <div className="group relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className} cursor-pointer brightness-90 group-hover:brightness-110 transition-all duration-300`}
                  style={logo.style}
                />
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {logo.label || logo.alt}
                </div>
              </div>
            ),
            href: logo.href,
          }))}
          height="120px"
          speed={40}
          enableBlur={true}
          blurIntensity={2}
          pauseOnHover={true}
          onItemClick={handleItemClick}
        />
      </div>

      <GradientButton
        variant="default"
        size="lg"
        glowEffect
        glowSize={5}
        animationSpeed={3}
        gradientType="cool"
        onClick={() => {
          // Track CTA click
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "cta_click", {
              button_text: "Reservá una llamada",
              event_category: "conversion",
              event_label: "hero_primary_cta",
            });
          }
          // Redirect to calendar or contact form
          window.open("https://calendly.com/nicostocchero/30min", "_blank");
        }}
      >
        Reservá una llamada
      </GradientButton>
    </section>
  );
};
