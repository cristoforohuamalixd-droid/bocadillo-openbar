"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "👨‍🍳",
    title: "Bartenders Profesionales",
    description:
      "Equipo capacitado en mixología avanzada, coctelería de autor y atención de primer nivel. Cada trago es una obra de arte.",
    features: ["Mixología de autor", "Atención personalizada", "Uniforme impecable"],
  },
  {
    icon: "🍸",
    title: "Barra Móvil",
    description:
      "Llevamos la barra elegante directamente a tu evento. Diseño premium, iluminación y todo lo necesario para brillar.",
    features: ["Diseño elegante", "Iluminación LED", "Montaje incluido"],
  },
  {
    icon: "🥂",
    title: "Open Bar / Barra Libre",
    description:
      "Servicio ilimitado de cócteles clásicos y de autor. Tus invitados eligen, nosotros sorprendemos.",
    features: ["Tragos ilimitados", "Carta personalizable", "Insumos premium"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 168, 83, 1) 0%, transparent 70%)",
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
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Todo para tu{" "}
            <span className="text-gradient">evento perfecto</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas de coctelería profesional adaptadas a
            cada tipo de celebración.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 sm:p-10 rounded-2xl gold-border glass hover:bg-gold-400/[0.03] transition-all duration-500"
            >
              {/* Top glow on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-gold-400/15 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2.5 text-gray-500 text-xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/60" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
