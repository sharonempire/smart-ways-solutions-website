"use client";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919000000000";
const MESSAGE = encodeURIComponent(
  "Hi Smart Way Solutions, I'm interested in a loan. Can you help me?"
);

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Delay mount so the FAB "pops in" after page load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Ripple ring — behind the button */}
      <span
        aria-hidden="true"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full pointer-events-none"
        style={{
          background: "rgba(37,211,102,0.25)",
          animation: mounted ? "wa-ripple 2.2s ease-out infinite" : "none",
        }}
      />

      {/* FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white rounded-full shadow-lg"
        style={{
          padding: "10px 14px 10px 12px",
          gap: "0",
          transform: mounted
            ? hovered
              ? "scale(1.08) translateY(-2px)"
              : "scale(1) translateY(0)"
            : "scale(0) translateY(20px)",
          transition: mounted
            ? "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease"
            : "transform 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.9s",
          boxShadow: hovered
            ? "0 8px 28px -4px rgba(37,211,102,0.55)"
            : "0 4px 18px -4px rgba(37,211,102,0.4)",
        }}
      >
        {/* WhatsApp icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"
          style={{ width: 24, height: 24, flexShrink: 0 }}>
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.829.737 5.484 2.027 7.789L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.782-1.857l-.487-.29-5.002 1.191 1.22-4.873-.316-.501A13.253 13.253 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.63-.199-.896.199-.265.398-1.03 1.294-1.262 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.201-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.896-2.162-1.228-2.96-.323-.777-.652-.672-.896-.685l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.362-1.394 3.323s1.428 3.854 1.627 4.12c.199.265 2.81 4.291 6.808 6.017.951.411 1.693.656 2.271.84.954.303 1.823.26 2.51.158.765-.114 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.464z" />
        </svg>

        {/* Tooltip label — slides in on hover */}
        <span
          className="text-sm font-bold whitespace-nowrap overflow-hidden"
          style={{
            maxWidth: hovered ? "120px" : "0px",
            marginLeft: hovered ? "8px" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "max-width 0.28s ease, opacity 0.22s ease, margin-left 0.28s ease",
          }}
        >
          Chat with us
        </span>
      </a>

      <style>{`
        @keyframes wa-ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </>
  );
}
