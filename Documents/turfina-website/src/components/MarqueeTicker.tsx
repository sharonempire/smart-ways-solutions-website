"use client";

import { useRef, useEffect, useState } from "react";

const items = [
  { text: "FIFA Quality Pro", dot: true },
  { text: "IAAF Level 1 Certified", dot: true },
  { text: "47 Pitches Delivered", dot: true },
  { text: "9 Countries", dot: true },
  { text: "10-Year Warranty", dot: true },
  { text: "GCC Grade Materials", dot: true },
  { text: "Free Site Assessment", dot: true },
  { text: "Fixed-Price Contracts", dot: true },
  { text: "Bahrain · Qatar · UAE · Kerala", dot: true },
  { text: "Zero Waterlogged Sessions", dot: true },
  { text: "98% On-Time Delivery", dot: true },
  { text: "Laser-Levelled Sub-Base", dot: true },
];

/* Double the array so the loop is seamless */
const doubled = [...items, ...items];

type MarqueeTickerProps = {
  direction?: "left" | "right";
  speed?: number; /* px per second */
  variant?: "dark" | "green";
};

export default function MarqueeTicker({
  direction = "left",
  speed = 55,
  variant = "dark",
}: MarqueeTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  /* Measure the single-set width after mount */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    /* Half the total because we doubled the items */
    setTrackWidth(el.scrollWidth / 2);
  }, []);

  /* rAF-driven smooth scroll — no CSS animation so we can pause on hover */
  useEffect(() => {
    if (!trackWidth) return;
    const dir = direction === "left" ? -1 : 1;

    const tick = (time: number) => {
      if (!paused) {
        const delta = lastTimeRef.current === null ? 0 : time - lastTimeRef.current;
        posRef.current += dir * (speed * delta) / 1000;

        /* Wrap: when we've scrolled one full set, reset silently */
        if (direction === "left" && posRef.current <= -trackWidth) {
          posRef.current += trackWidth;
        }
        if (direction === "right" && posRef.current >= 0) {
          posRef.current -= trackWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    /* Start rightward scroll offset so the seam isn't visible immediately */
    if (direction === "right") posRef.current = -trackWidth;

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trackWidth, paused, direction, speed]);

  const isDark = variant === "dark";

  return (
    <div
      className="overflow-hidden w-full select-none"
      style={{
        background: isDark ? "rgba(6,8,6,0.95)" : "#1A3A1A",
        borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(74,175,80,0.3)"}`,
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(74,175,80,0.3)"}`,
        padding: "14px 0",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="flex items-center gap-0 will-change-transform" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className="whitespace-nowrap font-medium"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: isDark ? "rgba(244,239,230,0.45)" : "rgba(244,239,230,0.8)",
                padding: "0 2.4rem",
                transition: "color 0.2s",
              }}
            >
              {item.text}
            </span>
            {/* Separator diamond */}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                background: isDark ? "rgba(74,175,80,0.5)" : "rgba(74,175,80,0.8)",
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
