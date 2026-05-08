import Reveal from "./Reveal";

const certifications = [
  {
    name: "FIFA Quality Pro",
    desc: "Highest field certification standard",
    value: "Level 1",
    icon: "⬡",
  },
  {
    name: "ISO 9001:2015",
    desc: "Quality management systems",
    value: "Certified",
    icon: "◈",
  },
  {
    name: "GCC Approved",
    desc: "Bahrain, Qatar & UAE projects",
    value: "3 Countries",
    icon: "◉",
  },
  {
    name: "10-Year Warranty",
    desc: "Full surface performance guarantee",
    value: "Guaranteed",
    icon: "◆",
  },
];

const timeline = [
  { year: "2004", label: "Founded in Kozhikode, Kerala" },
  { year: "2012", label: "First GCC project — Bahrain" },
  { year: "2018", label: "FIFA Quality Pro certification achieved" },
  { year: "2022", label: "Expanded across Qatar & UAE" },
  { year: "2025", label: "20+ projects live across South Asia & Gulf" },
];

export default function Credentials() {
  return (
    <section className="bg-[#0D0F0C] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Heritage & Credentials</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
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
            GCC quality.
            <br />
            <em style={{ fontStyle: "italic" }}>Kerala commitment.</em>
          </h2>
          <p className="text-[#F4EFE6]/45 max-w-xs leading-relaxed text-sm font-light">
            Over two decades of surface engineering across the Gulf brings international-grade precision to every pitch we lay in India.
          </p>
        </div>

        {/* Cert cards — visual */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 100}>
            <div
              className="relative bg-[#0D0F0C] p-8 group hover:bg-[#111410] transition-colors duration-300 overflow-hidden h-full"
            >
              {/* Background number */}
              <p
                className="absolute -top-4 -right-2 text-white/3 select-none pointer-events-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "6rem", fontWeight: 700, lineHeight: 1 }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Green indicator dot */}
              <div className="w-8 h-8 border border-[#4CAF50]/25 group-hover:border-[#4CAF50]/60 flex items-center justify-center mb-5 transition-all duration-300">
                <div className="w-2.5 h-2.5 bg-[#4CAF50]/50 group-hover:bg-[#4CAF50] transition-colors duration-300" />
              </div>

              {/* Value */}
              <p
                className="text-[#4CAF50] mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.3rem", fontWeight: 300 }}
              >
                {cert.value}
              </p>

              <p className="text-[#F4EFE6] font-medium text-sm mb-1.5">{cert.name}</p>
              <p className="text-[#F4EFE6]/40 text-xs font-light leading-relaxed">{cert.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Heritage — timeline + quote side by side */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">

          {/* Timeline */}
          <div className="bg-[#0D0F0C] p-10">
            <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.25em] uppercase mb-8">Two decades on pitch</p>
            <div className="space-y-0">
              {timeline.map((item, i, arr) => (
                <div key={item.year} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center pt-1.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 min-h-[44px] bg-gradient-to-b from-[#4CAF50]/40 to-white/5 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-[#4CAF50] text-[10px] tracking-[0.2em] uppercase mb-0.5 font-medium">{item.year}</p>
                    <p className="text-[#F4EFE6]/65 text-sm font-light">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote + pitch visual */}
          <div className="bg-[#0A0C09] p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Faint pitch outline in background */}
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
              <rect x="25" y="20" width="550" height="360" stroke="#4CAF50" strokeWidth="2" fill="none" />
              <line x1="300" y1="20" x2="300" y2="380" stroke="#4CAF50" strokeWidth="1.5" />
              <ellipse cx="300" cy="200" rx="80" ry="55" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
              <circle cx="300" cy="200" r="6" fill="#4CAF50" />
            </svg>

            <div className="relative">
              <p
                className="text-[#4CAF50]/15 leading-none mb-4 select-none"
                style={{ fontFamily: "Georgia, serif", fontSize: "5rem", lineHeight: 0.8 }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote
                className="text-[#F4EFE6]/75 leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.55,
                }}
              >
                We don&rsquo;t install turf. We engineer the surface that a generation of players will remember as the pitch where it all started.
              </blockquote>
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <span className="text-[#F4EFE6]/35 text-[10px] tracking-[0.15em] uppercase">Turfina Founder</span>
              </div>
            </div>

            {/* Stat strip */}
            <div className="relative mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              {[
                { value: "47+", label: "Pitches" },
                { value: "9", label: "Countries" },
                { value: "21yr", label: "Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[#F4EFE6]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", fontWeight: 300, lineHeight: 1 }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#4CAF50] text-[8px] tracking-[0.15em] uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
