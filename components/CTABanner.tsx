import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#F5A623] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-black text-3xl md:text-4xl font-black mb-3">
          Ready to Get Your Loan Approved?
        </h2>
        <p className="text-black/70 mb-8 text-base">
          Submit a quick enquiry. Our advisor calls within 24 hours with the best offers from our bank partners — 100% free service.
        </p>
        <Link
          href="/enquire"
          className="btn-shimmer btn-pulse bg-black text-white px-10 py-3.5 rounded-lg font-bold hover:bg-gray-900 transition-colors text-base inline-block"
        >
          Apply for a Loan — It&apos;s Free
        </Link>
        <p className="text-black/50 text-xs mt-4">Salaried • Self-Employed • NRI — All categories welcome</p>
      </div>
    </section>
  );
}
