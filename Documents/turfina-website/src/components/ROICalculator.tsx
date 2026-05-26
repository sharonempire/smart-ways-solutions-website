"use client";

import { useState, useMemo, useRef, useEffect } from "react";

const surfaceOptions = [
  { label: "Football Turf — 5-a-side", basePerSqm: 1800, minArea: 400, maxArea: 800, infillYears: 3, icon: "⚽" },
  { label: "Football Turf — 11-a-side", basePerSqm: 1600, minArea: 5000, maxArea: 8000, infillYears: 3, icon: "🏟️" },
  { label: "Multi-Sport Court", basePerSqm: 1200, minArea: 300, maxArea: 1500, infillYears: 0, icon: "🏀" },
  { label: "Cricket Outfield", basePerSqm: 1400, minArea: 2000, maxArea: 6000, infillYears: 4, icon: "🏏" },
  { label: "Athletic Track — 400m", basePerSqm: 2200, minArea: 8000, maxArea: 14000, infillYears: 0, icon: "🏃" },
];

const usageOptions = [
  { label: "School / College", sessionsPerDay: 8, ratePerHour: 0, icon: "🏫" },
  { label: "Pay-per-play Academy", sessionsPerDay: 14, ratePerHour: 800, icon: "⚽" },
  { label: "Private Estate", sessionsPerDay: 3, ratePerHour: 0, icon: "🏡" },
  { label: "Municipal / Public", sessionsPerDay: 12, ratePerHour: 400, icon: "🏛️" },
  { label: "Commercial Club", sessionsPerDay: 16, ratePerHour: 1200, icon: "💼" },
];

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

