import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Timeline } from "@/components/Timeline";
import { Benefits } from "@/components/Benefits";
import { Buffet } from "@/components/Buffet";
import { Gallery } from "@/components/Gallery";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white overflow-x-hidden">
      {/* Capa de textura global definida en tu CSS */}
      <div className="noise-overlay" />

      {/* Estructura de la Landing Page */}
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Timeline />
      <Benefits />
      <Buffet />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}