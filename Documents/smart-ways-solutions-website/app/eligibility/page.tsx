import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Eligibility | Smart Way Solutions Kerala",
  description: "Check home loan and property loan eligibility — salaried, self-employed (small and large business), and NRI categories explained.",
};

export default function EligibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Who Can Apply
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Loan Eligibility</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base">
          All three borrower categories can apply for home loans and property loans. Find out what applies to you.
        </p>
      </section>

      {/* Category 1: Salaried */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Category 1
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black mb-2">👔 Salaried Employees</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Government and private sector employees with a regular monthly salary. This category typically gets the best interest rates and highest LTV ratios from banks.
            </p>
            <h3 className="text-[#1a1a1a] font-bold text-sm mb-3">Basic Eligibility</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Age: 21–70 years (at loan maturity)",
                "Minimum 6 months in current organisation",
                "Total work experience: 2+ years",
                "Minimum monthly income: ₹25,000+",
                "CIBIL score: 700 minimum (750+ for best rates)",
                "FOIR (loan EMIs as % of income): max 40–50%",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#F5A623] font-black">✓</span> {f}
                </li>
              ))}
            </ul>
            <h3 className="text-[#1a1a1a] font-bold text-sm mb-3">Documents Needed</h3>
            <div className="bg-[#f8f8f8] rounded-xl p-4 space-y-2">
              {[
                ["Identity & Address", "Aadhaar, PAN, Passport, Voter ID"],
                ["Income Proof", "Last 3 months salary slips, Form 16 (2 years)"],
                ["Bank Statements", "Last 6 months (salary account)"],
                ["Employment Proof", "Appointment letter, employer ID"],
                ["ITR", "Last 2 years income tax returns"],
                ["Property Docs", "Sale agreement, title deed, approved plan, EC"],
              ].map(([cat, docs]) => (
                <div key={cat} className="flex gap-3 text-xs">
                  <span className="text-[#1a1a1a] font-bold w-32 shrink-0">{cat}</span>
                  <span className="text-gray-500">{docs}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1a1a] text-white rounded-2xl p-7">
            <p className="text-[#F5A623] font-bold text-sm mb-4">LTV Ratios (RBI Guidelines)</p>
            <div className="space-y-3 mb-6">
              {[
                { range: "Up to ₹30 Lakhs", ltv: "Up to 90% LTV" },
                { range: "₹30L – ₹75 Lakhs", ltv: "Up to 80% LTV" },
                { range: "Above ₹75 Lakhs", ltv: "Up to 75% LTV" },
              ].map((row) => (
                <div key={row.range} className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                  <span className="text-gray-300">{row.range}</span>
                  <span className="text-[#F5A623] font-bold">{row.ltv}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mb-4">
              Example: For a ₹50L home, a salaried borrower can get up to ₹40L loan (80% LTV). Down payment required: ₹10L.
            </p>
            <Link href="/enquire" className="block text-center bg-[#F5A623] text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
              Apply as Salaried →
            </Link>
          </div>
        </div>
      </section>

      {/* Category 2: Self-Employed */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Category 2
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black mb-2">🏪 Self-Employed / Business Owners</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Both small informal businesses and large formal businesses can get loans. The lender we approach depends on whether you have ITR and GST filed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Small / No ITR */}
            <div className="bg-white rounded-2xl p-7 border-2 border-amber-200">
              <p className="text-amber-700 font-bold text-xs uppercase tracking-widest mb-2">Small Business</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">Without ITR / Without GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Micro and small business owners who earn below the ITR threshold or aren&apos;t required to register for GST (turnover below ₹20–40L). Banks often reject these profiles outright — but NBFCs and Housing Finance Companies evaluate them differently.
              </p>
              <p className="text-[#1a1a1a] font-bold text-sm mb-2">How We Get You Approved</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Income assessed via 12–24 months bank statements",
                  "Business proof: trade license, Udyam registration, lease agreement",
                  "Business vintage required: 2–3 years minimum",
                  "NBFC lenders used (ICICI HFC, PNB HFL, Bajaj Finserv, etc.)",
                  "Home Loan LTV: 50%–70% of property value",
                  "Business loan amounts: ₹1L–₹50L",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-[#F5A623] font-black shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#F5A623] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
                Apply Without ITR →
              </Link>
            </div>

            {/* Large / With ITR */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200">
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">Large / Formal Business</p>
              <h3 className="text-[#1a1a1a] font-black text-xl mb-3">With ITR + GST</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Established traders, professionals (doctors, CAs, architects), proprietorships, partnerships, and private limited companies who file ITR and GST returns regularly. This profile qualifies for the best rates and highest loan amounts.
              </p>
              <p className="text-[#1a1a1a] font-bold text-sm mb-2">Documents Required</p>
              <ul className="space-y-2 mb-4">
                {[
                  "2–3 years ITR with computation sheets",
                  "CA-certified P&L and balance sheet (2–3 years)",
                  "12 months GSTR-3B returns",
                  "6–12 months business bank statements",
                  "Business registration + GST certificate",
                  "PAN, Aadhaar, address proof",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-[#F5A623] font-black shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/enquire" className="inline-block bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors">
                Apply With ITR →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3: NRI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Category 3
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black mb-2">✈️ NRI (Non-Resident Indians)</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Kerala has one of India&apos;s highest NRI populations — particularly Gulf workers in UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. We have extensive experience facilitating NRI home loans with full local support including Power of Attorney assistance.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              <strong>Eligibility:</strong> NRIs can apply on the basis of <strong>both salary income and business/self-employment income</strong> from abroad. Repayment must be through an NRE or NRO account in India.
            </p>
            <h3 className="text-[#1a1a1a] font-bold text-sm mb-3">NRI-Specific Conditions</h3>
            <ul className="space-y-2 mb-5">
              {[
                "Must have stayed abroad for at least 6 months–1 year (bank-specific)",
                "Minimum 3 years total work experience (6 months+ abroad)",
                "Age: 23–60 years (at loan maturity: up to 70)",
                "Loan repayment only via NRE or NRO account in India",
                "Loan amount in INR only (no foreign currency loans)",
                "Property must be in India (cannot be agricultural land/farmhouse)",
                "Power of Attorney required — we help you set this up",
                "Tax benefits: Section 80C + Section 24(b) available",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#F5A623] font-black shrink-0">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-[#1a1a1a] text-white rounded-2xl p-7 mb-5">
              <p className="text-[#F5A623] font-bold text-sm mb-4">NRI Documents Required</p>
              <div className="space-y-3">
                {[
                  ["Salaried NRI", "Salary slips (3–6 months), employment contract, appointment letter, overseas bank statements (6–12 months)"],
                  ["Self-Employed NRI", "3 years overseas ITR (if filed), business balance sheet, overseas bank statements (6 years current account), business registration"],
                  ["Common for Both", "Passport, visa, NRE/NRO account statements, PAN card, Aadhaar (if available), PoA document"],
                ].map(([cat, docs]) => (
                  <div key={cat} className="border-b border-white/10 pb-3">
                    <p className="text-[#F5A623] text-xs font-bold mb-1">{cat}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{docs}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5A623] rounded-xl p-5">
              <p className="text-black font-black text-sm mb-2">🏦 Kerala NRI Specialists</p>
              <p className="text-black/70 text-xs leading-relaxed mb-4">
                Federal Bank, South Indian Bank, and Dhanlaxmi Bank are Kerala-headquartered with dedicated NRI loan desks. We have strong relationships with all three, as well as SBI, HDFC, and ICICI for NRI loans.
              </p>
              <Link href="/enquire" className="block text-center bg-black text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-900 transition-colors">
                Apply as NRI →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#1a1a1a] text-2xl font-black text-center mb-8">Quick Eligibility Summary</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Category</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Home Loan</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">LAP</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Business Loan</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Takeover</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Salaried", hl: "✅ Yes", lap: "✅ Yes", bl: "❌ No", to: "✅ Yes" },
                  { cat: "Self-Employed (No ITR)", hl: "✅ Via NBFC", lap: "✅ Yes", bl: "✅ NBFC/Mudra", to: "✅ Yes" },
                  { cat: "Self-Employed (ITR+GST)", hl: "✅ All banks", lap: "✅ Yes", bl: "✅ All banks", to: "✅ Yes" },
                  { cat: "NRI (Salaried abroad)", hl: "✅ Yes", lap: "✅ Yes", bl: "❌ No", to: "✅ Yes" },
                  { cat: "NRI (Business abroad)", hl: "✅ Yes", lap: "✅ Yes", bl: "❌ No", to: "✅ Yes" },
                ].map((row, i) => (
                  <tr key={row.cat} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-5 py-3 font-semibold text-xs">{row.cat}</td>
                    <td className="px-5 py-3 text-xs">{row.hl}</td>
                    <td className="px-5 py-3 text-xs">{row.lap}</td>
                    <td className="px-5 py-3 text-xs">{row.bl}</td>
                    <td className="px-5 py-3 text-xs">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
