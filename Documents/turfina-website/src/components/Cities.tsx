"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const cities = [
  {
    name: "Kozhikode",
    slug: "kozhikode",
    tagline: "Kerala's football capital.",
    desc: "Home to Kerala Blasters' fanbase and dozens of club academies. Turfina has an on-ground team and active projects in Calicut city.",
    projects: 6,
    active: true,
    coords: { x: 32, y: 58 },
    details: ["6 completed pitches", "On-ground team stationed", "48-hr site response"],
  },
  {
    name: "Malappuram",
    slug: "malappuram",
    tagline: "The district that lives for football.",
    desc: "Highest density of Santosh Trophy talent in South India. School and academy infrastructure demand is highest here.",
    projects: 4,
    active: true,
    coords: { x: 48, y: 70 },
    details: ["4 completed pitches", "Active school pipeline", "Govt grant assistance"],
  },
  {
    name: "Kannur",
    slug: "kannur",
    tagline: "Northern Kerala rising.",
    desc: "Expanding NRI investor community driving residential sports amenity demand. First Turfina project in 2025.",
    projects: 2,
    active: false,
    coords: { x: 20, y: 28 },
    details: ["2 projects in progress", "NRI investor demand", "Launching Q3 2025"],
  },
];

/* Minimal Kerala silhouette SVG path (stylized strip) */
function KeralaMap({ active, onHover }: { active: string | null; onHover: (slug: string | null) => void }) {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 120 200" className="w-full h-full" fill="none">
        {/* Stylized Kerala strip */}
        <path
          d="M55 5 C48 8 42 14 38 22 C34 30 32 40 30 52 C28 64 26 72 28 82 C30 92 36 98 38 112 C40 126 38 138 42 148 C46 158 52 164 56 172 C60 178 62 186 60 194"
          stroke="rgba(74,175,80,0.15)"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M55 5 C48 8 42 14 38 22 C34 30 32 40 30 52 C28 64 26 72 28 82 C30 92 36 98 38 112 C40 126 38 138 42 148 C46 158 52 164 56 172 C60 178 62 186 60 194"
          stroke="rgba(74,175,80,0.08)"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />

        {/* City pins */}
        {cities.map((city) => {
          const isActive = active === city.slug;
          const cx = city.coords.x + 10;
          const cy = city.coords.y + 10;
          return (
            <g
              key={city.slug}
              className="cursor-pointer"
              onMouseEnter={() => onHover(city.slug)}
              onMouseLeave={() => onHover(null)}
            >
              {/* Pulse ring */}
              <circle
                cx={cx} cy={cy} r={isActive ? 10 : 6}
                fill="none"
                stroke={city.active ? "#4CAF50" : "rgba(244,239,230,0.2)"}
                strokeWidth="0.8"
                style={{
                  opacity: isActive ? 0.6 : 0.3,
                  transition: "all 0.3s ease",
                }}
              />
              {/* Core dot */}
              <circle
                cx={cx} cy={cy} r={isActive ? 4 : 2.5}
                fill={city.active ? "#4CAF50" : "rgba(244,239,230,0.3)"}
                style={{
                  filter: isActive && city.active ? "drop-shadow(0 0 4px rgba(74,175,80,0.8))" : "none",
                  transition: "all 0.3s ease",
                }}
              />
              {/* Label */}
              <text
                x={cx + 8} y={cy + 1}
                fill={isActive ? "#F4EFE6" : "rgba(244,239,230,0.4)"}
                fontSize="5"
                fontFamily="var(--font-inter, sans-serif)"
                letterSpacing="0.05em"
                style={{ transition: "fill 0.2s ease" }}
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Cities() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="cities" className="bg-[#0D0F0C] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">
              Where We Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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
              North Kerala.
              <br />
              <em style={{ fontStyle: "italic" }}>Our home ground.</em>
            </h2>
            <p className="text-[#F4EFE6]/40 max-w-xs text-sm font-light leading-relaxed">
              Permanently stationed teams, local supplier networks, and 48-hour site response across all three districts.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* Map panel */}
          <div className="md:col-span-4">
            <Reveal direction="left">
              <div
                className="relative border border-white/5 p-6"
                style={{ background: "#0A0C0A", minHeight: "320px" }}
              >
                <div className="h-72">
                  <KeralaMap active={hovered} onHover={setHovered} />
                </div>
                <div className="mt-4 border-t border-white/5 pt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                    <span className="text-[#F4EFE6]/40 text-[8px] tracking-[0.12em] uppercase">Active market</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[#F4EFE6]/40 text-[8px] tracking-[0.12em] uppercase">Coming soon</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* City cards */}
          <div className="md:col-span-8 flex flex-col gap-px bg-white/5">
            {cities.map((city, i) => {
              const isActive = hovered === city.slug;
              return (
                <div
                  key={city.slug}
                  className="relative group cursor-pointer transition-all duration-300"
                  style={{
                    background: isActive ? "#111410" : "#0D0F0C",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `background 0.3s ease, opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
                  }}
                  onMouseEnter={() => setHovered(city.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Active left bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300"
                    style={{
                      background: city.active ? "#4CAF50" : "rgba(244,239,230,0.1)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleY(1)" : "scaleY(0)",
                      transformOrigin: "top",
                    }}
                  />

                  <div className="p-8 pl-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${city.active ? "bg-[#4CAF50]" : "bg-[#F4EFE6]/20"}`}
                            style={{ boxShadow: isActive && city.active ? "0 0 6px rgba(74,175,80,0.8)" : "none" }}
                          />
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[#F4EFE6]/30">
                            {city.active ? "Active market" : "Launching 2025"}
                          </span>
                        </div>

                        <h3
                          className="text-[#F4EFE6] mb-1 transition-colors duration-200"
                          style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "2rem",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                            color: isActive ? "#F4EFE6" : "rgba(244,239,230,0.85)",
                          }}
                        >
                          {city.name}
                        </h3>

                        <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase mb-3 font-medium">
                          {city.tagline}
                        </p>

                        <p
                          className="text-[#F4EFE6]/45 text-sm font-light leading-relaxed transition-all duration-300"
                          style={{
                            maxHeight: isActive ? "80px" : "0px",
                            overflow: "hidden",
                            opacity: isActive ? 1 : 0,
                          }}
                        >
                          {city.desc}
                        </p>

                        {/* Detail bullets — appear on hover */}
                        <div
                          className="flex flex-wrap gap-3 mt-3 transition-all duration-300"
                          style={{
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? "40px" : "0px",
                            overflow: "hidden",
                          }}
                        >
                          {city.details.map((d) => (
                            <span
                              key={d}
                              className="text-[#F4EFE6]/35 text-[8px] tracking-[0.1em] uppercase border border-white/8 px-2.5 py-1"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project count + arrow */}
                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <p
                          style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "2.4rem",
                            fontWeight: 300,
                            lineHeight: 1,
                            color: isActive ? "#4CAF50" : "rgba(244,239,230,0.2)",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {city.projects}
                        </p>
                        <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.12em] uppercase">pitches</p>
                        <Link
                          href={`/cities/${city.slug}`}
                          className="mt-2 flex items-center gap-2 text-[8px] tracking-[0.15em] uppercase transition-colors duration-200"
                          style={{ color: isActive ? "#4CAF50" : "rgba(244,239,230,0.15)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View
                          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map suggestion */}
        <Reveal>
          <div className="mt-12 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#4CAF50]/20 flex items-center justify-center shrink-0" style={{ background: "rgba(74,175,80,0.04)" }}>
                <svg className="w-4 h-4 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-[#F4EFE6] text-sm font-medium mb-0.5">Outside North Kerala?</p>
                <p className="text-[#F4EFE6]/40 text-sm font-light">We accept select projects across South India. Contact us to discuss scope and logistics.</p>
              </div>
            </div>
            <Link
              href="/enquire"
              className="shrink-0 border border-[#F4EFE6]/20 hover:border-[#4CAF50]/50 text-[#F4EFE6]/70 hover:text-[#4CAF50] px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200 whitespace-nowrap"
            >
              Enquire Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
