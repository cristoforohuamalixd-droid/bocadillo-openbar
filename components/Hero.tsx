"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        color: `rgba(212, 168, 83, ${Math.random() * 0.4 + 0.1})`,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0d0a] to-[#0a0a0a]" />

        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 168, 83, 1) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{
              x: [0, -40, 20, 0],
              y: [0, 30, -20, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, rgba(184, 134, 11, 1) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                background: p.color,
              }}
              initial={{
                y: "110vh",
                opacity: 0,
              }}
              animate={{
                y: "-10vh",
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212, 168, 83, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 168, 83, 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-border text-gold-400 text-[11px] tracking-[0.25em] uppercase font-sans bg-gold-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Servicio Profesional de Coctelería
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[0.95] tracking-tight"
        >
          <span className="text-white block">Bocadillo</span>
          <span className="text-gradient block mt-2">Open Bar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light mb-3 max-w-2xl mx-auto tracking-wide"
        >
          Bartenders Profesionales &bull; Barra M&oacute;vil
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.55 }}
          className="text-gray-600 text-sm sm:text-base font-light mb-12 max-w-xl mx-auto"
        >
          Tragos premium que sorprenden. Llevamos la magia del bar a tu
          celebraci&oacute;n.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-300 font-semibold rounded-full text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 gold-glow hover:gold-glow-lg"
          >
            <span className="relative z-10">Reserva tu Evento</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#servicios"
            className="px-10 py-4 gold-border text-gold-400 rounded-full hover:bg-gold-400/5 transition-all duration-300 text-sm tracking-wider uppercase"
          >
            Nuestros Servicios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { number: "200+", label: "Eventos" },
            { number: "5+", label: "Años" },
            { number: "100%", label: "Satisfacción" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gradient group-hover:text-gradient-reverse transition-all duration-500">
                {stat.number}
              </div>
              <div className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-1.5 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-sans">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-gold-500/20 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-gold-400/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
