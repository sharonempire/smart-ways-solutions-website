import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { surfaces } from "@/data/surfaces";

export const metadata = {
  title: "Sports Surfaces | Turfina Sports Construction Kerala",
  description: "FIFA-certified football turf, multi-sport courts, cricket outfields, and IAAF athletic tracks. GCC-grade surfaces installed across North Kerala.",
};

export default function SurfacesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Surfaces</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <h1
                className="text-[#F4EFE6] leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                }}
              >
                Every surface.
                <br />
                <em style={{ fontStyle: "italic" }}>One standard.</em>
              </h1>
              <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed max-w-md">
                Four surface systems — football, multi-sport, cricket, and athletics — each engineered to international certification standards and built for Kerala's climate.
              </p>
            </div>
          </div>
        </section>

        {/* Surface grid */}
        <section className="py-0">
          {surfaces.map((surface, i) => (
            <div key={surface.slug} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-[#0D0F0C]" : "bg-[#0A0C09]"}`}>
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

                  {/* Left: info */}
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-4 font-medium">{surface.spec}</p>
                    <h2
                      className="text-[#F4EFE6] mb-4 leading-tight"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {surface.name}
                    </h2>
                    <p className="text-[#F4EFE6]/55 leading-relaxed mb-8 font-light" style={{ fontSize: "0.95rem" }}>
                      {surface.description}
                    </p>

                    {/* Key specs */}
                    <div className="grid grid-cols-2 gap-px bg-white/5 mb-8">
                      {[
                        { label: "Pile Height", value: surface.pileHeight },
                        { label: "Certification", value: surface.certification },
                        { label: "Lifespan", value: surface.lifespan },
                        { label: "Starting from", value: surface.priceRange },
                      ].map((s) => (
                        <div key={s.label} className="bg-[#0D0F0C] p-4">
                          <p className="text-[#F4EFE6]/30 text-[9px] tracking-[0.15em] uppercase mb-1">{s.label}</p>
                          <p className="text-[#F4EFE6] text-sm font-light">{s.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Ideal for tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {surface.idealFor.map((tag) => (
                        <span key={tag} className="border border-white/10 text-[#F4EFE6]/40 text-[8px] tracking-[0.12em] uppercase px-3 py-1.5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/surfaces/${surface.slug}`}
                      className="inline-flex items-center gap-3 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
                    >
                      Full specification
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right: visual panel */}
                  <div className={`relative h-80 md:h-96 overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    {/* Turf SVG visual */}
                    <div className="absolute inset-0 bg-[#0F1A0F]">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-full"
                          style={{
                            top: `${j * 8.33}%`,
                            height: "8.33%",
                            background: j % 2 === 0 ? "rgba(22,65,22,0.9)" : "rgba(15,45,15,0.9)",
                          }}
                        />
                      ))}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
                        {surface.slug === "football-turf" && (
                          <>
                            <rect x="30" y="30" width="540" height="340" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.4" />
                            <line x1="300" y1="30" x2="300" y2="370" stroke="#4CAF50" strokeWidth="1.5" opacity="0.35" />
                            <ellipse cx="300" cy="200" rx="70" ry="50" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.35" />
                            <circle cx="300" cy="200" r="4" fill="#4CAF50" opacity="0.5" />
                            <rect x="30" y="140" width="80" height="120" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.3" />
                            <rect x="490" y="140" width="80" height="120" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.3" />
                          </>
                        )}
                        {surface.slug === "multi-sport-courts" && (
                          <>
                            <rect x="40" y="40" width="520" height="320" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.4" />
                            <line x1="40" y1="200" x2="560" y2="200" stroke="#4CAF50" strokeWidth="1.5" opacity="0.3" />
                            <line x1="300" y1="40" x2="300" y2="360" stroke="#4CAF50" strokeWidth="1.5" opacity="0.3" />
                            <circle cx="300" cy="200" r="50" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.3" />
                            <rect x="120" y="100" width="360" height="200" stroke="#3A7C3A" strokeWidth="1" fill="none" opacity="0.25" />
                          </>
                        )}
                        {surface.slug === "cricket-outfields" && (
                          <>
                            <ellipse cx="300" cy="200" rx="240" ry="160" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.4" />
                            <ellipse cx="300" cy="200" rx="150" ry="100" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.3" />
                            <rect x="270" y="80" width="60" height="240" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.25" />
                            <line x1="270" y1="200" x2="330" y2="200" stroke="#4CAF50" strokeWidth="1" opacity="0.3" />
                          </>
                        )}
                        {surface.slug === "athletic-tracks" && (
                          <>
                            <ellipse cx="300" cy="200" rx="240" ry="150" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.4" />
                            <ellipse cx="300" cy="200" rx="200" ry="110" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.3" />
                            <ellipse cx="300" cy="200" rx="160" ry="70" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.25" />
                            <line x1="60" y1="200" x2="540" y2="200" stroke="#4CAF50" strokeWidth="1" opacity="0.2" />
                          </>
                        )}
                      </svg>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                      {/* Label */}
                      <div className="absolute bottom-6 left-6">
                        <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase font-medium mb-1">{surface.certification}</p>
                        <p
                          className="text-[#F4EFE6]/60"
                          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.1rem", fontWeight: 300 }}
                        >
                          {surface.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p
                className="text-[#F4EFE6] mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic" }}
              >
                Not sure which surface is right for your project?
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light">Our engineer will assess your land and recommend the right surface — free of charge.</p>
            </div>
            <Link
              href="/enquire"
              className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Free Site Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
