import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Logo size="md" variant="light" />
          <p className="text-sm leading-relaxed text-gray-400 mt-4">
            Kerala&apos;s trusted loan DSA — connecting you with the best home loan and property loan offers from 16+ nationalised banks, private banks, and NBFCs.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Home Loans</p>
          <ul className="space-y-1.5 text-xs text-gray-400">
            {["Plot Purchase Loan", "Plot + Construction", "Home Purchase Loan", "Under Construction", "Renovation Loan", "Balance Transfer"].map((l) => (
              <li key={l}><Link href="/services" className="hover:text-[#F5A623] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Other Loans</p>
          <ul className="space-y-1.5 text-xs text-gray-400">
            {[
              { label: "Loan Against Property", href: "/services" },
              { label: "Takeover + Top-Up", href: "/services" },
              { label: "Business Loans", href: "/services" },
            ].map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-[#F5A623] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
          <p className="text-white font-semibold mb-3 text-sm mt-5">Who Can Apply</p>
          <ul className="space-y-1.5 text-xs text-gray-400">
            {["Salaried", "Self-Employed", "NRI"].map((l) => (
              <li key={l}><Link href="/eligibility" className="hover:text-[#F5A623] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Contact Us</p>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="flex gap-2"><span>📞</span><span>+91 00000 00000</span></li>
            <li className="flex gap-2"><span>📧</span><span>loans@smartwaysolutions.com</span></li>
            <li className="flex gap-2"><span>📍</span><span>Kerala, India</span></li>
            <li className="flex gap-2"><span>🕐</span><span>Mon–Sat: 9 AM – 7 PM</span></li>
          </ul>
          <div className="flex flex-col gap-2 mt-5">
            <a href="https://www.instagram.com/smartwaysolutionsloanservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5A623] transition-colors text-xs underline">
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/search/Smart+Way+Solutions+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#F5A623] transition-colors text-xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Smart Way Solutions. All rights reserved. | Kerala, India
      </div>
    </footer>
  );
}
