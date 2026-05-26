export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0D0F0C] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated pitch lines */}
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect
              x="4" y="4" width="56" height="56"
              stroke="#4CAF50" strokeWidth="1.5" fill="none"
              strokeDasharray="224"
              strokeDashoffset="224"
              style={{ animation: "draw 1.2s ease forwards" }}
            />
            <line
              x1="32" y1="4" x2="32" y2="60"
              stroke="#4CAF50" strokeWidth="1"
              strokeDasharray="56" strokeDashoffset="56"
              style={{ animation: "draw 1.2s ease 0.3s forwards" }}
            />
            <ellipse
              cx="32" cy="32" rx="14" ry="10"
              stroke="#4CAF50" strokeWidth="1" fill="none"
              strokeDasharray="75" strokeDashoffset="75"
              style={{ animation: "draw 1.2s ease 0.6s forwards" }}
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <span className="block w-6 h-px bg-[#4CAF50]/40" />
          <p className="text-[#F4EFE6]/40 text-[9px] tracking-[0.3em] uppercase font-medium">Turfina</p>
          <span className="block w-6 h-px bg-[#4CAF50]/40" />
        </div>
      </div>

      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
