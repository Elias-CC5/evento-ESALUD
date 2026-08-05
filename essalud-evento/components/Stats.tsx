"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

const CONFIRMED = 208;
const INVITED = 300;
const PERCENT = Math.round((CONFIRMED / INVITED) * 100);

const RADIUS = 88;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const sideStats = [
  { value: 7, suffix: " PM", label: "Inicio" },
  { value: 6, suffix: "h", label: "Duración" },
  { value: 100, suffix: "%", label: "Experiencia Premium" },
];

export function Stats() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  const dashOffset = CIRCUMFERENCE * (1 - CONFIRMED / INVITED);

  return (
    <section className="section-padding relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] bg-amber-500/[0.06] blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="grid md:grid-cols-[minmax(0,340px)_1fr] gap-14 md:gap-10 items-center">

          {/* Gráfico circular: la confirmación es el hecho más importante, así que es el protagonista */}
          <Reveal className="mx-auto md:mx-0">
            <p className="eyebrow text-center md:text-left mb-6">Confirmaciones</p>

            <div ref={chartRef} className="relative w-[220px] h-[220px] mx-auto md:mx-0">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full -rotate-90"
              >
                {/* Riel base */}
                <circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="10"
                />
                {/* Progreso dorado */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  initial={{ strokeDashoffset: CIRCUMFERENCE }}
                  animate={isInView ? { strokeDashoffset: dashOffset } : {}}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.5))" }}
                />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff5d6" />
                    <stop offset="55%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#aa820a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Centro: número que cuenta hacia arriba */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Counter
                  value={CONFIRMED}
                  suffix=""
                  className="font-display font-bold text-[2.6rem] leading-none text-gradient-gold"
                />
                <span className="text-muted text-xs uppercase tracking-widest mt-2">
                  Confirmados
                </span>
              </div>
            </div>

            <p className="text-center md:text-left text-muted text-sm mt-6 leading-relaxed">
              <span className="text-[#e6c76b] font-semibold">{PERCENT}%</span> de los invitados
              ya aceptaron la invitación —{" "}
              <span className="text-white font-medium">{CONFIRMED} de {INVITED}</span> personas
              nos acompañarán esa noche.
            </p>
          </Reveal>

          {/* Datos secundarios, ya sin competir por atención con el gráfico */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
            {sideStats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.1}>
                <div className="text-center md:text-left border-t border-white/10 pt-5">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.4rem)] text-white block"
                  />
                  <p className="text-muted text-xs mt-2 tracking-widest uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}