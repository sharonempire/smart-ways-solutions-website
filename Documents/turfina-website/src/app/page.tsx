import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Surfaces from "@/components/Surfaces";
import Projects from "@/components/Projects";
import BuyerSegments from "@/components/BuyerSegments";
import Process from "@/components/Process";
import BuildPhases from "@/components/BuildPhases";
import Cities from "@/components/Cities";
import GalleryLightbox from "@/components/GalleryLightbox";
import Testimonials from "@/components/Testimonials";
import SurfaceComparison from "@/components/SurfaceComparison";
import StatsCounter from "@/components/StatsCounter";
import EnquireCTA from "@/components/EnquireCTA";
import Footer from "@/components/Footer";
import ScrollNav from "@/components/ScrollNav";
import MarqueeTicker from "@/components/MarqueeTicker";
import ROICalculator from "@/components/ROICalculator";

export default function HomePage() {
  return (
    <>
      <Nav />
      <ScrollNav />
      <main>
        <section id="hero"><Hero /></section>
        <section id="stats"><StatsCounter /></section>

        {/* Ticker 1 — dark, left-scroll after stats */}
        <MarqueeTicker direction="left" speed={50} variant="dark" />

        <Credentials />
        <section id="surfaces"><Surfaces /></section>

        {/* Ticker 2 — green, right-scroll between surfaces and projects */}
        <MarqueeTicker direction="right" speed={38} variant="green" />

        <section id="projects"><Projects /></section>
        <section id="gallery"><GalleryLightbox /></section>
        <BuyerSegments />

        {/* Ticker 3 — dark, left-scroll before comparison */}
        <MarqueeTicker direction="left" speed={62} variant="dark" />

        <section id="comparison"><SurfaceComparison /></section>
        <Process />
        <BuildPhases />
        <section id="roi-calculator" className="bg-[#0D0F0C] py-24 md:py-36 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">ROI Tool</span>
            </div>
            <ROICalculator />
          </div>
        </section>
        <Cities />
        <section id="testimonials"><Testimonials /></section>
        <section id="enquire-cta"><EnquireCTA /></section>
      </main>
      <Footer />
    </>
  );
}
