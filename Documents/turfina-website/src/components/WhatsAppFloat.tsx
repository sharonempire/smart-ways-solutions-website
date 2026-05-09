"use client";

import { useState, useEffect, useRef } from "react";

const WA_URL = "https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20want%20to%20enquire%20about%20sports%20turf%20construction";

const presetMessages = [
  "I want a free site visit",
  "What does a 5-a-side pitch cost?",
  "I need an IAAF track",
  "I'm an NRI building in Kerala",
];

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [notified, setNotified] = useState(false);
  const [bouncing, setBouncing] = useState(false);
  const bounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notifyRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Appear after 2s */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  /* Show notification bubble after 5s if not expanded */
  useEffect(() => {
    if (!visible) return;
    notifyRef.current = setTimeout(() => {
      if (!expanded) setNotified(true);
    }, 5000);
    return () => { if (notifyRef.current) clearTimeout(notifyRef.current); };
  }, [visible, expanded]);

  /* Bounce attention animation every 8s */
  useEffect(() => {
    if (!visible) return;
    const run = () => {
      if (expanded) return;
      setBouncing(true);
      bounceRef.current = setTimeout(() => setBouncing(false), 700);
    };
    const interval = setInterval(run, 8000);
    return () => { clearInterval(interval); if (bounceRef.current) clearTimeout(bounceRef.current); };
  }, [visible, expanded]);

  const open = () => {
    setExpanded(true);
    setNotified(false);
  };
  const close = () => setExpanded(false);

  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(-4px); }
          75% { transform: translateY(-6px); }
        }
        @keyframes wa-slide-up {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wa-badge-pop {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* Expanded panel */}
        {expanded && (
          <div
            className="w-72 overflow-hidden"
            style={{
              animation: "wa-slide-up 0.3s cubic-bezier(0.22,1,0.36,1)",
              background: "#111710",
              border: "1px solid rgba(37,211,102,0.2)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,211,102,0.05)",
            }}
          >
            {/* Panel header */}
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: "#1A2D1A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#25D366" }}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#F4EFE6] font-medium text-sm leading-tight">Turfina Engineer</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" style={{ boxShadow: "0 0 4px rgba(37,211,102,0.8)" }} />
                  <span className="text-[#F4EFE6]/40 text-[9px] tracking-wider uppercase">Online · Replies in ~2 hrs</span>
                </div>
              </div>
              <button
                onClick={close}
                className="text-[#F4EFE6]/30 hover:text-[#F4EFE6] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Message bubble */}
            <div className="px-5 py-4">
              <div
                className="inline-block px-4 py-3 rounded-2xl rounded-tl-sm mb-4"
                style={{ background: "rgba(255,255,255,0.06)", maxWidth: "85%" }}
              >
                <p className="text-[#F4EFE6]/80 text-sm font-light leading-relaxed">
                  Hi 👋 Tell me about your project and I'll arrange a free site visit within 48 hours.
                </p>
                <p className="text-[#F4EFE6]/25 text-[9px] mt-1.5 text-right">just now</p>
              </div>

              {/* Quick-reply chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {presetMessages.map((msg) => (
                  <a
                    key={msg}
                    href={`https://wa.me/918000000000?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.08em] px-3 py-2 transition-all duration-150"
                    style={{
                      border: "1px solid rgba(37,211,102,0.25)",
                      color: "rgba(37,211,102,0.8)",
                      background: "rgba(37,211,102,0.04)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.12)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.04)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.25)";
                    }}
                  >
                    {msg}
                  </a>
                ))}
              </div>

              {/* Main CTA */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 text-white font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
                style={{ background: "#25D366", borderRadius: "2px" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Open WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Notification bubble */}
        {notified && !expanded && (
          <div
            className="bg-[#F4EFE6] text-[#0D0F0C] px-4 py-2.5 shadow-xl max-w-[200px]"
            style={{
              animation: "wa-slide-up 0.25s ease",
              borderRadius: "12px 12px 2px 12px",
            }}
          >
            <p className="font-semibold text-xs mb-0.5">Free site visit?</p>
            <p className="text-[#0D0F0C]/55 text-[10px] leading-snug">Engineer on-site within 48 hrs</p>
          </div>
        )}

        {/* Main button */}
        <button
          onClick={() => (expanded ? close() : open())}
          className="relative w-14 h-14 flex items-center justify-center"
          style={{
            background: "#25D366",
            borderRadius: "50%",
            boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
            animation: bouncing && !expanded ? "wa-bounce 0.7s ease" : "none",
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring — only when closed */}
          {!expanded && (
            <span
              className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
              style={{ animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite", opacity: 0.25 }}
            />
          )}

          {/* Notification badge */}
          {notified && !expanded && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              style={{ animation: "wa-badge-pop 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span className="text-white text-[8px] font-bold">1</span>
            </span>
          )}

          {/* Icon */}
          <span
            className="relative z-10 transition-all duration-300"
            style={{ transform: expanded ? "rotate(180deg) scale(0.8)" : "rotate(0) scale(1)" }}
          >
            {expanded ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </>
  );
}
