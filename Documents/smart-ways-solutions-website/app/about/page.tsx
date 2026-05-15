import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smart Ways Solutions",
  description: "Learn about Smart Ways Solutions — our story, our team, and our commitment to exceptional financial advisory.",
};

const team = [
  {
    name: "David Mitchell",
    role: "Founder & Managing Director",
    bio: "25+ years in financial services across private banking and corporate advisory.",
  },
  {
    name: "Claire Watson",
    role: "Head of Wealth Management",
    bio: "CFA charterholder specialising in multi-generational wealth strategies.",
  },
  {
    name: "Rajan Nair",
    role: "Senior Tax Advisor",
    bio: "Former Big Four tax partner with expertise in cross-border tax planning.",
  },
  {
    name: "Emily Cheng",
    role: "Investment Strategist",
    bio: "12 years building data-driven portfolios for institutional and private clients.",
  },
];

const values = [
  { icon: "🎯", title: "Client First", desc: "Every decision is guided by your best interests — always." },
  { icon: "🔍", title: "Transparency", desc: "Clear communication, no jargon, no hidden fees." },
  { icon: "🤝", title: "Long-Term Partnership", desc: "We grow with you — relationships built over years, not transactions." },
  { icon: "🏆", title: "Excellence", desc: "Rigorous standards and continuous learning drive everything we do." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Smart Ways Solutions</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Founded on the belief that great financial advice should be accessible to everyone who is serious about their future.
        </p>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Our Mission</p>
            <h2 className="text-[#0a1f44] text-3xl font-bold mb-4">
              Empowering Financial Clarity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Smart Ways Solutions was founded with a clear mission: to deliver institutional-quality financial advice to individuals, families, and businesses — without the institutional barriers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over 15 years, we have built a reputation for rigorous analysis, honest counsel, and measurable results. Our advisors bring decades of combined experience from private banking, corporate finance, and investment management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-2xl mb-2">{v.icon}</p>
                <p className="text-[#0a1f44] font-semibold text-sm mb-1">{v.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Meet the Team</p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">The People Behind the Advice</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center hover:border-[#c9a84c] transition-colors">
                <div className="w-16 h-16 bg-[#0a1f44] rounded-full mx-auto mb-4 flex items-center justify-center text-[#c9a84c] font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <p className="text-[#0a1f44] font-semibold">{member.name}</p>
                <p className="text-[#c9a84c] text-xs mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
