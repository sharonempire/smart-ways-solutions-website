import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Turfina | GCC-Grade Sports Turf Construction Kerala",
  description: "Turfina brings over a decade of GCC sports turf expertise to North Kerala. Our story, mission, and the team behind every surface we build.",
};

const timeline = [
  { year: "2012", title: "Founded in Bahrain", desc: "Turfina Sports Construction LLC incorporated in Manama. First project: a 5-a-side court for a private academy in Muharraq." },
  { year: "2014", title: "First FIFA-certified surface", desc: "Delivered Al Hidd Sports Club's FIFA Quality Pro pitch — the first in Muharraq Governorate to hold the certification." },
  { year: "2016", title: "Qatar expansion", desc: "First project delivered in Qatar ahead of the FIFA World Cup infrastructure push. Began supplying GCC contractors with specification consulting." },
  { year: "2018", title: "UAE operations", desc: "Dubai and Abu Dhabi projects established Turfina's reputation for complex drainage engineering on reclaimed and sandy terrain." },
  { year: "2020", title: "50th GCC surface installed", desc: "Milestone project: an 11,000m² dual-use football + athletics facility in Riyadh delivered under a 10-week timeline." },
  { year: "2023", title: "India market research", desc: "Eighteen months of North Kerala market research. Site visits to 40+ grounds across Kozhikode, Malappuram, and Kannur districts." },
  { year: "2024", title: "Kerala launch", desc: "First Kerala project delivered: 4 × 5-a-side courts for Kozhikode Municipal Corporation. Permanently stationed crew in Calicut established." },
  { year: "2025", title: "First IAAF track in Malappuram district", desc: "GHSS Calicut athletic track passes IAAF Level 1 certification — the first certified athletics track in the district." },
];

const values = [
  {
    label: "No surprises",
    desc: "Every project is quoted at a fixed price. The number we give you on day 10 is the number on the final invoice. We have never issued a change-order that wasn't client-initiated.",
  },
  {
    label: "GCC standard, Kerala price",
    desc: "We use the same materials, the same specifications, and the same installation sequences we've used in Bahrain and the UAE. We don't offer a 'local' version of our product.",
  },
  {
    label: "Engineering first",
    desc: "Every Turfina surface starts with drainage. A beautiful turf on a bad drainage base is a failed project in 18 months. We've never compromised on the sub-base.",
  },
  {
    label: "Decade commitment",
    desc: "Our 10-year warranty isn't a document — it's a relationship. We have clients in Bahrain who have been with us for 11 years. We intend to build the same in Kerala.",
  },
];

const team = [
  { name: "Founder & CEO", title: "GCC Operations", note: "12 years · 150+ projects" },
  { name: "Head of Engineering", title: "Drainage & Base Design", note: "Civil Eng, NIT Calicut" },
  { name: "Kerala Project Lead", title: "Site Operations", note: "Based in Kozhikode" },
  { name: "Surface Specifications", title: "FIFA & IAAF Compliance", note: "Certified FIFA Inspector" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Our Story</span>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-end">
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
                Built in the Gulf.
                <br />
                <em style={{ fontStyle: "italic" }}>Rooted in Kerala.</em>
              </h1>
              <div>
                <p className="text-[#F4EFE6]/55 leading-relaxed font-light mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Turfina was founded in Bahrain in 2012 with one conviction: that sports surfaces should be engineered, not just installed. Twelve years and 150+ projects across the GCC later, we brought that conviction home to Kerala.
                </p>
                <p className="text-[#F4EFE6]/40 leading-relaxed font-light" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                  North Kerala has more passion for football per square kilometre than almost anywhere in India. It deserved surfaces that matched that passion. That's why we're here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
              {[
                { number: "150+", label: "Surfaces installed" },
                { number: "12", label: "Years of operation" },
                { number: "4", label: "Countries — BH, QA, AE, IN" },
                { number: "10yr", label: "Performance warranty" },
              ].map((s) => (
                <div key={s.label} className="p-10 text-center">
                  <p className="text-[#F4EFE6] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>{s.number}</p>
                  <p className="text-[#F4EFE6]/35 text-[10px] tracking-[0.15em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 border-b border-white/5 bg-[#0A0C09]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-16">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Our Journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {timeline.map((item) => (
                <div key={item.year} className="bg-[#0A0C09] p-8 group hover:bg-[#0D100C] transition-colors duration-200">
                  <p
                    className="text-[#4CAF50]/30 group-hover:text-[#4CAF50]/60 transition-colors mb-4"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {item.year}
                  </p>
                  <p className="text-[#F4EFE6] font-medium mb-2" style={{ fontSize: "0.95rem" }}>{item.title}</p>
                  <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">How We Work</p>
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
              Four principles.
              <br />
              <em style={{ fontStyle: "italic" }}>Non-negotiable.</em>
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {values.map((v) => (
                <div key={v.label} className="bg-[#0D0F0C] p-10 hover:bg-[#111410] transition-colors duration-200">
                  <div className="w-10 h-10 border border-[#4CAF50]/20 flex items-center justify-center mb-6">
                    <div className="w-2.5 h-2.5 bg-[#4CAF50]" />
                  </div>
                  <p className="text-[#F4EFE6] font-medium mb-3" style={{ fontSize: "1.05rem" }}>{v.label}</p>
                  <p className="text-[#F4EFE6]/45 font-light leading-relaxed" style={{ fontSize: "0.88rem", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder quote */}
        <section className="py-24 border-b border-white/5 bg-[#0A0C09]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <span className="block w-8 h-px bg-[#4CAF50] mx-auto mb-10" />
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
              &ldquo;I grew up watching football in Malappuram on a mud ground that flooded every monsoon. We lost two seasons of my childhood to that ground. Every surface we build is my answer to that.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-[#F4EFE6]/20" />
              <div>
                <p className="text-[#F4EFE6] text-sm font-medium">Turfina Founder</p>
                <p className="text-[#F4EFE6]/40 text-xs tracking-wide">Malappuram, Kerala</p>
              </div>
              <span className="block w-8 h-px bg-[#F4EFE6]/20" />
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-16">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">The Team</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {team.map((member) => (
                <div key={member.name} className="bg-[#0D0F0C] p-8">
                  <div className="w-12 h-12 bg-[#1A1D18] border border-white/5 flex items-center justify-center mb-6">
                    <div className="w-5 h-5 border border-[#4CAF50]/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#4CAF50]/60" />
                    </div>
                  </div>
                  <p className="text-[#F4EFE6] font-medium mb-1" style={{ fontSize: "0.9rem" }}>{member.name}</p>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.15em] uppercase mb-3 font-medium">{member.title}</p>
                  <p className="text-[#F4EFE6]/30 text-xs font-light">{member.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#F4EFE6] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, fontStyle: "italic" }}>
                Let's build something that lasts.
              </p>
              <p className="text-[#F4EFE6]/40 text-sm font-light">Free site visit. No obligation. Engineer on-site within 48 hours.</p>
            </div>
            <Link href="/enquire" className="shrink-0 bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap">
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
