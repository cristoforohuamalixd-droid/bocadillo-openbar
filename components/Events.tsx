"use client";

import { motion } from "framer-motion";

const events = [
  {
    icon: "💒",
    title: "Bodas",
    description:
      "Haz de tu boda un momento mágico con cócteles personalizados y un servicio impecable que sorprenderá a todos tus invitados.",
    gradient: "from-pink-500/10 to-transparent",
  },
  {
    icon: "🎂",
    title: "Cumpleaños",
    description:
      "Celebra un año más con estilo. Barras temáticas, cocteles de autor y la mejor atmósfera para tu fiesta.",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    icon: "🏢",
    title: "Eventos Corporativos",
    description:
      "Eleva tu evento empresarial con un servicio de coctelería profesional que refleja la imagen de tu marca.",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    icon: "🎉",
    title: "Aniversarios",
    description:
      "Marca la ocasión con tragos especiales y un ambiente que hará de tu aniversario algo para recordar.",
    gradient: "from-amber-500/10 to-transparent",
  },
];

export default function Events() {
  return (
    <section id="eventos" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
            Tipos de Eventos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Atendemos{" "}
            <span className="text-gradient">toda clase de eventos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Cada evento es &uacute;nico, y nos encargamos de que la experiencia
            de coctelería sea a la altura.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative text-center p-8 rounded-2xl gold-border glass overflow-hidden"
            >
              {/* Colored gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl mb-5 inline-block"
                >
                  {event.icon}
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
