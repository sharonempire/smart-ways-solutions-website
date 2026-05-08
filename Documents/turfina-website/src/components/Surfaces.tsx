import Link from "next/link";
import Reveal from "./Reveal";

const surfaces = [
  {
    id: "football-turf",
    name: "Football Turf",
    spec: "FIFA Quality Pro · 40–60mm pile",
    desc: "Full 11-a-side and 5-a-side surfaces with shock-absorbing infill, drainage engineering, and line-marking to FIFA 2025 specifications.",
    ideal: "Academies, schools, clubs",
    range: "₹40L – ₹1.2Cr",
    stripeOffset: 0,
    svgType: "football" as const,
    stat: "47+ pitches",
    statLabel: "delivered",
  },
  {
    id: "multi-sport-courts",
    name: "Multi-Sport Courts",
    spec: "Polypropylene · 3mm–8mm",
    desc: "Dual-use basketball, volleyball, tennis, and badminton courts with UV-stable surface coating rated for 15,000+ hours of play.",
    ideal: "Schools, residential communities",
    range: "₹12L – ₹60L",
    stripeOffset: 1,
    svgType: "multi" as const,
    stat: "15,000 hr",
    statLabel: "surface lifespan",
  },
  {
    id: "cricket-outfields",
    name: "Cricket Outfields",
    spec: "Nylon 6.6 · 12mm–20mm",
    desc: "Outfield and practice net surfaces engineered for bounce consistency and player safety, with natural-look aesthetics.",
    ideal: "Clubs, academies, NRI estates",
    range: "₹25L – ₹90L",
    stripeOffset: 0,
    svgType: "cricket" as const,
    stat: "BCCI",
    statLabel: "standard compliant",
  },
  {
    id: "athletic-tracks",
    name: "Athletic Tracks",
    spec: "IAAF-grade polyurethane · 13mm",
    desc: "Full 400m and sprint tracks with lane markings, certified surface hardness, and IAAF Level 1 compliance for school competitions.",
    ideal: "Government schools, private colleges",
    range: "₹60L – ₹1.5Cr",
    stripeOffset: 1,
    svgType: "athletics" as const,
    stat: "IAAF Level 1",
    statLabel: "certified",
  },
];

function PitchSVG({ type }: { type: "football" | "multi" | "cricket" | "athletics" }) {
  const op = 0.45;
  const sw = 1.5;
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 320" preserveAspectRatio="xMidYMid slice">
      {type === "football" && (
        <>
          <rect x="20" y="15" width="460" height="290" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="250" y1="15" x2="250" y2="305" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <ellipse cx="250" cy="160" rx="70" ry="48" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <circle cx="250" cy="160" r="5" fill="#4CAF50" opacity={op + 0.15} />
          <rect x="20" y="100" width="90" height="120" stroke="#4CAF50" strokeWidth={sw * 0.6} fill="none" opacity={op * 0.8} />
          <rect x="390" y="100" width="90" height="120" stroke="#4CAF50" strokeWidth={sw * 0.6} fill="none" opacity={op * 0.8} />
          <rect x="20" y="125" width="45" height="70" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
          <rect x="435" y="125" width="45" height="70" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
          <circle cx="20" cy="100" r="30" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.4} />
          <circle cx="480" cy="100" r="30" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.4} />
          <circle cx="20" cy="220" r="30" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.4} />
          <circle cx="480" cy="220" r="30" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.4} />
        </>
      )}
      {type === "multi" && (
        <>
          <rect x="20" y="15" width="460" height="290" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="250" y1="15" x2="250" y2="305" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <circle cx="250" cy="160" r="60" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <line x1="20" y1="160" x2="480" y2="160" stroke="#4CAF50" strokeWidth={sw * 0.5} opacity={op * 0.7} />
          <rect x="120" y="75" width="260" height="170" stroke="#3A8C3A" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
          <rect x="20" y="100" width="60" height="120" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.5} />
          <rect x="420" y="100" width="60" height="120" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.5} />
        </>
      )}
      {type === "cricket" && (
        <>
          <ellipse cx="250" cy="160" rx="230" ry="145" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <ellipse cx="250" cy="160" rx="150" ry="95" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <rect x="228" y="60" width="44" height="200" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
          <line x1="215" y1="160" x2="285" y2="160" stroke="#4CAF50" strokeWidth={sw * 0.5} opacity={op * 0.5} />
          <circle cx="250" cy="160" r="8" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.5} />
        </>
      )}
      {type === "athletics" && (
        <>
          <ellipse cx="250" cy="160" rx="240" ry="145" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <ellipse cx="250" cy="160" rx="200" ry="112" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <ellipse cx="250" cy="160" rx="160" ry="79" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.65} />
          <ellipse cx="250" cy="160" rx="120" ry="46" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.5} />
          <line x1="10" y1="160" x2="490" y2="160" stroke="#4CAF50" strokeWidth={sw * 0.35} opacity={op * 0.4} />
          <line x1="130" y1="15" x2="130" y2="305" stroke="#4CAF50" strokeWidth={sw * 0.3} opacity={op * 0.3} />
          <line x1="370" y1="15" x2="370" y2="305" stroke="#4CAF50" strokeWidth={sw * 0.3} opacity={op * 0.3} />
        </>
      )}
    </svg>
  );
}

