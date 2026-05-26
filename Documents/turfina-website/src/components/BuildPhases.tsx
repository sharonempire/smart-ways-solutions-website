"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const phases = [
  {
    number: "01",
    name: "Discovery & Brief",
    duration: "Day 1",
    category: "Planning",
    desc: "A focused call with our project lead to understand your sport, expected footfall, timeline, and budget envelope. We listen before we design — the brief shapes every decision that follows.",
    deliverable: "Project Brief Document",
  },
  {
    number: "02",
    name: "Site Survey & Soil Testing",
    duration: "Day 2–4",
    category: "Planning",
    desc: "Our engineer visits your land with survey equipment. Terrain dimensions, drainage gradient, soil bearing capacity, and GPS coordinates are captured. All four boundaries are photographed and archived in your project file.",
    deliverable: "Site Assessment Report",
  },
  {
    number: "03",
    name: "Engineering Design",
    duration: "Day 4–8",
    category: "Planning",
    desc: "Drainage is modelled against your site's slope and district rainfall data — pipe sizes, outlets, and soak-away depth are fully specified before turf is selected. Surface spec is then matched to your use case: pile height, fibre type, infill blend, shock-pad rating, and FIFA or IAAF compliance confirmed in writing.",
    deliverable: "Drainage Plan + Surface Spec",
  },
  {
    number: "04",
    name: "Permit & Compliance",
    duration: "Day 7–14",
    category: "Planning",
    desc: "We identify all approvals required — local body NOC, Kerala PWD clearance, school board sign-off, or GCC authority permits depending on your location. We guide the application process, or handle it directly on your behalf.",
    deliverable: "Permit Checklist & Status",
  },
  {
    number: "05",
    name: "Fixed-Price Contract",
    duration: "Day 10–14",
    category: "Planning",
    desc: "A fully itemised scope document: materials, labour, drainage, line-marking, fencing, floodlight provisions, and warranty terms. No provisional sums, no day-rate labour. The number we present is the number you pay — contractually binding.",
    deliverable: "Signed Contract & Build Schedule",
  },
  {
    number: "06",
    name: "Groundworks",
    duration: "Week 3–5",
    category: "Construction",
    desc: "Topsoil is stripped, sub-grade is GPS-graded to the drainage design slope, and compacted aggregate sub-base is laid in certified layers. Each layer is density-tested before the next is applied. Perforated drainage pipes are then installed and flow-tested before burial. The finished surface is laser-levelled to within ±3mm across the full playing area.",
    deliverable: "Compaction + Level Survey Certificate",
  },
  {
    number: "07",
    name: "Surface Installation",
    duration: "Week 5–7",
    category: "Construction",
    desc: "GCC-approved turf rolls are laid in parallel over the shock pad, seamed with polyurethane adhesive and join tape, and power-brushed to stand fibres vertical. Infill is distributed by calibrated spreading machine to exact specified depth. Every seam is inspected before the crew advances to the next strip.",
    deliverable: "Turf Layout + Infill Depth Record",
  },
  {
    number: "08",
    name: "Line Marking & Perimeter",
    duration: "Week 7–8",
    category: "Finishing",
    desc: "Sport markings are inlaid as coloured turf strips — bonded, not painted — measured against FIFA 2025, IAAF, or ITF standards. Aluminium edging locks the turf boundary. Goal sockets, ball-stop netting anchor points, and any lighting base provisions are completed and photographed.",
    deliverable: "Marked Layout Approval",
  },
  {
    number: "09",
    name: "Performance Testing",
    duration: "Week 8",
    category: "Handover",
    desc: "Full surface performance audit: ball rebound, surface hardness (HIC), rotational resistance, and drainage rate are measured against FIFA Quality standards. You walk the surface with our project lead — any snagging items are documented and resolved within 48 hours.",
    deliverable: "Performance Test Report",
  },
  {
    number: "10",
    name: "Handover & Warranty",
    duration: "Week 8–9",
    category: "Handover",
    desc: "Complete handover pack delivered on day of possession: compliance certificate, performance test results, maintenance guide, manufacturer documentation, and your 10-year Turfina surface performance warranty — activated the moment you take the keys.",
    deliverable: "10-Year Warranty Certificate",
  },
];

const categoryColors: Record<string, string> = {
  Planning: "#4CAF50",
  Construction: "#6FCF97",
  Finishing: "#A8D5A8",
  Handover: "#F4EFE6",
};

