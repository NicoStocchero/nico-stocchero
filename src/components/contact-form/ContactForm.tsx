"use client";
import React, { useState } from "react";
import { GradientButton } from "../gradient-button";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "w-full max-w-xl mx-auto p-8 rounded-2xl",
          "bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10",
          "border border-brand-primary/20 backdrop-blur-sm",
          "text-center",
          className
        )}
      >
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
            <svg
              className="w-8 h-8 text-accessible-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-accessible-primary mb-2">
            ¡Mensaje enviado!
          </h3>
          <p className="text-accessible-secondary">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
        </div>
        <GradientButton
          onClick={() => setIsSubmitted(false)}
          size="md"
          className="mx-auto w-auto px-10"
        >
          Enviar otro mensaje
        </GradientButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-xl mx-auto p-8 rounded-2xl",
        "bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10",
        "border border-brand-primary/20 backdrop-blur-sm",
        "shadow-2xl",
        className
      )}
    >
      <div className="space-y-6">
        {/* Campo Nombre */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-accessible-primary"
          >
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "bg-brand-dark/50 border-2 transition-all duration-300",
              "text-accessible-primary placeholder-accessible-secondary/60",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary/50",
              "hover:border-brand-primary/40",
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-brand-primary/20 focus:border-brand-primary"
            )}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Campo Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-accessible-primary"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "bg-brand-dark/50 border-2 transition-all duration-300",
              "text-accessible-primary placeholder-accessible-secondary/60",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary/50",
              "hover:border-brand-primary/40",
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-brand-primary/20 focus:border-brand-primary"
            )}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-accessible-primary"
          >
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={cn(
              "w-full px-4 py-3 rounded-xl resize-none",
              "bg-brand-dark/50 border-2 transition-all duration-300",
              "text-accessible-primary placeholder-accessible-secondary/60",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary/50",
              "hover:border-brand-primary/40",
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-brand-primary/20 focus:border-brand-primary"
            )}
            placeholder="Contame sobre tu proyecto, qué necesitás y cómo puedo ayudarte..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Botón de envío */}
        <div className="pt-4 text-center">
          <GradientButton
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-auto px-16"
            gradientType="warm"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar mensaje"
            )}
          </GradientButton>
        </div>

        {/* Información adicional */}
        <div className="text-center pt-4 border-t border-brand-primary/20">
          <p className="text-accessible-secondary text-sm">
            También podés escribirme directamente a{" "}
            <a
              href="mailto:hola@nicostocchero.com"
              className="text-brand-secondary hover:text-brand-secondary-light transition-colors underline"
            >
              hola@nicostocchero.com
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
