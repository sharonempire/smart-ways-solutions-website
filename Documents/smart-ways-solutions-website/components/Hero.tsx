import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0a1f44] text-white py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
          Kerala&apos;s Trusted Loan Facilitation Partner
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Dream Home, <br />
          <span className="text-[#c9a84c]">Funded the Smart Way.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We connect you with the best home loan and property loan offers from 16+ nationalised banks, private banks, and NBFCs — at the lowest rates, with zero hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/enquire"
            className="bg-[#c9a84c] text-[#0a1f44] px-8 py-3 rounded font-semibold hover:bg-[#e2c97e] transition-colors text-base"
          >
            Apply for a Loan
          </Link>
          <Link
            href="/services"
            className="border border-gray-400 text-white px-8 py-3 rounded font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-base"
          >
            Explore Loan Types
          </Link>
        </div>
        <p className="mt-6 text-gray-400 text-xs">
          SBI • Bank of Baroda • ICICI • HDFC • Axis • Muthoot • Manappuram • and more
        </p>
      </div>
    </section>
  );
}
