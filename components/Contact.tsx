"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(212, 168, 83, 1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
            Contáctanos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Reserva tu <span className="text-gradient">evento</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Escríbenos por Instagram o TikTok y te atenderemos con gusto. Las
            mejores fechas vuelan, ¡reserva con tiempo!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/bocadillo.openbar/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-2xl gold-border glass text-center hover:bg-gold-400/[0.03] transition-all duration-500 overflow-hidden"
          >
            {/* Gradient bg on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E1306C]/20 to-[#F77737]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-7 h-7 text-[#E1306C]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-white font-serif text-lg font-semibold mb-2">
                Instagram
              </h3>
              <p className="text-gold-400 text-sm font-medium">
                @bocadillo.openbar
              </p>
              <p className="text-gray-500 text-xs mt-3">
                Síguenos y escríbenos
              </p>
            </div>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@bocadillo.openbar1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative p-8 rounded-2xl gold-border glass text-center hover:bg-gold-400/[0.03] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.81-.07l.62.04z" />
                </svg>
              </div>
              <h3 className="text-white font-serif text-lg font-semibold mb-2">
                TikTok
              </h3>
              <p className="text-gold-400 text-sm font-medium">
                @bocadillo.openbar1
              </p>
              <p className="text-gray-500 text-xs mt-3">
                Mira nuestros videos
              </p>
            </div>
          </motion.a>
        </div>

        {/* Info badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full glass gold-border">
            <span className="text-gold-400 text-sm">📍</span>
            <span className="text-gray-300 text-sm">Lima, Perú</span>
            <span className="w-1 h-1 rounded-full bg-gold-500/30" />
            <span className="text-gray-300 text-sm">🇵🇪</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
