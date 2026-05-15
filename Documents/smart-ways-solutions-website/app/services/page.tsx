import CTABanner from "@/components/CTABanner";
import BankPartners from "@/components/BankPartners";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Services | Smart Ways Solutions",
  description: "Home loans, plot loans, renovation loans, and loan against property — Smart Ways Solutions facilitates loans from 16+ banks across Kerala.",
};

const homeLoans = [
  {
    icon: "🏡",
    title: "Plot Purchase Loan",
    description:
      "Planning to buy a residential plot? We arrange plot purchase loans from nationalised and private banks with competitive interest rates and flexible tenures up to 15 years.",
    features: [
      "Up to 75% of plot value financed",
      "Tenures up to 15 years",
      "Available from SBI, Bank of Baroda, ICICI, HDFC & more",
      "Quick processing with our bank tie-ups",
    ],
  },
  {
    icon: "🏗️",
    title: "Plot Purchase + Construction Loan",
    description:
      "Buy the plot and build your home under a single composite loan. Funds are released in stages — first for the land, then for each phase of construction.",
    features: [
      "Single loan for land + construction",
      "Stage-wise disbursement",
      "Interest only on disbursed amount during construction",
      "Tenures up to 30 years",
    ],
  },
  {
    icon: "🏠",
    title: "Home Purchase Loan",
    description:
      "Buying a ready-to-move home or apartment? We compare offers from 16+ lenders and get you the lowest rate with the fastest approval — whether it is resale or new construction.",
    features: [
      "Up to 90% of property value financed",
      "Tenures up to 30 years",
      "Salaried and self-employed eligible",
      "PMAY subsidy assistance if applicable",
    ],
  },
  {
    icon: "🏢",
    title: "Under Construction Loan",
    description:
      "Buying a flat or house that is still under construction? Disbursements are linked to construction milestones so you pay interest only on what has been released.",
    features: [
      "Disbursement linked to builder progress",
      "Pre-EMI or full EMI options",
      "Builder tie-up approvals available",
      "Available from all major banks",
    ],
  },
  {
    icon: "🔨",
    title: "Home Renovation & Extension Loan",
    description:
      "Need to renovate your kitchen, add a floor, or repair your roof? Our renovation loans give you the funds quickly with minimal documentation.",
    features: [
      "Up to ₹50 Lakhs for renovation",
      "No mortgage required for smaller amounts",
      "Faster processing than full home loans",
      "Tenures up to 15 years",
    ],
  },
  {
    icon: "🔄",
    title: "Home Loan Refinance / Balance Transfer",
    description:
      "If you are paying a high interest rate on your existing home loan, we can transfer it to a lender offering a lower rate — saving you thousands every month.",
    features: [
      "Reduce your EMI immediately",
      "Top-up loan option available",
      "Minimal documentation for transfer",
      "We negotiate the best rate on your behalf",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Loan Products</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loans & Property Loans</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          From buying a plot to refinancing an existing loan — we handle every type of home and property loan, sourced from the best banks and NBFCs in India.
        </p>
      </section>

      {/* Home Loans */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Home Loans</p>
            <h2 className="text-[#0a1f44] text-3xl font-bold">All Types of Home Loans</h2>
          </div>
          <div className="space-y-16">
            {homeLoans.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <p className="text-3xl mb-3">{s.icon}</p>
                  <h2 className="text-[#0a1f44] text-2xl font-bold mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-[#c9a84c] font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/enquire"
                    className="bg-[#c9a84c] text-[#0a1f44] px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#e2c97e] transition-colors inline-block"
                  >
                    Enquire for This Loan
                  </Link>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-10 border border-gray-100 flex items-center justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <p className="text-9xl">{s.icon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAP */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Property Loans</p>
            <h2 className="text-[#0a1f44] text-3xl font-bold mb-4">Loan Against Property (LAP)</h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">
              Your property is your most valuable asset. With LAP, you can unlock its value to fund business expansion, education, medical needs, or any major expense — while retaining ownership of the property.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Residential, commercial, or industrial property eligible",
                "Up to 65% of property market value",
                "Tenures up to 15 years",
                "Lower interest rates than personal loans",
                "Available for salaried and self-employed individuals",
                "Sourced from SBI, HDFC, Axis, Bajaj Finserv & more",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/enquire"
              className="bg-[#0a1f44] text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#102a5e] transition-colors inline-block"
            >
              Enquire for LAP
            </Link>
          </div>
          <div className="bg-[#0a1f44] rounded-2xl p-10 flex items-center justify-center">
            <p className="text-9xl">🏦</p>
          </div>
        </div>
      </section>

      <BankPartners />
      <CTABanner />
    </>
  );
}
