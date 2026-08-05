"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: RevealProps) {
  const dynamicVariants: Variants = {
    hidden: { opacity: 0, y: y, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={dynamicVariants}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  el?: ElementType;
}

export function RevealText({
  text,
  className = "",
  delay = 0,
  el: Tag = "h1",
}: RevealTextProps) {
  return (
    <Tag className={className}>
      <motion.span
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </Tag>
  );
}