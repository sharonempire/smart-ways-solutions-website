"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Loan Types" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/emi-calculator", label: "EMI Calc" },
  { href: "/eligibility-check", label: "Check Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "919000000000";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Logo size="lg" variant="dark" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive(l.href)
                    ? "text-[#1a1a1a] font-black"
                    : "text-gray-500 hover:text-[#1a1a1a]"
                }`}
              >
                {l.label}
                {/* Active underline */}
                {isActive(l.href) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#F5A623] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/enquire"
              className="bg-[#F5A623] text-black px-5 py-2 rounded-lg text-sm font-black hover:bg-[#d4891a] transition-colors"
            >
              Apply for a Loan
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel — spring overshoot on open */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[90vw] bg-white z-50 flex flex-col shadow-2xl md:hidden`}
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: open
            ? "transform 0.38s cubic-bezier(0.34, 1.28, 0.64, 1)"
            : "transform 0.28s cubic-bezier(0.4, 0, 1, 1)",
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Logo size="md" variant="dark" />
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(l.href)
                  ? "bg-[#FFF8EC] text-[#1a1a1a] font-black border border-[#F5A623]/30"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#1a1a1a]"
              }`}
            >
              <span>{l.label}</span>
              {isActive(l.href) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA strip */}
        <div className="px-4 py-5 border-t border-gray-100 space-y-3">
          <Link
            href="/enquire"
            className="block text-center bg-[#F5A623] text-black px-5 py-3 rounded-xl text-sm font-black hover:bg-[#d4891a] transition-colors"
          >
            Apply for a Loan — Free
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20a%20loan.%20Can%20you%20help%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 border-2 border-[#25D366] text-[#128C7E] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#25D366]/5 transition-colors"
          >
            {/* WhatsApp icon */}
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
          <p className="text-gray-400 text-[10px] text-center">Mon–Sat 9 AM – 7 PM · Kerala, India</p>
        </div>
      </div>
    </>
  );
}
