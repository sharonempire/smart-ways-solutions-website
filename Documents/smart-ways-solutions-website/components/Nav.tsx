"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Loan Types" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0a1f44] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[#c9a84c] font-bold text-2xl tracking-tight">
            Smart<span className="text-white">Ways</span>
          </span>
          <span className="hidden sm:block text-gray-400 text-sm border-l border-gray-600 pl-3">
            Finance Consultancy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-[#c9a84c] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="bg-[#c9a84c] text-[#0a1f44] px-5 py-2 rounded text-sm font-semibold hover:bg-[#e2c97e] transition-colors"
          >
            Apply for a Loan
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#102a5e] px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#c9a84c] text-sm font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#c9a84c] text-[#0a1f44] px-5 py-2 rounded text-sm font-semibold text-center hover:bg-[#e2c97e] transition-colors"
          >
            Apply for a Loan
          </Link>
        </div>
      )}
    </header>
  );
}
