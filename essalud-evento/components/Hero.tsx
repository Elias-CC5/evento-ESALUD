"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { RevealText } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

const floatingCards = [
  { icon: Calendar, label: "15 Agosto 2026", top: "22%", left: "6%", delay: 0 },
  { icon: MapPin, label: "Salón Rubí · San Borja", top: "68%", left: "5%", delay: 0.2 },
  { icon: Users, label: "300 Invitados de Gala", top: "65%", right: "6%", delay: 0.4 },
];

const cubicBezierEase = [0.16, 1, 0.3, 1];

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Posición del cursor en coordenadas normalizadas [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Posición en píxeles absolutos para la luz de cursor
  const cursorPxX = useMotionValue(0);
  const cursorPxY = useMotionValue(0);

  // Physics Springs ultra suaves
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const springPxX = useSpring(cursorPxX, { stiffness: 60, damping: 25 });
  const springPxY = useSpring(cursorPxY, { stiffness: 60, damping: 25 });

  // Transformaciones 3D Parallax
  const bgX = useTransform(springX, [-0.5, 0.5], ["12px", "-12px"]);
  const bgY = useTransform(springY, [-0.5, 0.5], ["12px", "-12px"]);
  
  const floatX = useTransform(springX, [-0.5, 0.5], ["-35px", "35px"]);
  const floatY = useTransform(springY, [-0.5, 0.5], ["-35px", "35px"]);
  
  const tiltX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
      cursorPxX.set(e.clientX);
      cursorPxY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorPxX, cursorPxY]);

  return (
    <section
      id="inicio"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070707] select-none perspective-[1000px]"
    >
      {/* 1. Cursor Spotlight (Luz Dorada interactiva que sigue el ratón) */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 lg:opacity-100 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [springPxX, springPxY],
            ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(212,175,55,0.08), transparent 80%)`
          ),
        }}
      />

      {/* 2. Fondo con Parallax y Zoom de Carga */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 -z-30 w-full h-full scale-105"
      >
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.5, ease: cubicBezierEase }}
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop"
          alt="Aniversario Hospital de Emergencias Grau - EsSalud"
          className="w-full h-full object-cover object-center"
        />

        {/* Viñeta de degradados para asegurar lecturas legibles */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/40 to-[#070707]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
      </motion.div>

      {/* 3. Haz de Luz de Fondo Animado (Glow respirable) */}
      <motion.div
        animate={{
          opacity: [0.25, 0.55, 0.25],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-amber-500/10 via-[#d4af37]/20 to-amber-600/10 blur-[140px] rounded-full pointer-events-none -z-20"
      />

      {/* 4. Partículas Doradas Orgánicas */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.85, 0.1],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 5. Tarjetas Flotantes 3D con Tilt en Profundidad */}
      <motion.div 
        style={{ x: floatX, y: floatY, rotateX: tiltX, rotateY: tiltY }}
        className="hidden lg:block absolute inset-0 pointer-events-none z-10 transform-style-3d"
      >
        {floatingCards.map(({ icon: Icon, label, top, left, right, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 + delay, ease: cubicBezierEase }}
            className="absolute"
            style={{ top, left, right }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="glass glass-gold-border px-4 py-3 rounded-2xl flex items-center gap-3.5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer group transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-amber-500/10 text-[var(--gold)] border border-amber-500/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/20 transition-all duration-300">
                <Icon size={16} />
              </div>
              <span className="text-xs font-semibold tracking-wide text-zinc-100 group-hover:text-amber-200 transition-colors whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* 6. Contenido Central */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center pt-24 pb-12 px-4">
        
        {/* Eyebrow con Efecto Shimmer de Luz */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: cubicBezierEase }}
          className="relative overflow-hidden inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass-gold-border bg-black/50 group"
        >
          {/* Shimmer sweep animado */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -skew-x-12"
          />
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)] animate-pulse" />
          <span className="eyebrow text-[11px] relative z-10">
            ESSALUD · NOCHE DE GALA
          </span>
        </motion.div>

        {/* Título Principal Revelado Palabra por Palabra */}
        <RevealText
          el="h1"
          text="Aniversario del Hospital de Emergencias Grau"
          delay={0.3}
          className="font-display font-bold leading-[1.05] tracking-tight text-[clamp(2.4rem,5.5vw,4.8rem)] max-w-5xl text-gradient-gold drop-shadow-2xl"
        />

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: cubicBezierEase }}
          className="mt-6 text-base md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed tracking-wide text-muted"
        >
          Una celebración exclusiva orientada a honrar la trayectoria, el compromiso insustituible
          y la vocación de servicio de nuestra prestigiosa comunidad médica.
        </motion.p>

        {/* Botones con Micro-Interacciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: cubicBezierEase }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <GlowButton href="#contacto" className="w-full sm:w-auto min-w-[210px] shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-shadow">
            Confirmar Asistencia
          </GlowButton>
          <GlowButton href="#evento" variant="secondary" className="w-full sm:w-auto min-w-[210px]">
            Ver Detalles
          </GlowButton>
        </motion.div>
      </div>

      {/* 7. Indicador de Scroll Interactivo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#evento"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-400 hover:text-[var(--gold)] transition-colors group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold group-hover:tracking-[0.4em] transition-all">
            Descubrir
          </span>
          <ChevronDown size={16} className="text-[var(--gold)] group-hover:translate-y-0.5 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}