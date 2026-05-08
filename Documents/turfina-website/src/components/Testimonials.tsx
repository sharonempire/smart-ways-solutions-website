"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote: "Turfina solved in 9 weeks what two previous contractors couldn't fix in two years. The drainage has performed through two full rainy seasons without a single waterlogged session.",
    name: "Ahmed Al Farsi",
    title: "Academy Director",
    org: "Al Manamah FC, Bahrain",
    surface: "FIFA Quality Pro · 11-a-side",
    year: "2022",
    country: "Bahrain",
    flag: "🇧🇭",
    metric: { value: "9 weeks", label: "delivery" },
  },
  {
    quote: "We expected delays. There were none. The quality is comparable to what I've seen in Dubai — I didn't expect that standard in Kozhikode. Our clubs are fully booked 14 hours a day.",
    name: "Pradeep K.",
    title: "Sports Officer",
    org: "Kozhikode Municipal Corporation",
    surface: "FIFA Quality · 5-a-side × 4",
    year: "2024",
    country: "India",
    flag: "🇮🇳",
    metric: { value: "14 hrs", label: "daily usage" },
  },
  {
    quote: "Every buyer who walked the site asked about the court first. It did more selling than any brochure we produced. We've since engaged Turfina for our second project.",
    name: "Confidential",
    title: "Project Developer",
    org: "NRI Villa Complex, Malappuram",
    surface: "Multi-Sport Court · 1,200 m²",
    year: "2025",
    country: "India",
    flag: "🇮🇳",
    metric: { value: "+12%", label: "sale price lift" },
  },
  {
    quote: "This track changed what our school means to this district. Students who would have gone elsewhere for athletics training now stay. That's the real return on this investment.",
    name: "M. Suresh Kumar",
    title: "Headmaster",
    org: "GHSS Calicut, Kozhikode",
    surface: "IAAF Level 1 · 400m Track",
    year: "2025",
    country: "India",
    flag: "🇮🇳",
    metric: { value: "400m", label: "IAAF track" },
  },
  {
    quote: "I've worked with contractors across Bahrain and Qatar. Turfina is the only one that shows up on day one with a drainage plan, not just a price. That's rare in this industry.",
    name: "Khalid Al Dosari",
    title: "Facilities Manager",
    org: "Doha Sports Complex, Qatar",
    surface: "FIFA Quality Pro · Training Ground",
    year: "2019",
    country: "Qatar",
    flag: "🇶🇦",
    metric: { value: "Day 1", label: "drainage plan" },
  },
  {
    quote: "The fixed-price contract was what sold us. We'd been burned before by change orders. Turfina delivered exactly to spec, exactly on time, exactly to the price on the proposal.",
    name: "Dr. Sujith Nair",
    title: "Principal",
    org: "Calicut International School",
    surface: "Multi-Sport Court + Football Turf",
    year: "2025",
    country: "India",
    flag: "🇮🇳",
    metric: { value: "₹0", label: "in overruns" },
  },
];

