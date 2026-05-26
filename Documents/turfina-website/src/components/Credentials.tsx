"use client";

import { useEffect, useRef, useState } from "react";
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
    <section
      className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden"
      style={{ background: "#0B0D0A" }}
    >
      {/* Subtle pitch stripe bg */}
      <div className="absolute inset-0 pitch-stripes pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <div className="eyebrow-strip mb-5">
            <span className="accent-line" />
            <span className="eyebrow">Heritage &amp; Credentials</span>
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal delay={80}>
            <h2 className="section-title max-w-xl">
              GCC quality.
              <br />
              <em style={{ fontStyle: "italic", color: "rgba(244,239,230,0.65)" }}>Kerala commitment.</em>
            </h2>
          </Reveal>
          <Reveal delay={160} direction="right">
            <p className="section-body max-w-sm">
              Over two decades of surface engineering across the Gulf brings international-grade precision to every pitch we lay in India.
            </p>
          </Reveal>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20" style={{ background: "rgba(255,255,255,0.04)" }}>
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 90}>
            <div
              className="relative group overflow-hidden h-full"
              style={{
                background: "#0B0D0A",
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                transition: "background 0.4s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#0F1510"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#0B0D0A"; }}
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(74,175,80,0.06) 0%, transparent 70%)" }}
              />

              {/* Background number */}
              <p
                className="absolute -top-3 -right-1 select-none pointer-events-none display-font"
                style={{ fontSize: "5.5rem", fontWeight: 700, lineHeight: 1, color: "rgba(255,255,255,0.025)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Green indicator */}
              <div
                className="w-8 h-8 flex items-center justify-center mb-6 transition-all duration-400"
                style={{
                  border: "1px solid rgba(74,175,80,0.2)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74,175,80,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 12px rgba(74,175,80,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74,175,80,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-2.5 h-2.5 group-hover:bg-[#4CAF50] transition-colors duration-300"
                  style={{ background: "rgba(74,175,80,0.4)" }}
                />
              </div>

              {/* Value */}
              <p
                className="display-font text-[#4CAF50] mb-1"
                style={{ fontSize: "1.4rem", fontWeight: 300 }}
              >
                {cert.value}
              </p>

              <p className="text-[#F4EFE6] font-medium text-sm mb-2" style={{ letterSpacing: "0.01em" }}>{cert.name}</p>
              <p className="section-body text-xs leading-relaxed">{cert.desc}</p>
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
