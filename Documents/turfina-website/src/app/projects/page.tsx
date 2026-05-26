"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const filters = ["All", "Football Turf", "Multi-Sport Courts", "Cricket Outfields", "Athletic Tracks"];
const cityFilters = ["All Cities", "Kozhikode", "Malappuram", "Bahrain"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCityFilter, setActiveCityFilter] = useState("All Cities");

  const filtered = projects.filter((p) => {
    const surfaceMatch = activeFilter === "All" || p.surface === activeFilter;
    const cityMatch = activeCityFilter === "All Cities" || p.city === activeCityFilter || p.country === activeCityFilter;
    return surfaceMatch && cityMatch;
  });

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Project Portfolio</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <h1
                className="text-[#F4EFE6] leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                }}
              >
                From Bahrain
                <br />
                <em style={{ fontStyle: "italic" }}>to Kerala.</em>
              </h1>
              <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed max-w-md">
                Every project we've delivered — GCC heritage work and our growing Kerala portfolio. Each one a case study in surface engineering done right.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-white/5 sticky top-20 z-30 bg-[#0D0F0C]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-6 items-center justify-between">
            {/* Surface filter */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[9px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-[#4CAF50] text-[#0D0F0C] font-semibold"
                      : "border border-white/10 text-[#F4EFE6]/40 hover:border-white/30 hover:text-[#F4EFE6]/70"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            {/* City filter */}
            <div className="flex flex-wrap gap-2">
              {cityFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveCityFilter(f)}
                  className={`text-[9px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200 ${
                    activeCityFilter === f
                      ? "bg-[#2A5C2A] text-[#F4EFE6] font-medium"
                      : "border border-white/10 text-[#F4EFE6]/40 hover:border-white/30 hover:text-[#F4EFE6]/70"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project grid */}
        <section className="py-0">
          {filtered.length === 0 ? (
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
              <p className="text-[#F4EFE6]/30 text-sm font-light">No projects match this filter combination.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2">
              {filtered.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group relative border-b border-r border-white/5 overflow-hidden block ${
                    i % 2 === 0 ? "bg-[#0D0F0C]" : "bg-[#0A0C09]"
                  } hover:bg-[#0F1410] transition-colors duration-300`}
                >
                  {/* Turf visual header */}
                  <div className="relative h-48 overflow-hidden">
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div key={j} className="absolute w-full" style={{ top: `${j * 10}%`, height: "10%", background: j % 2 === 0 ? "rgba(18,55,18,0.95)" : "rgba(12,38,12,0.95)" }} />
                    ))}
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice">
                      {project.surfaceSlug === "football-turf" && (
                        <>
                          <rect x="20" y="20" width="560" height="160" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                          <line x1="300" y1="20" x2="300" y2="180" stroke="#4CAF50" strokeWidth="1" />
                          <ellipse cx="300" cy="100" rx="55" ry="38" stroke="#4CAF50" strokeWidth="1" fill="none" />
                        </>
                      )}
                      {project.surfaceSlug === "multi-sport-courts" && (
                        <>
                          <rect x="20" y="20" width="560" height="160" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                          <line x1="300" y1="20" x2="300" y2="180" stroke="#4CAF50" strokeWidth="1" />
                          <circle cx="300" cy="100" r="40" stroke="#4CAF50" strokeWidth="1" fill="none" />
                        </>
                      )}
                      {project.surfaceSlug === "athletic-tracks" && (
                        <>
                          <ellipse cx="300" cy="100" rx="250" ry="75" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                          <ellipse cx="300" cy="100" rx="200" ry="50" stroke="#4CAF50" strokeWidth="1" fill="none" />
                          <ellipse cx="300" cy="100" rx="150" ry="25" stroke="#4CAF50" strokeWidth="1" fill="none" />
                        </>
                      )}
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 font-medium ${
                        project.tagGreen ? "bg-[#2A5C2A] text-[#F4EFE6]" : "border border-white/20 text-[#F4EFE6]/50"
                      }`}>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">{project.surface} · {project.year}</p>
                    <h2
                      className="text-[#F4EFE6] mb-2 group-hover:text-white transition-colors leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 400, lineHeight: 1.2 }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-[#F4EFE6]/40 text-sm font-light mb-6">{project.location}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex gap-8">
                        <div>
                          <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.1em] uppercase mb-0.5">Area</p>
                          <p className="text-[#F4EFE6]/60 text-sm font-light">{project.area}</p>
                        </div>
                        <div>
                          <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.1em] uppercase mb-0.5">Duration</p>
                          <p className="text-[#F4EFE6]/60 text-sm font-light">{project.duration}</p>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-[#F4EFE6]/20 group-hover:text-[#4CAF50] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#F4EFE6] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic" }}>
                Ready to add your project to this list?
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light">Free site visit. Proposal in 5 working days.</p>
            </div>
            <Link href="/enquire" className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap">
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
