"use client";

import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

// Ícono exacto Pin de Google Maps
function GoogleMapsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
      <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#4285F4" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.74L12 22l5.59-8.26C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7z" fill="#FBBC04" fillOpacity="0.3" />
    </svg>
  );
}

// Ícono exacto de la Carita de Waze
function WazeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      {/* Cuerpo Celeste Waze */}
      <path
        d="M26.2 13.5C26.2 7.7 21.3 3 15.2 3C9.1 3 4.2 7.7 4.2 13.5C4.2 16.1 5.2 18.5 6.8 20.3L5.5 24.8C5.3 25.5 5.9 26.2 6.6 26C8.8 25.3 11 25.8 12.9 26.5C13.6 26.8 14.4 27 15.2 27C21.3 27 26.2 22.3 26.2 16.5V13.5Z"
        fill="#33CCFF"
      />
      {/* Ojo Izquierdo */}
      <circle cx="11.5" cy="12.5" r="1.8" fill="#000000" />
      {/* Ojo Derecho */}
      <circle cx="18.5" cy="12.5" r="1.8" fill="#000000" />
      {/* Sonrisa */}
      <path d="M11 17C11.8 18.2 13.3 19 15 19C16.7 19 18.2 18.2 19 17" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
      {/* Rueditas inferiores */}
      <circle cx="9.5" cy="26.5" r="2.2" fill="#000000" />
      <circle cx="20.5" cy="26.5" r="2.2" fill="#000000" />
    </svg>
  );
}

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
                <GlowButton className="gap-2.5">
                  <GoogleMapsIcon size={20} />
                  Abrir en Google Maps
                </GlowButton>
              </a>

              <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
                <GlowButton variant="secondary" className="gap-2.5">
                  <WazeIcon size={22} />
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