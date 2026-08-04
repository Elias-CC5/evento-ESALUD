"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users2, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const info = [
  { icon: Building2, label: "Evento", value: "Aniversario del Hospital de Emergencias Grau" },
  { icon: Users2, label: "Organizador", value: "ESSALUD" },
  { icon: CalendarDays, label: "Fecha", value: "15 de Agosto del 2026" },
  { icon: Clock, label: "Hora", value: "7:00 PM — 1:00 AM" },
  { icon: MapPin, label: "Lugar", value: "Salón Rubí, San Borja" },
  { icon: Users2, label: "Asistentes", value: "300 personas" },
];

export function About() {
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
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
              alt="Salón de eventos elegante"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 glass glass-gold-border rounded-2xl p-5"
            >
              <p className="text-xs text-gold uppercase tracking-wider mb-1">Salón Rubí</p>
              <p className="text-sm text-white/90">Un espacio exclusivo para 300 invitados</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
