"use client";

import { Carousel3D } from "@/components";
import { carouselItems } from "@/app/constants";

export const DemoSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mb-8 text-accessible-primary">
        Casos reales, soluciones concretas
      </h2>
      <Carousel3D items={carouselItems} />
    </section>
  );
};