"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const certBadges = [
  { label: "FIFA Quality", sub: "Certified Installer" },
  { label: "IAAF", sub: "Approved Contractor" },
  { label: "ISO 9001", sub: "Quality Management" },
];

function FooterPitch() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const d = (len: number, delay: number, dur: number) => ({
    strokeDasharray: len,
    strokeDashoffset: visible ? 0 : len,
    style: { transition: visible ? `stroke-dashoffset ${dur}s cubic-bezier(0.22,1,0.36,1) ${delay}s` : "none" },
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 240"
      fill="none"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.04 }}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect x="60" y="20" width="1320" height="200" stroke="white" strokeWidth="1" fill="none" {...d(3040, 0.1, 2)} />
      <line x1="720" y1="20" x2="720" y2="220" stroke="white" strokeWidth="0.7" {...d(200, 0.7, 0.8)} />
      <circle cx="720" cy="120" r="60" stroke="white" strokeWidth="0.7" fill="none" {...d(377, 1.2, 1)} />
      <circle cx="720" cy="120" r="3" stroke="white" strokeWidth="0.7" fill="none" {...d(19, 2, 0.4)} />
      <rect x="60" y="68" width="100" height="104" stroke="white" strokeWidth="0.7" fill="none" {...d(408, 1.5, 0.9)} />
      <rect x="1280" y="68" width="100" height="104" stroke="white" strokeWidth="0.7" fill="none" {...d(408, 1.6, 0.9)} />
      <rect x="60" y="90" width="36" height="60" stroke="white" strokeWidth="0.7" fill="none" {...d(192, 2.2, 0.7)} />
      <rect x="1344" y="90" width="36" height="60" stroke="white" strokeWidth="0.7" fill="none" {...d(192, 2.3, 0.7)} />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [colsVisible, setColsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setColsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const cols = [
    {
      title: "Surfaces",
      links: [
        { label: "Football Turf", href: "/surfaces/football-turf" },
        { label: "Multi-Sport Courts", href: "/surfaces/multi-sport-courts" },
        { label: "Cricket Outfields", href: "/surfaces/cricket-outfields" },
        { label: "Athletic Tracks", href: "/surfaces/athletic-tracks" },
      ],
    },
    {
      title: "Projects",
      links: [
        { label: "All Projects", href: "/projects" },
        { label: "Kozhikode", href: "/cities/kozhikode" },
        { label: "Malappuram", href: "/cities/malappuram" },
        { label: "Kannur", href: "/cities/kannur" },
        { label: "GCC Projects", href: "/projects" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog & Guides", href: "/blog" },
        { label: "Enquire", href: "/enquire" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background: "#060806" }}>
      <FooterPitch />

      {/* WhatsApp CTA bar */}
      <div
        className="relative border-b border-white/5"
        style={{ background: "rgba(10,12,10,0.8)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div
            style={{
              opacity: colsVisible ? 1 : 0,
              transform: colsVisible ? "none" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="text-[#F4EFE6] mb-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300, fontStyle: "italic" }}
            >
              Have a quick question?
            </p>
            <p className="text-[#F4EFE6]/40 text-sm font-light">Our engineers reply on WhatsApp within 2 hours.</p>
          </div>
          <a
            href="https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20have%20a%20question%20about%20sports%20turf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border text-[#F4EFE6] px-6 py-3 transition-all duration-300 shrink-0 group"
            style={{ background: "rgba(26,58,26,0.8)", borderColor: "rgba(74,175,80,0.3)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(42,92,42,0.8)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,175,80,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,58,26,0.8)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,175,80,0.3)";
            }}
          >
            <svg className="w-4 h-4 text-[#4CAF50]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-sm font-light tracking-wide">Message on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">

          {/* Brand column */}
          <div
            className="col-span-2"
            style={{
              opacity: colsVisible ? 1 : 0,
              transform: colsVisible ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(74,175,80,0.4)]"
                style={{ background: "linear-gradient(135deg, #2A5C2A, #1A3A1A)", boxShadow: "0 0 0 1px rgba(74,175,80,0.2)" }}
              >
                <span className="text-[#F4EFE6] font-bold text-xs">T</span>
              </div>
              <span
                className="text-[#F4EFE6] font-light tracking-widest uppercase"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem", letterSpacing: "0.22em" }}
              >
                Turfina
              </span>
            </Link>

            <p className="text-[#F4EFE6]/30 text-sm font-light leading-relaxed mb-6 max-w-[220px]">
              GCC-grade sports turf construction. Serving Kerala, Bahrain, Qatar, and the UAE since 2004.
            </p>

            {/* Cert badges */}
            <div className="flex flex-col gap-2 mb-8">
              {certBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 border flex items-center justify-center shrink-0"
                    style={{ borderColor: "rgba(74,175,80,0.3)", background: "rgba(74,175,80,0.05)" }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#4CAF50]" />
                  </div>
                  <div>
                    <span className="text-[#F4EFE6]/55 text-[9px] tracking-[0.15em] uppercase font-medium">{b.label}</span>
                    <span className="text-[#F4EFE6]/22 text-[9px] ml-1.5">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[#F4EFE6]/30 text-[9px] tracking-[0.2em] uppercase mb-3">Project updates & guides</p>
              {submitted ? (
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ background: "rgba(74,175,80,0.15)", border: "1px solid rgba(74,175,80,0.4)" }}
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#4CAF50" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#4CAF50] text-xs font-light">You're on the list</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent border border-r-0 border-white/10 focus:border-[#4CAF50]/40 px-3 py-2.5 text-[#F4EFE6] text-xs font-light outline-none transition-colors duration-200 min-w-0 placeholder:text-[#F4EFE6]/20"
                    style={{ fontSize: "0.78rem" }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="shrink-0 px-3 py-2.5 border border-[#4CAF50]/30 hover:border-[#4CAF50]/60 transition-all duration-200 flex items-center justify-center"
                    style={{ background: submitting ? "rgba(74,175,80,0.15)" : "rgba(74,175,80,0.08)", minWidth: "36px" }}
                  >
                    {submitting ? (
                      <div
                        className="w-3 h-3 border border-[#4CAF50]/60 border-t-[#4CAF50] rounded-full animate-spin"
                      />
                    ) : (
                      <svg className="w-3 h-3 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col, ci) => (
            <div
              key={col.title}
              style={{
                opacity: colsVisible ? 1 : 0,
                transform: colsVisible ? "none" : "translateY(20px)",
                transition: `opacity 0.7s ease ${0.15 + ci * 0.08}s, transform 0.7s ease ${0.15 + ci * 0.08}s`,
              }}
            >
              <p className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#F4EFE6]/40 hover:text-[#F4EFE6] text-sm font-light transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-0 group-hover:w-3 h-px bg-[#4CAF50] transition-all duration-200 shrink-0"
                        style={{ opacity: 0.6 }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div
            style={{
              opacity: colsVisible ? 1 : 0,
              transform: colsVisible ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            <p className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-5">Contact</p>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="tel:+918000000000" className="text-[#F4EFE6]/40 hover:text-[#F4EFE6] text-sm font-light transition-colors duration-200">
                  +91 800 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@turfina.in" className="text-[#F4EFE6]/40 hover:text-[#F4EFE6] text-sm font-light transition-colors duration-200">
                  hello@turfina.in
                </a>
              </li>
              <li className="pt-1">
                <p className="text-[#F4EFE6]/20 text-[9px] leading-relaxed">
                  Kozhikode, Kerala · 673001
                </p>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-2">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com",
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/8 flex items-center justify-center text-[#F4EFE6]/25 transition-all duration-200"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,175,80,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#4CAF50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,239,230,0.25)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
          style={{
            opacity: colsVisible ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          <p className="text-[#F4EFE6]/18 text-[10px] tracking-[0.1em]">
            © 2025 Turfina Sports Construction LLC · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {["FIFA Quality", "IAAF", "ISO 9001"].map((cert) => (
              <span key={cert} className="text-[#F4EFE6]/15 text-[9px] tracking-[0.15em] uppercase">{cert}</span>
            ))}
            <span className="text-[#F4EFE6]/10 text-[10px]">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F4EFE6]/15 text-[10px]">Built by</span>
              <span className="text-[#4CAF50]/30 text-[10px] tracking-widest uppercase font-medium">Codnov.AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
