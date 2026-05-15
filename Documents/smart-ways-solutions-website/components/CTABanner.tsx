import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#0a1f44] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Your Loan Approved?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Submit a quick enquiry and our loan experts will reach out within 24 hours with the best offers from our bank partners.
        </p>
        <Link
          href="/enquire"
          className="bg-[#c9a84c] text-[#0a1f44] px-10 py-3 rounded font-semibold hover:bg-[#e2c97e] transition-colors text-base inline-block"
        >
          Apply for a Loan — It&apos;s Free
        </Link>
      </div>
    </section>
  );
}
