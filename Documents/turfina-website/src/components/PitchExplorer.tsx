"use client";

import { useRef, useState, useEffect, useCallback } from "react";

/* ── Canvas world size (the "map") ── */
const WORLD_W = 2200;
const WORLD_H = 1400;

/* ── Zoom limits ── */
const MIN_ZOOM = 0.35;
const MAX_ZOOM = 2.2;

/* ── Pitch dimensions inside world (px) ── */
const PX = 200;   // pitch left offset
const PY = 120;   // pitch top offset
const PW = 1800;  // pitch width
const PH = 1160;  // pitch height

/* ── Grass stripe count ── */
const STRIPES = 16;

/* ── POI pins — things to discover when dragging ── */
const pois = [
  { x: PX + PW * 0.5,   y: PY + PH * 0.5,   label: "Centre Spot",    detail: "FIFA-spec centre circle" },
  { x: PX + 60,          y: PY + PH * 0.5,   label: "Left Goal",      detail: "Professional goal mouth" },
  { x: PX + PW - 60,    y: PY + PH * 0.5,   label: "Right Goal",     detail: "Professional goal mouth" },
  { x: PX + 280,         y: PY + PH * 0.5,   label: "Penalty Spot",   detail: "11m from goal line" },
  { x: PX + PW - 280,   y: PY + PH * 0.5,   label: "Penalty Spot",   detail: "11m from goal line" },
  { x: PX + 20,          y: PY + 20,          label: "Corner Flag",    detail: "1m radius arc" },
  { x: PX + PW - 20,    y: PY + 20,          label: "Corner Flag",    detail: "1m radius arc" },
  { x: PX + 20,          y: PY + PH - 20,    label: "Corner Flag",    detail: "1m radius arc" },
  { x: PX + PW - 20,    y: PY + PH - 20,    label: "Corner Flag",    detail: "1m radius arc" },
];

