"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const timeline = [
  { year: "2012", title: "Founded in Bahrain", desc: "Turfina Sports Construction LLC incorporated in Manama. First project: a 5-a-side court for a private academy in Muharraq." },
  { year: "2014", title: "First FIFA-certified surface", desc: "Delivered Al Hidd Sports Club's FIFA Quality Pro pitch — the first in Muharraq Governorate to hold the certification." },
  { year: "2016", title: "Qatar expansion", desc: "First project delivered in Qatar ahead of the FIFA World Cup infrastructure push. Began supplying GCC contractors with specification consulting." },
  { year: "2018", title: "UAE operations", desc: "Dubai and Abu Dhabi projects established Turfina's reputation for complex drainage engineering on reclaimed and sandy terrain." },
  { year: "2020", title: "50th GCC surface installed", desc: "Milestone: an 11,000m² dual-use football + athletics facility in Riyadh delivered under a 10-week timeline." },
  { year: "2023", title: "India market research", desc: "Eighteen months of North Kerala market research. Site visits to 40+ grounds across Kozhikode, Malappuram, and Kannur districts." },
  { year: "2024", title: "Kerala launch", desc: "First Kerala project: 4 × 5-a-side courts for Kozhikode Municipal Corporation. Permanently stationed crew in Calicut established." },
  { year: "2025", title: "First IAAF track in Malappuram", desc: "GHSS Calicut athletic track passes IAAF Level 1 certification — the first certified athletics track in the district." },
];

