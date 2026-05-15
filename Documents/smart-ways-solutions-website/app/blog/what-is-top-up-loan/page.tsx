import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Top-Up Loan and Should You Take One? | Smart Way Solutions",
  description: "A top-up loan lets you borrow extra funds on top of a balance transfer at home loan rates — far cheaper than a personal loan. Here's when it makes sense.",
  alternates: { canonical: "https://www.smartwaysolutions.in/blog/what-is-top-up-loan" },
};

export default function TopUpLoanPost() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">Takeover & Top-Up</span>
            <span className="text-gray-400 text-xs">May 2, 2025</span>
            <span className="text-gray-500 text-xs">·</span>
            <span className="text-gray-400 text-xs">4 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            What Is a Top-Up Loan and Should You Take One?
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            When you transfer a home loan to a new bank, you can also borrow additional funds on top of your balance transfer — at the same low home loan rate, not at personal loan rates of 14%–18%. Here's exactly how it works and when it makes sense.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-10">
            <p className="text-purple-800 font-bold text-sm mb-1">Key Insight</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              Top-up loans are disbursed at home loan interest rates (8.5%–10%) vs. personal loan rates (13%–18%). On ₹5 lakh over 5 years, that's a saving of ₹1–1.5 lakh in interest. There is no restriction on how you use the top-up amount.
            </p>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">What Exactly Is a Top-Up Loan?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A top-up loan is an additional loan amount disbursed by a bank over and above the balance transfer of your existing home loan. It works like this:
          </p>
          <div className="bg-[#f8f8f8] rounded-2xl p-6 mb-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Your outstanding home loan</span>
                <span className="text-[#1a1a1a] font-bold">₹35,00,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Bank takeover (pays off existing loan)</span>
                <span className="text-[#1a1a1a] font-bold">₹35,00,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Top-up amount (extra funds to you)</span>
                <span className="text-[#F5A623] font-bold">+ ₹8,00,000</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#1a1a1a] font-bold">Total new loan</span>
                <span className="text-[#1a1a1a] font-bold">₹43,00,000</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-3">All at the same home loan interest rate — no separate personal loan needed.</p>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Top-Up vs Personal Loan — The Real Cost Difference</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Feature</th>
                  <th className="text-left px-4 py-3 font-bold">Top-Up Loan</th>
                  <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Personal Loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Interest Rate", "8.5%–10%", "13%–18%"],
                  ["Tenure", "Up to 20 years", "1–5 years"],
                  ["EMI on ₹5L / 5yr", "~₹10,200", "~₹11,500–₹12,700"],
                  ["Total interest on ₹5L / 5yr", "~₹1.12L", "~₹1.9L–₹2.6L"],
                  ["Collateral required", "Existing property (already pledged)", "None"],
                  ["Documentation", "Simple — part of existing loan", "Separate application required"],
                  ["Usage restriction", "None (renovation, education, any purpose)", "None"],
                ].map(([feature, topup, personal], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                    <td className="px-4 py-3 text-gray-700 font-medium">{feature}</td>
                    <td className="px-4 py-3 text-green-700 font-medium">{topup}</td>
                    <td className="px-4 py-3 text-red-500">{personal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">When Does a Top-Up Make Sense?</h2>
          <div className="space-y-3 mb-6">
            {[
              { check: "✅", text: "You're already transferring your loan — the additional documentation is minimal" },
              { check: "✅", text: "You need funds for home renovation, an extension, or interior work on the same property" },
              { check: "✅", text: "You need funds for education, medical expenses, or business investment" },
              { check: "✅", text: "Your property has appreciated and the combined loan is still within LTV limits (typically 80% of property value)" },
              { check: "❌", text: "Don't take a top-up just because it's available — only if you have a clear use for the funds" },
              { check: "❌", text: "Don't take a top-up that extends your overall loan tenure significantly without comparing the total interest cost" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-[#f8f8f8] rounded-xl px-4 py-3">
                <span className="text-base shrink-0">{item.check}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">How Much Top-Up Can You Get?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The top-up amount depends on two factors:
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#1a1a1a] font-bold text-sm mb-1">1. Property Value (LTV Rule)</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                RBI guidelines cap total home loans at 75–90% of property value (LTV). If your property is worth ₹60 lakh and the balance transfer is ₹35 lakh, you can top up to approximately ₹45 lakh (75% LTV) — meaning ₹10 lakh top-up room.
              </p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#1a1a1a] font-bold text-sm mb-1">2. Income Eligibility (FOIR Rule)</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Your combined EMI (transfer + top-up) cannot exceed 40–50% of your monthly income. The bank calculates this based on your net monthly salary or verified business income.
              </p>
            </div>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Top-Up on KSFE and Society Loan Takeovers</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            One of the most powerful uses of a top-up is when transferring from KSFE or a cooperative society. These loans are often at 9.5%–11%, and the outstanding balance is typically well within LTV limits of the current property value.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            This means you can simultaneously: (1) reduce your interest rate, (2) lower your EMI, AND (3) get additional funds for renovation or other purposes — all in a single transaction. Smart Way Solutions has structured hundreds of such combined takeover + top-up deals across Kerala.
          </p>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Tax Benefits on Top-Up Loans</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Top-up loans used for home construction or renovation can qualify for tax deductions under Section 24(b) — up to ₹2 lakh per year on interest paid. For amounts used for other purposes (education, business), no tax benefit applies. Maintain a clear paper trail of how the funds were used to claim deductions.
          </p>

          <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white">
            <p className="text-[#F5A623] font-black text-lg mb-2">Calculate Your Top-Up Eligibility</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Tell us your current loan details, property value, and income — we'll tell you exactly how much top-up you can get, at what rate, and whether a transfer + top-up makes financial sense for your situation.
            </p>
            <Link
              href="/enquire"
              className="inline-block bg-[#F5A623] text-black px-8 py-3 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm"
            >
              Get a Free Assessment
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
