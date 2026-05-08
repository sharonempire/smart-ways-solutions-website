import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { surfaces } from "@/data/surfaces";

export async function generateStaticParams() {
  return surfaces.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const surface = surfaces.find((s) => s.slug === slug);
  if (!surface) return {};
  return {
    title: `${surface.name} | Turfina Sports Construction Kerala`,
    description: surface.description,
  };
}

export default async function SurfaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const surface = surfaces.find((s) => s.slug === slug);
  if (!surface) notFound();

  const otherSurfaces = surfaces.filter((s) => s.slug !== slug);

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
          {/* Background turf visual */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 14 }).map((_, j) => (
              <div key={j} className="absolute w-full" style={{ top: `${j * 7.14}%`, height: "7.14%", background: j % 2 === 0 ? "#1a4a1a" : "#0f2f0f" }} />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F0C] via-transparent to-[#0D0F0C]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-10">
              <Link href="/" className="text-[#F4EFE6]/30 hover:text-[#F4EFE6]/60 text-[10px] tracking-[0.15em] uppercase transition-colors">Home</Link>
              <span className="text-[#F4EFE6]/20 text-xs">→</span>
              <Link href="/surfaces" className="text-[#F4EFE6]/30 hover:text-[#F4EFE6]/60 text-[10px] tracking-[0.15em] uppercase transition-colors">Surfaces</Link>
              <span className="text-[#F4EFE6]/20 text-xs">→</span>
              <span className="text-[#4CAF50] text-[10px] tracking-[0.15em] uppercase">{surface.name}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#4CAF50] text-[9px] tracking-[0.3em] uppercase mb-5 font-medium">{surface.spec}</p>
                <h1
                  className="text-[#F4EFE6] mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.0,
                  }}
                >
                  {surface.name}
                </h1>
                <p className="text-[#F4EFE6]/60 leading-relaxed font-light mb-10" style={{ fontSize: "1rem" }}>
                  {surface.tagline}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-px bg-white/5 mb-10">
                  {[
                    { label: "Certification", value: surface.certification.split("·")[0].trim() },
                    { label: "Lifespan", value: surface.lifespan },
                    { label: "Starting from", value: surface.priceRange.split("–")[0].trim() },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0D0F0C] p-5">
                      <p className="text-[#F4EFE6]/30 text-[9px] tracking-[0.15em] uppercase mb-1.5">{s.label}</p>
                      <p className="text-[#F4EFE6] font-light" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem" }}>{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/enquire" className="bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200">
                    Get a Quote
                  </Link>
                  <Link href="/surfaces" className="border border-white/15 hover:border-white/40 text-[#F4EFE6]/60 hover:text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200">
                    All Surfaces
                  </Link>
                </div>
              </div>

              {/* Feature list */}
              <div className="divide-y divide-white/5">
                {surface.features.map((f) => (
                  <div key={f.label} className="flex items-center justify-between py-4">
                    <p className="text-[#F4EFE6]/40 text-sm font-light">{f.label}</p>
                    <p className="text-[#F4EFE6] text-sm font-light">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Long description */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-2">
              <span className="block w-8 h-px bg-[#4CAF50] mb-4" />
              <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase font-medium">About this surface</p>
            </div>
            <div className="md:col-span-7">
              <p className="text-[#F4EFE6]/65 leading-relaxed font-light" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                {surface.longDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-[#0A0C09] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Common Installations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {surface.useCases.map((uc) => (
                <div key={uc.title} className="bg-[#0A0C09] p-8 hover:bg-[#0D100C] transition-colors duration-200">
                  <div className="w-8 h-8 border border-[#4CAF50]/20 flex items-center justify-center mb-6">
                    <div className="w-2 h-2 bg-[#4CAF50]" />
                  </div>
                  <p className="text-[#F4EFE6] font-medium mb-3" style={{ fontSize: "1rem" }}>{uc.title}</p>
                  <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.85rem" }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-12">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Frequently Asked</p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5 max-w-4xl">
              {surface.faqs.map((faq) => (
                <div key={faq.q} className="bg-[#0D0F0C] p-8">
                  <p className="text-[#F4EFE6] font-medium mb-3" style={{ fontSize: "0.95rem" }}>{faq.q}</p>
                  <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.85rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other surfaces */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Other Surfaces</p>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {otherSurfaces.map((s) => (
                <Link key={s.slug} href={`/surfaces/${s.slug}`} className="bg-[#0D0F0C] p-8 group hover:bg-[#111410] transition-colors duration-200 block">
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">{s.spec}</p>
                  <p className="text-[#F4EFE6] group-hover:text-white transition-colors mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300 }}>{s.name}</p>
                  <p className="text-[#F4EFE6]/40 text-sm font-light mb-6 leading-relaxed">{s.description.slice(0, 90)}…</p>
                  <span className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase font-medium flex items-center gap-2">
                    View surface
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
