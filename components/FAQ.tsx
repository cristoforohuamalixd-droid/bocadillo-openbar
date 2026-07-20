"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué incluye el servicio de Open Bar?",
    answer:
      "Nuestro servicio incluye bartender profesional, barra móvil con diseño personalizado, cristalería, todos los insumos (licores, frutas, hielo, mixers), carta de cócteles personalizada y montaje/desmontaje completo.",
  },
  {
    question: "¿Cuánto tiempo dura el servicio?",
    answer:
      "El servicio base es de 5 horas. Podemos extenderlo según las necesidades de tu evento con un costo adicional por hora extra.",
  },
  {
    question: "¿Atienden eventos fuera de Lima?",
    answer:
      "Sí, atendemos eventos en toda Lima Metropolitana. Para eventos fuera de la ciudad, contáctanos para evaluar la logística y costos de traslado.",
  },
  {
    question: "¿Puedo personalizar la carta de cócteles?",
    answer:
      "¡Por supuesto! Trabajamos contigo para crear una carta personalizada que se adapte al estilo de tu evento y las preferencias de tus invitados.",
  },
  {
    question: "¿Cuánto tiempo antes debo reservar?",
    answer:
      "Recomendamos reservar con al menos 2-3 semanas de anticipación. Para fechas populares (diciembre, San Valentín, etc.), te sugerimos reservar con 1 mes de anticipación.",
  },
  {
    question: "¿Necesitan algún espacio o instalación especial?",
    answer:
      "Solo necesitamos un espacio plano de aproximadamente 2x1.5 metros para montar la barra y acceso a agua. Nosotros llevamos todo lo demás.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
            Preguntas Frecuentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-4 mb-6 leading-tight">
            ¿Tenés <span className="text-gradient">dudas</span>?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Las respuestas a las preguntas que nuestros clientes suelen hacer
            antes de reservar.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl gold-border glass overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span
                  className={`font-serif text-sm sm:text-base transition-colors duration-300 ${
                    openIndex === index ? "text-gold-400" : "text-gray-200 group-hover:text-gold-400"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 ml-4 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center"
                >
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${
                      openIndex === index ? "text-gold-400" : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gold-500/10 mb-4" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
