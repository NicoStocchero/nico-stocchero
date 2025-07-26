"use client";

import { CSSParallaxTimeline, timelineEvents } from "@/components";

export const ProcessSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <CSSParallaxTimeline
        events={timelineEvents}
        title="Cómo mejoramos tu web"
        subtitle="Un proceso claro, realista y medible"
      />
    </section>
  );
};