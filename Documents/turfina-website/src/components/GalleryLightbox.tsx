"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Reveal from "./Reveal";

type SvgType = "football" | "multi" | "cricket" | "athletics";

type GalleryItem = {
  id: number;
  title: string;
  location: string;
  surface: string;
  area: string;
  year: string;
  stripeOffset: number;
  svgType: SvgType;
  tag: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Al Manamah Football Academy", location: "Manama, Bahrain", surface: "FIFA Quality Pro", area: "7,140 m²", year: "2022", stripeOffset: 0, svgType: "football", tag: "GCC Reference" },
  { id: 2, title: "Kozhikode Municipal Ground", location: "Kozhikode, Kerala", surface: "FIFA Quality", area: "2,800 m²", year: "2024", stripeOffset: 1, svgType: "football", tag: "Kerala Launch" },
  { id: 3, title: "NRI Villa Complex", location: "Malappuram, Kerala", surface: "Multi-Sport Court", area: "1,200 m²", year: "2025", stripeOffset: 0, svgType: "multi", tag: "Private Estate" },
  { id: 4, title: "GHSS Calicut — Athletic Track", location: "Kozhikode, Kerala", surface: "IAAF Level 1", area: "11,000 m²", year: "2025", stripeOffset: 1, svgType: "athletics", tag: "Institutional" },
  { id: 5, title: "Doha Training Ground", location: "Doha, Qatar", surface: "FIFA Quality Pro", area: "4,200 m²", year: "2019", stripeOffset: 0, svgType: "football", tag: "GCC Reference" },
  { id: 6, title: "Calicut International School", location: "Kozhikode, Kerala", surface: "Multi-Sport + Football", area: "2,100 m²", year: "2025", stripeOffset: 1, svgType: "multi", tag: "Education" },
  { id: 7, title: "Abu Dhabi Club Ground", location: "Abu Dhabi, UAE", surface: "FIFA Quality Pro", area: "8,400 m²", year: "2021", stripeOffset: 0, svgType: "football", tag: "GCC Reference" },
  { id: 8, title: "Kannur Academy Pitch", location: "Kannur, Kerala", surface: "FIFA Quality", area: "3,200 m²", year: "2025", stripeOffset: 1, svgType: "football", tag: "Academy" },
  { id: 9, title: "Tirur Cricket Ground", location: "Malappuram, Kerala", surface: "Cricket Outfield", area: "5,600 m²", year: "2024", stripeOffset: 0, svgType: "cricket", tag: "Cricket" },
];

/* ─── Pitch SVG ─── */
function PitchSVG({ type, op = 0.42, sw = 1.5 }: { type: SvgType; op?: number; sw?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      {type === "football" && (<>
        <rect x="25" y="20" width="550" height="360" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
        <line x1="300" y1="20" x2="300" y2="380" stroke="#4CAF50" strokeWidth={sw * .7} opacity={op} />
        <ellipse cx="300" cy="200" rx="80" ry="55" stroke="#4CAF50" strokeWidth={sw * .7} fill="none" opacity={op} />
        <circle cx="300" cy="200" r="5" fill="#4CAF50" opacity={op + .15} />
        <rect x="25" y="125" width="95" height="150" stroke="#4CAF50" strokeWidth={sw * .6} fill="none" opacity={op * .8} />
        <rect x="480" y="125" width="95" height="150" stroke="#4CAF50" strokeWidth={sw * .6} fill="none" opacity={op * .8} />
        <rect x="25" y="155" width="44" height="90" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
        <rect x="531" y="155" width="44" height="90" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
      </>)}
      {type === "multi" && (<>
        <rect x="25" y="20" width="550" height="360" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
        <line x1="300" y1="20" x2="300" y2="380" stroke="#4CAF50" strokeWidth={sw * .7} opacity={op} />
        <circle cx="300" cy="200" r="65" stroke="#4CAF50" strokeWidth={sw * .7} fill="none" opacity={op} />
        <line x1="25" y1="200" x2="575" y2="200" stroke="#4CAF50" strokeWidth={sw * .5} opacity={op * .7} />
        <rect x="130" y="90" width="340" height="220" stroke="#3A8C3A" strokeWidth={sw * .5} fill="none" opacity={op * .6} />
        <rect x="25" y="100" width="60" height="200" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
        <rect x="515" y="100" width="60" height="200" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
      </>)}
      {type === "cricket" && (<>
        <ellipse cx="300" cy="200" rx="270" ry="178" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
        <ellipse cx="300" cy="200" rx="175" ry="115" stroke="#4CAF50" strokeWidth={sw * .7} fill="none" opacity={op * .8} />
        <rect x="278" y="70" width="44" height="260" stroke="#4CAF50" strokeWidth={sw * .5} fill="none" opacity={op * .6} />
        <line x1="255" y1="200" x2="345" y2="200" stroke="#4CAF50" strokeWidth={sw * .5} opacity={op * .5} />
        <circle cx="300" cy="200" r="9" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
      </>)}
      {type === "athletics" && (<>
        <ellipse cx="300" cy="200" rx="270" ry="178" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
        <ellipse cx="300" cy="200" rx="230" ry="140" stroke="#4CAF50" strokeWidth={sw * .7} fill="none" opacity={op * .8} />
        <ellipse cx="300" cy="200" rx="190" ry="102" stroke="#4CAF50" strokeWidth={sw * .5} fill="none" opacity={op * .65} />
        <ellipse cx="300" cy="200" rx="150" ry="64" stroke="#4CAF50" strokeWidth={sw * .4} fill="none" opacity={op * .5} />
        <line x1="30" y1="200" x2="570" y2="200" stroke="#4CAF50" strokeWidth={sw * .4} opacity={op * .4} />
        <line x1="130" y1="22" x2="130" y2="378" stroke="#4CAF50" strokeWidth={sw * .25} opacity={op * .3} />
        <line x1="470" y1="22" x2="470" y2="378" stroke="#4CAF50" strokeWidth={sw * .25} opacity={op * .3} />
      </>)}
    </svg>
  );
}