/* Animated counter for result numbers */
function AnimatedValue({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(target);
  const rafRef = useRef<number>(0);
  const prevRef = useRef(target);

  useEffect(() => {
    const from = prevRef.current;
    const to = target;
    prevRef.current = target;
    if (from === to) return;

    const duration = 600;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(from + (to - from) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  const formatted = fmt(displayed);
  return <span>{prefix}{formatted}{suffix}</span>;
}

/* Horizontal bar chart */
function BarChart({ installCost, totalRevenue, totalMaintenance, years }: {
  installCost: number;
  totalRevenue: number;
  totalMaintenance: number;
  years: number;
}) {
  const max = Math.max(installCost, totalRevenue, totalMaintenance, 1);
  const bars = [
    { label: "Install cost", value: installCost, color: "#F4EFE6", opacity: 0.6 },
    { label: `${years}yr revenue`, value: totalRevenue, color: "#4CAF50", opacity: 1 },
    { label: `${years}yr maintenance`, value: totalMaintenance, color: "#6FCF97", opacity: 0.5 },
  ];

  return (
    <div className="flex flex-col gap-3">
      {bars.map((bar) => (
        <div key={bar.label} className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[#F4EFE6]/40 text-[9px] tracking-[0.1em] uppercase">{bar.label}</span>
            <span className="text-[9px] font-mono" style={{ color: bar.color, opacity: bar.opacity + 0.2 }}>
              {fmt(bar.value)}
            </span>
          </div>
          <div className="relative h-1.5 bg-white/5 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 transition-all duration-700 ease-out origin-left"
              style={{
                width: `${(bar.value / max) * 100}%`,
                background: bar.color,
                opacity: bar.opacity,
                boxShadow: bar.value > 0 ? `0 0 6px ${bar.color}40` : "none",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* Payback sparkline — year-by-year cumulative return */
function PaybackSparkline({ installCost, annualRevenue, annualMaintenance, years }: {
  installCost: number;
  annualRevenue: number;
  annualMaintenance: number;
  years: number;
}) {
  const points = Array.from({ length: years + 1 }, (_, i) => {
    const net = annualRevenue * i - annualMaintenance * i - installCost;
    return net;
  });

  const min = Math.min(...points);
  const max = Math.max(...points, 1);
  const range = max - min || 1;

  const width = 220;
  const height = 48;
  const pad = 4;

  const pathPoints = points.map((v, i) => {
    const x = pad + (i / years) * (width - pad * 2);
    const y = height - pad - ((v - min) / range) * (height - pad * 2);
    return `${x},${y}`;
  });

  const pathD = `M ${pathPoints.join(" L ")}`;
  const areaD = `M ${pathPoints[0]} L ${pathPoints.join(" L ")} L ${pad + (width - pad * 2)},${height - pad} L ${pad},${height - pad} Z`;

  /* Find breakeven */
  const breakevenIdx = points.findIndex((v) => v >= 0);
  const breakevenX = breakevenIdx >= 0
    ? pad + (breakevenIdx / years) * (width - pad * 2)
    : null;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#F4EFE6]/30 text-[9px] tracking-[0.15em] uppercase">
        {years}yr cumulative return trajectory
      </p>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ height: "48px" }}>
        {/* Zero line */}
        {min < 0 && (
          <line
            x1={pad} y1={height - pad - ((0 - min) / range) * (height - pad * 2)}
            x2={width - pad} y2={height - pad - ((0 - min) / range) * (height - pad * 2)}
            stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="3,2"
          />
        )}
        {/* Area fill */}
        <path d={areaD} fill="rgba(74,175,80,0.06)" />
        {/* Line */}
        <path d={pathD} stroke="#4CAF50" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        {/* Breakeven marker */}
        {breakevenX !== null && (
          <>
            <line
              x1={breakevenX} y1={pad}
              x2={breakevenX} y2={height - pad}
              stroke="rgba(74,175,80,0.4)" strokeWidth="0.5" strokeDasharray="2,2"
            />
            <text
              x={breakevenX + 3} y={pad + 8}
              fill="rgba(74,175,80,0.6)"
              fontSize="5"
              fontFamily="monospace"
            >
              Yr {breakevenIdx}
            </text>
          </>
        )}
        {/* End dot */}
        <circle
          cx={pad + (width - pad * 2)}
          cy={height - pad - ((points[years] - min) / range) * (height - pad * 2)}
          r="2"
          fill={points[years] >= 0 ? "#4CAF50" : "#ff6b6b"}
        />
      </svg>
    </div>
  );
}

export default function ROICalculator() {
  const [surface, setSurface] = useState(0);
  const [area, setArea] = useState(600);
  const [usage, setUsage] = useState(1);
  const [years, setYears] = useState(5);
  const [highlighted, setHighlighted] = useState(false);

  const surf = surfaceOptions[surface];
  const use = usageOptions[usage];

  const calc = useMemo(() => {
    const clampedArea = Math.min(Math.max(area, surf.minArea), surf.maxArea);
    const installCost = clampedArea * surf.basePerSqm;
    const annualMaintenance = installCost * 0.025;
    const infillTopup = surf.infillYears > 0 ? (installCost * 0.08) / surf.infillYears : 0;
    const annualRevenue = use.ratePerHour * use.sessionsPerDay * 1.5 * 300;
    const totalRevenue = annualRevenue * years;
    const annualMaintTotal = annualMaintenance + infillTopup;
    const totalMaintenance = annualMaintTotal * years;
    const netReturn = totalRevenue - installCost - totalMaintenance;
    const roiPct = installCost > 0 ? Number(((netReturn / installCost) * 100).toFixed(0)) : 0;
    const paybackMonths = annualRevenue > 0 ? Math.ceil((installCost / annualRevenue) * 12) : null;

    return {
      installCost,
      annualMaintenance: annualMaintTotal,
      annualRevenue,
      totalRevenue,
      totalMaintenance,
      netReturn,
      roiPct,
      paybackMonths,
      clampedArea,
    };
  }, [surface, area, usage, years, surf, use]);

  /* Flash highlight when net return changes */
  useEffect(() => {
    setHighlighted(true);
    const t = setTimeout(() => setHighlighted(false), 600);
    return () => clearTimeout(t);
  }, [calc.netReturn]);

  return (
    <div
      className="border border-white/5 overflow-hidden"
      style={{ background: "#090B09" }}
    >
      {/* Header */}
      <div className="p-8 border-b border-white/5 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-6 h-px bg-[#4CAF50]" />
            <p className="text-[#4CAF50] text-[9px] tracking-[0.3em] uppercase font-medium">Investment Calculator</p>
          </div>
          <p
            className="text-[#F4EFE6]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 300, fontStyle: "italic" }}
          >
            Estimate your project cost & returns
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#F4EFE6]/20 text-[9px] tracking-wider uppercase">
          <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse" />
          Live
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

        {/* Inputs */}
        <div className="p-8 space-y-7">

          {/* Surface type */}
          <div>
            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-3">Surface Type</label>
            <div className="space-y-1.5">
              {surfaceOptions.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => {
                    setSurface(i);
                    setArea(Math.round((s.minArea + s.maxArea) / 2));
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-light transition-all duration-200 flex items-center gap-3"
                  style={{
                    border: `1px solid ${surface === i ? "rgba(74,175,80,0.4)" : "rgba(255,255,255,0.05)"}`,
                    background: surface === i ? "rgba(74,175,80,0.08)" : "transparent",
                    color: surface === i ? "#F4EFE6" : "rgba(244,239,230,0.4)",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{s.icon}</span>
                  {s.label}
                  {surface === i && (
                    <span className="ml-auto text-[#4CAF50] text-[8px] tracking-wider">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Area slider */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase">Surface Area</label>
              <span className="text-[#F4EFE6] text-sm font-light tabular-nums">{area.toLocaleString()} m²</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min={surf.minArea}
                max={surf.maxArea}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#4CAF50]"
                style={{ height: "2px" }}
              />
              {/* Custom track fill */}
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[#F4EFE6]/20 text-[9px]">{surf.minArea.toLocaleString()} m²</span>
              <span className="text-[#F4EFE6]/20 text-[9px]">{surf.maxArea.toLocaleString()} m²</span>
            </div>
          </div>

          {/* Usage type */}
          <div>
            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-3">Usage Model</label>
            <div className="space-y-1.5">
              {usageOptions.map((u, i) => (
                <button
                  key={u.label}
                  onClick={() => setUsage(i)}
                  className="w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-3"
                  style={{
                    border: `1px solid ${usage === i ? "rgba(74,175,80,0.4)" : "rgba(255,255,255,0.05)"}`,
                    background: usage === i ? "rgba(74,175,80,0.08)" : "transparent",
                    color: usage === i ? "#F4EFE6" : "rgba(244,239,230,0.4)",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                  }}
                >
                  <span style={{ fontSize: "0.85rem" }}>{u.icon}</span>
                  <span className="flex-1">{u.label}</span>
                  {u.ratePerHour > 0 && (
                    <span className="text-[#4CAF50] text-[9px] tracking-wider">₹{u.ratePerHour}/hr</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Years slider */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase">Projection Period</label>
              <span className="text-[#F4EFE6] text-sm font-light">{years} years</span>
            </div>
            <input
              type="range" min={1} max={10} value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#4CAF50]"
              style={{ height: "2px" }}
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-[#F4EFE6]/20 text-[9px]">1 yr</span>
              <span className="text-[#F4EFE6]/20 text-[9px]">10 yrs</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 flex flex-col gap-6">

          {/* Install cost — hero */}
          <div className="pb-5 border-b border-white/5">
            <p className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Installation Cost</p>
            <p
              className="text-[#F4EFE6] tabular-nums"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              <AnimatedValue target={calc.installCost} />
            </p>
            <p className="text-[#F4EFE6]/25 text-xs font-light mt-1">
              {calc.clampedArea.toLocaleString()} m² · {surfaceOptions[surface].label}
            </p>
          </div>

          {/* Bar chart */}
          <BarChart
            installCost={calc.installCost}
            totalRevenue={calc.totalRevenue}
            totalMaintenance={calc.totalMaintenance}
            years={years}
          />

          {/* Line items */}
          <div className="space-y-3 pb-5 border-b border-white/5">
            {[
              {
                label: `Annual maintenance`,
                value: calc.annualMaintenance,
                total: calc.totalMaintenance,
                highlight: false,
              },
              {
                label: `Annual revenue`,
                value: calc.annualRevenue,
                total: calc.totalRevenue,
                highlight: calc.annualRevenue > 0,
              },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-start gap-4">
                <p className="text-[#F4EFE6]/35 text-xs font-light leading-tight">{item.label}</p>
                <div className="text-right shrink-0">
                  <p className={`text-sm font-light tabular-nums ${item.highlight ? "text-[#4CAF50]" : "text-[#F4EFE6]/50"}`}>
                    <AnimatedValue target={item.value} />
                    <span className="text-[#F4EFE6]/20 text-[10px]">/yr</span>
                  </p>
                  <p className="text-[#F4EFE6]/25 text-xs tabular-nums">
                    <AnimatedValue target={item.total} /> total
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Net return — pulsing on change */}
          {calc.annualRevenue > 0 && (
            <div className="space-y-3">
              <div
                className="flex justify-between items-center py-3 px-4 transition-all duration-500"
                style={{
                  background: highlighted
                    ? calc.netReturn >= 0 ? "rgba(74,175,80,0.12)" : "rgba(255,80,80,0.08)"
                    : "transparent",
                  border: `1px solid ${highlighted ? (calc.netReturn >= 0 ? "rgba(74,175,80,0.25)" : "rgba(255,80,80,0.15)") : "rgba(255,255,255,0.05)"}`,
                }}
              >
                <p className="text-[#F4EFE6]/45 text-sm font-light">{years}-year net return</p>
                <p
                  className="font-light tabular-nums"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.4rem",
                    color: calc.netReturn >= 0 ? "#4CAF50" : "#ff6b6b",
                  }}
                >
                  {calc.netReturn >= 0 ? "+" : ""}
                  <AnimatedValue target={calc.netReturn} />
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 py-3 px-4 border border-white/5 text-center">
                  <p className="text-[#F4EFE6]/30 text-[9px] tracking-wider uppercase mb-1">ROI</p>
                  <p
                    className="tabular-nums font-light"
                    style={{ color: calc.netReturn >= 0 ? "#4CAF50" : "#ff6b6b", fontSize: "1.2rem", fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {calc.roiPct}%
                  </p>
                </div>
                {calc.paybackMonths && (
                  <div className="flex-1 py-3 px-4 border border-white/5 text-center">
                    <p className="text-[#F4EFE6]/30 text-[9px] tracking-wider uppercase mb-1">Payback</p>
                    <p
                      className="tabular-nums font-light text-[#F4EFE6]/70"
                      style={{ fontSize: "1.2rem", fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {calc.paybackMonths}mo
                    </p>
                  </div>
                )}
              </div>

              {/* Sparkline */}
              <PaybackSparkline
                installCost={calc.installCost}
                annualRevenue={calc.annualRevenue}
                annualMaintenance={calc.annualMaintenance}
                years={years}
              />
            </div>
          )}

          {/* Non-revenue note */}
          {calc.annualRevenue === 0 && (
            <div className="border border-white/5 p-5">
              <p className="text-[#F4EFE6]/35 text-xs font-light leading-relaxed">
                This model doesn't generate direct revenue — but sports infrastructure increases property value, enrollment, and institutional prestige.
              </p>
              <a href="/enquire?type=custom" className="mt-3 inline-flex items-center gap-2 text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase hover:text-[#6FCF97] transition-colors duration-200">
                Get a custom ROI brief
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          )}

          <p className="text-[#F4EFE6]/15 text-[8px] leading-relaxed mt-auto">
            Indicative estimates. Based on ₹{surfaceOptions[surface].basePerSqm.toLocaleString()}/m², 2.5% maintenance, {usageOptions[usage].sessionsPerDay} sessions/day. Actual costs vary by site.
          </p>
        </div>
      </div>
    </div>
  );
}
