"use client";

import { ShinyText } from "@/components";

export const ResultSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <ShinyText
        size="5xl"
        weight="bold"
        speed={5}
        intensity={2}
        direction="left-to-right"
        shineWidth={30}
        baseColor="#3C4966"
        shineColor="#D0C3A5"
      >
        Más confianza = Más consultas = Más libertad
      </ShinyText>
      <p className="text-gray-400 max-w-xl mb-8">
        Diseño pensando en negocios, tecnología pensada en personas.
      </p>
      {/* Placeholder para CountUp con +52% en conversiones o un gráfico simulado */}
    </section>
  );
};