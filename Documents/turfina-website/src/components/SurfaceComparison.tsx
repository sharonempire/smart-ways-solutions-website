"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

const surfaces = [
  {
    id: "football",
    name: "Football Turf",
    sub: "5-a-side / 11-a-side",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1"/>
        <path d="M5 10h10M10 5v10" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,1"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    id: "multi",
    name: "Multi-Sport Court",
    sub: "Basketball · Futsal · Volleyball",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <rect x="2" y="4" width="16" height="12" rx="0.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="0.7"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
        <rect x="2" y="6.5" width="3" height="7" stroke="currentColor" strokeWidth="0.6" fill="none"/>
        <rect x="15" y="6.5" width="3" height="7" stroke="currentColor" strokeWidth="0.6" fill="none"/>
      </svg>
    ),
  },
  {
    id: "cricket",
    name: "Cricket Outfield",
    sub: "Club · Academy · School",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <ellipse cx="10" cy="10" rx="8" ry="8" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="10" cy="10" rx="3" ry="5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
        <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,1.5"/>
      </svg>
    ),
  },
  {
    id: "athletics",
    name: "Athletic Track",
    sub: "400m · IAAF Certified",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <rect x="2" y="6" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="5" y="8" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="0.7" fill="none"/>
        <line x1="10" y1="6" x2="10" y2="14" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    ),
  },
];

type RowValue = string | boolean | null;

const rows: { label: string; key: string; values: RowValue[]; highlight?: boolean[] }[] = [
  { label: "Pile height", key: "pile", values: ["40–60 mm", "10–12 mm", "35–45 mm", "N/A"] },
  { label: "Infill system", key: "infill", values: ["SBR + silica", "Acrylic coating", "Cork + silica", "Polyurethane"] },
  { label: "Drainage rate", key: "drainage", values: ["≥1,000 mm/hr", "Surface runoff", "≥800 mm/hr", "Permeable base"], highlight: [true, false, false, false] },
  { label: "FIFA certified", key: "fifa", values: [true, false, false, false] },
  { label: "IAAF certified", key: "iaaf", values: [false, false, false, true] },
  { label: "Lifecycle", key: "life", values: ["8–12 years", "10–15 years", "10–12 years", "10–15 years"] },
  { label: "Maintenance", key: "maint", values: ["Annual infill top-up", "Minimal", "Annual infill", "Annual inspection"] },
  { label: "Revenue potential", key: "revenue", values: [true, true, false, false] },
  { label: "Night play ready", key: "night", values: [true, true, true, true] },
  { label: "Barefoot safe", key: "barefoot", values: [false, true, false, false] },
  { label: "Min. area required", key: "area", values: ["400 m²", "300 m²", "2,000 m²", "8,000 m²"] },
  { label: "Price range", key: "price", values: ["₹25L – ₹1.5Cr", "₹12L – ₹40L", "₹40L – ₹90L", "₹80L – ₹3Cr"] },
];

function Cell({ value, active, isHighlighted }: { value: RowValue; active: boolean; isHighlighted?: boolean }) {
  if (typeof value === "boolean") {
    return (
      <div className="flex justify-center">
        {value ? (
          <div
            className="w-5 h-5 flex items-center justify-center transition-all duration-300"
            style={{
              background: active ? "rgba(74,175,80,0.18)" : "rgba(74,175,80,0.07)",
              border: `1px solid ${active ? "rgba(74,175,80,0.5)" : "rgba(74,175,80,0.2)"}`,
              boxShadow: active ? "0 0 8px rgba(74,175,80,0.2)" : "none",
            }}
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#4CAF50" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : (
          <div
            className="w-5 h-5 flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="w-2 h-px bg-white/15" />
          </div>
        )}
      </div>
    );
  }
  return (
    <p
      className="text-center font-light leading-tight transition-all duration-300"
      style={{
        fontSize: "0.8rem",
        color: active ? (isHighlighted ? "#4CAF50" : "#F4EFE6") : "rgba(244,239,230,0.35)",
        fontWeight: active ? 400 : 300,
      }}
    >
      {value}
    </p>
  );
}

