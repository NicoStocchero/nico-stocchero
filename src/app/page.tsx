"use client";

import {
  Carousel3D,
  GlowingCards,
  GlowingCard,
  GradientButton,
  CSSParallaxTimeline,
  timelineEvents,
} from "@/components";
import { carouselItems, glowingCardsItems } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-6xl font-bold text-white leading-tight">
          Transformo tu web en tu mejor vendedor
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
          Diseño, estrategia y desarrollo con foco en confianza, claridad y
          resultados reales.
        </p>
        <GradientButton
          variant="default"
          size="lg"
          glowEffect
          glowSize={5}
          animationSpeed={3}
          gradientType="cool"
        >
          Reservá una llamada
        </GradientButton>
      </section>

      {/* PROBLEMA */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          ¿Tu web atrae clientes o los espanta?
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Una web lenta, confusa o anticuada no solo aleja clientes. Destruye tu
          autoridad digital.
        </p>
        {/* Acá podrías agregar un slider comparativo o un heatmap fake */}
      </section>

      {/* RESULTADO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          Más confianza = Más consultas = Más libertad
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Diseño pensando en negocios, tecnología pensada en personas.
        </p>
        {/* Placeholder para CountUp con +52% en conversiones o un gráfico simulado */}
      </section>

      {/* PROCESO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <CSSParallaxTimeline
          events={timelineEvents}
          title="Cómo mejoramos tu web"
          subtitle="Un proceso claro, realista y medible"
        />
      </section>

      {/* DEMOSTRACIONES */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-8 text-accessible-primary">
          Casos reales, soluciones concretas
        </h2>
        <Carousel3D items={carouselItems} />
      </section>

      {/* VALOR DIFERENCIAL */}
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

      {/* TESTIMONIOS */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          Lo que dicen quienes trabajaron conmigo
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          “Desde que rediseñamos la web, recibo el doble de consultas” — Cliente
          ficticio
        </p>
        {/* En el futuro: insertar testimonios reales como Google cards o avatars */}
      </section>

      {/* CTA FINAL */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          ¿Listo para que tu web hable por vos?
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Escribime o agendá una llamada. Respondés un formulario, y yo me ocupo
          del resto.
        </p>
        {/* FORMULARIO DE CONTACTO */}
        <div className="w-full max-w-xl">
          {/* Formulario funcional: Name, Email, Mensaje, Submit */}
        </div>
      </section>
    </div>
  );
}