/* ─── Turf stripes ─── */
function TurfBg({ offset }: { offset: number }) {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 10 }).map((_, j) => (
        <div key={j} className="absolute w-full" style={{
          top: `${j * 10}%`, height: "10%",
          background: (j + offset) % 2 === 0 ? "rgba(16,52,16,0.97)" : "rgba(10,35,10,0.97)",
        }} />
      ))}
    </div>
  );
}

/* ─── Grid tile ─── */
function GridTile({
  item, index, hoveredIndex, isLarge,
  onHover, onLeave, onClick,
}: {
  item: GalleryItem; index: number; hoveredIndex: number | null;
  isLarge: boolean; onHover: (i: number) => void;
  onLeave: () => void; onClick: (i: number) => void;
}) {
  const isHovered = hoveredIndex === index;
  const anyHovered = hoveredIndex !== null;
  const blurred = anyHovered && !isHovered;

  return (
    <button
      className="relative overflow-hidden group text-left w-full h-full"
      style={{
        minHeight: isLarge ? "380px" : "190px",
        filter: blurred ? "blur(2.5px) brightness(0.45) saturate(0.7)" : "blur(0px) brightness(1) saturate(1)",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "filter 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        zIndex: isHovered ? 2 : 1,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => onClick(index)}
    >
      <TurfBg offset={item.stripeOffset} />
      <PitchSVG type={item.svgType} />

      {/* Darkening overlay */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ background: isHovered ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.35)" }}
      />

      {/* Green spotlight glow on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(74,175,80,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Bottom gradient + info */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)" }}
      >
        <div
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(6px)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[#4CAF50] text-[7px] tracking-[0.22em] uppercase font-medium">{item.surface}</p>
            <span className="w-px h-2.5 bg-white/15" />
            <p className="text-white/40 text-[7px] tracking-[0.15em] uppercase">{item.tag}</p>
          </div>
          <p className="text-white font-medium leading-tight" style={{ fontSize: isLarge ? "1.05rem" : "0.82rem" }}>
            {item.title}
          </p>
          <p
            className="text-white/55 text-xs font-light mt-1"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
            }}
          >
            {item.location} · {item.area}
          </p>
        </div>
      </div>

      {/* Expand icon */}
      <div
        className="absolute top-3 right-3 w-7 h-7 border border-white/25 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-15deg)",
          transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </div>

      {/* Year badge — top left */}
      <div
        className="absolute top-3 left-3 text-[8px] tracking-[0.15em] uppercase px-2 py-1 bg-black/50 backdrop-blur-sm"
        style={{
          color: "rgba(74,175,80,0.8)",
          border: "1px solid rgba(74,175,80,0.2)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {item.year}
      </div>
    </button>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  index, onClose, onPrev, onNext,
}: {
  index: number; onClose: () => void;
  onPrev: () => void; onNext: () => void;
}) {
  const item = galleryItems[index];
  const [entering, setEntering] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [itemVisible, setItemVisible] = useState(true);
  const touchStartX = useRef(0);

  /* Entry animation */
  useEffect(() => {
    const t = setTimeout(() => setEntering(false), 20);
    return () => clearTimeout(t);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const animatedNav = useCallback((cb: () => void, dir: "next" | "prev") => {
    setDirection(dir);
    setItemVisible(false);
    setTimeout(() => { cb(); setItemVisible(true); }, 280);
  }, []);

  const handlePrev = () => animatedNav(onPrev, "prev");
  const handleNext = () => animatedNav(onNext, "next");

  /* Touch swipe */
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 60) handlePrev();
    else if (dx < -60) handleNext();
  };

  const slideFrom = direction === "next" ? "translateX(40px)" : "translateX(-40px)";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: entering ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.96)",
        backdropFilter: entering ? "blur(0px)" : "blur(8px)",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative w-full max-w-5xl mx-4 flex flex-col"
        style={{
          transform: entering ? "scale(0.94) translateY(20px)" : "scale(1) translateY(0)",
          opacity: entering ? 0 : 1,
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main panel */}
        <div className="bg-[#0A0C09] border border-white/10 overflow-hidden">

          {/* Pitch visual — animated in/out on nav */}
          <div
            className="relative overflow-hidden"
            style={{
              height: "clamp(220px, 40vh, 420px)",
              opacity: itemVisible ? 1 : 0,
              transform: itemVisible ? "translateX(0)" : slideFrom,
              transition: "opacity 0.28s ease, transform 0.28s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <TurfBg offset={item.stripeOffset} />
            <PitchSVG type={item.svgType} op={0.55} sw={2} />

            {/* Scan line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute top-0 bottom-0 w-24 animate-scan"
                style={{ background: "linear-gradient(90deg, transparent, rgba(74,175,80,0.07), transparent)" }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C09] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C09]/60 via-transparent to-[#0A0C09]/60" />

            {/* Tag pill */}
            <div className="absolute top-5 left-5">
              <span className="text-[#4CAF50] text-[8px] tracking-[0.2em] uppercase border border-[#4CAF50]/30 bg-black/50 backdrop-blur-sm px-3 py-1">
                {item.tag}
              </span>
            </div>

            {/* Large area number */}
            <div className="absolute bottom-6 right-6 text-right">
              <p
                className="text-[#F4EFE6]/15"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "4rem", fontWeight: 300, lineHeight: 1 }}
              >
                {item.area}
              </p>
            </div>
          </div>

          {/* Info panel */}
          <div
            className="p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            style={{
              opacity: itemVisible ? 1 : 0,
              transition: "opacity 0.3s ease 0.05s",
            }}
          >
            <div>
              <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-3 font-medium">{item.surface}</p>
              <h3
                className="text-[#F4EFE6] mb-2 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300 }}
              >
                {item.title}
              </h3>
              <p className="text-[#F4EFE6]/50 text-sm font-light">{item.location} · {item.area} · {item.year}</p>
            </div>

            {/* Mini stats */}
            <div className="flex gap-6 shrink-0">
              {[
                { label: "Surface", value: item.surface.split(" ·")[0] },
                { label: "Area", value: item.area },
                { label: "Year", value: item.year },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.15em] uppercase mb-0.5">{s.label}</p>
                  <p className="text-[#F4EFE6]/70 text-sm font-light">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-px flex gap-px bg-white/5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {galleryItems.map((g, i) => (
            <button
              key={g.id}
              onClick={() => animatedNav(() => {/* handled by parent */}, i > index ? "next" : "prev")}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: i === index ? "80px" : "52px",
                height: "48px",
                transition: "width 0.3s cubic-bezier(0.22,1,0.36,1)",
                outline: i === index ? "1px solid #4CAF50" : "none",
                outlineOffset: "-1px",
              }}
            >
              <TurfBg offset={g.stripeOffset} />
              <PitchSVG type={g.svgType} op={0.5} sw={1} />
              <div className="absolute inset-0" style={{ background: i === index ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.5)" }} />
            </button>
          ))}
        </div>

        {/* Controls bar */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-white/10 hover:border-[#4CAF50]/50 flex items-center justify-center transition-all duration-200 group bg-black/50 backdrop-blur-sm"
            >
              <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white/10 hover:border-[#4CAF50]/50 flex items-center justify-center transition-all duration-200 group bg-black/50 backdrop-blur-sm"
            >
              <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <p className="text-[#F4EFE6]/25 text-[10px] font-mono tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
          </p>

          <button
            onClick={onClose}
            className="w-10 h-10 border border-white/10 hover:border-[#4CAF50]/50 flex items-center justify-center transition-all duration-200 group bg-black/50 backdrop-blur-sm"
          >
            <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center mt-3 text-[#F4EFE6]/15 text-[9px] tracking-[0.15em] uppercase">
          ← → navigate · Esc close · swipe on mobile
        </p>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function GalleryLightbox() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length), []);
  const next = useCallback(() => setLightboxIndex((i) => i === null ? 0 : (i + 1) % galleryItems.length), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  return (
    <section className="bg-[#0A0C09] py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Project Gallery</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
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
              Every pitch
              <br />
              <em style={{ fontStyle: "italic" }}>tells a story.</em>
            </h2>
            <p className="text-[#F4EFE6]/35 text-sm font-light">
              {hoveredIndex !== null ? galleryItems[hoveredIndex].title : "Hover to focus · click to explore"}
            </p>
          </div>
        </Reveal>

        {/* Grid — spotlight blur effect */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={i === 0 || i === 5 ? "md:row-span-2" : ""}
            >
              <Reveal delay={i * 60}>
                <GridTile
                  item={item}
                  index={i}
                  hoveredIndex={hoveredIndex}
                  isLarge={i === 0 || i === 5}
                  onHover={setHoveredIndex}
                  onLeave={() => {}}
                  onClick={setLightboxIndex}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox portal */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
