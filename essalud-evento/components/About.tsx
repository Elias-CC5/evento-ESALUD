"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users2, Building2, Wine } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

// Importación de las imágenes locales de Rubí
import rubi1 from "@/components/imagen/RUBI.jpeg";
import rubi2 from "@/components/imagen/RUBI2.png";
import rubi3 from "@/components/imagen/RUBI3.png";

const rubiImages = [rubi1, rubi2, rubi3];

const info = [
  { icon: Building2, label: "Evento", value: "Aniversario del Hospital de Emergencias Grau" },
  { icon: Users2, label: "Organizador", value: "ESSALUD" },
  { icon: CalendarDays, label: "Fecha", value: "15 de Agosto del 2026" },
  { icon: Clock, label: "Hora", value: "7:00 PM — 1:00 AM" },
  { icon: MapPin, label: "Lugar", value: "Salón Rubí, San Borja" },
  { icon: Wine, label: "Corcho Libre", value: "Vino / Champagne (1 Botella de Whisky c/10 pers.)" },
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rubiImages.length);
    }, 4000); // Transición cada 4 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="evento" className="section-padding relative">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Sobre el evento</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-6">
              Una celebración a la altura de{" "}
              <span className="text-gradient-gold">nuestra historia</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl">
              Reunimos a nuestra comunidad hospitalaria en una velada exclusiva,
              diseñada para honrar años de dedicación y servicio. Una noche de gala
              con detalles cuidados, gastronomía premium y entretenimiento en vivo.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 flex items-start gap-4 h-full"
                >
                  <div className="p-2.5 rounded-xl bg-gold/10 text-gold shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft glass-gold-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={rubiImages[currentImageIndex]}
                  alt="Salón de eventos Rubí"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Indicadores de diapositiva (puntos) */}
            <div className="absolute top-4 right-4 z-10 flex gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {rubiImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-[#d4af37] w-5" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Banner Flotante de Corcho Libre */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 glass glass-gold-border rounded-2xl p-5 z-10 backdrop-blur-xl bg-black/60"
            >
              <div className="flex items-center gap-2 mb-1">
                <Wine size={16} className="text-[#d4af37]" />
                <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                  Corcho Libre
                </p>
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-light">
                Vino y Champagne ilimitado. Por cada 10 personas puede ingresar 1 botella de Whisky sin recargo.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}