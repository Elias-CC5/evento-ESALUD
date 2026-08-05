"use client";

import { motion } from "framer-motion";
import {
  Gem, UtensilsCrossed, Sparkles, ShieldCheck,
  CheckCircle2, Music, Tv, GlassWater
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const categories = [
  {
    icon: Gem,
    title: "Lugar & Confort",
    highlight: "Salón Exclusivo",
    desc: "Ambiente de alto nivel para 300 invitados.",
    features: ["Mesas elegantes y mantelería", "Acceso por ascensor", "Estacionamiento privado"],
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomía",
    highlight: "Buffet Premium",
    desc: "Estaciones gourmet con variedad internacional.",
    features: ["Atención de mozos profesionales", "Servicio de Corcho Libre", "Atención dedicada"],
  },
  {
    icon: Sparkles,
    title: "Producción & Show",
    highlight: "Audio e Iluminación",
    desc: "Equipamiento audiovisual de nivel profesional.",
    features: ["Pantalla de 160\" HD", "Luces inteligentes", "Estrado y micrófonos"],
  },
  {
    icon: Music,
    title: "Música & Seguridad",
    highlight: "Orquesta & DJ",
    desc: "Entretenimiento continuo para toda la velada.",
    features: ["Orquesta en vivo", "DJ con set curado", "Seguridad privada discreta"],
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 relative bg-black/40">
      <div className="container-custom px-4 max-w-6xl mx-auto">
        
        {/* Cabecera */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-2">
            Servicios Incluidos
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Todo listo para una{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff5d6] via-[#d4af37] to-[#aa820a]">
              noche memorable
            </span>
          </h2>
        </Reveal>

        {/* Grid de 4 Bloques Compactos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/20 backdrop-blur-sm flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300"
              >
                <div>
                  {/* Icono + Título */}
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#d4af37] flex items-center justify-center mb-4">
                    <cat.icon size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{cat.highlight}</h3>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{cat.desc}</p>
                  
                  {/* Lista de características integradas */}
                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {cat.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={13} className="text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}