"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const categories = ["All", "Buying Guide", "Technical", "Case Study", "Maintenance", "Industry"] as const;

function PitchSVG({ type }: { type: "football" | "multi" | "cricket" | "athletics" }) {
  const op = 0.35;
  const sw = 1.5;
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
      {type === "football" && (
        <>
          <rect x="20" y="15" width="560" height="270" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="300" y1="15" x2="300" y2="285" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <ellipse cx="300" cy="150" rx="70" ry="50" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <circle cx="300" cy="150" r="4" fill="#4CAF50" opacity={op + 0.1} />
          <rect x="20" y="95" width="80" height="110" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <rect x="500" y="95" width="80" height="110" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
        </>
      )}
      {type === "multi" && (
        <>
          <rect x="20" y="15" width="560" height="270" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <line x1="300" y1="15" x2="300" y2="285" stroke="#4CAF50" strokeWidth={sw * 0.7} opacity={op} />
          <circle cx="300" cy="150" r="55" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op} />
          <line x1="20" y1="150" x2="580" y2="150" stroke="#4CAF50" strokeWidth={sw * 0.5} opacity={op * 0.7} />
        </>
      )}
      {type === "cricket" && (
        <>
          <ellipse cx="300" cy="150" rx="260" ry="135" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <ellipse cx="300" cy="150" rx="170" ry="90" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <rect x="280" y="60" width="40" height="180" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
        </>
      )}
      {type === "athletics" && (
        <>
          <ellipse cx="300" cy="150" rx="270" ry="135" stroke="#4CAF50" strokeWidth={sw} fill="none" opacity={op} />
          <ellipse cx="300" cy="150" rx="230" ry="100" stroke="#4CAF50" strokeWidth={sw * 0.7} fill="none" opacity={op * 0.8} />
          <ellipse cx="300" cy="150" rx="190" ry="65" stroke="#4CAF50" strokeWidth={sw * 0.5} fill="none" opacity={op * 0.6} />
          <line x1="30" y1="150" x2="570" y2="150" stroke="#4CAF50" strokeWidth={sw * 0.4} opacity={op * 0.4} />
        </>
      )}
    </svg>
  );
}

function TurfStripes({ offset }: { offset: number }) {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 8 }).map((_, j) => (
        <div
          key={j}
          className="absolute w-full"
          style={{
            top: `${j * 12.5}%`,
            height: "12.5%",
            background: (j + offset) % 2 === 0 ? "rgba(18,58,18,0.95)" : "rgba(12,40,12,0.95)",
          }}
        />
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Knowledge Base</span>
            </div>
            <h1
              className="text-[#F4EFE6] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              Guides for people
              <br />
              <em style={{ fontStyle: "italic" }}>who build pitches.</em>
            </h1>
            <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed max-w-lg">
              Technical breakdowns, buying guides, and case studies from 20+ years of sports surface construction across South Asia and the GCC.
            </p>
          </div>

          {/* Featured strip */}
          <div className="mb-16">
            <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.25em] uppercase mb-6">Featured reads</p>
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative bg-[#0D0F0C] overflow-hidden"
                  style={{ minHeight: "220px" }}
                >
                  <TurfStripes offset={article.stripeOffset} />
                  <PitchSVG type={article.svgType} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0C] via-black/40 to-transparent" />
                  <div className="relative p-6 flex flex-col justify-end h-full" style={{ minHeight: "220px" }}>
                    <div className="mt-auto">
                      <span className="inline-block text-[#4CAF50] text-[8px] tracking-[0.2em] uppercase border border-[#4CAF50]/30 px-2 py-0.5 mb-3">
                        {article.category}
                      </span>
                      <h3
                        className="text-[#F4EFE6] leading-tight mb-2 group-hover:text-[#F4EFE6]/80 transition-colors"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 300 }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-[#F4EFE6]/30 text-[9px] tracking-wider">{article.readMinutes} min read</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-[9px] tracking-[0.15em] uppercase transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "#2A5C2A" : "transparent",
                  border: `1px solid ${activeCategory === cat ? "#4CAF50" : "rgba(255,255,255,0.1)"}`,
                  color: activeCategory === cat ? "#F4EFE6" : "rgba(244,239,230,0.4)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article list */}
          <div className="divide-y divide-white/5">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col md:flex-row md:items-start gap-6 py-8 hover:bg-white/2 transition-colors duration-200"
              >
                {/* Mini pitch visual */}
                <div className="relative shrink-0 overflow-hidden" style={{ width: "100px", height: "68px" }}>
                  <TurfStripes offset={article.stripeOffset} />
                  <PitchSVG type={article.svgType} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#4CAF50] text-[8px] tracking-[0.2em] uppercase">{article.category}</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span className="text-[#F4EFE6]/25 text-[9px]">{article.readMinutes} min read</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span className="text-[#F4EFE6]/25 text-[9px]">
                      {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <h2
                    className="text-[#F4EFE6]/80 group-hover:text-[#F4EFE6] transition-colors mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25rem", fontWeight: 300 }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-[#F4EFE6]/35 text-sm font-light leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="shrink-0 self-center">
                  <svg className="w-4 h-4 text-[#F4EFE6]/20 group-hover:text-[#4CAF50] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
