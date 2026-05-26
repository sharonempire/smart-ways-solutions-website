"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const segments = [
  {
    id: "schools",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="18" width="32" height="18" stroke="#4CAF50" strokeWidth="1.2" fill="none"/>
        <path d="M2 18L20 6l18 12" stroke="#4CAF50" strokeWidth="1.2" strokeLinejoin="round"/>
        <rect x="15" y="26" width="10" height="10" stroke="#4CAF50" strokeWidth="1" fill="none"/>
        <rect x="8" y="22" width="6" height="6" stroke="#4CAF50" strokeWidth="1" fill="rgba(74,175,80,0.15)"/>
        <rect x="26" y="22" width="6" height="6" stroke="#4CAF50" strokeWidth="1" fill="rgba(74,175,80,0.15)"/>
      </svg>
    ),
    label: "Schools & Colleges",
    headline: "A pitch that earns your school its reputation.",
    body: "Sports infrastructure is now a key admission differentiator. Government and private schools across North Kerala are building FIFA-quality grounds to attract students and win district-level championships.",
    cta: "School enquiry",
    href: "/enquire?type=school",
    tags: ["Government approval assistance", "Annual maintenance contracts", "Student safety certified"],
    stat: { value: "3×", desc: "more admissions cited sport" },
    backPoints: [
      "Full project management from permits to handover",
      "FIFA-certified pile specifications for student safety",
      "Shock-absorbent base layer — falls-safe for all ages",
      "Government sports grant application assistance included",
      "Annual maintenance SLA with 24hr response",
    ],
    backCta: "Book free school assessment",
  },
  {
    id: "academies",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="16" stroke="#4CAF50" strokeWidth="1.2" fill="none"/>
        <line x1="4" y1="20" x2="36" y2="20" stroke="#4CAF50" strokeWidth="0.8"/>
        <circle cx="20" cy="20" r="5" stroke="#4CAF50" strokeWidth="1" fill="none"/>
        <ellipse cx="20" cy="20" rx="10" ry="16" stroke="#4CAF50" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    label: "Football Academies",
    headline: "Train on the surface you want to play on.",
    body: "Kerala's football culture is elite. Academies affiliated with ISL clubs and FIFA development programs demand surfaces that replicate the stadiums players aspire to.",
    cta: "Academy enquiry",
    href: "/enquire?type=academy",
    tags: ["FIFA-certified pile specs", "Shock-pad drainage systems", "Line-marking to FA standards"],
    stat: { value: "14h", desc: "average daily pitch usage" },
    backPoints: [
      "FIFA Quality Pro certification — matches ISL stadium spec",
      "60mm pile height rubber crumb infill system",
      "Laser-levelled sub-base for true ball roll",
      "FA-standard line marking in all 11-a-side formats",
      "Drainage rated 200mm/hr — zero waterlogged sessions",
    ],
    backCta: "Book academy consultation",
  },
  {
    id: "realestate",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="12" width="24" height="24" stroke="#4CAF50" strokeWidth="1.2" fill="none"/>
        <rect x="16" y="8" width="20" height="28" stroke="#4CAF50" strokeWidth="1.2" fill="none"/>
        <line x1="4" y1="20" x2="28" y2="20" stroke="#4CAF50" strokeWidth="0.7"/>
        <line x1="12" y1="12" x2="12" y2="36" stroke="#4CAF50" strokeWidth="0.7"/>
        <line x1="24" y1="8" x2="24" y2="36" stroke="#4CAF50" strokeWidth="0.7"/>
        <rect x="19" y="26" width="7" height="10" stroke="#4CAF50" strokeWidth="1" fill="rgba(74,175,80,0.1)"/>
      </svg>
    ),
    label: "Real Estate Developers",
    headline: "Sports amenities sell apartments.",
    body: "Premium residential projects with sports turf command 8–12% higher sale prices and cut unsold inventory by months. We deliver ready-to-photograph surfaces in 6–8 weeks.",
    cta: "Developer enquiry",
    href: "/enquire?type=developer",
    tags: ["6-week delivery for launch events", "Drone-ready aesthetics", "Maintenance-free 10yr warranty"],
    stat: { value: "+12%", desc: "avg sale price lift" },
    backPoints: [
      "6–8 week project delivery — ready for your launch event",
      "Drone-ready aesthetics: crisp white lines, rich green pile",
      "10-year performance warranty included in quote",
      "Multi-sport court options: football + basketball + badminton",
      "Fixed-price contract — zero change orders",
    ],
    backCta: "Get developer pricing",
  },
  {
    id: "nri",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="15" stroke="#4CAF50" strokeWidth="1.2" fill="none"/>
        <ellipse cx="20" cy="20" rx="7" ry="15" stroke="#4CAF50" strokeWidth="0.8" fill="none"/>
        <line x1="5" y1="14" x2="35" y2="14" stroke="#4CAF50" strokeWidth="0.7"/>
        <line x1="5" y1="26" x2="35" y2="26" stroke="#4CAF50" strokeWidth="0.7"/>
        <line x1="5" y1="20" x2="35" y2="20" stroke="#4CAF50" strokeWidth="0.5" strokeDasharray="3,2"/>
      </svg>
    ),
    label: "NRI Private Investors",
    headline: "Own a pitch in your hometown.",
    body: "NRI investors building private estates in Kozhikode and Malappuram are installing sports courts as premium amenities. Managed-turf packages available for pay-per-play revenue models.",
    cta: "Investor brief",
    href: "/enquire?type=investor",
    tags: ["Revenue model consulting", "Pay-per-play setup", "Remote project monitoring"],
    stat: { value: "₹0", desc: "hidden costs on fixed contracts" },
    backPoints: [
      "End-to-end project management while you're abroad",
      "Photo + video progress updates every 72 hours",
      "Pay-per-play revenue model consulting included",
      "Managed-turf SLA — we maintain, you earn",
      "Fully bonded contract with performance guarantees",
    ],
    backCta: "Request investor pack",
  },
];

