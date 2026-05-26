import EligibilityCalculator from "@/components/EligibilityCalculator";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Eligibility Calculator Kerala | Smart Way Solutions",
  description: "Check your home loan eligibility instantly — salaried, self-employed, or NRI. Find out how much loan you can get from Kerala's top banks.",
  alternates: { canonical: "https://www.smartwaysolutions.in/eligibility-check" },
};

export default function EligibilityCheckPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Free Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Check Loan Eligibility</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-base">
          Enter your income, existing EMIs, and employment type to instantly estimate how much home loan you qualify for.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <EligibilityCalculator />
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#1a1a1a] text-xl font-black mb-5">How Is Loan Eligibility Calculated?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-gray-600">
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#F5A623] font-black text-sm mb-2">FOIR Rule</p>
              <p className="text-xs leading-relaxed">Banks allow a maximum of 40–50% of your gross monthly income to go towards all loan EMIs combined (existing + new). This is called FOIR — Fixed Obligation to Income Ratio.</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#F5A623] font-black text-sm mb-2">CIBIL Score</p>
              <p className="text-xs leading-relaxed">A CIBIL score of 750+ gets the best rates and highest loan amounts. Scores below 700 reduce eligibility, and below 650 most banks will decline. We can advise on improving your score.</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
              <p className="text-[#F5A623] font-black text-sm mb-2">Co-Applicant Tip</p>
              <p className="text-xs leading-relaxed">Adding a co-applicant (spouse, parent) increases eligibility significantly — the bank combines both incomes to calculate FOIR. This is especially helpful for NRIs with a local co-applicant.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
