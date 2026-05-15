"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Loan Types" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/emi-calculator", label: "EMI Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Logo size="md" variant="dark" />

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-[#F5A623] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="bg-[#F5A623] text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#d4891a] transition-colors"
          >
            Apply for a Loan
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-800"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-[#F5A623] text-sm font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            onClick={() => setOpen(false)}
            className="bg-[#F5A623] text-black px-5 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-[#d4891a] transition-colors mt-1"
          >
            Apply for a Loan
          </Link>
        </div>
      )}
    </header>
  );
}
