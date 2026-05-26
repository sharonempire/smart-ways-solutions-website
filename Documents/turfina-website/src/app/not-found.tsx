import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0F0C] flex items-center justify-center px-6">
      {/* Pitch SVG background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, j) => (
          <div
            key={j}
            className="absolute w-full"
            style={{
              top: `${j * 12.5}%`,
              height: "12.5%",
              background: j % 2 === 0 ? "rgba(18,58,18,0.4)" : "rgba(12,40,12,0.4)",
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="40" width="1080" height="720" stroke="#4CAF50" strokeWidth="2" fill="none" />
          <line x1="600" y1="40" x2="600" y2="760" stroke="#4CAF50" strokeWidth="1.5" />
          <ellipse cx="600" cy="400" rx="120" ry="80" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
          <circle cx="600" cy="400" r="6" fill="#4CAF50" />
          <rect x="60" y="260" width="140" height="280" stroke="#4CAF50" strokeWidth="1" fill="none" />
          <rect x="1000" y="260" width="140" height="280" stroke="#4CAF50" strokeWidth="1" fill="none" />
        </svg>
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0C] via-transparent to-[#0D0F0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F0C] via-transparent to-[#0D0F0C]" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Large 404 */}
        <p
          className="text-[#4CAF50]/10 select-none leading-none mb-0"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(8rem, 20vw, 16rem)",
            fontWeight: 300,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
          }}
          aria-hidden="true"
        >
          404
        </p>

        <div className="flex items-center justify-center gap-4 mb-6 -mt-4">
          <span className="block w-8 h-px bg-[#4CAF50]" />
          <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Pitch not found</span>
          <span className="block w-8 h-px bg-[#4CAF50]" />
        </div>

        <h1
          className="text-[#F4EFE6] mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          This page went
          <br />
          <em style={{ fontStyle: "italic" }}>out of bounds.</em>
        </h1>

        <p className="text-[#F4EFE6]/40 text-sm font-light leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
          >
            Back to home
          </Link>
          <Link
            href="/enquire"
            className="border border-white/15 hover:border-white/40 text-[#F4EFE6]/60 hover:text-[#F4EFE6] px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200"
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