const AUTO_INTERVAL = 6000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());

  const goTo = useCallback((index: number, dir: "next" | "prev" = "next") => {
    if (transitioning || index === active) return;
    setDirection(dir);
    setPrev(active);
    setTransitioning(true);
    setActive(index);
    setProgress(0);
    startTimeRef.current = Date.now();
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 550);
  }, [active, transitioning]);

  const goNext = useCallback(() => {
    goTo((active + 1) % testimonials.length, "next");
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length, "prev");
  }, [active, goTo]);

  /* Auto-advance */
  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / AUTO_INTERVAL) * 100, 100));
    }, 30);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [active, paused, goNext]);

  /* Keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const current = testimonials[active];
  const prevItem = prev !== null ? testimonials[prev] : null;

  /* Slide direction offsets */
  const enterFrom = direction === "next" ? "translateX(40px)" : "translateX(-40px)";
  const exitTo = direction === "next" ? "translateX(-40px)" : "translateX(40px)";

  return (
    <section
      className="bg-[#080A07] py-24 md:py-36 border-t border-white/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Client Voices</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
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
              From the people
              <br />
              <em style={{ fontStyle: "italic" }}>who built with us.</em>
            </h2>
            <p className="text-[#F4EFE6]/30 text-sm font-light">
              {active + 1} / {testimonials.length}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">

          {/* Left selector tabs */}
          <Reveal direction="left" className="md:col-span-4">
            <div className="flex flex-col gap-px bg-white/5">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? "next" : "prev")}
                  className="relative text-left px-5 py-4 transition-all duration-200 overflow-hidden group"
                  style={{
                    background: active === i ? "rgba(42,92,42,0.15)" : "#080A07",
                    borderLeft: `2px solid ${active === i ? "#4CAF50" : "transparent"}`,
                  }}
                >
                  {/* Progress bar fills only the active tab */}
                  {active === i && !paused && (
                    <div
                      className="absolute bottom-0 left-0 h-px bg-[#4CAF50]/50 transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  <p
                    className="font-medium mb-0.5 text-sm transition-colors"
                    style={{ color: active === i ? "#F4EFE6" : "rgba(244,239,230,0.4)" }}
                  >
                    {t.name === "Confidential" ? "Confidential" : t.name}
                  </p>
                  <p
                    className="text-[9px] tracking-[0.1em] uppercase transition-colors"
                    style={{ color: active === i ? "#4CAF50" : "rgba(244,239,230,0.2)" }}
                  >
                    {t.flag} {t.country} · {t.year}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Right quote area — crossfade + slide */}
          <div className="md:col-span-8 relative min-h-[360px]">

            {/* Exiting quote */}
            {prevItem && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: 0,
                  transform: exitTo,
                  transition: "opacity 0.45s ease, transform 0.45s ease",
                }}
              >
                <QuoteContent item={prevItem} progress={0} />
              </div>
            )}

            {/* Entering quote */}
            <div
              key={active}
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? enterFrom : "translateX(0)",
                transition: transitioning
                  ? "none"
                  : "opacity 0.5s cubic-bezier(0.22,1,0.36,1) 0.05s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.05s",
              }}
            >
              <QuoteContent item={current} progress={progress} />
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={goPrev}
                className="w-10 h-10 border border-white/10 hover:border-[#4CAF50]/50 flex items-center justify-center transition-all duration-200 group"
                aria-label="Previous"
              >
                <svg className="w-3.5 h-3.5 text-[#F4EFE6]/40 group-hover:text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 border border-white/10 hover:border-[#4CAF50]/50 flex items-center justify-center transition-all duration-200 group"
                aria-label="Next"
              >
                <svg className="w-3.5 h-3.5 text-[#F4EFE6]/40 group-hover:text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

              {/* Dot nav */}
              <div className="flex gap-2 ml-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > active ? "next" : "prev")}
                    aria-label={`Testimonial ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: active === i ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: active === i ? "#4CAF50" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>

              <span className="ml-auto text-[#F4EFE6]/20 text-[9px] tracking-[0.15em] uppercase">
                {paused ? "Paused" : "Auto"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteContent({ item, progress }: { item: typeof testimonials[0]; progress: number }) {
  return (
    <div className="flex flex-col h-full">
      {/* Metric badge */}
      <div className="flex items-center gap-4 mb-6">
        <div className="border border-[#4CAF50]/25 bg-[#4CAF50]/5 px-4 py-2">
          <p
            className="text-[#4CAF50]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, lineHeight: 1 }}
          >
            {item.metric.value}
          </p>
          <p className="text-[#F4EFE6]/35 text-[9px] tracking-[0.15em] uppercase">{item.metric.label}</p>
        </div>
        <div className="h-px flex-1 bg-white/5" />
        <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.2em] uppercase">{item.surface}</p>
      </div>

      {/* Decorative quote mark */}
      <p
        className="text-[#4CAF50]/10 select-none leading-none mb-2"
        style={{ fontFamily: "Georgia, serif", fontSize: "5rem", lineHeight: 0.7 }}
        aria-hidden="true"
      >
        &ldquo;
      </p>

      <blockquote
        className="text-[#F4EFE6]/80 mb-8 leading-relaxed flex-1"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.6,
        }}
      >
        {item.quote}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-end justify-between pt-6 border-t border-white/5">
        <div className="flex items-center gap-3">
          {/* Avatar initial */}
          <div
            className="w-9 h-9 border border-[#4CAF50]/30 flex items-center justify-center text-[#4CAF50] font-medium shrink-0"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem" }}
          >
            {item.name === "Confidential" ? "C" : item.name.charAt(0)}
          </div>
          <div>
            <p className="text-[#F4EFE6] font-medium text-sm">{item.name}</p>
            <p className="text-[#F4EFE6]/45 text-xs font-light">{item.title} · {item.org}</p>
          </div>
        </div>
        <p className="text-[#F4EFE6]/20 text-xs font-mono">{item.year}</p>
      </div>
    </div>
  );
}
