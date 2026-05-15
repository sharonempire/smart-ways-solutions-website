import CTABanner from "@/components/CTABanner";
import BankPartners from "@/components/BankPartners";
import Link from "next/link";

interface CityPageProps {
  city: string;
  district: string;
  description: string;
  localContext: string;
  popularLoanTypes: string[];
  lenderHighlights: string[];
}

export default function CityPage({
  city,
  district,
  description,
  localContext,
  popularLoanTypes,
  lenderHighlights,
}: CityPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          {district} District, Kerala
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Home Loans in {city}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link href="/enquire" className="bg-[#F5A623] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#d4891a] transition-colors text-sm">
            Apply for a Loan in {city}
          </Link>
          <Link href="/services" className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-[#F5A623] hover:text-[#F5A623] transition-colors text-sm">
            View All Loan Types
          </Link>
        </div>
      </section>

      {/* Local context + loan types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[#1a1a1a] text-2xl font-black mb-4">
              Loans We Facilitate in {city}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{localContext}</p>
            <div className="space-y-2">
              {popularLoanTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 bg-[#f8f8f8] rounded-lg px-4 py-3 border border-gray-100">
                  <span className="text-[#F5A623] font-black text-lg">›</span>
                  <span className="text-[#1a1a1a] text-sm font-semibold">{type}</span>
                </div>
              ))}
            </div>
            <Link href="/enquire" className="inline-block mt-6 bg-[#F5A623] text-black px-7 py-3 rounded-lg font-bold text-sm hover:bg-[#d4891a] transition-colors">
              Apply Now — Free
            </Link>
          </div>

          <div>
            <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white mb-5">
              <p className="text-[#F5A623] font-bold text-sm mb-4">Our Bank Partners in {city}</p>
              <ul className="space-y-2">
                {lenderHighlights.map((lender) => (
                  <li key={lender} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#F5A623] font-black">✓</span> {lender}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "16+", label: "Bank Partners" },
                { val: "98%", label: "Approval Rate" },
                { val: "7–15", label: "Days to Sanction" },
                { val: "Free", label: "Our Service" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-[#F5A623] text-2xl font-black">{s.val}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#1a1a1a] text-2xl font-black text-center mb-8">
            How to Get a Home Loan in {city}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Submit Enquiry", desc: "Fill our form — takes 2 minutes." },
              { step: "2", title: "Advisor Calls", desc: "We call within 24 hours." },
              { step: "3", title: "Best Offer", desc: "We compare 16+ lenders for you." },
              { step: "4", title: "Loan Approved", desc: "Sanction in 7–15 working days." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
                <p className="text-[#F5A623] text-2xl font-black mb-1">{s.step}</p>
                <p className="text-[#1a1a1a] font-bold text-sm mb-1">{s.title}</p>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific SEO text */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed space-y-4">
          <h2 className="text-[#1a1a1a] font-black text-xl mb-3">
            Home Loan Consultant in {city}, Kerala
          </h2>
          <p>
            Smart Way Solutions provides home loan facilitation services in {city} and across {district} district. We work with all major banks and NBFCs — including SBI, Bank of Baroda, ICICI Bank, HDFC Bank, Axis Bank, Federal Bank, South Indian Bank, Muthoot Finance, and Manappuram Finance — to bring you the best home loan rates available in {city}.
          </p>
          <p>
            Whether you are buying a new home, constructing on a plot, transferring an existing loan from KSFE or a cooperative society, or looking for a loan against your property in {city} — our team handles the entire process end-to-end. Our service is completely free; we are compensated by the lending institution.
          </p>
          <p>
            NRI customers from {city} working in Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman) can also apply for home loans with our PoA assistance. Salaried, self-employed (with or without ITR), and business owners are all welcome.
          </p>
        </div>
      </section>

      <BankPartners />
      <CTABanner />
    </>
  );
}
