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
            Trusted financial consultancy helping individuals and businesses
            achieve lasting financial clarity and growth.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
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
            <li>info@smartwayssolutions.com</li>
            <li>+1 (800) 000-0000</li>
            <li>123 Finance Street, Business District</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#102a5e] text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Smart Ways Solutions. All rights reserved.
      </div>
    </footer>
  );
}
