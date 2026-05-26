"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 47,
    suffix: "+",
    label: "Pitches delivered",
    sub: "Across Kerala, Bahrain, Qatar, UAE",
    bar: 78,
    color: "#4CAF50",
  },
  {
    value: 9,
    suffix: "",
    label: "Countries served",
    sub: "GCC + South Asia",
    bar: 60,
    color: "#4CAF50",
  },
  {
    value: 10,
    suffix: "-yr",
    label: "Surface warranty",
    sub: "Performance guaranteed",
    bar: 85,
    color: "#A8D5A8",
  },
  {
    value: 98,
    suffix: "%",
    label: "On-time delivery",
    sub: "Fixed-price, no surprises",
    bar: 98,
    color: "#4CAF50",
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  sub,
  bar,
  color,
  started,
  index,
}: (typeof stats)[0] & { started: boolean; index: number }) {
  const count = useCountUp(value, 1600 + index * 100, started);
  const barDelay = 0.4 + index * 0.15;

  return (
    <div
      className="flex flex-col gap-3"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s ease ${index * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      {/* Value */}
      <div className="flex items-end gap-0.5 leading-none">
        <span
          className="tabular-nums"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#F4EFE6",
          }}
        >
          {count}
        </span>
        <span
          className="pb-2"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            fontWeight: 300,
            lineHeight: 1,
            color,
          }}
        >
          {suffix}
        </span>
      </div>

      {/* Animated progress bar */}
      <div className="relative h-px bg-white/8 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 origin-left"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            width: `${bar}%`,
            transform: started ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: `transform 1.6s cubic-bezier(0.22,1,0.36,1) ${barDelay}s`,
          }}
        />
        {/* Shimmer pulse on bar */}
        <div
          className="absolute inset-y-0 w-12"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            left: `${bar}%`,
            transform: "translateX(-100%)",
            opacity: started ? 0 : 0,
          }}
        />
      </div>

      {/* Labels */}
      <p className="text-[#F4EFE6] text-sm font-medium tracking-wide">{label}</p>
      <p className="text-[#F4EFE6]/35 text-xs font-light">{sub}</p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0D0F0C] py-20 border-t border-white/5 relative overflow-hidden">
      {/* Faint background pitch stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 48%, rgba(74,175,80,0.025) 48%, rgba(74,175,80,0.025) 52%, transparent 52%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-12"
          style={{
            opacity: started ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">
            By the numbers
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0D0F0C] px-8 py-10">
              <StatItem {...stat} started={started} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom strip: trust icons */}
        <div
          className="mt-12 border-t border-white/5 pt-8 flex flex-wrap items-center gap-8 justify-center md:justify-start"
          style={{
            opacity: started ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          {[
            { cert: "FIFA Quality Pro", year: "Certified" },
            { cert: "IAAF Level 1", year: "Certified" },
            { cert: "GCC Grade", year: "Materials" },
            { cert: "ISO Standard", year: "Construction" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-6 h-6 border border-[#4CAF50]/30 flex items-center justify-center shrink-0"
                style={{ background: "rgba(74,175,80,0.05)" }}
              >
                <svg className="w-3 h-3 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-[#F4EFE6]/50 text-[9px] tracking-[0.12em] uppercase font-medium">{c.cert}</p>
                <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.1em] uppercase">{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
