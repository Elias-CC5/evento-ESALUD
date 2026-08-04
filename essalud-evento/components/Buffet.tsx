"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const dishes = [
  { name: "Comida Criolla", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop" },
  { name: "Comida China", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop" },
  { name: "Pastas", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },
  { name: "Ensaladas", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop" },
  { name: "Sopas", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop" },
  { name: "Postres", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop" },
  { name: "Frutas", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop" },
  { name: "Bocaditos", img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop" },
];

export function Buffet() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Buffet Premium</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Un menú diseñado para{" "}
            <span className="text-gradient-gold">sorprender el paladar</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-gold-border group"
              >
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm md:text-base">{dish.name}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
