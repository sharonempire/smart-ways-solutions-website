import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BankPartners from "@/components/BankPartners";
import CTABanner from "@/components/CTABanner";
import EMICalculator from "@/components/EMICalculator";
import GoogleReviews from "@/components/GoogleReviews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Way Solutions | Home Loan & Finance Consultancy Kerala",
  description:
    "Kerala's trusted home loan DSA — best rates from SBI, HDFC, ICICI, Muthoot and 12+ more lenders. KSFE loan transfer, NRI loans, business loans. Free consultation.",
  alternates: { canonical: "https://www.smartwaysolutions.in" },
};

const loanCategories = [
  {
    icon: "🏠",
    title: "Home Loans",
    desc: "Plot purchase, home purchase, under construction, renovation, and refinance loans from top banks.",
    items: ["Plot Purchase", "Plot + Construction", "Ready Home", "Under Construction", "Renovation", "Balance Transfer"],
    href: "/services#home-loans",
    color: "border-blue-200 hover:border-blue-400",
    badge: "bg-blue-50 text-blue-700",
  },
  {
    icon: "🔄",
    title: "Loan Takeover + Top-Up",
    desc: "Transfer your loan from KSFE, cooperative societies, or any bank to get a lower rate — plus get extra funds as a top-up.",
    items: ["Takeover from KSFE", "Society Loan Takeover", "Bank-to-Bank Transfer", "Top-Up on Transfer", "Lower EMI guarantee"],
    href: "/services#takeover",
    color: "border-amber-200 hover:border-[#F5A623]",
    badge: "bg-amber-50 text-amber-700",
  },
  {
    icon: "🏦",
    title: "Loan Against Property",
    desc: "Unlock the value of your existing property for business or personal needs at home-loan rates.",
    items: ["Residential property", "Commercial property", "Plot / land", "Up to 65% of value", "Tenures up to 15 yrs"],
    href: "/services#lap",
    color: "border-green-200 hover:border-green-500",
    badge: "bg-green-50 text-green-700",
  },
  {
    icon: "💼",
    title: "Business Loans",
    desc: "For small businesses without ITR/GST and large businesses with full documents — we find the right lender for you.",
    items: ["Small business / no ITR", "Formal business with ITR+GST", "Working capital", "Term loans", "MSME / Mudra"],
    href: "/services#business",
    color: "border-purple-200 hover:border-purple-500",
    badge: "bg-purple-50 text-purple-700",
  },
];

const howItWorks = [
  { step: "01", title: "Submit Enquiry", desc: "Fill our simple form — takes 2 minutes." },
  { step: "02", title: "Advisor Calls You", desc: "Our expert calls within 24 hours to understand your requirement." },
  { step: "03", title: "Bank Matching", desc: "We compare live offers from 16+ lenders and present the best." },
  { step: "04", title: "Documentation", desc: "We prepare and submit all documents on your behalf." },
  { step: "05", title: "Sanction & Disbursal", desc: "Loan sanctioned in 7–15 days, funds disbursed to your account." },
];

