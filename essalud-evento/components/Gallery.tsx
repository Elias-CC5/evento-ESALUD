"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const images = [
  { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop", tall: true },
  { src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop", tall: true },
  { src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1200&auto=format&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop", tall: true },
];

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Galería</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            Momentos que <span className="text-gradient-gold">inspiran</span>
          </h2>
        </Reveal>

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1}>
              <motion.button
                onClick={() => setSelected(img.src)}
                whileHover={{ scale: 1.02 }}
                className={`relative w-full block rounded-2xl overflow-hidden glass-gold-border break-inside-avoid group ${
                  img.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={`Galería ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image src={selected} alt="Imagen ampliada" fill className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
