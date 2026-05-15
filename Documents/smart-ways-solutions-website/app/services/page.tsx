import CTABanner from "@/components/CTABanner";
import BankPartners from "@/components/BankPartners";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Services | Smart Way Solutions Kerala",
  description: "Home loans, takeover + top-up loans, loan against property, and business loans in Kerala — facilitated by Smart Way Solutions across 16+ banks and NBFCs.",
  alternates: { canonical: "https://www.smartwaysolutions.in/services" },
};

const homeLoans = [
  {
    num: "01",
    icon: "🏡",
    title: "Plot Purchase Loan",
    description: "Finance the purchase of a residential plot from nationalised and private banks with LTV up to 75% of the plot value and tenures up to 15 years.",
    features: ["Up to 75% of plot value", "Tenures up to 15 years", "SBI, BoB, ICICI, HDFC & more", "Title deed verification support"],
  },
  {
    num: "02",
    icon: "🏗️",
    title: "Plot Purchase + Construction",
    description: "Buy the plot and build your home under a single composite loan. Funds release in stages — interest accrues only on the disbursed amount during construction.",
    features: ["Single loan for land + construction", "Stage-wise disbursement", "Interest only on disbursed amount", "Tenures up to 30 years"],
  },
  {
    num: "03",
    icon: "🏠",
    title: "Home Purchase Loan",
    description: "Buy a ready-to-move home or apartment. We compare live rates across 16+ lenders and present the lowest offer for your income and credit profile.",
    features: ["Up to 90% LTV for loans up to ₹30L", "Up to 80% LTV for ₹30L–₹75L", "Salaried, self-employed, NRI eligible", "PMAY subsidy guidance"],
  },
  {
    num: "04",
    icon: "🏢",
    title: "Under Construction Loan",
    description: "Buying a flat still being built? Disbursements are linked to builder progress — pre-EMI option available to keep early costs low.",
    features: ["Disbursement linked to builder progress", "Pre-EMI or full EMI options", "Builder approval tie-ups available", "All major banks covered"],
  },
  {
    num: "05",
    icon: "🔨",
    title: "Renovation & Extension Loan",
    description: "Add a floor, renovate your kitchen, repair the roof, or extend your living space. Available up to ₹50 Lakhs with faster processing and minimal documentation.",
    features: ["Up to ₹50 Lakhs", "No mortgage for smaller amounts", "Faster processing", "Tenures up to 15 years"],
  },
  {
    num: "06",
    icon: "🔄",
    title: "Balance Transfer",
    description: "Already paying a high rate? We transfer your loan to a lender offering better terms, negotiate the rate on your behalf, and handle the full transfer process.",
    features: ["Lower EMI from day one", "Top-up available on transfer", "Minimal documentation", "Suitable after 12 EMIs paid"],
  },
];

