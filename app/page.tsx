import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BankPartners from "@/components/BankPartners";
import CTABanner from "@/components/CTABanner";
import EMICalculator from "@/components/EMICalculator";
import GoogleReviews from "@/components/GoogleReviews";
import WaveDivider from "@/components/WaveDivider";
import FadeIn from "@/components/FadeIn";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";
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
    location: "Kerala",
    quote: "Smart Way Solutions got my home loan sanctioned in 10 days. They handled all paperwork and got a rate 0.5% lower than what SBI quoted me directly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    loan: "Home Loan · SBI",
    saved: "Saved 0.5% on rate",
  },
  {
    name: "Anitha Suresh",
    location: "Ernakulam, Kerala",
    quote: "I had a KSFE home loan at 9.5%. Smart Way transferred it to HDFC at 8.6% — now I save ₹3,800 every month on EMI.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c38b?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    loan: "KSFE Takeover · HDFC",
    saved: "Saves ₹3,800/month",
  },
  {
    name: "Mohammed Ashraf",
    location: "Kozhikode, Kerala",
    quote: "As a Gulf NRI, I was worried about the loan process from abroad. Their team handled everything locally with my PoA and got the loan approved smoothly.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    loan: "NRI Home Loan",
    saved: "Approved in 12 days",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* amber → white */}
      <WaveDivider fromColor="#F5A623" toColor="#ffffff" />

      {/* Loan Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              What We Offer
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
              All Types of Loans, One Place
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Whether you are buying a home, transferring a high-interest loan, unlocking property value, or growing your business — we have a loan for it.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loanCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 80}>
                <TiltCard className="h-full">
                  <Link
                    href={cat.href}
                    className={`bg-white rounded-xl p-6 border-2 transition-all shadow-sm hover:shadow-md flex flex-col h-full ${cat.color}`}
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
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* white → light-gray */}
      <WaveDivider fromColor="#ffffff" toColor="#f8f8f8" flip />

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              The Process
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">How It Works</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {howItWorks.map((s, i) => (
              <FadeIn key={s.step} delay={i * 90}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                  <p className="text-[#F5A623] text-3xl font-black mb-2">{s.step}</p>
                  <p className="text-[#1a1a1a] font-bold text-sm mb-1">{s.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* light-gray → white */}
      <WaveDivider fromColor="#f8f8f8" toColor="#ffffff" />

      {/* Visual photo strip between sections */}
      <div className="bg-white py-4 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3">
          {[
            { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format&q=80", alt: "Modern Kerala home" },
            { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format&q=80", alt: "Happy family new home" },
            { src: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=600&h=400&fit=crop&auto=format&q=80", alt: "Home loan consultation" },
          ].map((img) => (
            <div key={img.src} className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Apply */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FadeIn from="left">
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
          </FadeIn>
          <FadeIn from="right" delay={100}>
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
          </FadeIn>
        </div>
      </section>

      <BankPartners />

      {/* light-gray → white (after BankPartners which is f8f8f8) */}
      <WaveDivider fromColor="#f8f8f8" toColor="#ffffff" flip />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Success Stories
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
              Keralites Who Got Approved
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <TiltCard className="h-full" maxTilt={5}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-[#F5A623]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                    {/* Loan badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#F5A623]/10 text-[#d4891a] text-[11px] font-bold px-2.5 py-1 rounded-full">{t.loan}</span>
                      <span className="text-green-600 text-[11px] font-bold">{t.saved}</span>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                        unoptimized
                      />
                      <div>
                        <p className="text-[#1a1a1a] font-black text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              Free Tool
            </span>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">Calculate Your EMI</h2>
            <p className="text-gray-500 mt-2 text-sm">Adjust the sliders to see your monthly repayment instantly.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <EMICalculator />
          </FadeIn>
        </div>
      </section>

      {/* white → light-gray */}
      <WaveDivider fromColor="#ffffff" toColor="#f8f8f8" />

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

      {/* light-gray → white */}
      <WaveDivider fromColor="#f8f8f8" toColor="#ffffff" flip />

      <GoogleReviews />

      {/* white → amber */}
      <WaveDivider fromColor="#ffffff" toColor="#F5A623" />

      <CTABanner />
    </>
  );
}
