import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BankPartners from "@/components/BankPartners";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

const loans = [
  {
    icon: "🏡",
    title: "Plot Purchase Loan",
    desc: "Buy a residential plot of your choice with financing from top banks at competitive rates.",
  },
  {
    icon: "🏗️",
    title: "Plot Purchase + Construction",
    desc: "Finance both your land purchase and home construction under a single loan — simpler and cost-effective.",
  },
  {
    icon: "🏠",
    title: "Home Purchase Loan",
    desc: "Purchase a ready-to-move-in home or apartment with the best rates from our 16+ bank partners.",
  },
  {
    icon: "🏢",
    title: "Under Construction Loan",
    desc: "Funds released in stages as your home is built, so you only pay interest on what is disbursed.",
  },
  {
    icon: "🔨",
    title: "Renovation & Extension Loan",
    desc: "Upgrade or expand your existing home with flexible loan options tailored for improvement projects.",
  },
  {
    icon: "🔄",
    title: "Refinance / Balance Transfer",
    desc: "Transfer your existing home loan to a bank offering lower rates and save lakhs over your tenure.",
  },
];

const testimonials = [
  {
    name: "Rajan Menon",
    location: "Thrissur, Kerala",
    quote:
      "Smart Ways got my home loan sanctioned within 10 days. They handled all the paperwork and got me a rate lower than what my bank originally quoted.",
  },
  {
    name: "Anitha Suresh",
    location: "Kochi, Kerala",
    quote:
      "I was confused about which bank to approach for my plot + construction loan. The team made it so simple and got SBI to approve it quickly.",
  },
  {
    name: "Mohammed Ashraf",
    location: "Kozhikode, Kerala",
    quote:
      "Refinanced my old loan through Smart Ways and now save ₹4,200 every month on EMI. Best decision I made.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Loan Types Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              Loan Products
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">
              Home Loans for Every Need
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Whether you are buying, building, renovating, or refinancing — we have a loan solution for you, backed by the best banks in India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loans.map((l) => (
              <div key={l.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-[#c9a84c] hover:shadow-md transition-all group">
                <p className="text-3xl mb-3">{l.icon}</p>
                <h3 className="text-[#0a1f44] font-semibold text-base mb-2 group-hover:text-[#c9a84c] transition-colors">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{l.desc}</p>
                <Link href="/enquire" className="text-[#c9a84c] text-sm font-semibold hover:underline">
                  Enquire Now →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border border-[#0a1f44] text-[#0a1f44] px-8 py-3 rounded font-semibold hover:bg-[#0a1f44] hover:text-white transition-colors text-sm inline-block"
            >
              View All Loan Details
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              Why Choose Smart Ways
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold mb-6">
              We Do the Hard Work — You Get the Keys
            </h2>
            <ul className="space-y-4">
              {[
                "Access to 16+ banks and NBFCs — one application, multiple offers",
                "Expert advisors compare rates and get you the best deal",
                "End-to-end documentation and processing support",
                "Faster approvals through our direct bank tie-ups",
                "Zero hidden charges — completely transparent process",
                "Serving Kerala with deep knowledge of local property norms",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="text-[#c9a84c] font-bold mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a1f44] rounded-2xl p-8 text-white">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-5">
              How It Works
            </p>
            <ol className="space-y-5">
              {[
                { step: "01", title: "Submit Enquiry", desc: "Fill in our simple form with your loan requirement and basic details." },
                { step: "02", title: "Free Consultation", desc: "Our advisor calls you within 24 hours to understand your needs." },
                { step: "03", title: "Bank Matching", desc: "We shortlist the best bank offers for your profile and present them to you." },
                { step: "04", title: "Sanction & Disbursal", desc: "We handle all paperwork and coordinate with the bank until funds are released." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <span className="text-[#c9a84c] font-bold text-lg w-8 shrink-0">{item.step}</span>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <BankPartners />

      {/* Also offer LAP */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="text-5xl">🏦</div>
          <div className="flex-1">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-1">Also Available</p>
            <h3 className="text-[#0a1f44] text-xl font-bold mb-2">Loan Against Property (LAP)</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Unlock the value of your existing property. Whether it is a home, commercial space, or plot — we arrange LAP from top banks and NBFCs at competitive rates for your business or personal needs.
            </p>
          </div>
          <Link
            href="/enquire"
            className="shrink-0 bg-[#0a1f44] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#102a5e] transition-colors"
          >
            Enquire for LAP
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
              Success Stories
            </p>
            <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">
              Keralites Who Got Their Loans Approved
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-[#c9a84c] text-2xl mb-3">&ldquo;</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.quote}</p>
                <p className="text-[#0a1f44] font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
