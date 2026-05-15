import CTABanner from "@/components/CTABanner";
import BankPartners from "@/components/BankPartners";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Services | Smart Way Solutions Kerala",
  description: "Home loans, takeover + top-up loans, loan against property, and business loans in Kerala — facilitated by Smart Way Solutions across 16+ banks and NBFCs.",
};

const homeLoans = [
  {
    icon: "🏡",
    title: "Plot Purchase Loan",
    description: "Finance the purchase of a residential plot. We source loans from nationalised and private banks with LTV up to 75% of the plot value and tenures up to 15 years.",
    features: ["Up to 75% of plot value", "Tenures up to 15 years", "Available from SBI, BoB, ICICI, HDFC & more", "Quick title deed verification support"],
  },
  {
    icon: "🏗️",
    title: "Plot Purchase + Construction Loan",
    description: "Buy the plot and build your home under a single composite loan. Funds are released in stages — first for land, then per construction milestone — so interest accrues only on disbursed amount.",
    features: ["Single loan for land + construction", "Stage-wise disbursement", "Interest only on disbursed amount during build", "Tenures up to 30 years"],
  },
  {
    icon: "🏠",
    title: "Home Purchase Loan",
    description: "Buy a ready-to-move home or apartment. We compare live rates across 16+ lenders and present the lowest available offer for your income and credit profile.",
    features: ["Up to 90% LTV for loans up to ₹30L", "Up to 80% LTV for ₹30L–₹75L", "Salaried, self-employed, and NRI eligible", "PMAY subsidy guidance if applicable"],
  },
  {
    icon: "🏢",
    title: "Under Construction Loan",
    description: "Buying a flat or home still being built? Disbursements are linked to builder progress so you only pay interest on what has been released — keeping costs low during construction.",
    features: ["Disbursement linked to builder progress", "Pre-EMI or full EMI options", "Builder approval tie-ups available", "All major banks covered"],
  },
  {
    icon: "🔨",
    title: "Home Renovation & Extension Loan",
    description: "Add a floor, renovate your kitchen, repair the roof, or extend your living space. Renovation loans are available up to ₹50 Lakhs with faster processing and minimal documentation.",
    features: ["Up to ₹50 Lakhs", "No mortgage needed for smaller amounts", "Faster processing than full home loans", "Tenures up to 15 years"],
  },
  {
    icon: "🔄",
    title: "Home Loan Refinance / Balance Transfer",
    description: "Already have a home loan at a high rate? Transfer it to a lender offering lower rates. We negotiate the best available rate on your behalf and handle the entire transfer process.",
    features: ["Lower EMI from day one", "Top-up loan available on transfer", "Minimal documentation for switching", "Suitable after 12 EMIs paid with current lender"],
  },
];

