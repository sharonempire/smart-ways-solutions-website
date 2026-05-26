import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Smart Way Solutions",
  description: "Contact Smart Way Solutions — Kerala's trusted home loan DSA. Call, WhatsApp, or email us for a free consultation.",
  alternates: { canonical: "https://www.smartwaysolutions.in/contact" },
};

const WHATSAPP = "919000000000";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#F5A623] opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F5A623] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Talk to a Loan Advisor — <span className="text-[#F5A623]">Free</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Have a question about eligibility, rates, or documentation? Our advisors are available Mon–Sat, 9 AM – 7 PM. No obligation, no fees.
          </p>
          <Link
            href="/enquire"
            className="btn-shimmer inline-block bg-[#F5A623] text-black px-8 py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm"
          >
            Apply for a Loan — It&apos;s Free →
          </Link>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto">

          {/* Contact method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                ),
                label: "Call Us",
                value: "+91 00000 00000",
                sub: "Mon–Sat, 9 AM – 7 PM",
                href: "tel:+910000000000",
                cta: "Call Now",
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "Chat with us",
                sub: "Usually replies within minutes",
                href: `https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20am%20interested%20in%20a%20loan.%20Can%20you%20help%3F`,
                cta: "Open WhatsApp",
                green: true,
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                ),
                label: "Email",
                value: "loans@smartwaysolutions.com",
                sub: "We reply within 1 business day",
                href: "mailto:loans@smartwaysolutions.com",
                cta: "Send Email",
              },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col card-lift">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.green ? "bg-[#25D366]/15 text-[#25D366]" : "bg-[#F5A623]/15 text-[#F5A623]"}`}>
                  {c.icon}
                </div>
                <p className="text-[#1a1a1a] font-black text-sm mb-1">{c.label}</p>
                <p className="text-gray-700 text-sm font-semibold mb-1">{c.value}</p>
                <p className="text-gray-400 text-xs mb-5 flex-1">{c.sub}</p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-center py-2.5 rounded-xl text-sm font-black transition-colors ${
                    c.green
                      ? "bg-[#25D366] text-white hover:bg-[#1ebe57]"
                      : "bg-[#F5A623] text-black hover:bg-[#d4891a]"
                  }`}
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Quick enquiry form + info panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#1a1a1a] px-8 py-5">
                <p className="text-white font-black text-lg">Send a Message</p>
                <p className="text-gray-400 text-xs mt-1">We&apos;ll call you back within 24 hours</p>
              </div>
              <form className="p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name <span className="text-[#F5A623]">*</span></label>
                    <input type="text" required placeholder="Rajan Menon"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone <span className="text-[#F5A623]">*</span></label>
                    <input type="tel" required placeholder="+91 98765 43210"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Loan Type</label>
                  <select className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white">
                    <option value="">Select a loan type…</option>
                    <option>Home Loan</option>
                    <option>Plot Purchase Loan</option>
                    <option>KSFE / Society Takeover</option>
                    <option>Loan Against Property</option>
                    <option>Business Loan</option>
                    <option>NRI Home Loan</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={3} placeholder="Your question or requirement…"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#F5A623] text-black py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">100% free · No spam · Your data is never shared</p>
              </form>
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-5">
              <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white">
                <p className="text-[#F5A623] font-bold text-xs uppercase tracking-widest mb-4">Why Choose Smart Way</p>
                <ul className="space-y-3">
                  {[
                    "16+ bank and NBFC partners — widest options in Kerala",
                    "We compare live offers so you get the lowest rate",
                    "Full documentation handled — zero paperwork stress",
                    "Sanctions in 7–15 working days",
                    "KSFE and cooperative society takeovers — our speciality",
                    "Dedicated NRI support with PoA assistance",
                    "100% free service — paid by the bank, not you",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0 mt-1.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFF8EC] border border-[#F5A623]/30 rounded-2xl p-6">
                <p className="text-[#1a1a1a] font-black text-sm mb-2">Office Hours</p>
                <p className="text-gray-600 text-sm">Monday – Saturday: <strong>9:00 AM – 7:00 PM</strong></p>
                <p className="text-gray-400 text-xs mt-1">Sunday: Closed</p>
                <div className="mt-4 pt-4 border-t border-[#F5A623]/20">
                  <p className="text-[#1a1a1a] font-black text-sm mb-2">Follow Us</p>
                  <a
                    href="https://www.instagram.com/smartwaysolutionsloanservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#F5A623] transition-colors font-semibold"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @smartwaysolutionsloanservices
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
