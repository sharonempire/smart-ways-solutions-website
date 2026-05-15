import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Smart Ways Solutions",
  description: "Explore our full range of financial consultancy services — wealth management, tax advisory, investment planning, and more.",
};

const services = [
  {
    icon: "📊",
    title: "Wealth Management",
    description:
      "We build personalised wealth strategies that account for your complete financial picture — assets, liabilities, future income, and long-term goals. Our advisors take a holistic approach to growing and preserving your wealth.",
    features: ["Portfolio construction & rebalancing", "Estate and succession planning", "Philanthropy advisory", "Cross-border wealth structuring"],
  },
  {
    icon: "🧾",
    title: "Tax Advisory",
    description:
      "Proactive tax planning is one of the most impactful services we offer. Our certified tax advisors identify opportunities to legally reduce your tax burden while ensuring full compliance with all regulations.",
    features: ["Personal & corporate tax planning", "Capital gains optimisation", "International tax structuring", "Tax compliance & filings"],
  },
  {
    icon: "📈",
    title: "Investment Planning",
    description:
      "Whether you are building a retirement nest egg or seeking active growth, we design investment portfolios that match your risk tolerance and time horizon — backed by rigorous research and market insight.",
    features: ["Risk profiling & asset allocation", "Equity, fixed income & alternatives", "ESG & impact investing", "Retirement planning"],
  },
  {
    icon: "🏢",
    title: "Business Finance",
    description:
      "From start-up funding strategy to enterprise cash flow management, we provide the financial foundation businesses need to scale confidently. We work alongside founders and CFOs alike.",
    features: ["Financial modelling & forecasting", "Debt & equity advisory", "Cash flow management", "Investor relations support"],
  },
  {
    icon: "🏠",
    title: "Real Estate Finance",
    description:
      "Property is a cornerstone of many financial plans. Our real estate finance team helps clients navigate mortgage options, analyse investment opportunities, and manage property portfolios.",
    features: ["Mortgage advisory & structuring", "Buy-to-let investment analysis", "Commercial property finance", "REITs & property funds"],
  },
  {
    icon: "🛡️",
    title: "Risk & Insurance",
    description:
      "Comprehensive risk management ensures your financial plan is resilient against the unexpected. We audit your exposure and recommend insurance solutions that provide real protection.",
    features: ["Life & income protection", "Business continuity insurance", "Liability coverage", "Risk audit & gap analysis"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          A full suite of financial advisory services, designed to work together for your complete financial wellbeing.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <p className="text-3xl mb-3">{s.icon}</p>
                <h2 className="text-[#0a1f44] text-2xl font-bold mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#c9a84c] font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gray-50 rounded-2xl p-10 border border-gray-100 flex items-center justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <p className="text-8xl">{s.icon}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
