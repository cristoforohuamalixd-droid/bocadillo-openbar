"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "¡La atención fue increíble! Los cocteles estaban espectaculares y todos los invitados no paraban de felicitarnos por la barra.",
    author: "Cliente de Boda",
    event: "Boda en Miraflores",
    rating: 5,
  },
  {
    text: "Contratamos el servicio corporativo y superó todas nuestras expectativas. Profesionales, puntuales y con una carta de cócteles impresionante.",
    author: "Evento Corporativo",
    event: "Empresa de Tecnología",
    rating: 5,
  },
  {
    text: "La barra móvil fue la estrella de mi cumpleaños. El diseño, los tragos y la energía del bartender hicieron que la noche fuera perfecta.",
    author: "Cumpleañera",
    event: "Fiesta de 30 años",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-gold-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(212, 168, 83, 1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            La satisfacción de quienes han confiado en nosotros es nuestro mayor
            orgullo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl gold-border glass group hover:bg-gold-400/[0.02] transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="text-gold-500/20 text-6xl font-serif absolute top-4 right-6 leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <Stars count={t.rating} />

              <p className="text-gray-300 text-sm leading-relaxed mt-5 mb-8 italic relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="w-12 h-px bg-gold-500/20 mb-5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600/30 to-gold-400/10 flex items-center justify-center text-gold-400 text-sm font-serif font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {t.author}
                  </p>
                  <p className="text-gold-500/50 text-xs mt-0.5">
                    {t.event}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
