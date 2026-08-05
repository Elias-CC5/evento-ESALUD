"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { time: "07:00 PM", title: "Recepción", desc: "Bienvenida exclusiva con cóctel de honor." },
  { time: "07:30 PM", title: "Protocolo", desc: "Palabras de apertura e institucional." },
  { time: "08:00 PM", title: "Cena Buffet", desc: "Estaciones gastronómicas gourmet internacionales." },
  { time: "09:30 PM", title: "Show Principal", desc: "Presentación artística y espectáculo central." },
  { time: "10:30 PM", title: "Hora Loca", desc: "Personajes en vivo, cotillón premium y energía." },
  { time: "11:15 PM", title: "Orquesta", desc: "Música en vivo para toda la velada." },
  { time: "01:00 AM", title: "Cierre", desc: "Brindis de despedida y agradecimiento final." },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="cronograma" className="py-20 relative overflow-hidden bg-[#0a0a0c]">
      {/* Resplandor de fondo, más contenido */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-amber-500/[0.08] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container-custom px-4 max-w-3xl mx-auto">

        {/* Cabecera */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-4">
            <Sparkles size={12} />
            <span>Itinerario de la noche</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Minuto a minuto de una{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff5d6] via-[#d4af37] to-[#aa820a]">
              noche inolvidable
            </span>
          </h2>
        </Reveal>

        {/* Timeline vertical, una sola columna: más corto y legible */}
        <div ref={containerRef} className="relative pl-9 md:pl-12">

          {/* Riel base, tenue */}
          <div className="absolute left-[11px] md:left-[15px] top-1 bottom-1 w-px bg-white/10" />

          {/* Riel dorado que se dibuja con el scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[11px] md:left-[15px] top-1 w-px bg-gradient-to-b from-[#d4af37] via-[#fff5d6] to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"
          />

          <div className="space-y-1">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative py-4"
              >
                {/* Nodo numerado */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="absolute left-[-36px] md:left-[-48px] top-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0a0a0c] border border-amber-500/40 flex items-center justify-center text-[10px] md:text-xs font-bold text-[#d4af37] group-hover:border-amber-400 group-hover:shadow-[0_0_14px_rgba(212,175,55,0.35)] transition-all duration-300"
                >
                  {i + 1}
                </motion.div>

                {/* Contenido */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 pb-4 border-b border-white/[0.06] group-hover:border-amber-500/20 transition-colors duration-300">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] shrink-0 mb-1 sm:mb-0 sm:w-24">
                    <Clock size={11} />
                    {step.time}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#fff5d6] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}