export default function BuyerSegments() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section className="bg-[#080A07] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">
              Who We Build For
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
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
              Four kinds of
              <br />
              <em style={{ fontStyle: "italic" }}>dream builder.</em>
            </h2>
            <p className="text-[#F4EFE6]/30 text-sm font-light max-w-xs">
              Hover any card to see what we specifically deliver for your project type.
            </p>
          </div>
        </Reveal>

        {/* Segment grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <FlipCard
                segment={s}
                isFlipped={flipped === s.id}
                onFlip={() => setFlipped(flipped === s.id ? null : s.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({
  segment: s,
  isFlipped,
  onFlip,
}: {
  segment: (typeof segments)[0];
  isFlipped: boolean;
  onFlip: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{ perspective: "1200px", minHeight: "420px" }}
      onMouseEnter={() => onFlip()}
      onMouseLeave={() => onFlip()}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "420px",
        }}
      >
        {/* === FRONT FACE === */}
        <div
          className="absolute inset-0 flex flex-col p-10 border border-white/5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "#0A0D0A",
          }}
        >
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 opacity-30"
            style={{
              background: "linear-gradient(225deg, rgba(74,175,80,0.3) 0%, transparent 70%)",
            }}
          />

          {/* Icon */}
          <div className="mb-6">{s.icon}</div>

          <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-3 font-medium">
            {s.label}
          </p>

          <h3
            className="text-[#F4EFE6] mb-4 leading-snug"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            {s.headline}
          </h3>

          <p
            className="text-[#F4EFE6]/50 leading-relaxed mb-8 flex-1"
            style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            {s.body}
          </p>

          {/* Stat + tags row */}
          <div className="flex items-end justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 text-[#F4EFE6]/35 text-[8px] tracking-[0.1em] uppercase px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="shrink-0 text-right">
              <p
                className="text-[#4CAF50]"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                {s.stat.value}
              </p>
              <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.1em] uppercase mt-0.5">{s.stat.desc}</p>
            </div>
          </div>

          {/* Flip hint */}
          <div className="flex items-center gap-2 mt-auto">
            <div className="w-5 h-px bg-[#4CAF50]/40" />
            <p className="text-[#4CAF50]/50 text-[8px] tracking-[0.15em] uppercase">Hover to explore</p>
          </div>
        </div>

        {/* === BACK FACE === */}
        <div
          className="absolute inset-0 flex flex-col p-10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0E1A0E 0%, #111A11 100%)",
            border: "1px solid rgba(74,175,80,0.2)",
          }}
        >
          {/* Top glow strip */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(74,175,80,0.6), transparent)" }}
          />

          <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-4 font-medium">
            {s.label} · What you get
          </p>

          <h3
            className="text-[#F4EFE6] mb-6 leading-snug"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.35rem",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            {s.headline}
          </h3>

          {/* Point list */}
          <ul className="flex flex-col gap-3 flex-1 mb-8">
            {s.backPoints.map((pt, j) => (
              <li key={j} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-1"
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    background: "#4CAF50",
                    transform: "rotate(45deg)",
                    opacity: 0.7,
                  }}
                />
                <span className="text-[#F4EFE6]/65 text-sm font-light leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={s.href}
            className="inline-flex items-center gap-3 bg-[#4CAF50]/10 border border-[#4CAF50]/30 hover:border-[#4CAF50]/70 hover:bg-[#4CAF50]/20 text-[#4CAF50] px-6 py-3.5 text-[9px] tracking-[0.2em] uppercase font-medium transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {s.backCta}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