const testimonials = [
  {
    name: "Rajan Menon",
    location: "Thrissur, Kerala",
    quote: "Smart Way Solutions got my home loan sanctioned in 10 days. They handled all paperwork and got a rate 0.5% lower than what SBI quoted me directly.",
  },
  {
    name: "Anitha Suresh",
    location: "Ernakulam, Kerala",
    quote: "I had a KSFE home loan at 9.5%. Smart Way transferred it to HDFC at 8.6% — now I save ₹3,800 every month on EMI.",
  },
  {
    name: "Mohammed Ashraf",
    location: "Kozhikode, Kerala",
    quote: "As a Gulf NRI, I was worried about the loan process from abroad. Their team handled everything locally with my PoA and got the loan approved smoothly.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Loan Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              What We Offer
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
              All Types of Loans, One Place
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Whether you are buying a home, transferring a high-interest loan, unlocking property value, or growing your business — we have a loan for it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loanCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`bg-white rounded-xl p-6 border-2 transition-all shadow-sm hover:shadow-md flex flex-col ${cat.color}`}
              >
                <p className="text-3xl mb-3">{cat.icon}</p>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit mb-2 ${cat.badge}`}>
                  {cat.title}
                </span>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{cat.desc}</p>
                <ul className="space-y-1 mt-auto">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-[#F5A623] font-bold">›</span> {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              The Process
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {howItWorks.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                <p className="text-[#F5A623] text-3xl font-black mb-2">{s.step}</p>
                <p className="text-[#1a1a1a] font-bold text-sm mb-1">{s.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Eligibility
            </span>
            <h2 className="text-[#1a1a1a] text-3xl font-black mb-5">Who Can Apply?</h2>
            <div className="space-y-4">
              {[
                { icon: "👔", title: "Salaried Employees", desc: "Government and private sector employees with regular salary income. Min 6 months in current job, 2 years total experience." },
                { icon: "🏪", title: "Self-Employed / Business Owners", desc: "Both small businesses (no ITR/GST) and formal businesses (with ITR + GST). We find lenders for all profiles." },
                { icon: "✈️", title: "NRI (Gulf & Abroad)", desc: "Kerala NRIs working in Gulf countries or anywhere abroad. Repayment via NRE/NRO account. PoA support provided." },
              ].map((cat) => (
                <div key={cat.title} className="flex gap-4 p-4 bg-[#f8f8f8] rounded-xl">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <p className="text-[#1a1a1a] font-bold text-sm">{cat.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/eligibility" className="inline-block mt-6 border-2 border-[#F5A623] text-[#1a1a1a] px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#F5A623] transition-colors">
              Check Full Eligibility →
            </Link>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
            <p className="text-[#F5A623] font-bold text-sm mb-5 uppercase tracking-widest">Why Smart Way</p>
            <ul className="space-y-4">
              {[
                { icon: "🏦", text: "16+ bank and NBFC partners — widest options in Kerala" },
                { icon: "📄", text: "Full documentation support — we handle everything" },
                { icon: "💰", text: "Best rate guarantee — we compare all available offers" },
                { icon: "⚡", text: "Sanctions in 7–15 working days via direct bank relationships" },
                { icon: "🔄", text: "KSFE and society loan takeovers — our speciality" },
                { icon: "✈️", text: "Dedicated NRI support with PoA assistance" },
                { icon: "🆓", text: "100% free service — paid by the bank, not you" },
              ].map((pt) => (
                <li key={pt.text} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-lg shrink-0">{pt.icon}</span>
                  {pt.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BankPartners />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Success Stories
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
              Keralites Who Got Approved
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f8f8f8] rounded-xl p-6 border border-gray-100">
                <p className="text-[#F5A623] text-3xl font-black mb-3">&ldquo;</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">{t.quote}</p>
                <p className="text-[#1a1a1a] font-bold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 18 — EMI Calculator */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Free Tool
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">Calculate Your EMI</h2>
            <p className="text-gray-500 mt-2 text-sm">Adjust the sliders to see your monthly repayment instantly.</p>
          </div>
          <EMICalculator />
        </div>
      </section>

      {/* Phase 16 — Kerala SEO keyword content */}
      <section className="py-16 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#1a1a1a] text-2xl font-black mb-6 text-center">
            Home Loans in Kerala — Everything You Need to Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">Home Loan Consultant in Kerala</h3>
              <p>
                Smart Way Solutions is a registered loan DSA (Direct Selling Agent) serving customers across Kerala. We work directly with nationalised banks like SBI and Bank of Baroda, new-generation private banks like ICICI and HDFC, and NBFCs like Muthoot Finance and Manappuram — so you get the widest choice with a single enquiry.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">KSFE Loan Transfer to Bank</h3>
              <p>
                KSFE home loans run at 9%–9.75% interest. We transfer them to nationalised and private banks at 8.3%–9%, often saving borrowers ₹2,000–₹5,000 per month. KSFE charges no premature closure penalty, making the switch straightforward. We handle the entire process — outstanding certificate, NOC, title deed transfer, and fresh mortgage registration.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">NRI Home Loan in Kerala</h3>
              <p>
                Kerala has one of India's largest NRI populations — particularly Gulf workers in UAE, Saudi Arabia, Qatar, and Kuwait. We specialise in NRI home loans with full Power of Attorney support so the process can be completed without the borrower being physically present. Both salaried and self-employed NRIs are eligible.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">Home Loan Without ITR in Kerala</h3>
              <p>
                Small business owners and self-employed individuals who don't file ITR are often turned away by banks. We work with NBFCs and Housing Finance Companies that assess income based on 12–24 months of bank statements instead. If you run a business and don't have ITR, we can still find you a lender.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">Cooperative Society Loan Takeover</h3>
              <p>
                Many Keralites have housing loans with primary cooperative societies charging 9%–12%. We facilitate takeovers from these societies to banks offering significantly lower rates. Our team knows which banks accept society loan transfers and manages the entire documentation and legal process on your behalf.
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-bold mb-2">Best Home Loan Rate in Kerala 2025</h3>
              <p>
                Current home loan rates in Kerala start at 8.35% p.a. (SBI) for salaried borrowers with CIBIL 750+. Rates vary by lender, employment type, loan amount, and credit profile. We compare live offers across all our partners and present you with the best available rate — at no cost to you.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {[
              "Home Loan Kozhikode", "Home Loan Thrissur", "Home Loan Ernakulam",
              "Home Loan Kannur", "Home Loan Malappuram", "KSFE Transfer Kerala",
              "NRI Loan Kerala", "Plot Loan Kerala", "LAP Kerala", "Business Loan Kerala",
            ].map((tag) => (
              <span key={tag} className="bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      <CTABanner />
    </>
  );
}
