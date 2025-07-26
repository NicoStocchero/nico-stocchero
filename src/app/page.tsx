import {
  HeroSection,
  ResultSection,
  ProcessSection,
  DemoSection,
  ValueSection,
} from "@/components/client-wrappers";
import { BeforeAfterSlider } from "@/components/before-and-after";
import { ContactForm } from "@/components/contact-form";
import { socialMediaLinks } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <HeroSection partnerLogos={socialMediaLinks} />

      {/* PROBLEMA */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          ¿Tu web atrae clientes o los espanta?
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Una web lenta, confusa o anticuada no solo aleja clientes. Destruye tu
          autoridad digital.
        </p>
      </section>

      {/* BEFORE/AFTER COMPARISON */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <BeforeAfterSlider />
      </section>

      {/* RESULTADO */}
      <ResultSection />

      {/* PROCESO */}
      <ProcessSection />

      {/* DEMOSTRACIONES */}
      <DemoSection />

      {/* VALOR DIFERENCIAL */}
      <ValueSection />

      {/* TESTIMONIOS */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
          Testimonios
        </h2>

        <p className="text-gray-400 max-w-xl mb-8"></p>
        {/* En el futuro: insertar testimonios reales como Google cards o avatars */}
      </section>

      {/* CTA FINAL */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-accessible-primary">
            ¿Listo para que tu web hable por vos?
          </h2>
          <p className="text-gray-400 max-w-xl mb-8 mx-auto">
            Escribime o agendá una llamada. Respondés un formulario, y yo me ocupo
            del resto.
          </p>
        </div>
        
        {/* FORMULARIO DE CONTACTO */}
        <ContactForm className="w-full" />
      </section>
    </div>
  );
}