const takeoverDetails = [
  {
    source: "From KSFE",
    desc: "KSFE home loans often run at 9%–9.75%. We transfer them to banks offering 8.3%–9%, saving you thousands monthly. KSFE has no premature closure charges — making the switch cost-free.",
    saving: "Save ₹2,000–₹5,000/month on EMI",
  },
  {
    source: "From Cooperative Societies",
    desc: "Primary Agricultural Credit Societies (PACS) and other co-operative societies in Kerala charge 9%–12% on housing loans. We transfer these to nationalised or private banks at lower rates.",
    saving: "Rates typically drop by 1–3%",
  },
  {
    source: "Bank-to-Bank Transfer",
    desc: "If your current bank raised rates or another bank is offering a significantly better deal, we facilitate the transfer seamlessly — including negotiating a reduced rate with the new lender.",
    saving: "Even 0.5% reduction saves ₹1L+ over tenure",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          All Loan Products
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Loans We Facilitate</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base">
          Home loans, takeover + top-up, loan against property, and business loans — all sourced from 16+ banks and NBFCs across Kerala.
        </p>
      </section>

      {/* Home Loans */}
      <section id="home-loans" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-3xl">🏠</span>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 1</p>
              <h2 className="text-[#1a1a1a] text-3xl font-black">Home Loans</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeLoans.map((s) => (
              <div key={s.title} className="bg-[#f8f8f8] rounded-xl p-6 border border-gray-100 hover:border-[#F5A623] transition-colors">
                <p className="text-2xl mb-3">{s.icon}</p>
                <h3 className="text-[#1a1a1a] font-black text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="text-[#F5A623] font-black">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/enquire" className="text-[#F5A623] text-xs font-bold hover:underline">Enquire for this loan →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeover + Top-Up */}
      <section id="takeover" className="py-20 px-6 bg-[#1a1a1a] scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔄</span>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 2</p>
              <h2 className="text-white text-3xl font-black">Loan Takeover + Top-Up</h2>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mb-10">
            One of the most valuable services we provide in Kerala. A huge share of existing home loans sit with KSFE and cooperative societies at 9–12% rates. We transfer them to banks at 8.3–9%, often saving borrowers ₹2,000–₹5,000 per month.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {takeoverDetails.map((t) => (
              <div key={t.source} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-[#F5A623] font-black text-base mb-2">{t.source}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{t.desc}</p>
                <span className="inline-block bg-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full">{t.saving}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-[#F5A623]/30 rounded-2xl p-8">
            <p className="text-[#F5A623] font-black text-lg mb-3">🚀 Top-Up Loan — What It Is</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              When we take over your existing loan, we can also arrange an additional amount (Top-Up) over the outstanding balance — disbursed at the same home loan rate. This is far cheaper than a personal loan and can be used for any purpose: home renovation, education, medical expenses, or business needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Interest Rate", value: "Same as home loan (8.5%–9.5%)" },
                { label: "vs. Personal Loan", value: "Personal loans charge 11%–16%" },
                { label: "Tenure", value: "Up to 20 years — lower EMI" },
              ].map((pt) => (
                <div key={pt.label} className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-1">{pt.label}</p>
                  <p className="text-white text-sm font-bold">{pt.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-4 flex-wrap">
              {["Min 12 EMIs paid", "CIBIL 700+", "10+ years remaining", "Clean repayment history"].map((req) => (
                <span key={req} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{req}</span>
              ))}
            </div>
            <Link href="/enquire" className="inline-block mt-6 bg-[#F5A623] text-black px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
              Enquire for Takeover + Top-Up
            </Link>
          </div>
        </div>
      </section>

      {/* LAP */}
      <section id="lap" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏦</span>
              <div>
                <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 3</p>
                <h2 className="text-[#1a1a1a] text-3xl font-black">Loan Against Property</h2>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Your property is your most powerful asset. With a Loan Against Property (LAP), you can unlock its value for business expansion, education, medical emergencies, or any major expense — without selling it.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              LAP is available at near-home-loan interest rates (much lower than personal loans), making it one of the smartest ways to access large funds.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Residential, commercial, or plot — all eligible",
                "Up to 65% of the property's current market value",
                "Tenures up to 15 years",
                "Available for salaried and self-employed",
                "Interest rates: 9%–11% (far lower than personal loans)",
                "Lenders: SBI, HDFC, Axis, Bajaj Finserv, Tata Capital & more",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#F5A623] font-black">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-7 py-3 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
              Enquire for LAP
            </Link>
          </div>
          <div className="bg-[#f8f8f8] rounded-2xl p-10 flex items-center justify-center border border-gray-100">
            <p className="text-9xl">🏦</p>
          </div>
        </div>
      </section>

      {/* Business Loans */}
      <section id="business" className="py-20 px-6 bg-[#f8f8f8] scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💼</span>
            <div>
              <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">Category 4</p>
              <h2 className="text-[#1a1a1a] text-3xl font-black">Business Loans</h2>
            </div>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mb-10">
            We facilitate business loans for all types of businesses — from small informal traders to large formal enterprises. We know which lender accepts which profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Small Business */}
            <div className="bg-white rounded-2xl p-7 border-2 border-amber-200">
              <p className="text-[#F5A623] font-black text-xs uppercase tracking-widest mb-2">Small Business / Informal</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">No ITR / No GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Small traders, kirana shops, auto drivers, contractors, and micro-entrepreneurs who don&apos;t file ITR or aren&apos;t GST-registered. Standard banks decline these — we work with NBFCs and HFCs that use bank statement-based income assessment.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Income assessed from 12–24 months bank statements",
                  "Business vintage: minimum 2–3 years",
                  "NBFC and HFC lenders used (not PSBs)",
                  "Loan amounts: ₹1L–₹50L",
                  "Mudra loans (up to ₹10L) also facilitated",
                  "Higher rates: 12%–16% (expected for informal profile)",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-[#F5A623] font-black">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
                Enquire Now
              </Link>
            </div>

            {/* Formal Business */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200">
              <p className="text-gray-500 font-black text-xs uppercase tracking-widest mb-2">Formal Business</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">With ITR + GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Established businesses, proprietorships, partnerships, and private limited companies that file ITR and GST returns. Full documentation is assessed by nationalised and private banks for the best rates.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "2–3 years ITR + CA-certified P&L and balance sheet",
                  "12 months GST returns (GSTR-3B) required",
                  "Loan amounts: ₹10L–₹5 Crore",
                  "Working capital, term loan, and OD/CC facilities",
                  "Nationalised and private banks available",
                  "Rates: 9%–14% depending on profile",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-[#F5A623] font-black">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors">
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
