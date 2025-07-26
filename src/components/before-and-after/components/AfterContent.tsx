// AfterContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  TrendingUp,
  Clock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import CountUp from "react-countup";
import { useIntersectionObserver } from "@/hooks";
import { CountUpService, type CountUpItem } from "@/services";

export const AfterContent: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.3 });

  const countUpItems: CountUpItem[] = CountUpService.createCountUpItems([
    {
      config: { end: 30, suffix: "+" },
      label: "Años de trayectoria",
      color: "text-emerald-400",
      icon: TrendingUp,
    },
    {
      config: { end: 250, suffix: "+" },
      label: "Casos ganados",
      color: "text-blue-400",
      icon: Users,
    },
    {
      config: { end: 0.9, suffix: " s", decimals: 1 },
      label: "Tiempo de carga",
      color: "text-purple-400",
      icon: Clock,
    },
  ]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Navegación moderna (sin <h1>) */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-white font-bold text-xl">
            Martínez & Asociados
          </span>
          <div className="hidden md:flex items-center space-x-8">
            {["Especialidades", "Casos", "Consulta Online", "Blog"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {l}
              </a>
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Badge de performance */}
      <div className="absolute top-20 right-6 z-10">
        <div className="bg-emerald-600 text-white px-4 py-2 rounded text-sm font-bold shadow-lg flex items-center gap-2">
          <Clock className="w-4 h-4" />
          0.9 s RÁPIDO
        </div>
      </div>

      {/* Ornamentos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-700/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-700/10 rounded-full blur-2xl" />
      </div>

      {/* Contenido principal */}
      <section
        ref={elementRef}
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Estudio Jurídico{" "}
            <span className="text-emerald-400">Actualizado</span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Experiencia y confianza con un sitio web rápido y claro.
          </p>

          <p className="text-lg text-emerald-400 font-semibold mb-12 max-w-2xl mx-auto">
            Menos fricción, más consultas efectivas.
          </p>

          {/* Métricas animadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {countUpItems.map((item) => {
              const IconComponent = item.icon!;
              return (
                <motion.div
                  key={item.id}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:bg-white/10 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${item.color} mb-2`}>
                    {isVisible ? (
                      <CountUp
                        end={item.config.end}
                        duration={item.config.duration || 5}
                        suffix={item.config.suffix || ""}
                        decimals={item.config.decimals || 0}
                      />
                    ) : (
                      <span>0{item.config.suffix || ""}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA principal */}
          <motion.button
            className="group relative bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-xl transition-all duration-300 mb-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              GRATIS
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>Consulta Legal</span>
            </div>
          </motion.button>

          {/* CTA secundario */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-lg px-10 py-4 border border-gray-700/50 hover:bg-white/10 transition-all duration-300 cursor-pointer w-fit mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white font-medium">Conocer al Equipo</span>
          </motion.div>
        </div>

        {/* Prueba social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 mt-16">
          <div className="flex items-center gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <span className="text-base font-medium text-gray-300">
              4.9/5 (127 reseñas)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-base font-medium text-gray-300">
              Colegio de Abogados certificado
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
