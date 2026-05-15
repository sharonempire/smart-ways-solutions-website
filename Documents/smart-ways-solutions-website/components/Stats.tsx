"use client";
import { useEffect, useRef, useState } from "react";

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

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCounter({ stat, started }: { stat: StatItem; started: boolean }) {
  const count = useCountUp(stat.numeric, 1600, started);
  const display =
    stat.numeric >= 1000
      ? `${stat.prefix}${count.toLocaleString("en-IN")}${stat.suffix}`
      : `${stat.prefix}${count}${stat.suffix}`;

  return (
    <div className="text-center bg-[#F5A623] rounded-2xl py-6 px-4 stat-glow cursor-default">
      <p className="text-black text-3xl md:text-4xl font-black tabular-nums">{display}</p>
      <p className="text-black/70 text-sm mt-1 font-semibold">{stat.label}</p>
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
        {stats.map((s) => (
          <StatCounter key={s.label} stat={s} started={started} />
        ))}
      </div>
    </section>
  );
}
