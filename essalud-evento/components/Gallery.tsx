"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Maximize2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

// Importación de imágenes locales
import img1 from "@/components/imagen/img1.png";
import img2 from "@/components/imagen/img2.png";
import img3 from "@/components/imagen/img3.png";
import img4 from "@/components/imagen/img4.png";
import img5 from "@/components/imagen/img5.png";

const items = [
  {
    src: img1,
    title: "Cuadro de Recuerdos",
    category: "Gala & Celebración",
    className: "md:col-span-7 md:row-span-2 h-[340px] md:h-[480px]",
  },
  {
    src: img2,
    title: "Hora Loca VIP",
    category: "Show en Vivo",
    className: "md:col-span-5 md:row-span-1 h-[260px] md:h-[230px]",
  },
  {
    src: img3,
    title: "Fotocall Interactivo",
    category: "Momentos Únicos",
    className: "md:col-span-5 md:row-span-1 h-[260px] md:h-[230px]",
  },
  {
    src: img4,
    title: "Artistas y Personajes",
    category: "Espectáculo",
    className: "md:col-span-5 md:row-span-2 h-[340px] md:h-[460px]",
  },
  {
    src: img5,
    title: "Pista de Baile & Fiesta",
    category: "Ambiente Premium",
    className: "md:col-span-7 md:row-span-2 h-[340px] md:h-[460px]",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Fondo de resplandor sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4 inline-flex items-center gap-2">
            <Sparkles size={14} className="text-[#d4af37]" /> GALERÍA EXCLUSIVA
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
            Momentos que <span className="text-gradient-gold">inspiran</span>
          </h2>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className={item.className}>
              <motion.div
                onClick={() => setSelected(item.src)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-full h-full rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4af37]/70 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] cursor-pointer bg-card"
              >
                {/* Imagen */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlays de gradiente para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Badge Superior */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-black/60 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-md shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Botón flotante central al hacer Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={20} />
                  </div>
                </div>

                {/* Información en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-display font-semibold text-lg md:text-xl group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox al hacer click */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-pointer"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white flex items-center justify-center transition-all duration-300 z-20"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl"
            >
              <Image
                src={selected}
                alt="Fotografía ampliada"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}