function TurfBg({ offset }: { offset: number }) {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 10 }).map((_, j) => (
        <div
          key={j}
          className="absolute w-full"
          style={{
            top: `${j * 10}%`,
            height: "10%",
            background: (j + offset) % 2 === 0 ? "rgba(16,52,16,0.98)" : "rgba(10,35,10,0.98)",
          }}
        />
      ))}
    </div>
  );
}

export default function Surfaces() {
  return (
    <section className="bg-[#0A0C09] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Surfaces</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="text-[#F4EFE6] max-w-xl leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Every discipline.
            <br />
            <em style={{ fontStyle: "italic" }}>One standard.</em>
          </h2>
          <Link
            href="/surfaces"
            className="text-[#F4EFE6]/50 hover:text-[#4CAF50] text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            View all surfaces
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Surface cards — visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 overflow-hidden">
          {surfaces.map((s, i) => (
            <Reveal key={s.id} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
            <Link
              href={`/surfaces/${s.id}`}
              className="group relative overflow-hidden block"
              style={{ minHeight: "340px" }}
            >
              {/* Turf background */}
              <TurfBg offset={s.stripeOffset} />
              {/* Pitch lines */}
              <PitchSVG type={s.svgType} />
              {/* Dark overlay lightened on hover */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-500" />
              {/* Gradient for text readability */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }}
              />

              {/* Stat badge — top right */}
              <div className="absolute top-5 right-5 text-right">
                <p
                  className="text-[#F4EFE6]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, lineHeight: 1 }}
                >
                  {s.stat}
                </p>
                <p className="text-[#4CAF50] text-[8px] tracking-[0.15em] uppercase">{s.statLabel}</p>
              </div>

              {/* Spec label — top left */}
              <div className="absolute top-5 left-5">
                <span className="text-[#4CAF50] text-[8px] tracking-[0.2em] uppercase border border-[#4CAF50]/30 bg-black/40 backdrop-blur-sm px-2.5 py-1">
                  {s.spec}
                </span>
              </div>

              {/* Expand icon */}
              <div className="absolute top-5 right-5 w-7 h-7 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 backdrop-blur-sm" style={{ top: "auto", bottom: "5rem", right: "1.25rem" }}>
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-[#F4EFE6] mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.9rem", fontWeight: 300 }}
                >
                  {s.name}
                </h3>
                <p className="text-[#F4EFE6]/60 text-sm font-light leading-relaxed mb-4 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.desc}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-[#F4EFE6]/45 text-xs font-light">{s.ideal}</p>
                  <p
                    className="text-[#F4EFE6]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", fontWeight: 300 }}
                  >
                    {s.range}
                  </p>
                </div>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-px bg-[#0A0C09] border border-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[#F4EFE6] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, fontStyle: "italic" }}
            >
              Not sure which surface fits your project?
            </p>
            <p className="text-[#F4EFE6]/40 text-sm font-light">
              Our engineers assess your land, usage, and budget — free site visit within 48 hours.
            </p>
          </div>
          <Link
            href="/enquire"
            className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap"
          >
            Request Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
