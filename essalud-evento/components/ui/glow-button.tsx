"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function GlowButton({ children, variant = "primary", className, onClick, href }: GlowButtonProps) {
  const Comp: any = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide overflow-hidden group cursor-pointer",
        variant === "primary"
          ? "bg-gold-gradient text-[#070707] shadow-gold"
          : "glass glass-gold-border text-white",
        className
      )}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold-gradient blur-xl" />
      )}
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}
