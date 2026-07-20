"use client";

import { motion } from "framer-motion";

const galleryItems = [
  {
    type: "video",
    embed: "https://www.tiktok.com/embed/v2/7567899781884939540",
    caption: "Lo que hacemos no es solo servir",
    tags: ["Eventos", "Coctelería"],
  },
  {
    type: "video",
    embed: "https://www.tiktok.com/embed/v2/7653887916053122324",
    caption: "Lo que callamos los bartenders",
    tags: ["Behind the Scenes", "Bartenders"],
  },
  {
    type: "video",
    embed: "https://www.tiktok.com/embed/v2/7563329895171132692",
    caption: "Barras temáticas y cocteles premium",
    tags: ["Premium", "Barras"],
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-32 px-4 relative overflow-hidden">
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
            Galería
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Momentos que{" "}
            <span className="text-gradient">capturamos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Mira nuestros eventos en acción. Cada momento es una historia de
            sabor y diversión.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden gold-border glass"
            >
              <div className="aspect-[9/16] max-h-[500px] mx-auto w-full relative">
                <iframe
                  src={item.embed}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="p-5">
                <p className="text-gray-200 text-sm font-medium mb-2">
                  {item.caption}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-gold-400/10 text-gold-400/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.tiktok.com/@bocadillo.openbar1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 gold-border rounded-full text-gold-400 text-sm hover:bg-gold-400/5 transition-all duration-300"
          >
            <span className="tracking-wider uppercase">
              Ver más en TikTok
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