/* ── Minimap size ── */
const MM_W = 140;
const MM_H = Math.round(MM_W * (WORLD_H / WORLD_W));

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export default function PitchExplorer() {
  const viewRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -(WORLD_W / 2 - 400), y: -(WORLD_H / 2 - 200) });
  const [zoom, setZoom] = useState(0.72);
  const [dragging, setDragging] = useState(false);
  const [hoveredPoi, setHoveredPoi] = useState<number | null>(null);
  const [activePoi, setActivePoi] = useState<number | null>(null);
  const [bearing, setBearing] = useState(0); // compass heading
  const dragStart = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const poiTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Keep pos within bounds ── */
  const clampPos = useCallback((x: number, y: number, z: number) => {
    const vw = viewRef.current?.clientWidth ?? 800;
    const vh = viewRef.current?.clientHeight ?? 440;
    const maxX = 0;
    const minX = -(WORLD_W * z - vw);
    const maxY = 0;
    const minY = -(WORLD_H * z - vh);
    return {
      x: clamp(x, Math.min(minX, maxX), Math.max(minX, maxX)),
      y: clamp(y, Math.min(minY, maxY), Math.max(minY, maxY)),
    };
  }, []);

  /* ── Mouse drag ── */
  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).dataset.poi) return;
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setActivePoi(null);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mx;
    const dy = e.clientY - dragStart.current.my;
    const next = clampPos(dragStart.current.px + dx, dragStart.current.py + dy, zoom);
    setPos(next);
    /* Subtle compass rotation based on drag direction */
    if (Math.abs(dx) > 5) setBearing((b) => clamp(b + dx * 0.05, -30, 30));
  };

  const onPointerUp = () => {
    setDragging(false);
    dragStart.current = null;
    setBearing((b) => b * 0.3);
  };

  /* ── Scroll to zoom ── */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.92 : 1.09;
    setZoom((z) => {
      const next = clamp(z * factor, MIN_ZOOM, MAX_ZOOM);
      setPos((p) => clampPos(p.x, p.y, next));
      return next;
    });
  };

  /* ── Touch pinch zoom ── */
  const lastPinch = useRef<number | null>(null);
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastPinch.current !== null) {
        const factor = dist / lastPinch.current;
        setZoom((z) => {
          const next = clamp(z * factor, MIN_ZOOM, MAX_ZOOM);
          setPos((p) => clampPos(p.x, p.y, next));
          return next;
        });
      }
      lastPinch.current = dist;
    }
  };
  const onTouchEnd = () => { lastPinch.current = null; };

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const step = 80;
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","+","-"].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "ArrowUp")    setPos((p) => clampPos(p.x, p.y + step, zoom));
      if (e.key === "ArrowDown")  setPos((p) => clampPos(p.x, p.y - step, zoom));
      if (e.key === "ArrowLeft")  setPos((p) => clampPos(p.x + step, p.y, zoom));
      if (e.key === "ArrowRight") setPos((p) => clampPos(p.x - step, p.y, zoom));
      if (e.key === "+" || e.key === "=") setZoom((z) => clamp(z * 1.15, MIN_ZOOM, MAX_ZOOM));
      if (e.key === "-") setZoom((z) => clamp(z * 0.87, MIN_ZOOM, MAX_ZOOM));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, clampPos]);

  /* ── Minimap click — jump to area ── */
  const onMinimapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const ratioX = (e.clientX - rect.left) / MM_W;
    const ratioY = (e.clientY - rect.top) / MM_H;
    const worldX = ratioX * WORLD_W;
    const worldY = ratioY * WORLD_H;
    const vw = viewRef.current?.clientWidth ?? 800;
    const vh = viewRef.current?.clientHeight ?? 440;
    const nx = -(worldX * zoom - vw / 2);
    const ny = -(worldY * zoom - vh / 2);
    setPos(clampPos(nx, ny, zoom));
  };

  /* ── Minimap viewport rect ── */
  const vw = typeof window !== "undefined" ? (viewRef.current?.clientWidth ?? 800) : 800;
  const vh = typeof window !== "undefined" ? (viewRef.current?.clientHeight ?? 440) : 440;
  const mmRatioX = MM_W / WORLD_W;
  const mmRatioY = MM_H / WORLD_H;
  const mmVpX = (-pos.x / zoom) * mmRatioX;
  const mmVpY = (-pos.y / zoom) * mmRatioY;
  const mmVpW = (vw / zoom) * mmRatioX;
  const mmVpH = (vh / zoom) * mmRatioY;

  /* ── Zoom buttons ── */
  const zoomIn  = () => setZoom((z) => clamp(z * 1.2, MIN_ZOOM, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => clamp(z * 0.83, MIN_ZOOM, MAX_ZOOM));
  const reset   = () => {
    setZoom(0.72);
    const vw2 = viewRef.current?.clientWidth ?? 800;
    const vh2 = viewRef.current?.clientHeight ?? 440;
    setPos(clampPos(-(WORLD_W * 0.72 / 2 - vw2 / 2), -(WORLD_H * 0.72 / 2 - vh2 / 2), 0.72));
  };

  return (
    <div className="w-full" style={{ position: "relative" }}>
      {/* Label strip */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "rgba(6,8,6,0.9)",
          borderTop: "1px solid rgba(74,175,80,0.12)",
          borderBottom: "1px solid rgba(74,175,80,0.08)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-green-pulse" />
          <span style={{ fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(74,175,80,0.8)", fontWeight: 500 }}>
            Pitch Explorer — Drag to Explore · Scroll to Zoom
          </span>
        </div>
        <span style={{ fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,230,0.2)" }}>
          FIFA 11-a-side · 105 × 68m
        </span>
      </div>

      {/* ── Viewport ── */}
      <div
        ref={viewRef}
        style={{
          width: "100%",
          height: "clamp(320px, 45vw, 520px)",
          overflow: "hidden",
          position: "relative",
          background: "#070906",
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onWheel={onWheel}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* ── World canvas ── */}
        <div
          style={{
            position: "absolute",
            width: WORLD_W,
            height: WORLD_H,
            transformOrigin: "0 0",
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})`,
            transition: dragging ? "none" : "transform 0.12s ease-out",
            willChange: "transform",
          }}
        >
          <svg
            width={WORLD_W}
            height={WORLD_H}
            viewBox={`0 0 ${WORLD_W} ${WORLD_H}`}
            style={{ display: "block", overflow: "visible" }}
          >
            <defs>
              {/* ── Turf stripe pattern ── */}
              <pattern id="grass" x={PX} y={PY} width={PW / STRIPES} height={PH} patternUnits="userSpaceOnUse">
                <rect width={PW / STRIPES / 2} height={PH} fill="rgba(18,50,16,1)" />
                <rect x={PW / STRIPES / 2} width={PW / STRIPES / 2} height={PH} fill="rgba(14,40,13,1)" />
              </pattern>
              {/* ── Perimeter shadow ── */}
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="18" floodColor="rgba(0,0,0,0.7)" />
              </filter>
              {/* ── Goal net texture ── */}
              <pattern id="net" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M0 0 L6 6 M6 0 L0 6" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              </pattern>
              {/* ── Line glow ── */}
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* ── World background (outside pitch) ── */}
            <rect width={WORLD_W} height={WORLD_H} fill="#0A0D09" />

            {/* ── Perimeter running track / border ── */}
            <rect
              x={PX - 60} y={PY - 60}
              width={PW + 120} height={PH + 120}
              fill="rgba(30,22,10,0.9)"
              rx="8"
              filter="url(#shadow)"
            />
            {/* Track lane lines */}
            {[1,2,3,4].map((lane) => (
              <rect
                key={lane}
                x={PX - 15 - lane * 12} y={PY - 15 - lane * 12}
                width={PW + 30 + lane * 24} height={PH + 30 + lane * 24}
                fill="none"
                stroke={`rgba(180,140,80,${0.06 - lane * 0.01})`}
                strokeWidth="1"
                rx={lane * 2}
              />
            ))}

            {/* ── Grass surface ── */}
            <rect x={PX} y={PY} width={PW} height={PH} fill="url(#grass)" />

            {/* ── Pitch outline + markings ── */}
            <g filter="url(#lineGlow)">
              {/* Boundary */}
              <rect x={PX} y={PY} width={PW} height={PH}
                stroke="rgba(255,255,255,0.92)" strokeWidth="3.5" fill="none" />

              {/* Halfway line */}
              <line x1={PX + PW/2} y1={PY} x2={PX + PW/2} y2={PY + PH}
                stroke="rgba(255,255,255,0.92)" strokeWidth="2.5" />

              {/* Centre circle */}
              <ellipse cx={PX + PW/2} cy={PY + PH/2}
                rx={PW * 0.052} ry={PH * 0.078}
                stroke="rgba(255,255,255,0.92)" strokeWidth="2.5" fill="none" />
              {/* Centre spot */}
              <circle cx={PX + PW/2} cy={PY + PH/2} r={5}
                fill="rgba(255,255,255,0.95)" />

              {/* ── Left penalty area ── */}
              <rect x={PX} y={PY + PH * 0.22} width={PW * 0.145} height={PH * 0.56}
                stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" fill="none" />
              {/* Left goal area */}
              <rect x={PX} y={PY + PH * 0.35} width={PW * 0.062} height={PH * 0.30}
                stroke="rgba(255,255,255,0.88)" strokeWidth="2" fill="none" />
              {/* Left penalty spot */}
              <circle cx={PX + PW * 0.145} cy={PY + PH/2} r={4.5}
                fill="rgba(255,255,255,0.95)" />
              {/* Left penalty arc */}
              <path
                d={`M ${PX + PW * 0.145} ${PY + PH * 0.35}
                    Q ${PX + PW * 0.22} ${PY + PH * 0.5}
                      ${PX + PW * 0.145} ${PY + PH * 0.65}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />

              {/* ── Right penalty area ── */}
              <rect x={PX + PW * 0.855} y={PY + PH * 0.22} width={PW * 0.145} height={PH * 0.56}
                stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" fill="none" />
              {/* Right goal area */}
              <rect x={PX + PW * 0.938} y={PY + PH * 0.35} width={PW * 0.062} height={PH * 0.30}
                stroke="rgba(255,255,255,0.88)" strokeWidth="2" fill="none" />
              {/* Right penalty spot */}
              <circle cx={PX + PW * 0.855} cy={PY + PH/2} r={4.5}
                fill="rgba(255,255,255,0.95)" />
              {/* Right penalty arc */}
              <path
                d={`M ${PX + PW * 0.855} ${PY + PH * 0.35}
                    Q ${PX + PW * 0.78} ${PY + PH * 0.5}
                      ${PX + PW * 0.855} ${PY + PH * 0.65}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />

              {/* ── Corner arcs ── */}
              {[
                [PX, PY, "0,0,0,0,1", 1, 1],
                [PX + PW, PY, "0,0,0,1,1", -1, 1],
                [PX, PY + PH, "0,0,0,0,0", 1, -1],
                [PX + PW, PY + PH, "0,0,0,1,0", -1, -1],
              ].map(([cx, cy, sweep, dx, dy], i) => (
                <circle key={i}
                  cx={Number(cx)} cy={Number(cy)} r={2.5}
                  fill="rgba(255,200,0,0.9)"
                />
              ))}

              {/* Corner arc radius lines */}
              <path d={`M ${PX} ${PY + 30} Q ${PX + 12} ${PY + 12} ${PX + 30} ${PY}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />
              <path d={`M ${PX + PW} ${PY + 30} Q ${PX + PW - 12} ${PY + 12} ${PX + PW - 30} ${PY}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />
              <path d={`M ${PX} ${PY + PH - 30} Q ${PX + 12} ${PY + PH - 12} ${PX + 30} ${PY + PH}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />
              <path d={`M ${PX + PW} ${PY + PH - 30} Q ${PX + PW - 12} ${PY + PH - 12} ${PX + PW - 30} ${PY + PH}`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" />
            </g>

            {/* ── Goal mouths ── */}
            {/* Left goal */}
            <rect x={PX - 28} y={PY + PH * 0.38} width={28} height={PH * 0.24}
              fill="url(#net)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            {/* Right goal */}
            <rect x={PX + PW} y={PY + PH * 0.38} width={28} height={PH * 0.24}
              fill="url(#net)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />

            {/* ── Stadium lights (4 corners) ── */}
            {[
              [PX - 90, PY - 90],
              [PX + PW + 90, PY - 90],
              [PX - 90, PY + PH + 90],
              [PX + PW + 90, PY + PH + 90],
            ].map(([lx, ly], i) => (
              <g key={i}>
                {/* Glow */}
                <circle cx={lx} cy={ly} r={40}
                  fill={`radial-gradient(circle, rgba(255,240,180,0.15), transparent)`}
                  opacity="0.25" />
                {/* Light cone */}
                <circle cx={lx} cy={ly} r={8} fill="rgba(255,240,160,0.9)" />
                <circle cx={lx} cy={ly} r={16} fill="none" stroke="rgba(255,240,160,0.15)" strokeWidth="1.5" />
                {/* Pole */}
                <line
                  x1={lx} y1={ly + 8}
                  x2={i < 2 ? PX + (i === 0 ? -30 : PW + 30) : PX + (i === 2 ? -30 : PW + 30)}
                  y2={PY + (i < 2 ? -30 : PH + 30)}
                  stroke="rgba(150,150,130,0.2)" strokeWidth="1.5"
                />
              </g>
            ))}

            {/* ── POI pins ── */}
            {pois.map((poi, i) => {
              const isHov = hoveredPoi === i;
              const isAct = activePoi === i;
              return (
                <g
                  key={i}
                  data-poi={i}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredPoi(i)}
                  onMouseLeave={() => setHoveredPoi(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePoi(i === activePoi ? null : i);
                  }}
                >
                  {/* Hit area */}
                  <circle cx={poi.x} cy={poi.y} r={18} fill="transparent" />
                  {/* Ping ring */}
                  {isHov && (
                    <circle cx={poi.x} cy={poi.y} r={14}
                      fill="none" stroke="rgba(74,175,80,0.5)" strokeWidth="1.5"
                      style={{ animation: "ping 1.5s ease-out infinite" }} />
                  )}
                  {/* Pin */}
                  <circle cx={poi.x} cy={poi.y} r={isHov || isAct ? 7 : 5}
                    fill={isAct ? "#4CAF50" : isHov ? "#6FCF97" : "rgba(74,175,80,0.7)"}
                    stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
                    style={{ transition: "r 0.2s ease, fill 0.2s ease" }}
                  />
                  {/* Tooltip */}
                  {(isHov || isAct) && (
                    <g>
                      <rect
                        x={poi.x + 12} y={poi.y - 28}
                        width={poi.label.length * 7.5 + 20} height={40}
                        rx="3" fill="rgba(8,10,7,0.95)"
                        stroke="rgba(74,175,80,0.3)" strokeWidth="1"
                      />
                      <text x={poi.x + 22} y={poi.y - 12}
                        fill="#F4EFE6" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">
                        {poi.label}
                      </text>
                      <text x={poi.x + 22} y={poi.y + 2}
                        fill="rgba(74,175,80,0.8)" fontSize="8.5" fontFamily="Inter, sans-serif">
                        {poi.detail}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* ── "You are here" pin — viewport centre ── */}
            {(() => {
              const vwc = viewRef.current?.clientWidth ?? 800;
              const vhc = viewRef.current?.clientHeight ?? 440;
              const wx = (-pos.x + vwc / 2) / zoom;
              const wy = (-pos.y + vhc / 2) / zoom;
              return (
                <g style={{ pointerEvents: "none" }}>
                  <circle cx={wx} cy={wy} r={6}
                    fill="rgba(74,175,80,0.9)" stroke="white" strokeWidth="2" />
                  <circle cx={wx} cy={wy} r={14}
                    fill="none" stroke="rgba(74,175,80,0.3)" strokeWidth="1.5"
                    style={{ animation: "ping 2.5s ease-out infinite" }} />
                </g>
              );
            })()}
          </svg>
        </div>

        {/* ── Zoom controls ── */}
        <div
          className="absolute top-4 right-4 flex flex-col gap-1"
          style={{ zIndex: 10 }}
        >
          {[
            { label: "+", action: zoomIn },
            { label: "⌖", action: reset, title: "Reset view" },
            { label: "−", action: zoomOut },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={btn.action}
              title={btn.title}
              className="w-8 h-8 flex items-center justify-center transition-all duration-150"
              style={{
                background: "rgba(8,10,7,0.88)",
                border: "1px solid rgba(74,175,80,0.2)",
                color: "rgba(244,239,230,0.75)",
                fontSize: "14px",
                fontWeight: 600,
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(42,92,42,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#4CAF50";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(8,10,7,0.88)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(244,239,230,0.75)";
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* ── Minimap ── */}
        <div
          className="absolute bottom-4 right-4"
          style={{
            width: MM_W,
            height: MM_H,
            background: "rgba(6,8,6,0.92)",
            border: "1px solid rgba(74,175,80,0.2)",
            backdropFilter: "blur(8px)",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          <svg
            width={MM_W} height={MM_H}
            viewBox={`0 0 ${WORLD_W} ${WORLD_H}`}
            style={{ display: "block", cursor: "crosshair" }}
            onClick={onMinimapClick}
          >
            {/* Mini world bg */}
            <rect width={WORLD_W} height={WORLD_H} fill="#090B08" />
            {/* Mini pitch */}
            <rect x={PX} y={PY} width={PW} height={PH}
              fill="rgba(18,50,16,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="6" />
            {/* Mini halfway */}
            <line x1={PX + PW/2} y1={PY} x2={PX + PW/2} y2={PY + PH}
              stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
            {/* Mini centre circle */}
            <circle cx={PX + PW/2} cy={PY + PH/2} r={PW * 0.05}
              fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
            {/* POI dots */}
            {pois.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={14}
                fill="rgba(74,175,80,0.7)" />
            ))}
            {/* Viewport rect */}
            <rect
              x={-pos.x / zoom} y={-pos.y / zoom}
              width={vw / zoom} height={vh / zoom}
              fill="rgba(74,175,80,0.06)"
              stroke="rgba(74,175,80,0.8)"
              strokeWidth="8"
            />
          </svg>
          <div style={{
            position: "absolute", top: 3, left: 4,
            fontSize: "7px", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(74,175,80,0.6)", fontWeight: 500,
          }}>
            Overview
          </div>
        </div>

        {/* ── Compass ── */}
        <div
          className="absolute top-4 left-4"
          style={{
            width: 40, height: 40,
            background: "rgba(8,10,7,0.85)",
            border: "1px solid rgba(74,175,80,0.2)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 10,
            backdropFilter: "blur(8px)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24"
            style={{ transform: `rotate(${bearing}deg)`, transition: "transform 0.3s ease" }}>
            <polygon points="12,2 15,11 12,9 9,11" fill="#4CAF50" />
            <polygon points="12,22 9,13 12,15 15,13" fill="rgba(244,239,230,0.3)" />
          </svg>
        </div>

        {/* ── Zoom level badge ── */}
        <div
          className="absolute bottom-4 left-4"
          style={{
            padding: "4px 10px",
            background: "rgba(8,10,7,0.85)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(6px)",
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,230,0.3)" }}>
            {Math.round(zoom * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
