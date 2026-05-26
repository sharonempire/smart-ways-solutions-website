"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClicked(false), 500);
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-[88px] right-6 z-50 w-11 h-11 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? clicked
            ? "translateY(-4px) scale(0.92)"
            : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.8)",
        transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Animated arrow — bounces upward on hover via CSS */}
      <svg
        className="w-4 h-4 text-[#F5A623]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          animation: visible ? "arrow-bounce 1.8s ease-in-out infinite" : "none",
        }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>

      <style>{`
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>
    </button>
  );
}
