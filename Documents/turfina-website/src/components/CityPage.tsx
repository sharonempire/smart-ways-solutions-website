import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type CityData = {
  name: string;
  slug: string;
  tagline: string;
  heroDesc: string;
  population: string;
  districts: string;
  footballFact: string;
  keyword: string;
  activeProjects: number;
  stats: { label: string; value: string }[];
  segments: { icon: string; title: string; desc: string }[];
  seoKeywords: string[];
  mapEmbed?: string;
};

export default function CityPage({ city }: { city: CityData }) {
  const cityProjects = projects.filter(
    (p) => p.city === city.name || (city.name === "Kozhikode" && p.city === "Kozhikode")
  );

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
          {/* Background pitch */}
          <div className="absolute inset-0 opacity-[0.03]">
            {Array.from({ length: 14 }).map((_, j) => (
              <div key={j} className="absolute w-full" style={{ top: `${j * 7.14}%`, height: "7.14%", background: j % 2 === 0 ? "#1a4a1a" : "#0f2f0f" }} />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0F0C]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-10">
              <Link href="/" className="text-[#F4EFE6]/30 hover:text-[#F4EFE6]/60 text-[10px] tracking-[0.15em] uppercase transition-colors">Home</Link>
              <span className="text-[#F4EFE6]/20 text-xs">→</span>
              <span className="text-[#4CAF50] text-[10px] tracking-[0.15em] uppercase">{city.name}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Sports Turf Construction · {city.name}</p>
                </div>
                <h1
                  className="text-[#F4EFE6] leading-tight mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.0,
                  }}
                >
                  {city.name}.
                  <br />
                  <em style={{ fontStyle: "italic" }}>{city.tagline}</em>
                </h1>
                <p className="text-[#F4EFE6]/50 font-light leading-relaxed mb-10" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
                  {city.heroDesc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/enquire" className="bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200">
                    Book Site Visit in {city.name}
                  </Link>
                  <a
                    href={`https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20want%20to%20enquire%20about%20sports%20turf%20in%20${city.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:border-[#4CAF50]/50 text-[#F4EFE6]/60 hover:text-[#F4EFE6] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* City stats */}
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {city.stats.map((s) => (
                  <div key={s.label} className="bg-[#0D0F0C] p-6">
                    <p className="text-[#F4EFE6]/30 text-[9px] tracking-[0.15em] uppercase mb-2">{s.label}</p>
                    <p className="text-[#F4EFE6]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", fontWeight: 300 }}>{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Football fact */}
        <section className="border-b border-white/5 bg-[#0A0C09]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1">
                <span className="block w-px h-12 bg-[#4CAF50]" />
              </div>
              <p
                className="md:col-span-8 text-[#F4EFE6]/75 leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {city.footballFact}
              </p>
            </div>
          </div>
        </section>

        {/* Who we build for in this city */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Who We Build For in {city.name}</p>
            </div>
            <h2
              className="text-[#F4EFE6] mb-16 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Your city.
              <br />
              <em style={{ fontStyle: "italic" }}>Your pitch.</em>
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {city.segments.map((seg) => (
                <div key={seg.title} className="bg-[#0D0F0C] p-10 hover:bg-[#111410] transition-colors duration-200">
                  <div className="text-2xl mb-5">{seg.icon}</div>
                  <p className="text-[#F4EFE6] font-medium mb-3" style={{ fontSize: "1rem" }}>{seg.title}</p>
                  <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.88rem" }}>{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local projects */}
        {cityProjects.length > 0 && (
          <section className="py-24 border-b border-white/5 bg-[#0A0C09]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-4 mb-12">
                <span className="block w-8 h-px bg-[#4CAF50]" />
                <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Projects in {city.name}</p>
              </div>
              <div className="divide-y divide-white/5">
                {cityProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex items-center gap-8 py-6 hover:bg-[#0D100C] -mx-6 px-6 lg:-mx-12 lg:px-12 transition-colors duration-200 block">
                    <div className="flex-1">
                      <p className="text-[#4CAF50] text-[9px] tracking-[0.2em] uppercase mb-1.5 font-medium">{p.surface} · {p.year}</p>
                      <p className="text-[#F4EFE6] group-hover:text-white transition-colors" style={{ fontSize: "1.05rem", fontWeight: 400 }}>{p.name}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-10">
                      <div>
                        <p className="text-[#F4EFE6]/25 text-[9px] uppercase tracking-wider mb-0.5">Area</p>
                        <p className="text-[#F4EFE6]/60 text-sm font-light">{p.area}</p>
                      </div>
                      <div>
                        <p className="text-[#F4EFE6]/25 text-[9px] uppercase tracking-wider mb-0.5">Duration</p>
                        <p className="text-[#F4EFE6]/60 text-sm font-light">{p.duration}</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#F4EFE6]/20 group-hover:text-[#4CAF50] group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEO keyword signals */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#F4EFE6]/20 text-[9px] tracking-[0.2em] uppercase mb-6">Also searched as</p>
            <div className="flex flex-wrap gap-2">
              {city.seoKeywords.map((kw) => (
                <span key={kw} className="border border-white/5 text-[#F4EFE6]/20 text-[9px] tracking-[0.1em] px-3 py-1.5">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#F4EFE6] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic" }}>
                Ready to build in {city.name}?
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light">Our {city.name} team responds within 24 hours.</p>
            </div>
            <Link href="/enquire" className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap">
              Enquire Now — {city.name}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
