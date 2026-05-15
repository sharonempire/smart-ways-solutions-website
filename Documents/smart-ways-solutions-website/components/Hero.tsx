import Link from "next/link";
import HeroEmiCard from "./HeroEmiCard";

export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 px-6 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F5A623] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — copy with staggered entrance */}
          <div>
            <span
              className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5"
              style={{ animation: "hero-fade-up 0.5s ease 0.05s both" }}
            >
              Kerala&apos;s Trusted Loan Partner
            </span>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight mb-5"
              style={{ animation: "hero-fade-up 0.55s ease 0.15s both" }}
            >
              Get Your Home Loan{" "}
              <span className="text-[#F5A623]">Approved</span>{" "}
              — the Smart Way.
            </h1>
            <p
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
              style={{ animation: "hero-fade-up 0.55s ease 0.25s both" }}
            >
              We compare live offers from SBI, HDFC, ICICI, Bank of Baroda, Muthoot, and 11+ more lenders — so you get the lowest rate, fastest approval, and zero paperwork stress.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-5"
              style={{ animation: "hero-fade-up 0.55s ease 0.35s both" }}
            >
              <Link
                href="/enquire"
                className="btn-shimmer btn-pulse bg-[#F5A623] text-black px-8 py-3.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm text-center"
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

            <p
              className="text-gray-500 text-xs"
              style={{ animation: "hero-fade-up 0.5s ease 0.42s both" }}
            >
              Salaried • Self-Employed • NRI &nbsp;|&nbsp; Home Loans • LAP • Takeover • Business Loans
            </p>

            {/* Trust row */}
            <div
              className="flex items-center gap-5 mt-8 pt-8 border-t border-white/10"
              style={{ animation: "hero-fade-up 0.5s ease 0.5s both" }}
            >
              {[
                { val: "16+", label: "Lenders" },
                { val: "98%", label: "Approval rate" },
                { val: "₹500 Cr+", label: "Facilitated" },
                { val: "7–15 days", label: "To sanction" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-white font-black text-sm">{s.val}</p>
                  <p className="text-gray-500 text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — EMI card slides in from right */}
          <div style={{ animation: "hero-slide-right 0.6s ease 0.2s both" }}>
            <HeroEmiCard />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-slide-right {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
