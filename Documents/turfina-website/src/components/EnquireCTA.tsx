"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Floating particle */
type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

function makeParticles(n: number): Particle[] {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.35 + 0.05,
  }));
}

/* Animated SVG pitch that draws itself in */
function AnimatedPitch({ visible }: { visible: boolean }) {
  const dur = (d: number) => `${d}s`;
  const dashProps = (len: number, delay: number, duration: number, started: boolean) => ({
    strokeDasharray: len,
    strokeDashoffset: started ? 0 : len,
    style: {
      transition: started
        ? `stroke-dashoffset ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`
        : "none",
    },
  });

  return (
    <svg
      viewBox="0 0 800 480"
      fill="none"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.06 }}
      aria-hidden="true"
    >
      {/* Outer boundary */}
      <rect
        x="40" y="30" width="720" height="420"
        stroke="white" strokeWidth="1.5" fill="none"
        {...dashProps(2280, 0.2, 2.2, visible)}
      />
      {/* Halfway line */}
      <line
        x1="400" y1="30" x2="400" y2="450"
        stroke="white" strokeWidth="1"
        {...dashProps(420, 0.8, 1.2, visible)}
      />
      {/* Centre circle */}
      <circle
        cx="400" cy="240" r="80"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(503, 1.6, 1.4, visible)}
      />
      {/* Centre spot */}
      <circle
        cx="400" cy="240" r="4"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(25, 2.4, 0.6, visible)}
      />
      {/* Left penalty area */}
      <rect
        x="40" y="148" width="130" height="184"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(828, 1.8, 1.6, visible)}
      />
      {/* Right penalty area */}
      <rect
        x="630" y="148" width="130" height="184"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(828, 2.0, 1.6, visible)}
      />
      {/* Left goal */}
      <rect
        x="40" y="196" width="44" height="88"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(264, 2.8, 1.0, visible)}
      />
      {/* Right goal */}
      <rect
        x="716" y="196" width="44" height="88"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(264, 2.9, 1.0, visible)}
      />
      {/* Left penalty arc */}
      <path
        d="M 170 180 A 60 60 0 0 1 170 300"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(130, 3.2, 0.8, visible)}
      />
      {/* Right penalty arc */}
      <path
        d="M 630 300 A 60 60 0 0 1 630 180"
        stroke="white" strokeWidth="1" fill="none"
        {...dashProps(130, 3.2, 0.8, visible)}
      />
      {/* Corner arcs */}
      <path d="M 40 50 A 16 16 0 0 1 56 30" stroke="white" strokeWidth="0.8" fill="none" {...dashProps(26, 3.6, 0.4, visible)} />
      <path d="M 744 30 A 16 16 0 0 1 760 50" stroke="white" strokeWidth="0.8" fill="none" {...dashProps(26, 3.6, 0.4, visible)} />
      <path d="M 760 430 A 16 16 0 0 1 744 450" stroke="white" strokeWidth="0.8" fill="none" {...dashProps(26, 3.6, 0.4, visible)} />
      <path d="M 56 450 A 16 16 0 0 1 40 430" stroke="white" strokeWidth="0.8" fill="none" {...dashProps(26, 3.6, 0.4, visible)} />
    </svg>
  );
}

export default function EnquireCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [particles] = useState<Particle[]>(() => makeParticles(24));
  const [pulse, setPulse] = useState(false);

  /* Intersection observer */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Pulse loop for CTA glow */
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      const interval = setInterval(() => setPulse((p) => !p), 2800);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="enquire-cta"
      className="relative overflow-hidden py-32 md:py-48"
      style={{ background: "linear-gradient(160deg, #1A3A1A 0%, #0D2010 50%, #0A1A0A 100%)" }}
    >
      {/* Animated pitch drawing */}
      <AnimatedPitch visible={visible} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#4CAF50]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: visible ? p.opacity : 0,
              transform: visible ? "translateY(-60px)" : "translateY(0)",
              transition: `opacity ${p.duration}s ease ${p.delay}s, transform ${p.duration}s ease ${p.delay}s`,
              animation: visible ? `float-up ${p.duration}s ease-in-out ${p.delay}s infinite` : "none",
            }}
          />
        ))}
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            <span className="block w-8 h-px bg-[#4CAF50]/60" />
            <span className="text-[#4CAF50]/80 text-[10px] tracking-[0.3em] uppercase font-medium">
              Ready to build?
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[#F4EFE6] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.9s ease 0.4s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s",
            }}
          >
            Let&rsquo;s talk
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "#A8D5A8",
              }}
            >
              about your pitch.
            </em>
          </h2>

          {/* Body copy */}
          <p
            className="text-[#F4EFE6]/55 font-light leading-relaxed mb-12"
            style={{
              fontSize: "1.05rem",
              maxWidth: "480px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.65s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s",
            }}
          >
            Free site visit. No commitment. Our engineer will assess your land and present
            a full surface specification within 5 working days.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.85s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s",
            }}
          >
            {/* Primary CTA with glow pulse */}
            <Link
              href="/enquire"
              className="relative overflow-hidden group inline-flex items-center gap-3 px-10 py-5 text-[10px] tracking-[0.22em] uppercase font-semibold transition-all duration-300"
              style={{
                background: "#F4EFE6",
                color: "#0D0F0C",
                boxShadow: pulse
                  ? "0 0 40px rgba(74,175,80,0.45), 0 0 80px rgba(74,175,80,0.2)"
                  : "0 0 0px rgba(74,175,80,0)",
                transition: "box-shadow 1.4s ease",
              }}
            >
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                  transform: "translateX(-100%)",
                  transition: "transform 0s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(200%)";
                  (e.currentTarget as HTMLElement).style.transition = "transform 0.6s ease";
                }}
              />
              <span>Request Free Site Visit</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20want%20to%20enquire%20about%20sports%20turf%20construction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-[10px] tracking-[0.22em] uppercase font-medium transition-all duration-300 group"
              style={{
                border: "1px solid rgba(244,239,230,0.2)",
                color: "rgba(244,239,230,0.65)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,239,230,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,239,230,1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,239,230,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,239,230,0.65)";
              }}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust signals strip */}
          <div
            className="flex flex-wrap gap-6 items-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 1.1s",
            }}
          >
            {[
              "Response within 24 hours",
              "Available 6 days a week",
              "Free site assessment",
              "Fixed-price guarantee",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  style={{
                    display: "inline-block",
                    width: "4px",
                    height: "4px",
                    background: "#4CAF50",
                    transform: "rotate(45deg)",
                    opacity: 0.6,
                  }}
                />
                <span className="text-[#F4EFE6]/35 text-[9px] tracking-[0.12em] uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: vertical certification strip on md+ */}
        <div
          className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(20px)",
            transition: "opacity 0.9s ease 1.3s, transform 0.9s ease 1.3s",
          }}
        >
          <div className="w-px h-16 bg-white/10" />
          {["FIFA", "IAAF", "GCC"].map((cert) => (
            <div
              key={cert}
              className="border border-white/10 px-4 py-3 text-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-[#4CAF50] text-[10px] tracking-[0.2em] uppercase font-medium">{cert}</p>
              <p className="text-[#F4EFE6]/25 text-[7px] tracking-[0.1em] uppercase mt-0.5">Certified</p>
            </div>
          ))}
          <div className="w-px h-16 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
