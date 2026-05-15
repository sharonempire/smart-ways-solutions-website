import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-[#c9a84c] font-bold text-xl mb-2">
            Smart<span className="text-white">Ways</span> Solutions
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            Kerala&apos;s trusted loan facilitation partner — connecting families and businesses with the best home loan and property loan offers from 16+ banks and NBFCs.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Loan Types" },
              { href: "/enquire", label: "Apply for a Loan" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#c9a84c] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>loans@smartwayssolutions.com</li>
            <li>+91 00000 00000</li>
            <li>Kerala, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#102a5e] text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Smart Ways Solutions. All rights reserved.
      </div>
    </footer>
  );
}
