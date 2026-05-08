"use client";

import { useEffect, useState, useRef } from "react";

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
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative flex items-center justify-end gap-2"
          aria-label={s.label}
        >
          {/* Tooltip */}
          <span
            className="text-[#F4EFE6] text-[9px] tracking-[0.15em] uppercase font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {s.label}
          </span>

          {/* Dot */}
          <div
            className="transition-all duration-300 rounded-full"
            style={{
              width: active === i ? "8px" : "4px",
              height: active === i ? "8px" : "4px",
              background: active === i ? "#4CAF50" : "rgba(255,255,255,0.25)",
              boxShadow: active === i ? "0 0 8px rgba(74,175,80,0.6)" : "none",
            }}
          />
        </button>
      ))}
    </div>
  );
}
