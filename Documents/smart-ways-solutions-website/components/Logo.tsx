import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ size = "md", variant = "light" }: LogoProps) {
  const heights: Record<string, number> = { sm: 40, md: 52, lg: 68 };
  const h = heights[size];
  const w = Math.round(h * 1.15);

  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="Smart Way Solutions Home">
      <svg
        width={w}
        height={h}
        viewBox="0 0 115 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer white border blob */}
        <path
          d="M10 36 C8 16, 28 4, 56 6 C84 8, 104 20, 102 44 C100 68, 84 94, 56 94 C28 94, 8 78, 6 56 C4 44, 10 36, 10 36Z"
          fill="white"
          opacity={variant === "dark" ? "0.15" : "0.9"}
        />
        {/* Amber blob */}
        <path
          d="M14 38 C12 20, 30 8, 56 10 C82 12, 100 24, 98 46 C96 68, 80 90, 56 90 C32 90, 14 74, 12 54 C10 44, 14 38, 14 38Z"
          fill="#F5A623"
        />
        {/* "smart" bold text */}
        <text
          x="14"
          y="58"
          fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
          fontWeight="900"
          fontSize="28"
          fill="#1a1a1a"
          letterSpacing="-0.5"
        >
          sm
        </text>
        {/* Play triangle replacing 'a' */}
        <polygon points="52,34 52,48 63,41" fill="white" />
        <text
          x="61"
          y="58"
          fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
          fontWeight="900"
          fontSize="28"
          fill="#1a1a1a"
          letterSpacing="-0.5"
        >
          rt
        </text>
        {/* "WAY SOLUTIONS" subtext */}
        <text
          x="14"
          y="74"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="9.5"
          fill="#1a1a1a"
          letterSpacing="1.8"
        >
          WAY SOLUTIONS
        </text>
      </svg>
    </Link>
  );
}
