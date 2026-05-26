import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CIBIL Score and Home Loans in Kerala — What You Need to Know | Smart Way Solutions",
  description: "Your CIBIL score determines your interest rate and whether you get approved at all. Here's what score you need and how to improve it fast.",
  alternates: { canonical: "https://www.smartwaysolutions.in/blog/cibil-score-home-loan" },
};

export default function CibilScoreHomeLoanPost() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-50 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">CIBIL & Credit</span>
            <span className="text-gray-400 text-xs">April 28, 2025</span>
            <span className="text-gray-500 text-xs">·</span>
            <span className="text-gray-400 text-xs">5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            CIBIL Score and Home Loans in Kerala — What You Need to Know
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Your CIBIL score is the single most important factor in your home loan application. It determines whether you get approved, what interest rate you pay, and how much loan you qualify for. Here's everything you need to know.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Score bands */}
          <div className="mb-10">
            <h2 className="text-[#1a1a1a] text-xl font-black mb-4">CIBIL Score Ranges and What They Mean for Home Loans</h2>
            <div className="space-y-3">
              {[
                { range: "750–900", label: "Excellent", color: "bg-green-50 border-green-200 text-green-800", meaning: "Best interest rates from all banks. Loan amount up to 90% LTV. Fast approvals. Negotiating power with lenders." },
                { range: "700–749", label: "Good", color: "bg-blue-50 border-blue-200 text-blue-700", meaning: "Approved by most banks but at slightly higher rates (0.1–0.3% more). Some banks may reduce the approved loan amount." },
                { range: "650–699", label: "Fair", color: "bg-amber-50 border-amber-200 text-amber-700", meaning: "Approved mainly by NBFCs and select private banks. Higher rates (0.5–1% above best rate). Lower loan-to-value ratio." },
                { range: "Below 650", label: "Poor", color: "bg-red-50 border-red-200 text-red-700", meaning: "Most banks and NBFCs will decline. Work on improving score before applying. Rushed applications leave hard enquiry marks that reduce score further." },
              ].map((band) => (
                <div key={band.range} className={`rounded-xl p-4 border ${band.color}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-black text-lg">{band.range}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/60">{band.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-80">{band.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">How CIBIL Score Affects Your Interest Rate</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-xl">CIBIL Score</th>
                  <th className="text-left px-4 py-3 font-bold">SBI Rate</th>
                  <th className="text-left px-4 py-3 font-bold">HDFC Rate</th>
                  <th className="text-left px-4 py-3 font-bold rounded-tr-xl">EMI Diff (₹40L/20yr)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["800+", "8.35%", "8.45%", "Lowest"],
                  ["750–800", "8.45%", "8.55%", "~₹270 more/month"],
                  ["700–750", "8.65%", "8.75%", "~₹540 more/month"],
                  ["650–700", "9.25%+ (NBFC)", "9.5%+ (NBFC)", "~₹1,400 more/month"],
                ].map(([score, sbi, hdfc, emi], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                    <td className="px-4 py-3 text-gray-700 font-bold">{score}</td>
                    <td className="px-4 py-3 text-gray-600">{sbi}</td>
                    <td className="px-4 py-3 text-gray-600">{hdfc}</td>
                    <td className="px-4 py-3 text-gray-500">{emi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-400 text-xs mt-2">Rates indicative. Actual rates vary with repo rate and bank-specific risk premiums.</p>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">What Hurts Your CIBIL Score?</h2>
          <div className="space-y-3 mb-6">
            {[
              { factor: "Late or missed payments", impact: "High impact", desc: "Even a single 30-day late payment can drop your score by 50–100 points. Payment history is the biggest factor (35% weightage)." },
              { factor: "High credit card utilisation", impact: "High impact", desc: "Using more than 30% of your total credit limit consistently signals financial stress. Keep utilisation below 30%, ideally below 10%." },
              { factor: "Multiple hard enquiries", impact: "Medium impact", desc: "Every time you apply for a loan or credit card, the lender does a hard enquiry. Multiple enquiries in a short window (3–6 months) reduce your score." },
              { factor: "Loan settlement (vs. full closure)", impact: "Very high impact", desc: "A 'Settled' status on a loan means you paid less than the full amount. This stays on your report for 7 years and is a major red flag for banks." },
              { factor: "No credit history", impact: "Moderate", desc: "A score of -1 or 0 means no history. Banks see this as unknown risk and may decline or offer higher rates." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[#1a1a1a] font-bold text-sm">{item.factor}</p>
                  <span className="text-xs font-bold text-red-600 shrink-0 ml-2">{item.impact}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">How to Improve Your CIBIL Score Fast</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                timeline: "Immediately",
                steps: [
                  "Get your free CIBIL report from cibil.com (one free per year)",
                  "Check for errors — wrong account numbers, incorrect payments marked late",
                  "Dispute errors online with CIBIL — can be resolved in 30–45 days",
                ],
              },
              {
                timeline: "Within 1–3 months",
                steps: [
                  "Pay all outstanding EMIs and credit card bills on time, every month",
                  "Pay off any credit card dues to bring utilisation below 30%",
                  "Do not apply for any new credit (no new credit cards, no new loans)",
                ],
              },
              {
                timeline: "3–6 months",
                steps: [
                  "Maintain zero defaults for 6 consecutive months",
                  "Consider a secured credit card (FD-backed) if you have no credit history",
                  "Avoid closing old credit cards — the age of credit improves score",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-[#F5A623] px-5 py-2.5">
                  <p className="text-black font-black text-xs">{block.timeline}</p>
                </div>
                <div className="bg-[#f8f8f8] px-5 py-4 space-y-2">
                  {block.steps.map((step, j) => (
                    <div key={j} className="flex gap-2">
                      <span className="text-[#F5A623] shrink-0 text-xs mt-0.5">→</span>
                      <p className="text-gray-600 text-xs leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">What If Your Score Is Below 650?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A score below 650 doesn't mean your home ownership dream is permanently blocked — it means timing matters. Here's the realistic path:
          </p>
          <div className="space-y-3 mb-8">
            {[
              "Clear all existing overdue amounts and defaults immediately",
              "Maintain consistent on-time payments for at least 6–12 months",
              "Reduce credit card balances to below 30% utilisation",
              "In 12–18 months of clean repayment, most people can get from 600 to 700+",
              "Once at 700+, you can apply at banks. At 750+, you get the best rates.",
            ].map((step, i) => (
              <div key={i} className="flex gap-3 bg-[#f8f8f8] rounded-xl px-4 py-3">
                <span className="text-[#F5A623] font-black shrink-0 text-sm">{i + 1}.</span>
                <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Adding a Co-Applicant with a Good Score</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            If your own CIBIL is weak, adding a co-applicant (spouse, parent) with a strong score (750+) can change the picture significantly. The bank will consider the better of the two profiles. This is one of the most common strategies Smart Way Solutions uses for applicants in the 650–700 score range.
          </p>

          <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white">
            <p className="text-[#F5A623] font-black text-lg mb-2">Not Sure About Your CIBIL Score?</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Smart Way Solutions checks your CIBIL score as part of our free eligibility assessment. We'll tell you your current score, whether you're ready to apply, and exactly what to do if you need to improve it. No application, no hard enquiry.
            </p>
            <Link
              href="/enquire"
              className="inline-block bg-[#F5A623] text-black px-8 py-3 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm"
            >
              Check My Eligibility — Free
            </Link>
          </div>
        </div>
      </section>

      <div className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-[#F5A623] font-bold text-sm hover:text-[#d4891a] transition-colors">
            ← Back to all guides
          </Link>
        </div>
      </div>
    </article>
  );
}
