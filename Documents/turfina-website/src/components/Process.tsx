"use client";

import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";
import Link from "next/link";

const steps = [
  {
    number: "01",
    label: "Site Assessment",
    duration: "Within 48 hrs",
    desc: "Our engineer visits your land. We survey terrain, drainage gradient, soil bearing capacity, and local council requirements — all documented before a single spec is written.",
    deliverable: "Site Assessment Report",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Drainage Engineering",
    duration: "Day 3–5",
    desc: "A dedicated drainage design is modelled around your site's slope, rainfall data, and intended surface load. Pipe sizes, outlets, and soak-away depth are all specified before turf is even discussed.",
    deliverable: "Drainage Engineering Plan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Surface Specification",
    duration: "Day 5–8",
    desc: "We match your use case, footfall, and budget to the correct pile height, fibre type, infill blend, and shock-pad rating. FIFA Quality Pro or IAAF compliance confirmed in writing.",
    deliverable: "Technical Surface Spec",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Fixed-Price Proposal",
    duration: "Day 8–14",
    desc: "A fully itemised scope document covering materials, labour, drainage, line-marking, fencing, and warranty. The number we present is the number you pay — contractually guaranteed.",
    deliverable: "Signed Contract & Schedule",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Installation",
    duration: "Week 4–8",
    desc: "Excavation, laser-levelled sub-base, shock pad, turf laying, infill distribution, line marking, and perimeter works — all executed by GCC-experienced crews to the millimetre.",
    deliverable: "Installation Completion Record",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.714-5.251c.16-.469.402-.893.766-1.208l3.03-2.496a2.652 2.652 0 0 1 3.713 3.713L18.75 9.6c-.384.317-.808.559-1.277.72" />
      </svg>
    ),
  },
  {
    number: "06",
    label: "Handover & Warranty",
    duration: "Week 8–9",
    desc: "Full handover pack: compliance certificate, performance test results, maintenance guide, and your 10-year Turfina surface performance warranty — activated on the day you take the keys.",
    deliverable: "10-Year Warranty Certificate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

function AnimatedTimeline({ count, inView }: { count: number; inView: boolean }) {
  /* SVG vertical line that draws itself when inView */
  const totalH = (count - 1) * 120 + 12; /* approximate height */
  return (
    <svg
      width="2"
      height={totalH}
      viewBox={`0 0 2 ${totalH}`}
      className="absolute left-[19px] top-8"
      style={{ overflow: "visible" }}
    >
      <line
        x1="1" y1="0" x2="1" y2={totalH}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="2"
      />
      <line
        x1="1" y1="0" x2="1" y2={totalH}
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: totalH,
          strokeDashoffset: inView ? 0 : totalH,
          transition: `stroke-dashoffset ${count * 0.25}s cubic-bezier(0.22, 1, 0.36, 1) 0.3s`,
        }}
      />
    </svg>
  );
}

