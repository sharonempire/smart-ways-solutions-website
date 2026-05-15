import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRI Home Loan Guide for Gulf Workers — Kerala 2025 | Smart Way Solutions",
  description: "Everything a Kerala NRI in UAE, Saudi, Qatar, or Kuwait needs to know about getting a home loan in India — eligibility, documents, PoA, and repayment.",
  alternates: { canonical: "https://www.smartwaysolutions.in/blog/nri-home-loan-guide" },
};

export default function NriHomeLoanGuidePost() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">NRI Loans</span>
            <span className="text-gray-400 text-xs">May 5, 2025</span>
            <span className="text-gray-500 text-xs">·</span>
            <span className="text-gray-400 text-xs">6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            NRI Home Loan Guide for Gulf Workers — Kerala 2025
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            If you're a Keralite working in the UAE, Saudi Arabia, Qatar, or Kuwait and want to build or buy a home back home, this guide covers everything — eligibility, documents, Power of Attorney, and repayment.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10">
            <p className="text-green-800 font-bold text-sm mb-1">Quick Overview</p>
            <p className="text-green-700 text-sm leading-relaxed">
              NRIs can get home loans in India from most major banks. Repayment must be through NRE or NRO accounts. Most banks process NRI loans remotely — you don't need to be physically present in Kerala to get the loan sanctioned.
            </p>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Who Qualifies as an NRI for a Home Loan?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Under FEMA (Foreign Exchange Management Act), an NRI is an Indian citizen who resides outside India for employment, business, or any other purpose indicating an indefinite stay abroad. This includes:
          </p>
          <div className="space-y-2 mb-6">
            {[
              "Salaried employees working in Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain)",
              "Indian professionals in the US, UK, Canada, Australia, Singapore, and other countries",
              "Self-employed NRIs with a business registered outside India",
              "Indian sailors on international vessels",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-[#f8f8f8] rounded-xl px-4 py-3">
                <span className="text-[#F5A623] font-black shrink-0">✓</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Can Both Salaried and Self-Employed NRIs Apply?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Yes. <strong>Both salaried and self-employed NRIs are eligible for home loans in India.</strong> This is a common misconception — many agents say only salaried NRIs can apply. In reality:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#1a1a1a] font-bold text-sm mb-2">Salaried NRI</p>
              <ul className="text-gray-500 text-xs space-y-1 leading-relaxed">
                <li>• Employment contract required</li>
                <li>• Last 3–6 months salary slips</li>
                <li>• Last 6–12 months bank statement (overseas)</li>
                <li>• NRE/NRO account statement (India)</li>
                <li>• Maximum loan typically up to ₹5 Cr</li>
              </ul>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#1a1a1a] font-bold text-sm mb-2">Self-Employed NRI</p>
              <ul className="text-gray-500 text-xs space-y-1 leading-relaxed">
                <li>• Business registration / trade licence (overseas)</li>
                <li>• 2–3 years audited financials</li>
                <li>• 12–24 months overseas bank statements</li>
                <li>• NRE/NRO account statement (India)</li>
                <li>• Slightly higher scrutiny; Federal Bank, SBI best</li>
              </ul>
            </div>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Understanding Power of Attorney (PoA)</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A Power of Attorney (PoA) is a legal document that authorises a trusted person in India (usually a parent, spouse, or close relative) to sign documents and complete property transactions on your behalf while you remain abroad.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                title: "When is PoA required?",
                desc: "If you cannot travel to India to sign property sale documents, mortgage deeds, and loan agreements, you need a PoA. Most NRI borrowers use a PoA for the property purchase and loan execution.",
              },
              {
                title: "How to create a valid PoA from abroad",
                desc: "Draft the PoA document in India (an advocate or our team can prepare this). Get it attested by the Indian Embassy or Consulate in your country. Ship the original to your representative in India. They will then get it registered at the Sub-Registrar's Office in Kerala.",
              },
              {
                title: "Who should be your PoA holder?",
                desc: "Typically a parent, spouse, or sibling in Kerala. The bank will verify the PoA holder's ID and the document's registration. Some banks require the PoA to be a blood relative.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
                <p className="text-[#1a1a1a] font-bold text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Complete Document Checklist for NRI Home Loan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              ["Identity", "Passport (all pages) + Aadhaar + PAN"],
              ["Visa Status", "Current visa / residence permit"],
              ["Work Proof", "Employment contract or work permit"],
              ["Income", "Last 6 months salary slips + last 3 months payslips"],
              ["Bank (Abroad)", "12 months overseas bank statement"],
              ["Bank (India)", "12 months NRE or NRO account statement"],
              ["Property", "Title deed, EC, tax receipt, approved plan"],
              ["PoA", "Registered PoA document (if not present in India)"],
              ["Photographs", "Latest passport-size (2–4 copies)"],
              ["Address Proof", "Overseas address proof (utility bill)"],
            ].map(([label, detail], i) => (
              <div key={i} className="flex gap-3 bg-[#f8f8f8] rounded-xl px-4 py-3">
                <span className="text-[#F5A623] shrink-0 text-xs font-bold mt-0.5">{label}</span>
                <p className="text-gray-600 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Repayment Rules for NRI Home Loans</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Under RBI / FEMA rules, NRI home loan EMIs must be paid from:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { type: "NRE Account (Non-Resident External)", note: "Funds remitted from abroad — tax-free in India, freely repatriable" },
              { type: "NRO Account (Non-Resident Ordinary)", note: "Indian rupee income (rent, dividends) — repatriation is limited" },
              { type: "FCNR Account (Foreign Currency NR)", note: "Foreign currency deposits — can be used for repayment if converted" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f8f8] rounded-xl p-4 border border-gray-100">
                <p className="text-[#1a1a1a] font-bold text-xs mb-0.5">{item.type}</p>
                <p className="text-gray-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            You cannot pay EMIs from a resident savings account, and you cannot use foreign currency cash directly. Set up an auto-debit from your NRE account for hassle-free repayment from abroad.
          </p>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Best Banks for NRI Home Loans in Kerala</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Bank</th>
                  <th className="text-left px-4 py-3 font-bold">Rate</th>
                  <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Why NRIs Prefer It</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Federal Bank", "8.5%+", "Strong Gulf NRI desk, fastest processing in Kerala, Malayalam-speaking staff"],
                  ["SBI", "8.5%+", "Widest branch network, SBI Global NRI Services, lowest rates for self-employed"],
                  ["ICICI Bank", "8.7%+", "Online application process, strong UAE presence, ICICI NRI desk"],
                  ["South Indian Bank", "8.6%+", "Excellent for Gulf workers, local presence in all Kerala districts"],
                  ["Axis Bank", "8.75%+", "Good for large-value NRI loans above ₹1 Cr"],
                ].map(([bank, rate, why], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                    <td className="px-4 py-3 text-gray-700 font-medium">{bank}</td>
                    <td className="px-4 py-3 text-gray-600">{rate}</td>
                    <td className="px-4 py-3 text-gray-500">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[#1a1a1a] text-xl font-black mb-3">Typical NRI Loan Processing Timeline</h2>
          <div className="space-y-3 mb-8">
            {[
              { day: "Day 1–3", event: "Submit documents, PoA verified" },
              { day: "Day 4–8", event: "Bank conducts legal and technical report" },
              { day: "Day 9–14", event: "Credit team reviews income and CIBIL" },
              { day: "Day 15–20", event: "Sanction letter issued" },
              { day: "Day 21–25", event: "Loan agreement signed (via PoA holder), disbursement done" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="bg-[#F5A623] text-black text-xs font-black px-3 py-1.5 rounded-lg shrink-0 w-20 text-center">{item.day}</div>
                <p className="text-gray-600 text-sm">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white">
            <p className="text-[#F5A623] font-black text-lg mb-2">We Handle Everything Locally for You</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Smart Way Solutions specialises in NRI home loans across Kozhikode, Malappuram, Thrissur, Ernakulam, and Kannur. We coordinate with your family in Kerala, handle the PoA setup, and get your loan sanctioned — while you stay focused on your work abroad.
            </p>
            <Link
              href="/enquire"
              className="inline-block bg-[#F5A623] text-black px-8 py-3 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm"
            >
              Start My NRI Loan Application
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
