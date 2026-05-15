"use client";
import { useState } from "react";
import Link from "next/link";

type EmploymentType = "salaried-govt" | "salaried-private" | "self-employed-no-itr" | "self-employed-itr" | "nri" | "";

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function EligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [employment, setEmployment] = useState<EmploymentType>("");
  const [cibil, setCibil] = useState<"750+" | "700-750" | "650-700" | "below-650" | "">("");
  const [result, setResult] = useState<null | { eligible: boolean; amount: number; note: string; rate: string }>(null);

  function calculate() {
    if (!employment || !cibil) return;

    // FOIR: max 50% of income can go to all EMIs
    const maxTotalEMI = monthlyIncome * 0.5;
    const availableEMI = Math.max(0, maxTotalEMI - existingEMI);

    // Estimate loan amount from available EMI (20yr, approx rate)
    const rateMap: Record<string, number> = {
      "salaried-govt": 8.35,
      "salaried-private": 8.5,
      "self-employed-itr": 9.0,
      "self-employed-no-itr": 11.0,
      "nri": 8.75,
    };
    const rate = rateMap[employment] ?? 9.0;
    const r = rate / 12 / 100;
    const n = 240; // 20 years
    const estimatedLoan = availableEMI * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));

    // CIBIL multiplier
    const cibilMultiplier: Record<string, number> = {
      "750+": 1.0, "700-750": 0.9, "650-700": 0.75, "below-650": 0,
    };
    const multiplier = cibilMultiplier[cibil] ?? 0;
    const finalAmount = Math.round(estimatedLoan * multiplier);

    // No-ITR cap at ₹50L
    const cappedAmount = employment === "self-employed-no-itr"
      ? Math.min(finalAmount, 5000000)
      : finalAmount;

    const rateLabel = `~${rate}% p.a.`;

    if (cibil === "below-650") {
      setResult({
        eligible: false,
        amount: 0,
        note: "Your CIBIL score is below 650, which makes it difficult to get a home loan from banks. We recommend improving your CIBIL score first. Contact us — we can guide you on the fastest way to improve it.",
        rate: rateLabel,
      });
      return;
    }

    if (availableEMI < 5000) {
      setResult({
        eligible: false,
        amount: 0,
        note: "Based on your income and existing EMIs, the available monthly amount for a new loan is too low. A co-applicant (spouse or parent) can increase eligibility significantly.",
        rate: rateLabel,
      });
      return;
    }

    const notes: Record<string, string> = {
      "salaried-govt": "Government employees get the best rates. SBI, Bank of Baroda, and Canara Bank offer preferential rates for government staff.",
      "salaried-private": "Private sector salaried employees are eligible from most banks. CIBIL 750+ gets the best rates.",
      "self-employed-itr": "With 2–3 years of ITR and CA-certified financials, you qualify from all major banks and NBFCs.",
      "self-employed-no-itr": "Without ITR, we route through NBFCs and Housing Finance Companies using bank statement assessment. Loan capped at ₹50L typically.",
      "nri": "NRI loans are available via NRE/NRO account repayment. Federal Bank, SBI, and ICICI have strong NRI desks in Kerala.",
    };

    setResult({
      eligible: true,
      amount: cappedAmount,
      note: notes[employment] ?? "",
      rate: rateLabel,
    });
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-[#1a1a1a] px-8 py-5">
        <h2 className="text-white font-black text-xl">Eligibility Calculator</h2>
        <p className="text-gray-400 text-xs mt-1">
          Estimate how much home loan you can get based on your income and profile
        </p>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Monthly Income */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#1a1a1a]">Monthly Income (Net)</label>
              <span className="text-[#F5A623] font-black">{formatINR(monthlyIncome)}</span>
            </div>
            <input
              type="range" min={15000} max={500000} step={5000}
              value={monthlyIncome}
              onChange={(e) => { setMonthlyIncome(Number(e.target.value)); setResult(null); }}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F5A623]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹15K</span><span>₹5L</span>
            </div>
          </div>

          {/* Existing EMI */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#1a1a1a]">Existing Monthly EMIs</label>
              <span className="text-[#F5A623] font-black">{formatINR(existingEMI)}</span>
            </div>
            <input
              type="range" min={0} max={100000} step={1000}
              value={existingEMI}
              onChange={(e) => { setExistingEMI(Number(e.target.value)); setResult(null); }}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F5A623]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹0</span><span>₹1L</span>
            </div>
          </div>

          {/* Employment Type */}
          <div>
            <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Employment Type</label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { val: "salaried-govt", label: "👔 Salaried — Government" },
                { val: "salaried-private", label: "👔 Salaried — Private" },
                { val: "self-employed-itr", label: "🏪 Self-Employed (With ITR + GST)" },
                { val: "self-employed-no-itr", label: "🏪 Self-Employed (No ITR / No GST)" },
                { val: "nri", label: "✈️ NRI" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => { setEmployment(opt.val as EmploymentType); setResult(null); }}
                  className={`text-left px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                    employment === opt.val
                      ? "bg-[#F5A623] border-[#F5A623] text-black"
                      : "border-gray-200 text-gray-600 hover:border-[#F5A623]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* CIBIL Score */}
          <div>
            <label className="block text-sm font-bold text-[#1a1a1a] mb-2">CIBIL Score Range</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { val: "750+", label: "750+" },
                { val: "700-750", label: "700–750" },
                { val: "650-700", label: "650–700" },
                { val: "below-650", label: "Below 650" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => { setCibil(opt.val as typeof cibil); setResult(null); }}
                  className={`px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                    cibil === opt.val
                      ? "bg-[#1a1a1a] border-[#1a1a1a] text-white"
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={!employment || !cibil}
            className="w-full bg-[#F5A623] text-black py-3.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check My Eligibility
          </button>
        </div>

        {/* Result */}
        <div className="flex flex-col gap-4">
          {!result ? (
            <div className="flex-1 bg-[#f8f8f8] rounded-2xl flex flex-col items-center justify-center p-10 text-center border border-dashed border-gray-200">
              <p className="text-4xl mb-3">🏠</p>
              <p className="text-[#1a1a1a] font-bold text-sm mb-1">Your result will appear here</p>
              <p className="text-gray-400 text-xs">Fill in your details and click &ldquo;Check My Eligibility&rdquo;</p>
            </div>
          ) : result.eligible ? (
            <>
              <div className="bg-[#F5A623] rounded-2xl p-7 text-center">
                <p className="text-black/60 text-sm font-semibold mb-1">Estimated Loan Eligibility</p>
                <p className="text-black text-4xl font-black">{formatINR(result.amount)}</p>
                <p className="text-black/50 text-xs mt-1">Indicative — based on 20yr tenure at {result.rate}</p>
              </div>
              <div className="bg-[#f8f8f8] rounded-xl p-5 border border-gray-100">
                <p className="text-[#1a1a1a] font-bold text-sm mb-2">💡 What This Means</p>
                <p className="text-gray-600 text-xs leading-relaxed">{result.note}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-5 text-white text-xs">
                <p className="font-bold mb-2 text-[#F5A623]">Want a more accurate figure?</p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Our advisor will review your exact income, existing loans, and property details to give you the precise maximum loan amount and the best available rate.
                </p>
                <Link
                  href="/enquire"
                  className="block text-center bg-[#F5A623] text-black px-5 py-2.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors"
                >
                  Apply Now — Free
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gray-100 rounded-2xl p-7 text-center">
                <p className="text-3xl mb-3">⚠️</p>
                <p className="text-[#1a1a1a] font-black text-base mb-2">Not Eligible Right Now</p>
                <p className="text-gray-500 text-xs leading-relaxed">{result.note}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-5 text-white text-xs">
                <p className="font-bold mb-2 text-[#F5A623]">We Can Still Help</p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Speak to our advisor — there may be options like adding a co-applicant, NBFC lenders, or improving your profile before reapplying.
                </p>
                <Link
                  href="/enquire"
                  className="block text-center bg-[#F5A623] text-black px-5 py-2.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </>
          )}
          <p className="text-xs text-gray-400 text-center">
            * This is an estimate only. Actual eligibility is determined by the bank based on your full profile.
          </p>
        </div>
      </div>
    </div>
  );
}
