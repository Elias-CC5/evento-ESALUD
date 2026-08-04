"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/glow-button";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Evento", href: "#evento" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cronograma", href: "#cronograma" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3 shadow-soft" : "bg-transparent py-6"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
            ESS<span className="text-gradient-gold">ALUD</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GlowButton href="#contacto" className="px-6 py-3 text-xs">
            Confirmar Asistencia
          </GlowButton>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass overflow-hidden mt-4 mx-4 rounded-2xl"
          >
            <ul className="flex flex-col gap-1 p-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <GlowButton href="#contacto" className="w-full">
                  Confirmar Asistencia
                </GlowButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
