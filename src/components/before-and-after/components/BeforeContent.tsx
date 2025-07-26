// BeforeContent.tsx
"use client";

import React from "react";
import { Clock } from "lucide-react";

export const BeforeContent: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative text-gray-800 font-serif">
      {/* Badge de rendimiento lento */}
      <div className="absolute top-20 right-6 z-[5]">
        <div className="bg-red-500 text-white px-4 py-2 rounded text-sm font-bold shadow-md flex items-center gap-2">
          <Clock className="w-4 h-4" />
          3.2 s LENTO
        </div>
      </div>

      {/* Header sin <h1> */}
      <header className="bg-white border-b border-gray-300 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold">Martínez & Asociados</span>
          <nav className="hidden md:flex space-x-6 text-sm">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((l) => (
              <a key={l} href="#" className="text-gray-700 hover:underline">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero sencillo */}
      <section className="bg-gray-100 py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            Estudio Jurídico Profesional
          </h2>
          <p className="text-base text-gray-600">
            Más de 30 años al servicio de la comunidad.
          </p>
        </div>
      </section>

      {/* Formulario extenso */}
      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-xl font-bold mb-6 uppercase">
            Consulta Gratuita
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 border border-gray-300 p-6 rounded">
            {[
              { id: "nombre", label: "Nombre y Apellido", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "telefono", label: "Teléfono", type: "tel" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm mb-1">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  className="w-full border border-gray-300 px-3 py-2 rounded bg-white"
                />
              </div>
            ))}

            <div>
              <label htmlFor="area" className="block text-sm mb-1">
                Área de consulta
              </label>
              <select
                id="area"
                className="w-full border border-gray-300 px-3 py-2 rounded bg-white"
              >
                <option>Seleccione una opción</option>
                <option>Laboral</option>
                <option>Familia</option>
                <option>Empresarial</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="mensaje" className="block text-sm mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                className="w-full border border-gray-300 px-3 py-2 rounded bg-white resize-none"
                placeholder="Describa brevemente su consulta…"
              />
            </div>

            <button
              type="submit"
              className="md:col-span-2 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
