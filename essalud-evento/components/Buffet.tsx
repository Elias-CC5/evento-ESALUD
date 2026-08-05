"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

// Importación de las imágenes locales desde tu carpeta
import imgCriolla from "@/components/imagen/criolla.png";
import imgChina from "@/components/imagen/china.png";
import imgPastas from "@/components/imagen/pastas.png";
import imgSopas from "@/components/imagen/sopas.png";
import imgEnsaladas from "@/components/imagen/ensaladas.png";
import imgPostres from "@/components/imagen/postres.png";
import imgFrutas from "@/components/imagen/frutas.png";

// Link directo a foto de bocaditos/piqueos peruanos
const imgBocaditos = "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop";

const dishes = [
  {
    name: "Comida Criolla",
    img: imgCriolla,
  },
  {
    name: "Comida China",
    img: imgChina,
  },
  {
    name: "Pastas",
    img: imgPastas,
  },
  {
    name: "Sopas",
    img: imgSopas,
  },
  {
    name: "Ensaladas",
    img: imgEnsaladas,
  },
  {
    name: "Bocaditos Chinos",
    img: imgBocaditos,
  },
  {
    name: "Deliciosos Postres",
    img: imgPostres,
  },
  {
    name: "Frutas Frescas",
    img: imgFrutas,
  },
];

export function Buffet() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Buffet Premium</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-4">
            Variedad de opciones,{" "}
            <span className="text-gradient-gold">desde piqueo hasta postre</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-light leading-relaxed">
            Disfruta de una experiencia gastronómica completa con Comida China, Criolla, Pasta, Sopas, Ensaladas, Bocaditos chinos, deliciosos postres y frutas frescas.
          </p>
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