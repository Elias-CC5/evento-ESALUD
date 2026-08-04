"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PartyPopper, Gift } from "lucide-react";
import { Reveal, RevealText } from "@/components/ui/reveal";

const characters = [
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop",
];

export function HoraLoca() {
  return (
    <section className="relative section-padding overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom text-center">
        <Reveal>
          <p className="eyebrow mb-4">Hora Loca</p>
        </Reveal>
        <RevealText
          el="h2"
          text="Energía, luces y locura hasta el amanecer"
          className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-tight max-w-3xl mx-auto"
        />

        <Reveal delay={0.2}>
          <p className="text-muted text-lg mt-6 max-w-xl mx-auto">
            El clímax de la noche: personajes, cotillón y música que enciende la pista.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {characters.map((img, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-gold-border"
              >
                <Image
                  src={img}
                  alt={`Personaje hora loca ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-sm font-medium">
                  <PartyPopper size={16} className="text-gold" />
                  Personaje {i + 1}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 inline-flex items-center gap-3 glass glass-gold-border rounded-full px-6 py-3">
            <Gift size={18} className="text-gold" />
            <span className="text-sm text-white/90">
              Incluye 3 personajes a elección — Cortesía
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
