import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 px-6 relative overflow-hidden">
      {/* Amber accent blob bg */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F5A623] opacity-8 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Kerala&apos;s Trusted Loan Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Get Your Home Loan <span className="text-[#F5A623]">Approved</span> — the Smart Way.
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              We connect you with the best offers from SBI, Bank of Baroda, ICICI, HDFC, Muthoot, Manappuram and 10+ more lenders — so you get the lowest rate, fastest approval, and zero paperwork stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/enquire"
                className="bg-[#F5A623] text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#d4891a] transition-colors text-sm text-center"
              >
                Apply for a Loan — Free
              </Link>
              <Link
                href="/services"
                className="border border-gray-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:border-[#F5A623] hover:text-[#F5A623] transition-colors text-sm text-center"
              >
                See All Loan Types
              </Link>
            </div>
            <p className="mt-5 text-gray-500 text-xs">
              Salaried • Self-Employed • NRI &nbsp;|&nbsp; Home Loans • LAP • Takeover • Business Loans
            </p>
          </div>

          {/* Quick stats card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-[#F5A623] font-bold text-sm mb-5">Why Kerala Trusts Us</p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: "16+", label: "Bank & NBFC Partners" },
                { val: "₹500 Cr+", label: "Loans Facilitated" },
                { val: "98%", label: "Approval Rate" },
                { val: "7–15", label: "Days to Sanction" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-[#F5A623] text-2xl font-black">{s.val}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-gray-400 text-xs text-center mb-3">We Work With</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["SBI", "HDFC", "ICICI", "Axis", "BoB", "Muthoot", "KSFE*", "Societies*"].map((b) => (
                  <span key={b} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-[10px] text-center mt-2">*Balance transfer from KSFE and cooperative societies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
