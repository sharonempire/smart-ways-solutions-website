import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ size = "md", variant = "light" }: LogoProps) {
  const dims = { sm: 36, md: 48, lg: 64 };
  const h = dims[size];
  const textColor = variant === "light" ? "#1a1a1a" : "#ffffff";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      {/* Amber organic blob logo */}
      <svg
        width={h}
        height={h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer white ring */}
        <ellipse cx="50" cy="52" rx="44" ry="42" fill="white" opacity="0.35" transform="rotate(-10 50 50)" />
        {/* Amber blob */}
        <path
          d="M15 38 C12 20, 30 8, 52 10 C74 12, 88 22, 86 44 C84 66, 72 88, 50 88 C28 88, 14 72, 12 56 C10 44, 15 38, 15 38Z"
          fill="#F5A623"
        />
        {/* "smart" text */}
        <text x="18" y="55" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#1a1a1a" letterSpacing="-0.5">smart</text>
        {/* Play arrow replacing "a" dot — small triangle above the a */}
        <polygon points="47,28 53,28 50,23" fill="white" />
        {/* "WAY SOLUTIONS" subtext */}
        <text x="18" y="70" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#1a1a1a" letterSpacing="1.5">WAY SOLUTIONS</text>
      </svg>
      <span className="sr-only">Smart Way Solutions</span>
    </Link>
  );
}
