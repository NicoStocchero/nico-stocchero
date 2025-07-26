"use client";

import { GlowingCards, GlowingCard } from "@/components";
import { glowingCardsItems } from "@/app/constants";

export const ValueSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-4xl font-semibold mb-8 text-accessible-primary">
        ¿Por qué trabajar conmigo?
      </h2>
      <GlowingCards
        enableGlow
        glowRadius={30}
        glowOpacity={0.8}
        animationDuration={300}
        gap="2rem"
        maxWidth="80rem"
        padding="2rem"
        responsive
      >
        {glowingCardsItems.map((item) => (
          <GlowingCard
            key={item.id}
            glowColor={item.glowColor}
            icon={item.icon}
            title={item.title}
            description={item.description}
            features={item.features}
            className="min-h-[200px]"
          />
        ))}
      </GlowingCards>
    </section>
  );
};