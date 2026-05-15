import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

const services = [
  {
    icon: "📊",
    title: "Wealth Management",
    description:
      "Personalised strategies to grow, protect, and transfer your wealth across generations.",
  },
  {
    icon: "🧾",
    title: "Tax Advisory",
    description:
      "Proactive tax planning and compliance to minimise liabilities and stay ahead of regulations.",
  },
  {
    icon: "📈",
    title: "Investment Planning",
    description:
      "Data-driven portfolio construction aligned to your risk appetite and financial goals.",
  },
  {
    icon: "🏢",
    title: "Business Finance",
    description:
      "Cash flow management, funding strategy, and financial modelling for growing businesses.",
  },
  {
    icon: "🏠",
    title: "Real Estate Finance",
    description:
      "Mortgage advisory, property investment analysis, and real-estate portfolio planning.",
  },
  {
    icon: "🛡️",
    title: "Risk & Insurance",
    description:
      "Comprehensive risk assessments and insurance solutions to safeguard what matters most.",
  },
];

const testimonials = [
  {
    name: "James Harrington",
    role: "CEO, Harrington Group",
    quote:
      "Smart Ways Solutions transformed our approach to business finance. Their team is sharp, responsive, and genuinely invested in our growth.",
  },
  {
    name: "Priya Mehta",
    role: "Private Investor",
    quote:
      "The investment planning advice I received was outstanding — clear, practical, and tailored to my exact goals. Highly recommended.",
  },
  {
    name: "Sarah O'Brien",
    role: "Director, O'Brien Enterprises",
    quote:
      "Their tax advisory saved us significantly last financial year. The level of expertise and attention to detail is unmatched.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">
              Comprehensive Financial Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From personal wealth to corporate finance, we cover every aspect
              of your financial journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border border-[#0a1f44] text-[#0a1f44] px-8 py-3 rounded font-semibold hover:bg-[#0a1f44] hover:text-white transition-colors text-sm inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              Why Smart Ways
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold mb-6">
              Finance Expertise You Can Trust
            </h2>
            <ul className="space-y-4">
              {[
                "Certified financial advisors with 15+ years industry experience",
                "Fiduciary duty — your interests always come first",
                "Transparent fee structure with no hidden charges",
                "Dedicated relationship manager for every client",
                "Regular portfolio reviews and proactive communication",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="text-[#c9a84c] font-bold mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a1f44] rounded-2xl p-8 text-white">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Approach
            </p>
            <ol className="space-y-5">
              {[
                { step: "01", title: "Discovery Call", desc: "We learn about your goals, priorities, and financial situation." },
                { step: "02", title: "Custom Strategy", desc: "Our advisors design a tailored plan aligned to your objectives." },
                { step: "03", title: "Implementation", desc: "We execute the plan with precision and keep you informed." },
                { step: "04", title: "Ongoing Review", desc: "Regular check-ins to adapt your strategy as life evolves." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <span className="text-[#c9a84c] font-bold text-lg w-8 shrink-0">{item.step}</span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              Client Stories
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-[#c9a84c] text-2xl mb-3">&ldquo;</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.quote}</p>
                <p className="text-[#0a1f44] font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
