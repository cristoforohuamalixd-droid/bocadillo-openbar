"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decorative element */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.04] pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gold-400 blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 text-[11px] tracking-[0.25em] uppercase font-sans">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">
              Llevamos la{" "}
              <span className="text-gradient">fiesta a otro nivel</span>
            </h2>
            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">
                En{" "}
                <strong className="text-gold-400 font-medium">
                  Bocadillo Open Bar
                </strong>
                , creemos que cada evento merece una experiencia de coctelería
                inolvidable. Somos un equipo de bartenders profesionales
                apasionados por crear momentos especiales tras la barra.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Desde bodas &iacute;ntimas hasta grandes eventos corporativos,
                llevamos nuestra barra m&oacute;vil, los mejores ingredientes y
                toda la energ&iacute;a necesaria para que tu celebraci&oacute;n
                sea &uacute;nica.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {[
                { icon: "🍸", label: "Tragos Premium" },
                { icon: "🎯", label: "Atención Top" },
                { icon: "✨", label: "Estilo Único" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-sm group-hover:bg-gold-400/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative corner */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg" />

            <div className="relative rounded-2xl overflow-hidden gold-border glass p-10">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(212, 168, 83, 0.5) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 text-center py-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-7xl mb-8 inline-block"
                >
                  🍹
                </motion.div>
                <blockquote className="font-serif text-xl sm:text-2xl italic text-gold-300 mb-6 leading-relaxed">
                  &ldquo;Lo que hacemos no es solo servir tragos, es crear
                  experiencias que se recuerdan.&rdquo;
                </blockquote>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto mb-5" />
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-sans">
                  &mdash; Bocadillo Open Bar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
