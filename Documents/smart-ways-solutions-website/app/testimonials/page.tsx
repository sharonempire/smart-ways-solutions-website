import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Smart Way Solutions Kerala",
  description: "Real stories from Kerala homeowners who got their loans approved through Smart Way Solutions — KSFE transfers, NRI loans, home purchases, and more.",
  alternates: { canonical: "https://www.smartwaysolutions.in/testimonials" },
};

const testimonials = [
  {
    name: "Rajan Menon",
    location: "Thrissur, Kerala",
    loanType: "KSFE Loan Transfer",
    saving: "Saves ₹3,800/month",
    stars: 5,
    quote:
      "I had a KSFE home loan at 9.5% for 8 years. Smart Way Solutions transferred it to HDFC at 8.6% within 3 weeks. Now I save ₹3,800 every month on EMI. The whole process was handled by them — I just signed the documents.",
    initials: "RM",
    color: "bg-blue-600",
  },
  {
    name: "Anitha Suresh",
    location: "Ernakulam, Kerala",
    loanType: "Plot + Construction Loan",
    saving: "₹48L sanctioned",
    stars: 5,
    quote:
      "I wanted to buy a plot and build a house in Kakkanad. Smart Way Solutions arranged a composite plot + construction loan from SBI at 8.5%. The disbursements happened stage by stage as construction progressed. Excellent service.",
    initials: "AS",
    color: "bg-green-600",
  },
  {
    name: "Mohammed Ashraf",
    location: "Kozhikode, Kerala",
    loanType: "NRI Home Loan",
    saving: "₹65L approved",
    stars: 5,
    quote:
      "I am working in Dubai and wanted to build a home in Kozhikode. Smart Way Solutions handled everything locally — Power of Attorney setup, document collection, bank coordination — and got a Federal Bank loan approved in 18 days. Outstanding.",
    initials: "MA",
    color: "bg-amber-600",
  },
  {
    name: "Priya Nair",
    location: "Kannur, Kerala",
    loanType: "Home Purchase Loan",
    saving: "₹35L at 8.4%",
    stars: 5,
    quote:
      "As a government teacher I wasn't sure which bank to approach. Smart Way Solutions compared 6 lenders and got me SBI at 8.4% — the best rate available. The whole thing was done in 12 days. I highly recommend them.",
    initials: "PN",
    color: "bg-purple-600",
  },
  {
    name: "Suresh Kumar",
    location: "Malappuram, Kerala",
    loanType: "Society Loan Takeover + Top-Up",
    saving: "₹5,200/month saved",
    stars: 5,
    quote:
      "I had a cooperative society loan at 11%. Smart Way did a bank takeover AND arranged a ₹8 lakh top-up at the same time — at 9.2% interest. Now I save over ₹5,200 per month and had extra funds for renovation.",
    initials: "SK",
    color: "bg-red-600",
  },
  {
    name: "Deepa Thomas",
    location: "Thrissur, Kerala",
    loanType: "Business Loan (No ITR)",
    saving: "₹12L approved",
    stars: 5,
    quote:
      "My husband runs a small shop and we don't have ITR. Every bank we approached directly said no. Smart Way Solutions got us a ₹12 lakh business loan through an NBFC using our bank statements. We were shocked it was possible.",
    initials: "DT",
    color: "bg-teal-600",
  },
  {
    name: "Ajmal K",
    location: "Malappuram, Kerala",
    loanType: "NRI Plot + Construction",
    saving: "₹80L sanctioned",
    stars: 5,
    quote:
      "I came back from Saudi Arabia for a month and wanted to start the loan process for a plot and construction. Smart Way Solutions completed the entire bank sanction within my visit — ₹80L from South Indian Bank. Incredible team.",
    initials: "AK",
    color: "bg-indigo-600",
  },
  {
    name: "Sreeja Pillai",
    location: "Ernakulam, Kerala",
    loanType: "Home Loan Balance Transfer",
    saving: "₹2,900/month saved",
    stars: 5,
    quote:
      "I was paying 9.8% on an old home loan. Smart Way transferred it to Axis Bank at 8.75% — now I save ₹2,900 per month. The transfer was completed in just 15 working days with zero hassle from my end.",
    initials: "SP",
    color: "bg-pink-600",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#F5A623]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Real Stories
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Client Testimonials</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base">
          Over 2,500 Keralites have trusted us with their loan requirements. Here are some of their stories.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          {[
            { val: "2,500+", label: "Loans Sanctioned" },
            { val: "98%", label: "Approval Rate" },
            { val: "5 ★", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#F5A623] text-2xl font-black">{s.val}</p>
              <p className="text-gray-400 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar with initials */}
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-black text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>

              <StarRating count={t.stars} />

              <div className="flex gap-2 mt-3 mb-3">
                <span className="bg-[#FFF8EC] text-[#d4891a] text-xs font-bold px-2 py-1 rounded-full border border-amber-200">
                  {t.loanType}
                </span>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-green-200">
                  {t.saving}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Ready to write your own success story?</p>
          <Link
            href="/enquire"
            className="bg-[#F5A623] text-black px-10 py-3.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-sm inline-block"
          >
            Apply for a Loan — Free
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
