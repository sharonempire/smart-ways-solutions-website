import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const heights: Record<string, number> = { sm: 40, md: 52, lg: 68 };

export default function Logo({ size = "md", variant = "dark" }: LogoProps) {
  const h = heights[size];
  // Logo has roughly 1:1 aspect ratio — keep it square
  const w = h;

  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="Smart Way Solutions Home">
      <Image
        src="/logo.jpeg"
        alt="Smart Way Solutions"
        width={w}
        height={h}
        className="object-contain"
        style={{
          // On dark backgrounds the white border of the logo blends in;
          // on light backgrounds it sits naturally — no filter needed.
          filter: variant === "light" ? "brightness(1.08)" : "none",
        }}
        priority
      />
    </Link>
  );
}
