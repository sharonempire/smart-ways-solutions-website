"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "Surfaces", href: "/surfaces", id: "surfaces" },
  { label: "Projects", href: "/projects", id: "projects" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Compare", href: "#comparison", id: "comparison" },
  { label: "About", href: "/about", id: null },
];

const sectionIds = ["hero", "stats", "surfaces", "projects", "gallery", "comparison", "testimonials", "enquire-cta"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Move indicator to active link */
  useEffect(() => {
    const activeLink = links.find((l) => l.id === activeSection);
    if (!activeLink || !activeLink.id) {
      setIndicatorStyle((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const el = linkRefs.current.get(activeLink.label);
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [activeSection]);

  /* Close mobile menu on scroll */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { once: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        background: scrolled ? "rgba(13,15,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-8 h-8 flex items-center justify-center overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2A5C2A 0%, #1A3A1A 100%)",
              boxShadow: "0 0 0 1px rgba(74,175,80,0.2)",
            }}
          >
            {/* Pitch lines inside logo */}
            <svg viewBox="0 0 20 20" fill="none" className="absolute inset-0 w-full h-full opacity-30">
              <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="0.5" fill="none"/>
            </svg>
            <span
              className="relative z-10 text-[#F4EFE6] font-black"
              style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
            >
              T
            </span>
            {/* Shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(135deg, rgba(74,175,80,0.3), transparent)" }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-[#F4EFE6] font-light tracking-widest uppercase transition-colors duration-300"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1rem",
                letterSpacing: "0.22em",
              }}
            >
              Turfina
            </span>
            <span className="text-[#4CAF50]/50 text-[7px] tracking-[0.25em] uppercase">
              Sports Construction
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-8 relative">
          {/* Sliding indicator */}
          <div
            className="absolute bottom-0 h-px bg-[#4CAF50] transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
              boxShadow: "0 0 6px rgba(74,175,80,0.6)",
            }}
          />

          {links.map((l) => {
            const isActive = l.id && activeSection === l.id;
            return (
              <Link
                key={l.label}
                href={l.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(l.label, el);
                }}
                className="relative py-2 text-[10px] tracking-[0.18em] uppercase font-medium transition-all duration-200 group"
                style={{
                  color: isActive ? "#F4EFE6" : "rgba(244,239,230,0.45)",
                  letterSpacing: "0.18em",
                }}
              >
                {l.label}
                {/* Hover underline (secondary, only when not active) */}
                {!isActive && (
                  <span
                    className="absolute bottom-0 left-0 h-px bg-[#4CAF50]/40 transition-all duration-200 origin-left"
                    style={{ width: "0%", transform: "scaleX(0)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.width = "100%";
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* Get a Quote CTA */}
          <Link
            href="/enquire"
            className="relative overflow-hidden group ml-2 text-[10px] tracking-[0.18em] uppercase font-semibold px-5 py-2.5 transition-all duration-300"
            style={{
              background: "rgba(42,92,42,0.3)",
              border: "1px solid rgba(74,175,80,0.3)",
              color: "#F4EFE6",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(74,175,80,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,175,80,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(42,92,42,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,175,80,0.3)";
            }}
          >
            <span className="relative z-10">Get a Quote</span>
            {/* Green sweep */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(74,175,80,0.15) 50%, transparent 70%)" }}
            />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-3 -mr-3"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className="block w-6 h-px transition-all duration-350"
            style={{
              background: "#F4EFE6",
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
              opacity: open ? 1 : 0.7,
            }}
          />
          <span
            className="block w-4 h-px transition-all duration-350"
            style={{
              background: "#F4EFE6",
              opacity: open ? 0 : 0.5,
              transform: open ? "translateX(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-350"
            style={{
              background: "#F4EFE6",
              transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
              opacity: open ? 1 : 0.7,
            }}
          />
        </button>
      </div>

      {/* Mobile menu — full-height drawer */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)",
          background: "rgba(10,12,10,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="px-6 pb-8 pt-6 flex flex-col">
            {links.map((l, i) => {
              const isActive = l.id && activeSection === l.id;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-white/5 group"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.4s ease ${i * 0.06 + 0.1}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.06 + 0.1}s`,
                  }}
                >
                  <span
                    className="text-sm tracking-[0.12em] uppercase"
                    style={{ color: isActive ? "#4CAF50" : "rgba(244,239,230,0.6)" }}
                  >
                    {l.label}
                  </span>
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: isActive ? "#4CAF50" : "rgba(244,239,230,0.2)" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              );
            })}
            <Link
              href="/enquire"
              onClick={() => setOpen(false)}
              className="mt-6 bg-[#2A5C2A] text-[#F4EFE6] text-[10px] tracking-[0.2em] uppercase font-semibold py-4 text-center transition-colors duration-200 hover:bg-[#3A7C3A]"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ease ${links.length * 0.06 + 0.15}s, transform 0.4s ease ${links.length * 0.06 + 0.15}s`,
              }}
            >
              Get a Free Quote
            </Link>

            {/* Mobile footer strip */}
            <div
              className="mt-6 flex items-center gap-4"
              style={{
                opacity: open ? 0.6 : 0,
                transition: `opacity 0.4s ease ${links.length * 0.06 + 0.25}s`,
              }}
            >
              <div className="w-px h-3 bg-[#4CAF50]/40" />
              <span className="text-[#F4EFE6]/30 text-[8px] tracking-[0.2em] uppercase">
                FIFA · IAAF · GCC Grade
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