const values = [
  {
    label: "No surprises",
    desc: "Every project is quoted at a fixed price. The number we give you on day 10 is the number on the final invoice. We have never issued a change-order that wasn't client-initiated.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "GCC standard, Kerala price",
    desc: "We use the same materials, the same specifications, and the same installation sequences we've used in Bahrain and the UAE. We don't offer a 'local' version of our product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Engineering first",
    desc: "Every Turfina surface starts with drainage. A beautiful turf on a bad drainage base is a failed project in 18 months. We've never compromised on the sub-base.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 20l5-5m0 0l4-4m-4 4l4-4m0 0l5-5M8 15l4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    label: "Decade commitment",
    desc: "Our 10-year warranty isn't a document — it's a relationship. We have clients in Bahrain who have been with us for 11 years. We intend to build the same in Kerala.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const team = [
  { role: "Founder & CEO", focus: "GCC Operations", note: "12 years · 150+ projects", initial: "T" },
  { role: "Head of Engineering", focus: "Drainage & Base Design", note: "Civil Eng, NIT Calicut", initial: "H" },
  { role: "Kerala Project Lead", focus: "Site Operations", note: "Based in Kozhikode", initial: "K" },
  { role: "Surface Specifications", focus: "FIFA & IAAF Compliance", note: "Certified FIFA Inspector", initial: "S" },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-0 items-center ${index > 0 ? "mt-0" : ""}`}
    >
      {/* Left content (even) / spacer (odd) */}
      <div
        className={`${isLeft ? "" : "md:order-2"}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : `translateX(${isLeft ? "-30px" : "30px"})`,
          transition: `opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s`,
        }}
      >
        {isLeft ? (
          <div className="md:pr-12">
            <p
              className="text-[#4CAF50]/40 mb-2 leading-none"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "3.5rem", fontWeight: 300, letterSpacing: "-0.04em" }}
            >
              {item.year}
            </p>
            <p className="text-[#F4EFE6] font-medium mb-2" style={{ fontSize: "1rem" }}>{item.title}</p>
            <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.85rem", lineHeight: 1.75 }}>{item.desc}</p>
          </div>
        ) : null}
      </div>

      {/* Center: timeline node */}
      <div className="hidden md:flex flex-col items-center relative">
        <div
          className="w-3 h-3 rounded-full transition-all duration-500 z-10"
          style={{
            background: visible ? "#4CAF50" : "rgba(255,255,255,0.1)",
            boxShadow: visible ? "0 0 12px rgba(74,175,80,0.6), 0 0 24px rgba(74,175,80,0.2)" : "none",
          }}
        />
      </div>

      {/* Right content (odd) / spacer (even) */}
      <div
        className={`${isLeft ? "md:order-2" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : `translateX(${isLeft ? "30px" : "-30px"})`,
          transition: `opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s`,
        }}
      >
        {!isLeft ? (
          <div className="md:pl-12">
            <p
              className="text-[#4CAF50]/40 mb-2 leading-none"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "3.5rem", fontWeight: 300, letterSpacing: "-0.04em" }}
            >
              {item.year}
            </p>
            <p className="text-[#F4EFE6] font-medium mb-2" style={{ fontSize: "1rem" }}>{item.title}</p>
            <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.85rem", lineHeight: 1.75 }}>{item.desc}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero — cinematic entry */}
        <section ref={heroRef} className="relative pt-40 pb-28 border-b border-white/5 overflow-hidden">
          {/* Background pitch faint */}
          <svg
            className="absolute right-0 top-0 h-full opacity-[0.035] pointer-events-none"
            viewBox="0 0 400 600"
            fill="none"
            preserveAspectRatio="xMaxYMid slice"
            style={{ width: "50%" }}
            aria-hidden="true"
          >
            <rect x="30" y="40" width="340" height="520" stroke="white" strokeWidth="1" fill="none"
              style={{
                strokeDasharray: 1720,
                strokeDashoffset: heroVisible ? 0 : 1720,
                transition: "stroke-dashoffset 2.5s cubic-bezier(0.22,1,0.36,1) 0.3s",
              }}
            />
            <line x1="200" y1="40" x2="200" y2="560" stroke="white" strokeWidth="0.6"
              style={{
                strokeDasharray: 520,
                strokeDashoffset: heroVisible ? 0 : 520,
                transition: "stroke-dashoffset 1.5s ease 1.2s",
              }}
            />
            <circle cx="200" cy="300" r="80" stroke="white" strokeWidth="0.6" fill="none"
              style={{
                strokeDasharray: 503,
                strokeDashoffset: heroVisible ? 0 : 503,
                transition: "stroke-dashoffset 1.5s ease 1.8s",
              }}
            />
          </svg>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div
              className="flex items-center gap-4 mb-6"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}
            >
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Our Story</span>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <h1
                className="text-[#F4EFE6] leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(32px)",
                  transition: "opacity 0.9s ease 0.35s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s",
                }}
              >
                Built in the Gulf.
                <br />
                <em style={{ fontStyle: "italic", color: "#A8D5A8" }}>Rooted in Kerala.</em>
              </h1>
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(24px)",
                  transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
                }}
              >
                <p className="text-[#F4EFE6]/55 leading-relaxed font-light mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Turfina was founded in Bahrain in 2012 with one conviction: that sports surfaces should be engineered, not just installed. Twelve years and 150+ projects across the GCC later, we brought that conviction home to Kerala.
                </p>
                <p className="text-[#F4EFE6]/35 leading-relaxed font-light" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                  North Kerala has more passion for football per square kilometre than almost anywhere in India. It deserved surfaces that matched that passion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <Reveal>
          <section className="border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
                {[
                  { number: "150+", label: "Surfaces installed" },
                  { number: "12", label: "Years of operation" },
                  { number: "4", label: "Countries active" },
                  { number: "10yr", label: "Performance warranty" },
                ].map((s, i) => (
                  <div key={s.label} className="p-10 text-center group hover:bg-white/[0.02] transition-colors duration-300">
                    <p
                      className="text-[#F4EFE6] mb-2 transition-colors duration-300 group-hover:text-[#4CAF50]"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.number}
                    </p>
                    <p className="text-[#F4EFE6]/30 text-[10px] tracking-[0.15em] uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Timeline — alternating layout with vertical line */}
        <section className="py-28 border-b border-white/5 bg-[#0A0C09] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Our Journey</p>
              </div>
              <h2
                className="text-[#F4EFE6] mb-20 leading-tight max-w-lg"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                12 years of ground-up
                <br />
                <em style={{ fontStyle: "italic" }}>surface engineering.</em>
              </h2>
            </Reveal>

            {/* Vertical center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-56 bottom-12 w-px bg-white/5 -translate-x-1/2 pointer-events-none" />

            <div className="space-y-16 md:space-y-12">
              {/* Mobile: simple list */}
              <div className="md:hidden space-y-10">
                {timeline.map((item, i) => (
                  <Reveal key={item.year} delay={i * 60}>
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4CAF50] shrink-0" style={{ boxShadow: "0 0 6px rgba(74,175,80,0.5)" }} />
                        {i < timeline.length - 1 && <div className="w-px flex-1 min-h-[32px] bg-white/8" />}
                      </div>
                      <div>
                        <p className="text-[#4CAF50]/50 text-sm font-mono mb-1">{item.year}</p>
                        <p className="text-[#F4EFE6] font-medium mb-1.5" style={{ fontSize: "0.9rem" }}>{item.title}</p>
                        <p className="text-[#F4EFE6]/40 font-light leading-relaxed" style={{ fontSize: "0.82rem" }}>{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Desktop: alternating */}
              <div className="hidden md:block space-y-12">
                {timeline.map((item, i) => (
                  <TimelineItem key={item.year} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">How We Work</p>
              </div>
              <h2
                className="text-[#F4EFE6] mb-16 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Four principles.
                <br />
                <em style={{ fontStyle: "italic" }}>Non-negotiable.</em>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {values.map((v, i) => (
                <Reveal key={v.label} delay={i * 80}>
                  <div className="relative bg-[#0D0F0C] p-10 hover:bg-[#111410] transition-all duration-300 group overflow-hidden">
                    {/* Corner glow on hover */}
                    <div
                      className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(circle at top right, rgba(74,175,80,0.12), transparent)" }}
                    />
                    <div
                      className="w-10 h-10 border flex items-center justify-center mb-6 transition-all duration-300"
                      style={{
                        borderColor: "rgba(74,175,80,0.2)",
                        background: "rgba(74,175,80,0.04)",
                        color: "rgba(74,175,80,0.6)",
                      }}
                    >
                      {v.icon}
                    </div>
                    <p className="text-[#F4EFE6] font-medium mb-3" style={{ fontSize: "1.05rem" }}>{v.label}</p>
                    <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.88rem", lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Founder quote */}
        <section className="py-28 border-b border-white/5 bg-[#0A0C09] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(42,92,42,0.08) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <Reveal>
              <span
                className="block text-[#4CAF50]/10 select-none mb-0 leading-none"
                style={{ fontFamily: "Georgia, serif", fontSize: "8rem", lineHeight: 0.7 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote
                className="text-[#F4EFE6]/80 mb-10 leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.55,
                }}
              >
                I grew up watching football in Malappuram on a mud ground that flooded every monsoon. We lost two seasons of my childhood to that ground. Every surface we build is my answer to that.
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <span className="block w-8 h-px bg-[#F4EFE6]/15" />
                <div>
                  <p className="text-[#F4EFE6] text-sm font-medium">Turfina Founder</p>
                  <p className="text-[#F4EFE6]/35 text-xs tracking-wide">Malappuram, Kerala</p>
                </div>
                <span className="block w-8 h-px bg-[#F4EFE6]/15" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Team */}
        <section className="py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">The Team</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {team.map((member, i) => (
                <Reveal key={member.role} delay={i * 80}>
                  <div className="bg-[#0D0F0C] p-8 group hover:bg-[#111410] transition-colors duration-300">
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300"
                      style={{
                        border: "1px solid rgba(74,175,80,0.2)",
                        background: "rgba(74,175,80,0.05)",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "1.3rem",
                        fontWeight: 300,
                        color: "rgba(74,175,80,0.6)",
                      }}
                    >
                      {member.initial}
                    </div>
                    <p className="text-[#F4EFE6] font-medium mb-1 text-sm">{member.role}</p>
                    <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase mb-3 font-medium">{member.focus}</p>
                    <p className="text-[#F4EFE6]/30 text-xs font-light">{member.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p
                  className="text-[#F4EFE6] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic" }}
                >
                  Let's build something that lasts.
                </p>
                <p className="text-[#F4EFE6]/40 text-sm font-light">Free site visit. No obligation. Engineer on-site within 48 hours.</p>
              </div>
              <Link
                href="/enquire"
                className="group shrink-0 flex items-center gap-3 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200 whitespace-nowrap"
              >
                Start a Conversation
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
