"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const tiles = [
  { label: "Football Turf", stripe: 0 },
  { label: "5-a-side", stripe: 1 },
  { label: "Athletic Track", stripe: 0 },
  { label: "Multi-Sport", stripe: 1 },
  { label: "Cricket Outfield", stripe: 0 },
  { label: "Academy Grade", stripe: 1 },
  { label: "GCC Certified", stripe: 0 },
  { label: "Floodlit Surface", stripe: 1 },
  { label: "Kozhikode", stripe: 0 },
  { label: "Installation", stripe: 1 },
  { label: "Surface Eng.", stripe: 0 },
  { label: "Malappuram", stripe: 1 },
];

const SUBTITLE = "Where the next generation of Kerala sports begins.";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 5.3) % 84}%`,
  delay: `${(i * 0.7) % 5}s`,
  duration: `${4 + (i * 0.4) % 4}s`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
}));

function TurfTile({ label, stripe, index, hoveredIndex, onHover, onLeave }: {
  label: string; stripe: number; index: number;
  hoveredIndex: number | null; onHover: (i: number) => void; onLeave: () => void;
}) {
  const isHovered = hoveredIndex === index;
  const blurred = hoveredIndex !== null && !isHovered;

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{
        filter: blurred ? "blur(3px) brightness(0.4)" : "blur(0px) brightness(1)",
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        transition: "filter 0.45s ease, transform 0.45s ease",
        zIndex: isHovered ? 2 : 1,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Turf stripes */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, j) => (
          <div key={j} className="absolute w-full" style={{
            top: `${j * 10}%`, height: "10%",
            background: (j + stripe) % 2 === 0 ? "rgba(20,60,20,0.95)" : "rgba(14,45,14,0.95)",
          }} />
        ))}
      </div>

      {/* Pitch SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice">
        {index % 4 === 0 && (<>
          <rect x="12" y="12" width="176" height="126" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.5" />
          <line x1="100" y1="12" x2="100" y2="138" stroke="#4CAF50" strokeWidth="1" opacity="0.4" />
          <ellipse cx="100" cy="75" rx="28" ry="20" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="100" cy="75" r="2" fill="#4CAF50" opacity="0.6" />
        </>)}
        {index % 4 === 1 && (<>
          <rect x="40" y="20" width="120" height="110" stroke="#4CAF50" strokeWidth="1.2" fill="none" opacity="0.4" />
          <ellipse cx="100" cy="75" rx="50" ry="38" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" />
        </>)}
        {index % 4 === 2 && (<>
          <line x1="0" y1="75" x2="200" y2="75" stroke="#4CAF50" strokeWidth="1" opacity="0.4" />
          <rect x="70" y="40" width="60" height="70" stroke="#4CAF50" strokeWidth="1.2" fill="none" opacity="0.4" />
          <path d="M70 75 Q100 55 130 75" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.35" />
        </>)}
        {index % 4 === 3 && (<>
          <rect x="8" y="8" width="184" height="134" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.35" />
          <rect x="8" y="55" width="30" height="40" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.35" />
          <rect x="162" y="55" width="30" height="40" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.35" />
        </>)}
      </svg>

      {/* Hover label */}
      <div className="absolute inset-0 flex items-end p-3" style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <span className="text-white/70 uppercase font-medium" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [ctaReady, setCtaReady] = useState(false);

  /* Typewriter */
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedText(SUBTITLE.slice(0, i + 1));
        i++;
        if (i >= SUBTITLE.length) {
          clearInterval(interval);
          setCtaReady(true);
          setTimeout(() => setShowCursor(false), 1200);
        }
      }, 38);
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Tile grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-px bg-black/80">
        {tiles.map((tile, i) => (
          <TurfTile
            key={i} label={tile.label} stripe={tile.stripe} index={i}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Scan line sweep */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 w-32 animate-scan"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(74,175,80,0.06), rgba(74,175,80,0.12), rgba(74,175,80,0.06), transparent)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              left: p.left,
              bottom: "5%",
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

      {/* Gradient fades */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      {/* Wordmark */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pointer-events-none select-none">
        <div className="relative mb-6">
          {/* Blurred glow */}
          <h1 aria-hidden="true" className="absolute inset-0 font-black text-white" style={{
            fontSize: "clamp(5.5rem, 20vw, 18rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.045em",
            filter: "blur(40px)",
            opacity: 0.6,
            fontFamily: "'Arial Black', Impact, sans-serif",
          }}>
            Turfina
          </h1>
          {/* Sharp */}
          <h1 className="relative font-black text-white" style={{
            fontSize: "clamp(5.5rem, 20vw, 18rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.045em",
            fontFamily: "'Arial Black', Impact, sans-serif",
          }}>
            Turfina
          </h1>
        </div>

        {/* Typewriter subtitle */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-white/65 font-light" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)", lineHeight: 1.6 }}>
            {typedText}
            {showCursor && (
              <span className="inline-block w-0.5 h-5 bg-[#4CAF50] ml-0.5 align-middle animate-blink" />
            )}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div
        className="relative z-20 mt-10 flex flex-col items-center gap-3"
        style={{
          opacity: ctaReady ? 1 : 0,
          transform: ctaReady ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Shimmer button */}
        <Link
          href="/enquire"
          className="relative overflow-hidden group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-[#4CAF50]/60 text-white font-medium px-10 py-4 rounded-full transition-all duration-300"
          style={{ fontSize: "0.9rem", letterSpacing: "0.04em" }}
        >
          <span className="relative z-10">Build Your Pitch</span>
          {/* Shimmer sweep on hover */}
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
            style={{ background: "linear-gradient(90deg, transparent, rgba(74,175,80,0.15), transparent)" }}
          />
        </Link>
        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-1">Scroll to Explore</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" style={{ animation: "pulse 2s ease-in-out infinite" }} />
      </div>

      {/* GCC badge */}
      <div className="absolute top-24 right-6 md:right-10 z-20"
        style={{ opacity: ctaReady ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}
      >
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2 text-right">
          <p className="text-[#4CAF50] text-[10px] tracking-[0.2em] uppercase font-medium">GCC Certified</p>
          <p className="text-white/40 text-[9px] tracking-[0.1em] uppercase mt-0.5">Bahrain · Qatar · UAE</p>
        </div>
      </div>

      {/* Stats strip — bottom left */}
      <div
        className="absolute bottom-10 left-6 md:left-10 z-20 hidden md:flex items-center gap-8"
        style={{ opacity: ctaReady ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}
      >
        {[
          { value: "47+", label: "Pitches" },
          { value: "9", label: "Countries" },
          { value: "10yr", label: "Warranty" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-white/80 font-light" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", lineHeight: 1 }}>
              {s.value}
            </p>
            <p className="text-white/30 text-[9px] tracking-[0.15em] uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
