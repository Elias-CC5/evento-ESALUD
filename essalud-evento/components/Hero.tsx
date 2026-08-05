"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Users } from "lucide-react";
import { RevealText } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

const floatingCards = [
  { icon: Calendar, label: "15 Agosto 2026", top: "18%", left: "8%", delay: 0.2 },
  { icon: MapPin, label: "Salón Rubí · San Borja", top: "62%", left: "6%", delay: 0.5 },
  { icon: Users, label: "300 Invitados", top: "72%", left: "80%", delay: 0.35 },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Contenedor de la Imagen de Fondo */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          // URL pública directa de Pixabay/Pexels para evitar bloqueos CORS
          src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hospital de Emergencias Grau - EsSalud"
          // Subimos opacidad al 60% para que se aprecie con claridad
          className="w-full h-full object-cover opacity-60 select-none"
        />

        {/* Gradientes aligerados para visibilidad del fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-transparent to-black/80" />
      </div>

      {/* Partículas animadas doradas */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 26 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#d4af37]"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Tarjetas flotantes (Glassmorphism) */}
      <div className="hidden md:block pointer-events-none">
        {floatingCards.map(({ icon: Icon, label, top, left, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 + delay, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-10"
            style={{ top, left }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              className="glass glass-gold-border rounded-2xl px-5 py-3 flex items-center gap-3 shadow-2xl backdrop-blur-md pointer-events-auto"
            >
              <Icon className="text-[#d4af37]" size={18} />
              <span className="text-sm font-medium text-white/90 whitespace-nowrap">{label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center pt-24 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-6 border border-[#d4af37]/30 px-4 py-1.5 rounded-full bg-[#d4af37]/10 backdrop-blur-sm"
        >
          ESSALUD
        </motion.p>

        <RevealText
          el="h1"
          text="Aniversario del Hospital de Emergencias Grau"
          delay={0.3}
          className="font-display font-bold leading-[1.05] text-[clamp(2.4rem,6.5vw,5.5rem)] max-w-5xl text-gradient-gold drop-shadow-md"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 text-base md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
        >
          Una noche de gala para celebrar el compromiso, la excelencia y la vocación
          de servicio de nuestro hospital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
        >
          <GlowButton href="#contacto" className="w-full sm:w-auto">
            Confirmar Asistencia
          </GlowButton>
          <GlowButton href="#evento" variant="secondary" className="w-full sm:w-auto">
            Ver Detalles
          </GlowButton>
        </motion.div>
      </div>

      {/* Control Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#evento"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
          <ChevronDown size={18} className="text-[#d4af37]" />
        </motion.a>
      </motion.div>
    </section>
  );
}