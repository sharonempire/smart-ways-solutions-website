import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Turfina Projects`,
    description: project.challenge,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="relative pt-40 pb-0 overflow-hidden">
          {/* Full-bleed turf visual */}
          <div className="relative h-72 md:h-96 overflow-hidden">
            {Array.from({ length: 14 }).map((_, j) => (
              <div key={j} className="absolute w-full" style={{ top: `${j * 7.14}%`, height: "7.14%", background: j % 2 === 0 ? "rgba(18,58,18,0.95)" : "rgba(12,40,12,0.95)" }} />
            ))}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
              {project.surfaceSlug === "football-turf" && (
                <>
                  <rect x="60" y="30" width="1320" height="340" stroke="#4CAF50" strokeWidth="2" fill="none" />
                  <line x1="720" y1="30" x2="720" y2="370" stroke="#4CAF50" strokeWidth="1.5" />
                  <ellipse cx="720" cy="200" rx="110" ry="75" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                  <circle cx="720" cy="200" r="5" fill="#4CAF50" opacity="0.6" />
                  <rect x="60" y="120" width="120" height="160" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                  <rect x="1260" y="120" width="120" height="160" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                </>
              )}
              {project.surfaceSlug === "multi-sport-courts" && (
                <>
                  <rect x="60" y="30" width="1320" height="340" stroke="#4CAF50" strokeWidth="2" fill="none" />
                  <line x1="720" y1="30" x2="720" y2="370" stroke="#4CAF50" strokeWidth="1.5" />
                  <circle cx="720" cy="200" r="80" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                  <circle cx="720" cy="200" r="5" fill="#4CAF50" />
                </>
              )}
              {project.surfaceSlug === "athletic-tracks" && (
                <>
                  <ellipse cx="720" cy="200" rx="620" ry="155" stroke="#4CAF50" strokeWidth="2" fill="none" />
                  <ellipse cx="720" cy="200" rx="520" ry="120" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
                  <ellipse cx="720" cy="200" rx="420" ry="85" stroke="#4CAF50" strokeWidth="1" fill="none" />
                  <ellipse cx="720" cy="200" rx="320" ry="50" stroke="#4CAF50" strokeWidth="1" fill="none" />
                </>
              )}
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0C] via-transparent to-black/30" />

            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className={`text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium ${project.tagGreen ? "bg-[#2A5C2A] text-[#F4EFE6]" : "border border-white/20 text-[#F4EFE6]/60"}`}>
                {project.tag}
              </span>
            </div>
          </div>

          {/* Project title — overlapping the hero */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-10 pb-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <Link href="/" className="text-[#F4EFE6]/30 hover:text-[#F4EFE6]/60 text-[10px] tracking-[0.15em] uppercase transition-colors">Home</Link>
              <span className="text-[#F4EFE6]/20 text-xs">→</span>
              <Link href="/projects" className="text-[#F4EFE6]/30 hover:text-[#F4EFE6]/60 text-[10px] tracking-[0.15em] uppercase transition-colors">Projects</Link>
              <span className="text-[#F4EFE6]/20 text-xs">→</span>
              <span className="text-[#4CAF50] text-[10px] tracking-[0.15em] uppercase">{project.name}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2">
                <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-4 font-medium">{project.surface} · {project.location}</p>
                <h1
                  className="text-[#F4EFE6] mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(2rem, 4.5vw, 4rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {project.name}
                </h1>
                <p className="text-[#F4EFE6]/50 font-light leading-relaxed" style={{ fontSize: "0.95rem" }}>
                  {project.challenge}
                </p>
              </div>

              {/* Spec sidebar */}
              <div className="divide-y divide-white/5 border border-white/5">
                {project.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 p-4">
                    <p className="text-[#F4EFE6]/30 text-[10px] tracking-[0.1em] uppercase shrink-0">{s.label}</p>
                    <p className="text-[#F4EFE6] text-sm font-light text-right">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case study body */}
        <section className="border-t border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-16">

            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase font-medium">The Challenge</p>
              </div>
              <p className="text-[#F4EFE6]/60 leading-relaxed font-light" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase font-medium">The Solution</p>
              </div>
              <p className="text-[#F4EFE6]/60 leading-relaxed font-light" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                {project.solution}
              </p>
            </div>

            {/* The Outcome */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase font-medium">The Outcome</p>
              </div>
              <p className="text-[#F4EFE6]/60 leading-relaxed font-light" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                {project.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* Client quote */}
        <section className="bg-[#2A5C2A] py-20 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice">
            <rect x="60" y="30" width="1320" height="240" stroke="white" strokeWidth="1" fill="none" />
            <line x1="720" y1="30" x2="720" y2="270" stroke="white" strokeWidth="0.7" />
            <ellipse cx="720" cy="150" rx="100" ry="65" stroke="white" strokeWidth="0.7" fill="none" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <p
              className="text-[#F4EFE6]/90 mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              &ldquo;{project.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-[#F4EFE6]/40" />
              <div>
                <p className="text-[#F4EFE6] text-sm font-medium">{project.quoteName}</p>
                <p className="text-[#F4EFE6]/60 text-xs tracking-wide">{project.quoteTitle}</p>
              </div>
              <span className="block w-8 h-px bg-[#F4EFE6]/40" />
            </div>
          </div>
        </section>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <section className="py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-4 mb-10">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">More Projects</p>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-white/5">
                {otherProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="bg-[#0D0F0C] p-8 group hover:bg-[#111410] transition-colors duration-200 block">
                    <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">{p.surface} · {p.year}</p>
                    <p className="text-[#F4EFE6] group-hover:text-white transition-colors mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 400 }}>{p.name}</p>
                    <p className="text-[#F4EFE6]/40 text-sm font-light mb-6">{p.location}</p>
                    <div className="flex items-center gap-2 text-[#4CAF50]">
                      <span className="text-[9px] tracking-[0.2em] uppercase font-medium">View case study</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
