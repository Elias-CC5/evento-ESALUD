"use client";

import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlowButton } from "@/components/ui/glow-button";

export function Contact() {
  return (
    <section id="contacto" className="section-padding relative">
      <div className="container-custom flex justify-center">
        <Reveal className="w-full max-w-xl">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass glass-gold-border rounded-3xl p-10 text-center shadow-soft"
          >
            <p className="eyebrow mb-4">Contacto</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] mb-8">
              ¿Tienes alguna <span className="text-gradient-gold">consulta?</span>
            </h2>

            <div className="flex flex-col items-center gap-5 mb-10">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                  <User size={18} />
                </div>
                <span className="font-medium">Francisco Peña</span>
              </div>
              <a
                href="mailto:fpena1965@yahoo.es"
                className="flex items-center gap-3 text-muted hover:text-gold transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                  <Mail size={18} />
                </div>
                <span>fpena1965@yahoo.es</span>
              </a>
              <a
                href="tel:976826074"
                className="flex items-center gap-3 text-muted hover:text-gold transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                  <Phone size={18} />
                </div>
                <span>976 826 074</span>
              </a>
            </div>

            <GlowButton href="mailto:fpena1965@yahoo.es" className="w-full">
              Contactar
            </GlowButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
