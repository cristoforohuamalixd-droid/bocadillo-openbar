"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          timer = setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
        >
          {/* Background radial */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(212, 168, 83, 0.3) 0%, transparent 50%)",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4 animate-float">🍸</div>
              <h1 className="font-serif text-3xl font-bold text-gradient">
                Bocadillo
              </h1>
              <p className="text-gold-500/60 text-xs tracking-[0.3em] uppercase mt-1">
                Open Bar
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-gold-500/10 mx-auto relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-xs tracking-widest uppercase mt-4"
            >
              Preparando tu experiencia
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
