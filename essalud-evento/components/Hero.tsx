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
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video de fondo (placeholder) */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://i.ytimg.com/vi/vC7lKFi6RPw/maxresdefault.jpg"
        >
          <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 26 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-light/60"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.9, 0.2],
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

      {/* Glass cards flotando */}
      <div className="hidden md:block">
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
              className="glass glass-gold-border rounded-2xl px-5 py-3 flex items-center gap-3 shadow-soft"
            >
              <Icon className="text-gold" size={18} />
              <span className="text-sm text-white/90 whitespace-nowrap">{label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          ESSALUD
        </motion.p>

        <RevealText
          el="h1"
          text="Aniversario del Hospital de Emergencias Grau"
          delay={0.3}
          className="font-display font-bold leading-[1.05] text-[clamp(2.4rem,7vw,6rem)] max-w-5xl text-gradient-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl"
        >
          Una noche de gala para celebrar el compromiso, la excelencia y la vocación
          de servicio de nuestro hospital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <GlowButton href="#contacto">Confirmar Asistencia</GlowButton>
          <GlowButton href="#evento" variant="secondary">
            Ver Detalles
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted"
        >
          <span>15 de Agosto del 2026</span>
          <span className="hidden sm:inline text-gold">•</span>
          <span>Salón Rubí — San Borja</span>
          <span className="hidden sm:inline text-gold">•</span>
          <span>300 Invitados</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
