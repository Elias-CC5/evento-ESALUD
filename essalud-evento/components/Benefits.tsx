"use client";

import { motion } from "framer-motion";
import {
  Gem, UtensilsCrossed, MonitorPlay, Music4, Disc3, ArrowUpDown,
  Presentation, Mic2, Sparkles, Armchair, ConciergeBell, ShieldCheck,
  CircleParking, Wine,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  { icon: Gem, title: "Salón Exclusivo", desc: "Espacio privado de alto nivel para 300 invitados." },
  { icon: UtensilsCrossed, title: "Buffet Premium", desc: "Estaciones gourmet con variedad internacional." },
  { icon: MonitorPlay, title: "Pantalla de 160\"", desc: "Proyección de alta definición para el show." },
  { icon: Music4, title: "Orquesta en Vivo", desc: "Repertorio en vivo para toda la noche." },
  { icon: Disc3, title: "DJ Profesional", desc: "Sets curados para cada momento del evento." },
  { icon: ArrowUpDown, title: "Ascensor", desc: "Acceso cómodo y accesible al salón." },
  { icon: Presentation, title: "Estrado", desc: "Escenario preparado para el show principal." },
  { icon: Mic2, title: "Micrófono", desc: "Equipo de sonido de calidad profesional." },
  { icon: Sparkles, title: "Luces Inteligentes", desc: "Iluminación dinámica sincronizada." },
  { icon: Armchair, title: "Mesas Elegantes", desc: "Montaje refinado con mantelería premium." },
  { icon: ConciergeBell, title: "Mozos Profesionales", desc: "Atención dedicada durante todo el evento." },
  { icon: ShieldCheck, title: "Seguridad Privada", desc: "Resguardo discreto y profesional." },
  { icon: CircleParking, title: "Estacionamiento", desc: "Espacio disponible para los invitados." },
  { icon: Wine, title: "Corcho Libre", desc: "Servicio de bebidas durante la celebración." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding relative">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Beneficios incluidos</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Todo pensado para una{" "}
            <span className="text-gradient-gold">experiencia impecable</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 6) * 0.06}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.4)" }}
                className="glass rounded-2xl p-6 h-full border border-white/5 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <b.icon size={22} />
                </div>
                <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
