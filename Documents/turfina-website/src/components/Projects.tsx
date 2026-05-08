import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    slug: "al-manamah-football-academy",
    name: "Al Manamah Football Academy",
    location: "Manama, Bahrain",
    type: "FIFA Quality Pro · 11-a-side",
    area: "7,140 m²",
    year: "2022",
    tag: "GCC Reference",
    tagGreen: true,
    stripeOffset: 0,
    svgType: "football" as const,
    span: true,
  },
  {
    slug: "kozhikode-municipal-ground",
    name: "Kozhikode Municipal Ground",
    location: "Kozhikode, Kerala",
    type: "FIFA Quality · 5-a-side × 4",
    area: "2,800 m²",
    year: "2024",
    tag: "Kerala Launch",
    tagGreen: false,
    stripeOffset: 1,
    svgType: "football" as const,
    span: false,
  },
  {
    slug: "nri-villa-complex-malappuram",
    name: "NRI Villa Complex",
    location: "Malappuram, Kerala",
    type: "Multi-Sport · 1,200 m²",
    area: "1,200 m²",
    year: "2025",
    tag: "Private Estate",
    tagGreen: false,
    stripeOffset: 0,
    svgType: "multi" as const,
    span: false,
  },
  {
    slug: "ghss-calicut-athletic-track",
    name: "GHSS Calicut — Athletic Track",
    location: "Kozhikode, Kerala",
    type: "IAAF Level 1 · 400m",
    area: "11,000 m²",
    year: "2025",
    tag: "Institutional",
    tagGreen: false,
    stripeOffset: 1,
    svgType: "athletics" as const,
    span: false,
  },
];

function PitchSVG({ type }: { type: "football" | "multi" | "cricket" | "athletics" }) {
  const op = 0.42;
  const sw = 1.5;
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      {type === "football" && (
        <>
          <rect x="25" y="20" width="550" height="360" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="300" y1="20" x2="300" y2="380" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <ellipse cx="300" cy="200" rx="80" ry="55" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <circle cx="300" cy="200" r="5" fill="#4CAF50" opacity={op + 0.15} />
          <rect x="25" y="125" width="95" height="150" stroke="#4CAF50" strokeWidth={sw * 0.6} fill="none" opacity={op * 0.8} />
          <rect x="480" y="125" width="95" height="150" stroke="#4CAF50" strokeWidth={sw * 0.6} fill="none" opacity={op * 0.8} />
          <rect x="25" y="153" width="45" height="94" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.5} />
          <rect x="530" y="153" width="45" height="94" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.5} />
        </>
      )}
      {type === "multi" && (
        <>
          <rect x="25" y="20" width="550" height="360" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="300" y1="20" x2="300" y2="380" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <circle cx="300" cy="200" r="65" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <line x1="25" y1="200" x2="575" y2="200" stroke="#4CAF50" strokeWidth={sw * 0.5} opacity={op * 0.7} />
          <rect x="130" y="90" width="340" height="220" stroke="#3A8C3A" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
        </>
      )}
      {type === "athletics" && (
        <>
          <ellipse cx="300" cy="200" rx="270" ry="175" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <ellipse cx="300" cy="200" rx="230" ry="138" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <ellipse cx="300" cy="200" rx="190" ry="101" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.65} />
          <ellipse cx="300" cy="200" rx="150" ry="64" stroke="#4CAF50" strokeWidth={sw * 0.4} fill="none" opacity={op * 0.5} />
          <line x1="30" y1="200" x2="570" y2="200" stroke="#4CAF50" strokeWidth={sw * 0.4} opacity={op * 0.4} />
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

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section className="bg-[#0D0F0C] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Project Portfolio</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="text-[#F4EFE6] leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            From Bahrain
            <br />
            <em style={{ fontStyle: "italic" }}>to Kerala.</em>
          </h2>
          <Link
            href="/projects"
            className="text-[#F4EFE6]/50 hover:text-[#4CAF50] text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            All projects
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">

          {/* Featured — large left */}
          <Reveal direction="left">
          <Link
            href={`/projects/${featured.slug}`}
            className="group relative overflow-hidden md:col-span-2"
            style={{ minHeight: "420px" }}
          >
            <TurfBg offset={featured.stripeOffset} />
            <PitchSVG type={featured.svgType} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />

            <div className="absolute top-5 left-5">
              <span className="text-[#F4EFE6] text-[8px] tracking-[0.2em] uppercase bg-[#2A5C2A] px-3 py-1 font-medium">
                {featured.tag}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase mb-2 font-medium">{featured.type}</p>
              <h3
                className="text-[#F4EFE6] mb-2 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 300 }}
              >
                {featured.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-[#F4EFE6]/50 text-sm font-light">{featured.location} · {featured.area}</p>
                <p className="text-[#F4EFE6]/30 text-xs font-mono">{featured.year}</p>
              </div>
            </div>

            <div className="absolute top-5 right-5 w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
          </Reveal>

          {/* Right column — stacked small cards */}
          <div className="flex flex-col gap-px bg-white/5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 150} direction="right">
              <Link
                href={`/projects/${p.slug}`}
                className="group relative overflow-hidden block"
                style={{ minHeight: "140px" }}
              >
                <TurfBg offset={p.stripeOffset} />
                <PitchSVG type={p.svgType} />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-400" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)" }} />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#4CAF50] text-[8px] tracking-[0.18em] uppercase mb-1 font-medium">{p.type}</p>
                  <p
                    className="text-[#F4EFE6] leading-snug mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem", fontWeight: 300 }}
                  >
                    {p.name}
                  </p>
                  <p className="text-[#F4EFE6]/40 text-[10px] font-light">{p.location}</p>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
