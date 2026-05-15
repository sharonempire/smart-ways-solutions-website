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
          Trusted Finance Consultancy
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Smart Financial Decisions <br />
          <span className="text-[#c9a84c]">Start Here.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Smart Ways Solutions provides expert financial guidance — from wealth
          management and tax advisory to investment planning and business finance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#c9a84c] text-[#0a1f44] px-8 py-3 rounded font-semibold hover:bg-[#e2c97e] transition-colors text-base"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/services"
            className="border border-gray-400 text-white px-8 py-3 rounded font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-base"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
