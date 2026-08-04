"use client";

import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

export function Location() {
  return (
    <section id="ubicacion" className="section-padding relative">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-gold-border shadow-soft bg-card flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative flex flex-col items-center gap-3 text-center px-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin className="text-gold" size={28} />
              </div>
              <p className="text-white font-semibold">Salón Rubí</p>
              <p className="text-muted text-sm">San Borja, Lima</p>
              <p className="text-xs text-muted/70">Mapa referencial — se actualizará con la ubicación exacta</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">Ubicación</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight mb-6">
              Te esperamos en el{" "}
              <span className="text-gradient-gold">Salón Rubí</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
              Un espacio exclusivo ubicado en San Borja, preparado especialmente
              para recibir a nuestros 300 invitados en una noche inolvidable.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <GlowButton>
              <Navigation size={16} />
              Ver Ubicación
            </GlowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
