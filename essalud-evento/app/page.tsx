import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Benefits } from "@/components/Benefits";
import { Buffet } from "@/components/Buffet";
import { HoraLoca } from "@/components/HoraLoca";
import { Gallery } from "@/components/Gallery";
import { Stats } from "@/components/Stats";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Benefits />
      <Buffet />
      <HoraLoca />
      <Gallery />
      <Stats />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