export default function BuildPhases() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [completedPhases, setCompletedPhases] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Track scroll progress through the section */
  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const { top, height } = el.getBoundingClientRect();
    const windowH = window.innerHeight;
    const progress = Math.min(Math.max((-top) / (height - windowH), 0), 1);
    setScrollProgress(progress);

    /* Mark phases that have scrolled past viewport center */
    const newCompleted = new Set<number>();
    phaseRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const { top: pTop } = ref.getBoundingClientRect();
      if (pTop < windowH * 0.65) newCompleted.add(i);
    });
    setCompletedPhases(newCompleted);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="bg-[#080A07] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">How We Build</span>
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
            10 phases.
            <br />
            <em style={{ fontStyle: "italic" }}>Zero surprises.</em>
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[#F4EFE6]/40 max-w-xs text-sm font-light leading-relaxed">
              Every project follows the same rigorous 10-step sequence — from first call to warranty activation in 8–9 weeks.
            </p>
            {/* Category legend */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                  <span className="text-[#F4EFE6]/35 text-[9px] tracking-[0.1em] uppercase">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">

          {/* Left: sticky progress tracker on md+ */}
          <div className="hidden md:block md:col-span-2">
            <div className="sticky top-32">
              {/* Vertical progress bar */}
              <div className="relative flex flex-col items-center">
                <div className="w-px bg-white/8" style={{ height: `${phases.length * 56}px` }}>
                  <div
                    className="w-full bg-[#4CAF50] transition-none origin-top"
                    style={{
                      height: `${scrollProgress * 100}%`,
                      boxShadow: "0 0 8px rgba(74,175,80,0.4)",
                    }}
                  />
                </div>

                {/* Phase dots on progress bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col" style={{ gap: "40px" }}>
                  {phases.map((p, i) => {
                    const done = completedPhases.has(i);
                    const color = categoryColors[p.category];
                    return (
                      <button
                        key={i}
                        onClick={() => phaseRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                        className="relative flex items-center gap-3 group"
                        title={p.name}
                      >
                        <div
                          className="w-2 h-2 rounded-full transition-all duration-500 shrink-0"
                          style={{
                            background: done ? color : "rgba(255,255,255,0.1)",
                            boxShadow: done ? `0 0 6px ${color}80` : "none",
                            transform: done ? "scale(1.2)" : "scale(1)",
                          }}
                        />
                        {/* Hover label */}
                        <span
                          className="absolute left-4 whitespace-nowrap text-[8px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                          style={{ color: done ? color : "rgba(244,239,230,0.3)" }}
                        >
                          {p.number}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: phase list */}
          <div className="md:col-span-10 divide-y divide-white/5">
            {phases.map((phase, i) => {
              const isOpen = activePhase === i;
              const isDone = completedPhases.has(i);
              const color = categoryColors[phase.category];

              return (
                <div
                  key={phase.number}
                  ref={(el) => { phaseRefs.current[i] = el; }}
                >
                  <button
                    className="w-full group flex items-start md:items-center gap-6 py-5 text-left transition-all duration-200 -mx-3 px-3 hover:bg-white/[0.02] rounded-sm"
                    onClick={() => setActivePhase(isOpen ? null : i)}
                  >
                    {/* Phase number + done indicator */}
                    <div className="shrink-0 flex items-center gap-3 w-20">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0 transition-all duration-500"
                        style={{
                          border: `1px solid ${isDone ? color : "rgba(255,255,255,0.1)"}`,
                          background: isDone ? `${color}1A` : "transparent",
                          boxShadow: isDone ? `0 0 6px ${color}40` : "none",
                        }}
                      >
                        {isDone ? (
                          <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5 3.5-4" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <span className="font-mono" style={{ fontSize: "0.55rem", color: "rgba(244,239,230,0.25)" }}>
                            {phase.number}
                          </span>
                        )}
                      </div>
                      <span
                        className="font-mono text-[9px] transition-colors duration-300"
                        style={{ color: isDone ? color : "rgba(244,239,230,0.2)" }}
                      >
                        {phase.number}
                      </span>
                    </div>

                    {/* Category dot + name */}
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1.5 md:gap-8 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
                          style={{ background: isDone ? color : "rgba(255,255,255,0.15)" }}
                        />
                        <p
                          className="transition-colors duration-200 truncate"
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 400,
                            color: isDone ? "#F4EFE6" : "rgba(244,239,230,0.65)",
                          }}
                        >
                          {phase.name}
                        </p>
                      </div>
                      <span className="text-[#F4EFE6]/20 text-[9px] tracking-[0.15em] uppercase">
                        {phase.duration}
                      </span>
                    </div>

                    {/* Deliverable + expand */}
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                      <span
                        className="text-[9px] tracking-[0.1em] uppercase transition-all duration-200 px-3 py-1.5"
                        style={{
                          border: `1px solid ${isOpen ? "rgba(74,175,80,0.25)" : "rgba(255,255,255,0.06)"}`,
                          color: isOpen ? "#4CAF50" : "rgba(244,239,230,0.25)",
                          background: isOpen ? "rgba(74,175,80,0.05)" : "transparent",
                        }}
                      >
                        {phase.deliverable}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-[#F4EFE6]/20 group-hover:text-[#4CAF50] transition-all duration-300 shrink-0"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <svg
                      className="md:hidden w-3.5 h-3.5 text-[#F4EFE6]/20 transition-all duration-300 shrink-0"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>

                  {/* Expanded content — grid rows smooth expand */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div className="pb-7 pl-14 pr-4 md:pr-0 flex flex-col md:flex-row gap-6 md:gap-16">
                        <p
                          className="text-[#F4EFE6]/50 leading-relaxed flex-1"
                          style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75 }}
                        >
                          {phase.desc}
                        </p>
                        <div className="shrink-0 md:w-48">
                          <p className="text-[#F4EFE6]/20 text-[9px] tracking-[0.2em] uppercase mb-2">Deliverable</p>
                          <div className="flex items-start gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                              style={{ background: color }}
                            />
                            <p className="text-[#F4EFE6]/55 text-sm font-light leading-relaxed">{phase.deliverable}</p>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <span
                              className="text-[8px] tracking-[0.1em] uppercase px-2 py-1"
                              style={{
                                border: `1px solid ${color}30`,
                                color: color,
                                background: `${color}0D`,
                              }}
                            >
                              {phase.category}
                            </span>
                            <span className="text-[#F4EFE6]/25 text-[9px] tracking-wider">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[#F4EFE6] mb-1"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Ready to start Phase 01?
            </p>
            <p className="text-[#F4EFE6]/40 text-sm font-light">Free site visit. Engineer on-site within 48 hours of your call.</p>
          </div>
          <a
            href="/enquire"
            className="group shrink-0 flex items-center gap-3 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200 whitespace-nowrap"
          >
            Book Site Visit
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