function StepRow({ step, index, inView }: { step: typeof steps[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  const delay = 300 + index * 160;

  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full group flex items-start gap-6 py-7 text-left"
      >
        {/* Node circle */}
        <div
          className="relative shrink-0 flex items-center justify-center rounded-full z-10 transition-all duration-300"
          style={{
            width: "40px",
            height: "40px",
            background: open ? "#2A5C2A" : "rgba(255,255,255,0.04)",
            border: `1px solid ${open ? "#4CAF50" : "rgba(255,255,255,0.1)"}`,
            color: open ? "#4CAF50" : "rgba(244,239,230,0.35)",
            boxShadow: open ? "0 0 20px rgba(74,175,80,0.25)" : "none",
          }}
        >
          {step.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
            <p
              className="font-medium transition-colors duration-200"
              style={{
                fontSize: "1.05rem",
                color: open ? "#F4EFE6" : "rgba(244,239,230,0.75)",
                letterSpacing: "0.01em",
              }}
            >
              {step.label}
            </p>
            <span
              className="text-[9px] tracking-[0.15em] uppercase"
              style={{ color: open ? "#4CAF50" : "rgba(244,239,230,0.25)" }}
            >
              {step.duration}
            </span>
          </div>

          {/* Collapsed preview */}
          <p
            className="text-sm font-light leading-relaxed line-clamp-1 transition-all duration-200"
            style={{
              color: "rgba(244,239,230,0.35)",
              maxHeight: open ? 0 : "1.5rem",
              opacity: open ? 0 : 0.7,
              overflow: "hidden",
            }}
          >
            {step.desc}
          </p>
        </div>

        {/* Step number + expand */}
        <div className="shrink-0 flex items-center gap-3">
          <span
            className="hidden md:block font-mono text-xs"
            style={{ color: open ? "rgba(74,175,80,0.6)" : "rgba(255,255,255,0.1)" }}
          >
            {step.number}
          </span>
          <div
            className="w-6 h-6 border flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: open ? "rgba(74,175,80,0.5)" : "rgba(255,255,255,0.1)",
              background: open ? "rgba(74,175,80,0.08)" : "transparent",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
              style={{ color: open ? "#4CAF50" : "rgba(244,239,230,0.3)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded body */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="pl-[3.5rem] pr-4 pb-8 flex flex-col md:flex-row gap-6 md:gap-12">
            <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "rgba(244,239,230,0.6)" }}>
              {step.desc}
            </p>
            <div className="shrink-0">
              <p className="text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(244,239,230,0.25)" }}>
                Deliverable
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                <p className="text-sm font-light" style={{ color: "rgba(244,239,230,0.7)" }}>
                  {step.deliverable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0C09] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">How We Work</span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal delay={100}>
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
              Site visit to
              <br />
              <em style={{ fontStyle: "italic" }}>opening ceremony.</em>
            </h2>
          </Reveal>

          <Reveal delay={200} direction="right">
            <div className="max-w-sm">
              <p className="text-[#F4EFE6]/45 text-sm font-light leading-relaxed mb-4">
                Every project follows the same 6-phase sequence. Click any step to see exactly what we deliver.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[#F4EFE6]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300 }}>8–9</p>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase">weeks typical</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-[#F4EFE6]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300 }}>0</p>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase">hidden costs</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-[#F4EFE6]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300 }}>48hr</p>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase">first site visit</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Two-column layout: timeline left, steps right */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* Left — decorative pitch drawing */}
          <div className="hidden md:block md:col-span-4 relative">
            <div
              className="sticky top-32"
              style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 1s ease 0.5s",
              }}
            >
              <svg
                viewBox="0 0 300 400"
                className="w-full"
                style={{ filter: "drop-shadow(0 0 30px rgba(74,175,80,0.08))" }}
              >
                {/* Pitch outline draws in */}
                {[
                  { d: "M20 20 L280 20 L280 380 L20 380 Z", delay: 0.4, dur: 1.2, dash: 1040 },
                  { d: "M150 20 L150 380", delay: 0.8, dur: 0.8, dash: 360 },
                  { d: "M20 140 L100 140 L100 260 L20 260", delay: 1.2, dur: 0.7, dash: 340 },
                  { d: "M280 140 L200 140 L200 260 L280 260", delay: 1.2, dur: 0.7, dash: 340 },
                ].map((path, i) => (
                  <path
                    key={i}
                    d={path.d}
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: path.dash,
                      strokeDashoffset: inView ? 0 : path.dash,
                      transition: `stroke-dashoffset ${path.dur}s cubic-bezier(0.22,1,0.36,1) ${path.delay}s`,
                      opacity: 0.4,
                    }}
                  />
                ))}
                {/* Centre circle */}
                <circle
                  cx="150" cy="200" r="55"
                  fill="none" stroke="#4CAF50" strokeWidth="1"
                  style={{
                    strokeDasharray: 345,
                    strokeDashoffset: inView ? 0 : 345,
                    transition: "stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1) 1.6s",
                    opacity: 0.4,
                  }}
                />
                <circle
                  cx="150" cy="200" r="5"
                  style={{
                    fill: "#4CAF50",
                    opacity: inView ? 0.6 : 0,
                    transition: "opacity 0.4s ease 2.2s",
                  }}
                />
                {/* Penalty arcs */}
                {[
                  { cx: 150, cy: 20, rx: 40, ry: 25, d: 1.8 },
                  { cx: 150, cy: 380, rx: 40, ry: 25, d: 1.9 },
                ].map((arc, i) => (
                  <ellipse
                    key={i}
                    cx={arc.cx} cy={arc.cy} rx={arc.rx} ry={arc.ry}
                    fill="none" stroke="#4CAF50" strokeWidth="0.8"
                    style={{
                      strokeDasharray: 204,
                      strokeDashoffset: inView ? 0 : 204,
                      transition: `stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${arc.d}s`,
                      opacity: 0.25,
                    }}
                  />
                ))}
              </svg>

              {/* Labels */}
              <div
                className="mt-6 space-y-3"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 0.8s ease 2.4s",
                }}
              >
                <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.25em] uppercase">Typical timeline</p>
                <div className="flex items-center gap-0">
                  {["Week 1", "Week 2–3", "Week 4–8", "Week 9"].map((w, i, arr) => (
                    <div key={w} className="flex items-center">
                      <div className="text-center">
                        <div className="w-2 h-2 rounded-full bg-[#4CAF50] mx-auto mb-1" />
                        <p className="text-[9px] text-[#F4EFE6]/30 whitespace-nowrap" style={{ fontSize: "0.6rem" }}>{w}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-8 h-px bg-[#4CAF50]/20 mx-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — step rows with animated vertical line */}
          <div className="md:col-span-8 relative">
            <AnimatedTimeline count={steps.length} inView={inView} />
            <div className="space-y-0">
              {steps.map((step, i) => (
                <StepRow key={step.number} step={step} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={200}>
          <div className="mt-16 border border-white/5 bg-[#0D0F0C] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="text-[#F4EFE6] mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, fontStyle: "italic" }}
              >
                Ready to start Phase 01?
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light">Free site visit. Engineer on-site within 48 hours.</p>
            </div>
            <Link
              href="/enquire"
              className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Book Site Visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
