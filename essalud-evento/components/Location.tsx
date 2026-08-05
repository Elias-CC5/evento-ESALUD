"use client";

import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

export function Location() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Av.+Aviaci%C3%B3n+2576,+San+Borja+15037/@-12.0920365,-77.0032349,17z";
  const wazeUrl =
    "https://waze.com/ul?ll=-12.0920365,-77.0032349&navigate=yes";

  return (
    <section id="ubicacion" className="section-padding relative">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Mapa de Google Maps Incrustado */}
        <Reveal>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-gold-border shadow-soft bg-card">
            <iframe
              title="Ubicación Salón Rubí"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4883492062534!2d-77.0032349!3d-12.0920365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d1228fec2f%3A0x8e2a3eb94d469364!2sAv.%20Aviaci%C3%B3n%202576%2C%20San%20Borja%2015037!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // Filtro CSS para estilizar el mapa al modo oscuro del sitio
              className="w-full h-full grayscale contrast-125 invert brightness-90 hover:grayscale-0 hover:invert-0 transition-all duration-500"
            />
            {/* Badge indicador flotante */}
            <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full flex items-center gap-2 border border-[#d4af37]/30 bg-black/60 backdrop-blur-md pointer-events-none">
              <MapPin className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold text-white">Av. Aviación 2576, San Borja</span>
            </div>
          </div>
        </Reveal>

        {/* Información y Botones de Navegación */}
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
              Un espacio exclusivo ubicado en Av. Aviación 2576, San Borja, preparado
              especialmente para recibir a nuestros 300 invitados en una noche inolvidable.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <GlowButton>
                  <Navigation size={16} />
                  Abrir en Google Maps
                </GlowButton>
              </a>

              <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
                <GlowButton variant="secondary">
                  <Navigation size={16} className="text-[#33ccff]" />
                  Abrir en Waze
                </GlowButton>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}