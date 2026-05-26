"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sws_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("sws_cookie_consent", "accepted");
    setVisible(false);
    // Fire GA + Pixel now that user consented
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie_consent_accepted"));
    }
  }

  function decline() {
    localStorage.setItem("sws_cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] border-t border-gray-800 px-6 py-4 md:flex items-center justify-between gap-6 shadow-2xl">
      <p className="text-gray-300 text-xs leading-relaxed mb-3 md:mb-0 max-w-2xl">
        We use cookies and analytics to improve your experience and understand how visitors use our site.
        By clicking &quot;Accept&quot;, you consent to our use of cookies as described in our{" "}
        <Link href="/privacy" className="text-[#F5A623] underline hover:no-underline">
          Privacy Policy
        </Link>
        . This site complies with India&apos;s Digital Personal Data Protection Act (DPDP), 2023.
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          className="border border-gray-600 text-gray-400 px-4 py-2 rounded-lg text-xs font-semibold hover:border-gray-400 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="bg-[#F5A623] text-black px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#d4891a] transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