export default function SurfaceComparison() {
  const [active, setActive] = useState<number | null>(null);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(new Array(rows.length).fill(false));
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);

  /* Stagger-reveal rows on scroll */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleRows((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 45);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(row);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-[#080A07] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Surface Guide</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              className="text-[#F4EFE6] leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Which surface
              <br />
              <em style={{ fontStyle: "italic" }}>fits your project?</em>
            </h2>
            <p className="text-[#F4EFE6]/35 text-sm font-light">Hover a column to highlight specs.</p>
          </div>
        </Reveal>

        {/* Surface selector — mobile-friendly pill row above table */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 md:hidden">
          {surfaces.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(active === i ? null : i)}
              className="flex items-center gap-2 shrink-0 px-4 py-2.5 text-[9px] tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                border: `1px solid ${active === i ? "rgba(74,175,80,0.5)" : "rgba(255,255,255,0.08)"}`,
                background: active === i ? "rgba(74,175,80,0.1)" : "transparent",
                color: active === i ? "#4CAF50" : "rgba(244,239,230,0.45)",
              }}
            >
              <span style={{ color: active === i ? "#4CAF50" : "rgba(244,239,230,0.3)" }}>{s.icon}</span>
              {s.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Table */}
        <div ref={tableRef} className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: "620px" }}>
            <thead>
              <tr>
                <th className="w-40 pb-6 text-left">
                  <span className="text-[#F4EFE6]/18 text-[9px] tracking-[0.2em] uppercase">Specification</span>
                </th>
                {surfaces.map((s, i) => (
                  <th
                    key={s.id}
                    className="pb-6 px-3 cursor-pointer"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === i ? null : i)}
                  >
                    <div
                      className="relative transition-all duration-300 p-4"
                      style={{
                        background: active === i ? "rgba(42,92,42,0.12)" : "transparent",
                      }}
                    >
                      {/* Active column top bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 origin-left"
                        style={{
                          background: "linear-gradient(90deg, transparent, #4CAF50, transparent)",
                          transform: active === i ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="flex justify-center mb-3 transition-colors duration-300"
                        style={{ color: active === i ? "#4CAF50" : "rgba(244,239,230,0.25)" }}
                      >
                        {s.icon}
                      </div>

                      <p
                        className="font-medium mb-0.5 transition-colors duration-300 leading-tight"
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: active === i ? "#F4EFE6" : "rgba(244,239,230,0.45)",
                        }}
                      >
                        {s.name}
                      </p>
                      <p
                        className="transition-colors duration-300"
                        style={{
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: active === i ? "#4CAF50" : "rgba(244,239,230,0.18)",
                        }}
                      >
                        {s.sub}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.key}
                  ref={(el) => { rowRefs.current[ri] = el; }}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.035)",
                    opacity: visibleRows[ri] ? 1 : 0,
                    transform: visibleRows[ri] ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)`,
                  }}
                >
                  <td className="py-4 pr-6">
                    <p className="text-[#F4EFE6]/35 text-xs font-light tracking-wide">{row.label}</p>
                  </td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className="py-4 px-3 cursor-pointer transition-all duration-300"
                      style={{
                        background:
                          active === ci
                            ? "rgba(42,92,42,0.07)"
                            : "transparent",
                      }}
                      onMouseEnter={() => setActive(ci)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <Cell
                        value={val}
                        active={active === ci}
                        isHighlighted={row.highlight?.[ci]}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation CTA */}
        <Reveal>
          <div className="mt-12 border border-white/5 flex flex-col md:flex-row overflow-hidden">
            {/* Left: descriptive */}
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-white/5">
              <p
                className="text-[#F4EFE6] mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.3,
                }}
              >
                "Not sure which surface fits your site?"
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light leading-relaxed max-w-sm">
                Our engineers assess your ground, drainage gradient, usage load, and budget before recommending anything. Free. No commitment.
              </p>
            </div>

            {/* Right: trust + CTA */}
            <div className="shrink-0 p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                {[
                  "Free site visit within 48 hours",
                  "Written specification delivered in 5 days",
                  "No upsell pressure — just the right surface",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      style={{
                        display: "inline-block",
                        width: "4px",
                        height: "4px",
                        background: "#4CAF50",
                        transform: "rotate(45deg)",
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-[#F4EFE6]/50 text-xs font-light">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="/enquire"
                className="group inline-flex items-center gap-3 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200 whitespace-nowrap"
              >
                Get a recommendation
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
