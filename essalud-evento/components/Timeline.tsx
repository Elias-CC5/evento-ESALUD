"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { time: "7:00 PM", title: "Recepción", desc: "Bienvenida con cóctel de honor." },
  { time: "7:30 PM", title: "Bienvenida", desc: "Palabras de apertura e institucional." },
  { time: "8:00 PM", title: "Cena Buffet", desc: "Estaciones gastronómicas premium." },
  { time: "9:30 PM", title: "Show Principal", desc: "Presentación artística central." },
  { time: "10:30 PM", title: "Hora Loca", desc: "Personajes, cotillón y energía total." },
  { time: "11:15 PM", title: "Orquesta", desc: "Música en vivo hasta el amanecer." },
  { time: "1:00 AM", title: "Cierre", desc: "Despedida y agradecimiento final." },
];

export function Timeline() {
  return (
    <section id="cronograma" className="section-padding relative">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-4">Cronograma</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            El recorrido de la <span className="text-gradient-gold">noche</span>
          </h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div
                  className={`relative flex items-start md:items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full glass glass-gold-border flex items-center justify-center">
                    <motion.span
                      className="w-2.5 h-2.5 rounded-full bg-gold"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`glass rounded-2xl p-6 flex-1 md:max-w-sm ${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p className="text-gold text-sm font-semibold tracking-wide mb-1">
                      {step.time}
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
