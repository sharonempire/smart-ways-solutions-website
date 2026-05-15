"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);   // ₹30L default
  const [interestRate, setInterestRate] = useState(8.75);  // 8.75% default
  const [tenure, setTenure] = useState(20);                // 20 years default

  const { emi, totalPayable, totalInterest, principalPct, interestPct } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) {
      const emi = P / n;
      return { emi, totalPayable: P, totalInterest: 0, principalPct: 100, interestPct: 0 };
    }
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;
    const principalPct = Math.round((P / totalPayable) * 100);
    const interestPct = 100 - principalPct;
    return { emi, totalPayable, totalInterest, principalPct, interestPct };
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-[#1a1a1a] px-8 py-5">
        <h2 className="text-white font-black text-xl">EMI Calculator</h2>
        <p className="text-gray-400 text-xs mt-1">Estimate your monthly home loan repayment</p>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-8">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#1a1a1a]">Loan Amount</label>
              <span className="text-[#F5A623] font-black text-lg">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={50000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F5A623]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹5L</span><span>₹5 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#1a1a1a]">Interest Rate (p.a.)</label>
              <span className="text-[#F5A623] font-black text-lg">{interestRate.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min={7}
              max={16}
              step={0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F5A623]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>7%</span><span>16%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#1a1a1a]">Loan Tenure</label>
              <span className="text-[#F5A623] font-black text-lg">{tenure} yrs</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F5A623]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 yr</span><span>30 yrs</span>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            * Rates shown are indicative. Actual rate depends on your profile, lender, and credit score. Our advisors compare live rates across 16+ banks to get you the best offer.
          </p>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-5">
          {/* EMI highlight */}
          <div className="bg-[#F5A623] rounded-2xl p-6 text-center">
            <p className="text-black/60 text-sm font-semibold mb-1">Monthly EMI</p>
            <p className="text-black text-4xl font-black">{formatINR(Math.round(emi))}</p>
            <p className="text-black/50 text-xs mt-1">per month for {tenure} years</p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-gray-100">
              <p className="text-gray-500 text-xs mb-1">Principal Amount</p>
              <p className="text-[#1a1a1a] font-black text-base">{formatINR(loanAmount)}</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-gray-100">
              <p className="text-gray-500 text-xs mb-1">Total Interest</p>
              <p className="text-[#1a1a1a] font-black text-base">{formatINR(Math.round(totalInterest))}</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 text-center col-span-2">
              <p className="text-gray-400 text-xs mb-1">Total Amount Payable</p>
              <p className="text-white font-black text-xl">{formatINR(Math.round(totalPayable))}</p>
            </div>
          </div>

          {/* Visual bar */}
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2">Breakup</p>
            <div className="flex rounded-full overflow-hidden h-4">
              <div
                className="bg-[#F5A623] transition-all duration-300"
                style={{ width: `${principalPct}%` }}
              />
              <div
                className="bg-[#1a1a1a] transition-all duration-300"
                style={{ width: `${interestPct}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] inline-block" />
                Principal {principalPct}%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] inline-block" />
                Interest {interestPct}%
              </span>
            </div>
          </div>

          <Link
            href="/enquire"
            className="block text-center bg-[#F5A623] text-black py-3 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm"
          >
            Apply for This Loan — Get Best Rate
          </Link>
        </div>
      </div>
    </div>
  );
}