const takeoverDetails = [
  {
    source: "From KSFE",
    icon: "🏛️",
    desc: "KSFE home loans run at 9%–9.75%. We transfer them to banks at 8.3%–9%, saving you thousands monthly. KSFE charges zero premature closure penalty — making the switch completely cost-free.",
    saving: "Save ₹2,000–₹5,000/month",
  },
  {
    source: "From Co-operative Societies",
    icon: "🤝",
    desc: "Primary Agricultural Credit Societies (PACS) and other co-operative societies in Kerala charge 9%–12%. We transfer these to nationalised or private banks at significantly lower rates.",
    saving: "Rates drop by 1–3%",
  },
  {
    source: "Bank-to-Bank Transfer",
    icon: "🏦",
    desc: "If your current bank raised rates or another lender is offering a better deal, we facilitate the transfer seamlessly — including negotiating a reduced rate with the incoming bank.",
    saving: "Even 0.5% saves ₹1L+ over tenure",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            All Loan Products
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Loans We Facilitate</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            Home loans, KSFE takeover + top-up, loan against property, and business loans — all sourced from 16+ banks and NBFCs across Kerala.
          </p>
          {/* Jump nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { label: "Home Loans", href: "#home-loans" },
              { label: "Takeover + Top-Up", href: "#takeover" },
              { label: "Loan Against Property", href: "#lap" },
              { label: "Business Loans", href: "#business" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border border-white/20 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full hover:border-[#F5A623] hover:text-[#F5A623] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Home Loans ─────────────────────────────── */}
      <section id="home-loans" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-[#F5A623] flex items-center justify-center text-2xl shrink-0">🏠</div>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 01</p>
              <h2 className="text-[#1a1a1a] text-3xl font-black">Home Loans</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {homeLoans.map((s) => (
              <div
                key={s.title}
                className="group relative bg-[#f8f8f8] rounded-2xl p-6 border border-gray-100 hover:border-[#F5A623] hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-black/[0.04] select-none leading-none">
                  {s.num}
                </span>

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shrink-0 group-hover:border-[#F5A623] transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <span className="text-[#F5A623] text-[10px] font-bold uppercase tracking-widest">{s.num}</span>
                    <h3 className="text-[#1a1a1a] font-black text-base leading-tight">{s.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10">{s.description}</p>

                <ul className="space-y-1.5 mb-5 relative z-10">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 text-[#d4891a] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/enquire"
                  className="relative z-10 inline-flex items-center gap-1.5 text-[#1a1a1a] text-xs font-black border-b-2 border-[#F5A623] pb-0.5 hover:text-[#d4891a] transition-colors"
                >
                  Enquire for this loan <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Takeover + Top-Up ──────────────────────── */}
      <section id="takeover" className="py-20 px-6 bg-[#1a1a1a] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5A623] flex items-center justify-center text-2xl shrink-0">🔄</div>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 02</p>
              <h2 className="text-white text-3xl font-black">Loan Takeover + Top-Up</h2>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mb-10 leading-relaxed">
            The most impactful service we offer in Kerala. A huge share of existing home loans sit with KSFE and cooperative societies at 9–12%. We transfer them to banks at 8.3–9% — often saving ₹2,000–₹5,000 per month with zero penalty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {takeoverDetails.map((t) => (
              <div key={t.source} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F5A623]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center text-xl mb-4">
                  {t.icon}
                </div>
                <p className="text-white font-black text-base mb-2">{t.source}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-block bg-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1.5 rounded-full border border-[#F5A623]/30">
                  {t.saving}
                </span>
              </div>
            ))}
          </div>

          {/* Top-Up explainer */}
          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-[#F5A623]/25 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623] flex items-center justify-center text-lg">🚀</div>
              <p className="text-[#F5A623] font-black text-lg">Top-Up Loan — Get Extra Funds at Home Loan Rates</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl">
              When we take over your existing loan, we can also disburse an additional top-up amount at the same home loan rate — far cheaper than a personal loan charging 13%–18%. Use it for renovation, education, medical expenses, or anything else.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Top-Up Rate", value: "8.5%–9.5% p.a.", highlight: true },
                { label: "Personal Loan Rate", value: "13%–18% p.a.", highlight: false },
                { label: "Max Tenure", value: "Up to 20 years", highlight: false },
              ].map((pt) => (
                <div key={pt.label} className={`rounded-xl p-4 border ${pt.highlight ? "bg-[#F5A623]/10 border-[#F5A623]/30" : "bg-white/5 border-white/10"}`}>
                  <p className="text-gray-400 text-xs mb-1">{pt.label}</p>
                  <p className={`text-sm font-black ${pt.highlight ? "text-[#F5A623]" : "text-white"}`}>{pt.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap mb-6">
              {["Min 12 EMIs paid", "CIBIL 700+", "10+ years remaining", "Clean repayment history"].map((req) => (
                <span key={req} className="text-xs bg-white/8 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">{req}</span>
              ))}
            </div>
            <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-8 py-3 rounded-xl font-black text-sm hover:bg-[#d4891a] transition-colors">
              Enquire for Takeover + Top-Up
            </Link>
          </div>
        </div>
      </section>

      {/* ── LAP ────────────────────────────────────── */}
      <section id="lap" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F5A623] flex items-center justify-center text-2xl shrink-0">🏦</div>
              <div>
                <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 03</p>
                <h2 className="text-[#1a1a1a] text-3xl font-black">Loan Against Property</h2>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your property is your most powerful asset. With a Loan Against Property (LAP), you can unlock its value for business expansion, education, medical emergencies, or any major expense — without selling it.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              LAP rates are much lower than personal loans, making it one of the smartest ways to access large funds quickly.
            </p>
            <ul className="space-y-2.5 mb-7">
              {[
                "Residential, commercial, or plot — all eligible",
                "Up to 65% of the property's current market value",
                "Tenures up to 15 years",
                "Available for salaried and self-employed",
                "Rates: 9%–11% (vs 13–18% for personal loans)",
                "SBI, HDFC, Axis, Bajaj Finserv, Tata Capital & more",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/15 text-[#d4891a] flex items-center justify-center text-[11px] font-black shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-8 py-3 rounded-xl font-black text-sm hover:bg-[#d4891a] transition-colors">
              Enquire for LAP
            </Link>
          </div>

          {/* Visual panel */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
            <p className="text-[#F5A623] font-bold text-xs uppercase tracking-widest mb-5">LAP vs Personal Loan</p>
            <div className="space-y-4">
              {[
                { label: "Interest Rate", lap: "9%–11%", pl: "13%–18%" },
                { label: "Max Tenure", lap: "15 years", pl: "5 years" },
                { label: "Max Amount", lap: "₹5 Crore+", pl: "₹25–50L" },
                { label: "Monthly EMI (₹30L/10yr)", lap: "~₹38,000", pl: "~₹54,000" },
                { label: "Collateral", lap: "Property pledged", pl: "None needed" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-3 text-xs border-b border-white/5 pb-3">
                  <span className="text-gray-400">{row.label}</span>
                  <span className="text-[#F5A623] font-bold">{row.lap}</span>
                  <span className="text-gray-500 line-through">{row.pl}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-[10px] mt-4">EMI figures indicative. LAP column uses Smart Way Solutions rates.</p>
          </div>
        </div>
      </section>

      {/* ── Business Loans ─────────────────────────── */}
      <section id="business" className="py-20 px-6 bg-[#f8f8f8] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5A623] flex items-center justify-center text-2xl shrink-0">💼</div>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 04</p>
              <h2 className="text-[#1a1a1a] text-3xl font-black">Business Loans</h2>
            </div>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mb-10 leading-relaxed">
            We facilitate business loans for all types — from small informal traders with no ITR to large formal enterprises. We know which lender accepts which profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Small / No ITR */}
            <div className="bg-white rounded-2xl p-7 border-2 border-[#F5A623] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F5A623] text-black text-[10px] font-black px-3 py-1 rounded-bl-xl">Most Common</div>
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center text-xl mb-4">🏪</div>
              <p className="text-[#F5A623] font-black text-xs uppercase tracking-widest mb-1">Small Business / Informal</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">No ITR / No GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Small traders, kirana shops, auto drivers, contractors, and micro-entrepreneurs who don&apos;t file ITR or aren&apos;t GST-registered. Standard banks decline these — we work with NBFCs and HFCs that use bank statement-based income assessment.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Income assessed from 12–24 months bank statements",
                  "Business vintage: minimum 2–3 years",
                  "NBFC and HFC lenders (not PSBs)",
                  "Loan amounts: ₹1L – ₹50L",
                  "Mudra loans (up to ₹10L) also facilitated",
                  "Rates: 12%–16% (expected for informal profile)",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 text-[#d4891a] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-6 py-2.5 rounded-xl font-black text-sm hover:bg-[#d4891a] transition-colors">
                Enquire Now
              </Link>
            </div>

            {/* Formal / ITR + GST */}
            <div className="bg-white rounded-2xl p-7 border-2 border-[#1a1a1a] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#1a1a1a] text-white text-[10px] font-black px-3 py-1 rounded-bl-xl">Best Rates</div>
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-xl mb-4">🏢</div>
              <p className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Formal Business</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">With ITR + GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Established businesses, proprietorships, partnerships, and private limited companies that file ITR and GST returns. Full documentation assessed by nationalised and private banks for the best rates.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "2–3 years ITR + CA-certified P&L + balance sheet",
                  "12 months GST returns (GSTR-3B) required",
                  "Loan amounts: ₹10L – ₹5 Crore",
                  "Working capital, term loan, and OD/CC facilities",
                  "Nationalised and private banks available",
                  "Rates: 9%–14% depending on profile",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-gray-100 text-[#1a1a1a] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#1a1a1a] text-white px-6 py-2.5 rounded-xl font-black text-sm hover:bg-gray-800 transition-colors">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BankPartners />
      <CTABanner />
    </>
  );
}
