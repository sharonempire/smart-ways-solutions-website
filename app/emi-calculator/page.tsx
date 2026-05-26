import EMICalculator from "@/components/EMICalculator";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator Kerala | Smart Way Solutions",
  description: "Calculate your home loan EMI instantly — adjust loan amount, interest rate, and tenure. Get the best rate from 16+ banks in Kerala. Free consultation.",
  alternates: { canonical: "https://www.smartwaysolutions.in/emi-calculator" },
};

export default function EMICalculatorPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Free Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">EMI Calculator</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-base">
          Calculate your monthly home loan EMI in seconds. Adjust loan amount, interest rate, and tenure to find a repayment plan that works for you.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <EMICalculator />
        </div>
      </section>

      {/* Rate reference table */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#1a1a1a] text-2xl font-black text-center mb-8">
            Current Home Loan Rates in Kerala (2025)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Bank / NBFC</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Starting Rate</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Max Tenure</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bank: "SBI", rate: "8.35% p.a.", tenure: "30 years", for: "Salaried, Govt employees" },
                  { bank: "HDFC Bank", rate: "8.40% p.a.", tenure: "30 years", for: "Salaried, Self-employed" },
                  { bank: "ICICI Bank", rate: "8.40% p.a.", tenure: "30 years", for: "Fast approvals, NRI" },
                  { bank: "Bank of Baroda", rate: "8.40% p.a.", tenure: "30 years", for: "KSFE takeover" },
                  { bank: "Axis Bank", rate: "8.50% p.a.", tenure: "30 years", for: "Salaried, Balance transfer" },
                  { bank: "Federal Bank", rate: "8.55% p.a.", tenure: "30 years", for: "NRI, Kerala residents" },
                  { bank: "South Indian Bank", rate: "8.60% p.a.", tenure: "30 years", for: "Kerala-based borrowers" },
                  { bank: "Kotak Mahindra", rate: "8.65% p.a.", tenure: "30 years", for: "High-value properties" },
                  { bank: "LIC Housing Finance", rate: "8.50% p.a.", tenure: "30 years", for: "Salaried, long tenure" },
                  { bank: "Bajaj Finserv", rate: "8.60% p.a.", tenure: "30 years", for: "LAP, Balance transfer" },
                ].map((row, i) => (
                  <tr key={row.bank} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-5 py-3 font-bold text-[#1a1a1a] text-xs">{row.bank}</td>
                    <td className="px-5 py-3 text-[#F5A623] font-black text-xs">{row.rate}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{row.tenure}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{row.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            * Rates are indicative and subject to change. Final rate depends on your CIBIL score, income, and loan profile. We negotiate the best available rate for you.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
