import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ProjectSection from "@/components/ProjectSection";
import CryptoSection from "@/components/CryptoSection";
import BrandSection from "@/components/BrandSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-dark-bg text-white overflow-x-hidden selection:bg-neon-green/30 selection:text-white">
      {/* Dynamic Background Spotlights for overall flow */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-neon-green/[0.03] to-transparent pointer-events-none z-0" />
      
      {/* Structural layout grid overlay (extremely subtle cyber grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />

      {/* Global Translucent Navbar */}
      <Navbar />

      {/* Hero Mockup Area */}
      <Hero />

      {/* Quick Statistics Counter */}
      <Stats />

      {/* Custom spotlight core utilities */}
      <Features />

      {/* Concentric rotating orbits panel */}
      <ProjectSection />

      {/* SVG pulsing crypto connection hub */}
      <CryptoSection />

      {/* Centered puzzle value section */}
      <BrandSection />

      {/* Closing CTA engagement block */}
      <CTA />

      {/* Structured responsive footer */}
      <Footer />
    </main>
  );
}
