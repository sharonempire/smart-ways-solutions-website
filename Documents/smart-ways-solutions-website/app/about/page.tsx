import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Smart Way Solutions | Kerala Home Loan DSA",
  description: "Smart Way Solutions — Kerala's trusted loan facilitation partner with direct tie-ups with nationalised banks, private banks, and NBFCs. 2,500+ loans. 98% approval rate.",
  alternates: { canonical: "https://www.smartwaysolutions.in/about" },
};

const values = [
  { icon: "🎯", title: "Client First", desc: "We fight for the best rate and terms for every single client — not whatever is easiest to sell." },
  { icon: "🔍", title: "Transparency", desc: "No hidden charges. You know exactly what you're getting before you sign anything." },
  { icon: "⚡", title: "Speed", desc: "Our bank relationships mean your file gets priority — most sanctions in 7–15 working days." },
  { icon: "🤝", title: "End-to-End Support", desc: "From first enquiry to final disbursement — we handle every step for you." },
];

const milestones = [
  { year: "2015", label: "Founded", desc: "Started as a single-office loan advisory in Thrissur, Kerala." },
  { year: "2018", label: "500 Loans", desc: "Crossed 500 loans sanctioned. Expanded to Kozhikode and Ernakulam." },
  { year: "2020", label: "₹100 Cr+", desc: "Facilitated over ₹100 Crore in home loans across Kerala." },
  { year: "2022", label: "16 Partners", desc: "Grew to 16+ bank and NBFC tie-ups. Launched NRI loan desk." },
  { year: "2025", label: "₹500 Cr+", desc: "Over ₹500 Crore facilitated. 2,500+ happy families across Kerala." },
];

const differentiators = [
  {
    icon: "🏦",
    title: "16+ Lending Partners",
    desc: "Direct tie-ups with SBI, Bank of Baroda, Canara, ICICI, HDFC, Axis, Federal Bank, Muthoot, Manappuram, and more — widest options in one place.",
  },
  {
    icon: "📄",
    title: "Full Documentation Support",
    desc: "Our team prepares, verifies, and submits all your loan documents. You never have to run between offices.",
  },
  {
    icon: "💰",
    title: "Best Rate Guarantee",
    desc: "We compare live offers across all our partner banks and present you with the lowest available rate for your exact profile.",
  },
  {
    icon: "📍",
    title: "Kerala Specialists",
    desc: "Deep knowledge of Kerala property norms, panchayat approvals, RERA compliance, and local bank procedures.",
  },
  {
    icon: "⏱️",
    title: "Faster Approvals",
    desc: "Our relationship with bank officials means your file gets priority processing — most sanctions in 7–15 working days.",
  },
  {
    icon: "🆓",
    title: "Free Service",
    desc: "Our advisory costs you nothing. We are compensated by the lending institution — your loan amount is never inflated.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F5A623] opacity-8 rounded-full blur-3xl" />
        <div className="relative z-10">
          <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">About Smart Way Solutions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            Kerala&apos;s trusted loan facilitation partner — helping families and businesses get home loans approved, faster and smarter, since 2015.
          </p>
          <div className="flex justify-center gap-10 mt-10">
            {[
              { val: "₹500 Cr+", label: "Loans Facilitated" },
              { val: "2,500+", label: "Happy Clients" },
              { val: "98%", label: "Approval Rate" },
              { val: "16+", label: "Bank Partners" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#F5A623] text-2xl font-black">{s.val}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black mb-5">
              Built to Simplify the Loan Process
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Smart Way Solutions was founded with a simple idea: getting a home loan in Kerala should not be complicated. Too many families were walking into banks without guidance — getting rejected or accepting unfavourable terms simply because they did not know their options.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We built direct tie-ups with nationalised banks like SBI and Bank of Baroda, new-generation private banks like ICICI and HDFC, and NBFCs like Muthoot Finance and Manappuram Finance — so our clients access the full market with a single enquiry.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Today, we&apos;ve facilitated over ₹500 Crore in loans for Keralites — from first-time homebuyers to Gulf NRIs and business owners — with a 98% approval rate built entirely on referrals and repeat clients.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f8f8f8] rounded-2xl p-5 border border-gray-100 hover:border-[#F5A623] transition-colors group">
                <div className="w-10 h-10 bg-[#F5A623] rounded-xl flex items-center justify-center text-xl mb-3">
                  {v.icon}
                </div>
                <p className="text-[#1a1a1a] font-black text-sm mb-1 group-hover:text-[#d4891a] transition-colors">{v.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Our Journey
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black">10 Years of Helping Kerala</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[calc(4rem-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5A623] via-[#F5A623]/50 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  {/* Year badge */}
                  <div className="shrink-0 w-16 sm:w-32 flex sm:justify-end">
                    <div className={`px-3 py-1.5 rounded-lg text-xs font-black ${i === milestones.length - 1 ? "bg-[#F5A623] text-black" : "bg-[#1a1a1a] text-white"}`}>
                      {m.year}
                    </div>
                  </div>

                  {/* Dot on line */}
                  <div className="hidden sm:flex shrink-0 items-center justify-center w-4 mt-1">
                    <div className={`w-3 h-3 rounded-full border-2 ${i === milestones.length - 1 ? "bg-[#F5A623] border-[#F5A623]" : "bg-white border-[#F5A623]"}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <p className="text-[#1a1a1a] font-black text-sm mb-1">{m.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Why Smart Way
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">The Smart Way Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-[#f8f8f8] rounded-2xl p-6 border border-gray-100 hover:border-[#F5A623] hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <p className="text-[#1a1a1a] font-black text-sm mb-2 group-hover:text-[#d4891a] transition-colors">{item.title}</p>
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
