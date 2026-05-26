"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const sections = [
  { id: "hero", label: "Top" },
  { id: "stats", label: "Stats" },
  { id: "surfaces", label: "Surfaces" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "comparison", label: "Compare" },
  { id: "testimonials", label: "Clients" },
  { id: "enquire-cta", label: "Enquire" },
];

export default function ScrollNav() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 300);

      let found = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          found = i;
        }
      });
      setActive(found);
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 items-end transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {sections.map((s, i) => {
        const isActive = active === i;
        const isHovered = hovered === i;

        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center justify-end gap-2.5"
            aria-label={s.label}
          >
            {/* Label — slides in on hover or active */}
            <span
              className="text-[8px] tracking-[0.18em] uppercase font-medium whitespace-nowrap transition-all duration-250 pointer-events-none"
              style={{
                opacity: isHovered || isActive ? 1 : 0,
                transform: isHovered || isActive ? "translateX(0)" : "translateX(6px)",
                color: isActive ? "#4CAF50" : "rgba(244,239,230,0.5)",
                transition: "opacity 0.2s ease, transform 0.2s ease, color 0.3s ease",
              }}
            >
              {s.label}
            </span>

            {/* Track segment */}
            <div className="flex flex-col items-center gap-0.5">
              {/* Dot */}
              <div
                className="rounded-full transition-all duration-350"
                style={{
                  width: isActive ? "8px" : isHovered ? "6px" : "4px",
                  height: isActive ? "8px" : isHovered ? "6px" : "4px",
                  background: isActive
                    ? "#4CAF50"
                    : isHovered
                    ? "rgba(244,239,230,0.5)"
                    : "rgba(255,255,255,0.2)",
                  boxShadow: isActive ? "0 0 8px rgba(74,175,80,0.7), 0 0 16px rgba(74,175,80,0.3)" : "none",
                }}
              />
              {/* Connector line between dots */}
              {i < sections.length - 1 && (
                <div
                  className="w-px transition-all duration-300"
                  style={{
                    height: "10px",
                    background: i < active
                      ? "rgba(74,175,80,0.4)"
                      : "rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>
          </button>
        );
      })}

      {/* Progress percentage */}
      <div
        className="mt-2 flex flex-col items-center gap-1 transition-all duration-300"
        style={{ opacity: hovered !== null ? 0.8 : 0.25 }}
      >
        <div className="w-px h-4 bg-white/10" />
        <span
          className="text-[7px] tabular-nums font-mono"
          style={{ color: "rgba(244,239,230,0.4)", letterSpacing: "0.05em" }}
        >
          {Math.round((active / (sections.length - 1)) * 100)}%
        </span>
      </div>
    </div>
  );
}
