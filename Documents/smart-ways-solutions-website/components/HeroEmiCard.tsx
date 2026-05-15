"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PRESETS = [
  { label: "₹20L", amount: 2000000 },
  { label: "₹40L", amount: 4000000 },
  { label: "₹75L", amount: 7500000 },
];

function calcEMI(principal: number, annualRate: number, years: number) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
}

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(0)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

// Spring bounce — plays a quick scale 1 → 1.08 → 0.96 → 1 sequence
function useSpring(trigger: number) {
  const [phase, setPhase] = useState<"idle" | "up" | "down" | "settle">("idle");
  const prev = useRef(trigger);

  useEffect(() => {
    if (trigger === prev.current) return;
    prev.current = trigger;

    setPhase("up");
    const t1 = setTimeout(() => setPhase("down"), 120);
    const t2 = setTimeout(() => setPhase("settle"), 240);
    const t3 = setTimeout(() => setPhase("idle"), 380);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [trigger]);

  const scale = phase === "up" ? 1.09 : phase === "down" ? 0.96 : 1;
  const transition =
    phase === "up"
      ? "transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)"
      : phase === "down"
      ? "transform 0.1s ease-in"
      : "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)";

  return { scale, transition };
}

export default function HeroEmiCard() {
  const [selected, setSelected] = useState(1);
  const rate = 8.5;
  const tenure = 20;

  const amount = PRESETS[selected].amount;
  const emi = calcEMI(amount, rate, tenure);
  const totalPayable = emi * tenure * 12;
  const totalInterest = totalPayable - amount;
  const interestPct = Math.round((totalInterest / totalPayable) * 100);

  const spring = useSpring(selected);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <p className="text-[#F5A623] font-bold text-sm mb-1">Instant EMI Estimate</p>
      <p className="text-gray-400 text-xs mb-5">How much will your monthly repayment be?</p>

      {/* Amount selector */}
      <div className="flex gap-2 mb-5">
        {PRESETS.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setSelected(i)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              selected === i
                ? "bg-[#F5A623] text-black scale-105"
                : "bg-white/10 text-gray-300 hover:bg-white/15"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* EMI result — spring bounce wrapper */}
      <div
        style={{
          transform: `scale(${spring.scale})`,
          transition: spring.transition,
          transformOrigin: "center",
        }}
      >
        <div className="bg-[#F5A623] rounded-xl p-5 text-center mb-4">
          <p className="text-black/60 text-xs font-semibold mb-1">Monthly EMI</p>
          <p className="text-black text-4xl font-black tracking-tight">
            {formatINR(emi)}
          </p>
          <p className="text-black/50 text-xs mt-1">
            at {rate}% p.a. · {tenure} yr tenure
          </p>
        </div>
      </div>

      {/* Breakdown bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>Principal</span>
          <span>Interest</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#F5A623] rounded-full transition-all duration-500"
            style={{ width: `${100 - interestPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1.5">
          <span className="text-[#F5A623] font-bold">{formatINR(amount)}</span>
          <span className="text-gray-400">{formatINR(totalInterest)}</span>
        </div>
      </div>

      <p className="text-gray-500 text-[11px] text-center mb-4">
        Total payable: {formatINR(totalPayable)} · Indicative estimate only
      </p>

      <Link
        href="/enquire"
        className="block text-center bg-[#F5A623] text-black py-2.5 rounded-lg font-black text-sm hover:bg-[#d4891a] transition-colors"
      >
        Apply for This Loan — Free
      </Link>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-gray-400 text-xs text-center mb-3">We Work With</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["SBI", "HDFC", "ICICI", "Axis", "BoB", "Federal", "Muthoot"].map((b) => (
            <span key={b} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
