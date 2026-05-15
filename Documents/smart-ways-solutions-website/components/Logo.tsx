import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ size = "md", variant = "dark" }: LogoProps) {
  const scale: Record<string, number> = { sm: 0.78, md: 1, lg: 1.32 };
  const s = scale[size];

  const textDark = variant === "dark" ? "#1a1a1a" : "#ffffff";
  const textSub = variant === "dark" ? "#888888" : "rgba(255,255,255,0.55)";

  // Overall viewBox: 148 × 38
  const vw = 148, vh = 38;
  const w = Math.round(vw * s);
  const h = Math.round(vh * s);

  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="Smart Way Solutions Home">
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${vw} ${vh}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* ── Icon mark: amber rounded square with forward path arrow ── */}
        {/* Rounded square bg */}
        <rect x="0" y="2" width="34" height="34" rx="8" fill="#F5A623" />

        {/* Forward-path arrow — three stacked right-pointing chevrons */}
        {/* Bottom chevron */}
        <polyline points="8,26 14,20 8,14" stroke="#1a1a1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Middle chevron */}
        <polyline points="14,26 20,20 14,14" stroke="#1a1a1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Top chevron — white for contrast pop */}
        <polyline points="20,26 26,20 20,14" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* ── Wordmark ── */}
        {/* "smart" — bold dark/white */}
        <text
          x="41"
          y="23"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontWeight="900"
          fontSize="18"
          fill={textDark}
          letterSpacing="-0.3"
        >
          smart
        </text>

        {/* "way" — amber always */}
        <text
          x="95"
          y="23"
          fontFamily="'Arial Black', Arial, sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="#F5A623"
          letterSpacing="-0.3"
        >
          way
        </text>

        {/* "solutions" — subdued subtitle beneath */}
        <text
          x="41"
          y="34"
          fontFamily="Arial, sans-serif"
          fontWeight="600"
          fontSize="8"
          fill={textSub}
          letterSpacing="2.2"
        >
          SOLUTIONS
        </text>
      </svg>
    </Link>
  );
}
