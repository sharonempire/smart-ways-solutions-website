"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";

interface StatItem {
  label: string;
  numeric: number;
  prefix: string;
  suffix: string;
}

const stats: StatItem[] = [
  { label: "Bank & NBFC Partners", numeric: 16, prefix: "", suffix: "+" },
  { label: "Loans Sanctioned", numeric: 2500, prefix: "", suffix: "+" },
  { label: "Approval Rate", numeric: 98, prefix: "", suffix: "%" },
  { label: "Loans Facilitated", numeric: 500, prefix: "₹", suffix: " Cr+" },
];

// ── Slot-machine digit roller ──────────────────────────────────────────────
// Each digit column clips to show one digit at a time, rolling upward.
function DigitRoller({ digit, delay = 0 }: { digit: string; delay?: number }) {
  const isNumeric = /\d/.test(digit);
  if (!isNumeric) {
    return <span className="inline-block">{digit}</span>;
  }

  const d = parseInt(digit, 10);
  const digits = Array.from({ length: 11 }, (_, i) => i % 10); // 0-9 then 0 again

  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: "1.15em", lineHeight: "1.15em", verticalAlign: "bottom" }}
    >
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${d * 1.15}em)`,
          transition: `transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          willChange: "transform",
        }}
      >
        {digits.map((n, i) => (
          <span key={i} className="block" style={{ height: "1.15em", lineHeight: "1.15em" }}>
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

function SlotNumber({ value, started }: { value: string; started: boolean }) {
  const [display, setDisplay] = useState("0".repeat(value.replace(/[^0-9]/g, "").length || 1));

  useEffect(() => {
    if (!started) return;
    // small delay before triggering the roll
    const t = setTimeout(() => setDisplay(value), 80);
    return () => clearTimeout(t);
  }, [started, value]);

  // Render char by char — digits get the roller, non-digits render flat
  return (
    <>
      {display.split("").map((ch, i) => (
        <DigitRoller key={i} digit={ch} delay={i * 40} />
      ))}
    </>
  );
}

function StatCounter({ stat, started, delay }: { stat: StatItem; started: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const duration = 1500;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(stat.numeric * eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    const t = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(t);
  }, [started, stat.numeric, delay]);

  const formatted =
    stat.numeric >= 1000
      ? count.toLocaleString("en-IN")
      : String(count);

  const displayStr = `${stat.prefix}${formatted}${stat.suffix}`;

  // Hover tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const cardStyle: CSSProperties = {
    transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-2px)`,
    transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.4s ease" : "transform 0.1s ease",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={started ? cardStyle : undefined}
      className="text-center bg-[#F5A623] rounded-2xl py-6 px-4 stat-glow cursor-default select-none"
    >
      <p className="text-black text-3xl md:text-4xl font-black tabular-nums leading-none">
        {started ? (
          <SlotNumber value={displayStr} started={started} />
        ) : (
          <span>{stat.prefix}0{stat.suffix}</span>
        )}
      </p>
      <p className="text-black/70 text-sm mt-2 font-semibold">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F5A623] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCounter key={s.label} stat={s} started={started} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
