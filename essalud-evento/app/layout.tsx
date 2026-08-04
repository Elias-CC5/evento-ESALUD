import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniversario Hospital de Emergencias Grau | ESSALUD",
  description:
    "Celebración por el Aniversario del Hospital de Emergencias Grau. 15 de Agosto del 2026, Salón Rubí, San Borja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <div className="noise-overlay" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
