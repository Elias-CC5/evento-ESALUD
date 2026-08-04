"use client";

import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

const stats = [
  { value: 300, suffix: "", label: "Invitados" },
  { value: 7, suffix: " PM", label: "Inicio" },
  { value: 6, suffix: "h", label: "Duración" },
  { value: 100, suffix: "%", label: "Experiencia Premium" },
];

export function Stats() {
  return (
    <section className="section-padding relative border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div>
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] text-gradient-gold block"
                />
                <p className="text-muted text-sm mt-2 tracking-wide uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
