"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HEADLINE_1 = "Engineer";
const HEADLINE_2 = "the Pitch.";
const TAGLINE = "Where the next generation of Kerala sport begins.";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${6 + (i * 4.1) % 88}%`,
  delay: `${(i * 0.61) % 7}s`,
  duration: `${6 + (i * 0.55) % 5}s`,
  size: [2, 1.5, 1, 2.5][i % 4],
  opacity: [0.6, 0.35, 0.5, 0.25][i % 4],
}));

const stats = [
  { value: "47+", label: "Pitches Built" },
  { value: "9",   label: "Countries" },
  { value: "21yr", label: "Experience" },
];

export default function Hero() {
  const [phase, setPhase] = useState<"enter" | "typed" | "ready">("enter");
  const [typedLen, setTypedLen] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const pitchRef = useRef<SVGSVGElement>(null);

  /* Orchestrated entrance sequence */
  useEffect(() => {
    /* 1. After 400ms start typewriter */
    const t1 = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setTypedLen(i);
        if (i >= TAGLINE.length) {
          clearInterval(iv);
          setPhase("typed");
          /* 2. 900ms after typing done → reveal CTAs */
          setTimeout(() => {
            setPhase("ready");
            setTimeout(() => setShowCursor(false), 1000);
          }, 900);
        }
      }, 32);
    }, 800);
    return () => clearTimeout(t1);
  }, []);

  /* Pitch SVG draw-in */
  useEffect(() => {
    if (!pitchRef.current) return;
    const lines = pitchRef.current.querySelectorAll<SVGElement>("[data-draw]");
    lines.forEach((el, i) => {
      const len = (el as SVGGeometryElement).getTotalLength?.() ?? 400;
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      el.style.transition = `stroke-dashoffset ${el.dataset.dur ?? "1.8"}s ${el.dataset.ease ?? "cubic-bezier(0.22,1,0.36,1)"} ${el.dataset.delay ?? "0"}s`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.strokeDashoffset = "0";
      }));
    });
  }, []);

  const ctaVisible = phase === "ready";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#060806" }}>

      {/* ── Deep background radial atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(20,60,18,0.45) 0%, rgba(8,12,7,0.0) 70%)",
        }}
      />

      {/* ── Pitch grid / turf stripes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, j) => (
          <div
            key={j}
            className="absolute w-full"
            style={{
              top: `${j * (100 / 14)}%`,
              height: `${100 / 14}%`,
              background: j % 2 === 0 ? "rgba(14,26,12,0.7)" : "rgba(10,18,9,0.7)",
            }}
          />
        ))}
      </div>

      {/* ── Full-pitch SVG with animated draw ── */}
      <svg
        ref={pitchRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.18 }}
      >
        {/* Boundary */}
        <rect
          data-draw data-dur="2.4" data-delay="0.1"
          x="60" y="45" width="1320" height="810"
          stroke="#4CAF50" strokeWidth="2" fill="none"
        />
        {/* Halfway line */}
        <line
          data-draw data-dur="1.6" data-delay="0.8"
          x1="720" y1="45" x2="720" y2="855"
          stroke="#4CAF50" strokeWidth="1.5"
        />
        {/* Centre circle */}
        <ellipse
          data-draw data-dur="1.8" data-delay="1.2"
          cx="720" cy="450" rx="130" ry="88"
          stroke="#4CAF50" strokeWidth="1.5" fill="none"
        />
        {/* Centre dot */}
        <circle cx="720" cy="450" r="5" fill="#4CAF50" opacity="0.5" />
        {/* Left penalty area */}
        <rect
          data-draw data-dur="1.4" data-delay="1.6"
          x="60" y="270" width="220" height="360"
          stroke="#4CAF50" strokeWidth="1.2" fill="none"
        />
        {/* Right penalty area */}
        <rect
          data-draw data-dur="1.4" data-delay="1.6"
          x="1160" y="270" width="220" height="360"
          stroke="#4CAF50" strokeWidth="1.2" fill="none"
        />
        {/* Left goal area */}
        <rect
          data-draw data-dur="1" data-delay="2"
          x="60" y="340" width="100" height="220"
          stroke="#4CAF50" strokeWidth="1" fill="none"
        />
        {/* Right goal area */}
        <rect
          data-draw data-dur="1" data-delay="2"
          x="1280" y="340" width="100" height="220"
          stroke="#4CAF50" strokeWidth="1" fill="none"
        />
        {/* Corner arcs — drawn as tiny arcs */}
        <path data-draw data-dur="0.8" data-delay="2.4"
          d="M60 45 Q90 45 90 75" stroke="#4CAF50" strokeWidth="1" fill="none" />
        <path data-draw data-dur="0.8" data-delay="2.4"
          d="M1380 45 Q1350 45 1350 75" stroke="#4CAF50" strokeWidth="1" fill="none" />
        <path data-draw data-dur="0.8" data-delay="2.4"
          d="M60 855 Q90 855 90 825" stroke="#4CAF50" strokeWidth="1" fill="none" />
        <path data-draw data-dur="0.8" data-delay="2.4"
          d="M1380 855 Q1350 855 1350 825" stroke="#4CAF50" strokeWidth="1" fill="none" />
      </svg>

      {/* ── Horizontal thin vignette lines (depth) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(6,8,6,0.95) 0%, rgba(6,8,6,0.2) 18%, transparent 35%, transparent 65%, rgba(6,8,6,0.25) 82%, rgba(6,8,6,0.98) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(6,8,6,0.85) 0%, transparent 18%, transparent 82%, rgba(6,8,6,0.85) 100%)",
        }}
      />

      {/* ── Scan sweep ── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 w-48 animate-scan"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(74,175,80,0.04) 40%, rgba(74,175,80,0.09) 50%, rgba(74,175,80,0.04) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              left: p.left,
              bottom: "2%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "#4CAF50",
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pointer-events-none select-none" style={{ maxWidth: "1100px" }}>

        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-10 animate-hero-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="block w-8 h-px bg-[#4CAF50]" style={{ opacity: 0.6 }} />
          <span style={{
            fontSize: "9px",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(74,175,80,0.85)",
            fontWeight: 500,
          }}>
            FIFA · IAAF · GCC · ISO 9001
          </span>
          <span className="block w-8 h-px bg-[#4CAF50]" style={{ opacity: 0.6 }} />
        </div>

        {/* Wordmark — Cormorant at dramatic scale */}
        <div className="relative mb-6 animate-hero-up" style={{ animationDelay: "0.3s" }}>
          {/* Ghost glow behind */}
          <h1
            aria-hidden="true"
            className="absolute inset-0 display-font text-[#F4EFE6] pointer-events-none"
            style={{
              fontSize: "clamp(5rem, 18vw, 16rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              filter: "blur(48px)",
              opacity: 0.22,
              userSelect: "none",
            }}
          >
            {HEADLINE_1}
            <br />
            {HEADLINE_2}
          </h1>

          {/* Sharp headline */}
          <h1
            className="relative display-font"
            style={{
              fontSize: "clamp(5rem, 18vw, 16rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              color: "#F4EFE6",
            }}
          >
            {HEADLINE_1}
            <br />
            <em style={{
              fontStyle: "italic",
              fontWeight: 300,
              background: "linear-gradient(135deg, #F4EFE6 0%, rgba(244,239,230,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {HEADLINE_2}
            </em>
          </h1>

          {/* Green accent line beneath */}
          <div className="flex justify-center mt-5">
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #4CAF50, transparent)",
              }}
            />
          </div>
        </div>

        {/* Typewriter tagline */}
        <div
          className="h-10 flex items-center justify-center mb-4 animate-hero-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
              fontWeight: 300,
              color: "rgba(244,239,230,0.55)",
              letterSpacing: "0.025em",
              lineHeight: 1.6,
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {TAGLINE.slice(0, typedLen)}
            {showCursor && (
              <span
                className="inline-block w-0.5 h-5 ml-1 align-middle animate-blink"
                style={{ background: "#4CAF50", borderRadius: "1px" }}
              />
            )}
          </p>
        </div>
      </div>

      {/* ── CTAs ── */}
      <div
        className="relative z-20 mt-10 flex flex-col sm:flex-row items-center gap-4"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          pointerEvents: ctaVisible ? "auto" : "none",
        }}
      >
        <Link href="/enquire" className="btn-primary">
          Build Your Pitch
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <Link href="/about" className="btn-ghost">
          Our Story
        </Link>
      </div>

      {/* ── Stats strip ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-12"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-12">
            <div className="text-center">
              <p
                className="display-font text-[#F4EFE6]"
                style={{ fontSize: "1.75rem", fontWeight: 300, lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,230,0.3)", marginTop: "4px" }}>
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-8 bg-white/10" />
            )}
          </div>
        ))}
      </div>

      {/* ── GCC badge ── */}
      <div
        className="absolute top-24 right-6 md:right-10 z-20"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
        }}
      >
        <div
          className="glass px-4 py-3 text-right"
          style={{ border: "1px solid rgba(74,175,80,0.15)" }}
        >
          <p style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4CAF50", fontWeight: 500 }}>
            GCC Certified
          </p>
          <p style={{ fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,239,230,0.3)", marginTop: "3px" }}>
            Bahrain · Qatar · UAE
          </p>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
        style={{
          opacity: ctaVisible ? 0.4 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <span style={{ fontSize: "7px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(244,239,230,0.4)", writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div
          className="w-px animate-breathe"
          style={{ height: "48px", background: "linear-gradient(to bottom, rgba(74,175,80,0.6), transparent)" }}
        />
      </div>
    </section>
  );
}
