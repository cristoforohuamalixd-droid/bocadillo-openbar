"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    name: "Cocktails Clásicos",
    icon: "🍸",
    items: [
      { name: "Mojito", description: "Ron, menta, limón, soda", strong: true },
      {
        name: "Old Fashioned",
        description: "Bourbon, azúcar, bitter, naranja",
        strong: false,
      },
      {
        name: "Margarita",
        description: "Tequila, triple sec, limón",
        strong: true,
      },
      { name: "Caipirinha", description: "Cachaça, lima, azúcar", strong: false },
      { name: "Negroni", description: "Gin, Campari, vermú", strong: true },
      { name: "Daiquiri", description: "Ron, limón, azúcar", strong: false },
      { name: "Piña Colada", description: "Ron, piña, crema de coco", strong: false },
      { name: "Cosmopolitan", description: "Vodka, triple sec, arándano, lima", strong: true },
    ],
  },
  {
    name: "Cocktails de Autor",
    icon: "✨",
    items: [
      {
        name: "Bocadillo Special",
        description: "Nuestra firma exclusiva",
        strong: true,
      },
      { name: "Sol de Lima", description: "Pisco, maracuyá, gengibre", strong: true },
      {
        name: "Noche Dorada",
        description: "Whisky, honey, lima, rosa",
        strong: false,
      },
      {
        name: "Tropical Sunset",
        description: "Ron, mango, passión, coco",
        strong: true,
      },
      {
        name: "Fuego Andino",
        description: "Pisco, ají, limón, miel",
        strong: false,
      },
      {
        name: "Luna Peruana",
        description: "Pisco, chirimoya, hierbabuena",
        strong: true,
      },
      {
        name: "Sabor Amazónico",
        description: "Pisco, aguaje, lime, soda",
        strong: false,
      },
      {
        name: "Corazón de Oro",
        description: "Ron dorado, maracuyá, saffron",
        strong: true,
      },
    ],
  },
  {
    name: "Mocktails",
    icon: "🍹",
    items: [
      {
        name: "Virgin Mojito",
        description: "Menta, limón, soda, azúcar",
        strong: false,
      },
      {
        name: "Sunset Libre",
        description: "Maracuyá, naranja, grenetina",
        strong: false,
      },
      {
        name: "Berry Fresh",
        description: "Frutos rojos, limón, hibisco",
        strong: false,
      },
      {
        name: "Cucumber Cooler",
        description: "Pepino, lima, menta, soda",
        strong: false,
      },
      {
        name: "Tropical Bliss",
        description: "Mango, piña, coco, limón",
        strong: false,
      },
      {
        name: "Ginger Fizz",
        description: "Jengibre, limón, miel, soda",
        strong: false,
      },
      {
        name: "Lemonade Rose",
        description: "Limón, pétalos de rosa, soda",
        strong: false,
      },
      {
        name: "Choco Mint",
        description: "Chocolate, menta, leche, hielo",
        strong: false,
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="carta" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(212, 168, 83, 0.5) 100px, rgba(212, 168, 83, 0.5) 101px)",
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
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
            Nuestra Carta
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Cocteles que{" "}
            <span className="text-gradient">sorprenden</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Una selección curada de cócteles clásicos, creaciones de autor y
            opciones sin alcohol para todos los gustos.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.name}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-gold-600 to-gold-500 text-dark-300 font-semibold shadow-lg shadow-gold-600/20"
                  : "gold-border text-gray-400 hover:text-gold-400 hover:bg-gold-400/5"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span className="tracking-wide">{cat.name}</span>
              {activeCategory === index && (
                <span className="ml-1 text-dark-300/60 text-xs">
                  {cat.items.length}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {categories[activeCategory].items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl gold-border glass hover:bg-gold-400/[0.03] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full bg-gold-600/15 flex items-center justify-center text-gold-400 text-xs font-serif font-bold shrink-0 group-hover:bg-gold-600/25 transition-colors mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-medium text-sm truncate">
                      {item.name}
                    </h4>
                    {item.strong && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold-400/10 text-gold-400 uppercase tracking-wider shrink-0">
                        Top
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass gold-border">
            <span className="text-gold-400 text-sm">🍸</span>
            <span className="text-gray-500 text-xs">
              La carta puede personalizarse según el tipo de evento y
              preferencias del cliente.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
