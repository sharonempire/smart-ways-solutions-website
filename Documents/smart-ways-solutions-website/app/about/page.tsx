import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smart Ways Solutions",
  description: "Smart Ways Solutions — Kerala's trusted loan facilitation partner with direct tie-ups with nationalised banks, private banks, and NBFCs.",
};

const values = [
  { icon: "🎯", title: "Client First", desc: "We fight for the best rate and terms for every single client." },
  { icon: "🔍", title: "Transparency", desc: "No hidden charges. You know exactly what you are getting." },
  { icon: "⚡", title: "Speed", desc: "Our bank relationships mean faster approvals than going direct." },
  { icon: "🤝", title: "End-to-End Support", desc: "From enquiry to disbursal — we handle everything for you." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Smart Ways Solutions</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Kerala&apos;s trusted loan facilitation partner — helping families and businesses get home loans and property loans approved, faster and smarter.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="text-[#0a1f44] text-3xl font-bold mb-4">
              Built to Simplify the Loan Process
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Smart Ways Solutions was founded with a simple idea: getting a home loan in Kerala should not be complicated. Too many people were walking into banks without guidance, getting rejected or accepting unfavourable terms simply because they did not know their options.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We built direct tie-ups with nationalised banks like SBI and Bank of Baroda, new-generation private banks like ICICI and HDFC, and NBFCs like Muthoot Finance and Manappuram Finance — so our clients can access the full market with a single enquiry.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Today, we have facilitated over ₹500 Crore in loans for Keralites — from first-time homebuyers to seasoned property investors — with a 98% approval rate and a reputation built entirely on word of mouth.
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

      {/* What makes us different */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Why Smart Ways</p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">The Smart Ways Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏦",
                title: "16+ Lending Partners",
                desc: "Direct tie-ups with SBI, Bank of Baroda, Canara, ICICI, HDFC, Axis, Muthoot, Manappuram, and more — giving you the widest range of options.",
              },
              {
                icon: "📄",
                title: "Full Documentation Support",
                desc: "Our team prepares, verifies, and submits all your loan documents. You never have to run between offices or figure out paperwork alone.",
              },
              {
                icon: "💰",
                title: "Best Rate Guarantee",
                desc: "We compare live offers across all our partner banks and present you with the lowest available rate for your loan profile.",
              },
              {
                icon: "📍",
                title: "Kerala Specialists",
                desc: "Deep knowledge of Kerala property norms, panchayat approvals, RERA compliance, and local bank procedures — no surprises.",
              },
              {
                icon: "⏱️",
                title: "Faster Approvals",
                desc: "Our relationship with bank officials means your file gets priority processing. Most sanctions happen in 7–15 working days.",
              },
              {
                icon: "🆓",
                title: "Free Consultation",
                desc: "Our advisory service costs you nothing. We are compensated by the lending institution — your loan fee is never inflated.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-[#c9a84c] transition-colors">
                <p className="text-2xl mb-3">{item.icon}</p>
                <p className="text-[#0a1f44] font-semibold mb-2">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
