import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

// The JPEG has ~18% whitespace padding on each side around the blob.
// We use a larger render size + negative margin crop to fill the visual space.
const sizes: Record<string, { render: number; crop: number }> = {
  sm: { render: 80,  crop: 14 }, // visible ~52px
  md: { render: 110, crop: 20 }, // visible ~70px
  lg: { render: 150, crop: 27 }, // visible ~96px
};

export default function Logo({ size = "md", variant = "dark" }: LogoProps) {
  const { render, crop } = sizes[size];

  return (
    <Link
      href="/"
      className="flex items-center shrink-0 overflow-hidden"
      aria-label="Smart Way Solutions Home"
      style={{ margin: `-${crop * 0.5}px -${crop}px` }}
    >
      <Image
        src="/logo.jpeg"
        alt="Smart Way Solutions"
        width={render}
        height={render}
        className="object-contain block"
        style={{
          filter: variant === "light" ? "brightness(1.1) drop-shadow(0 1px 3px rgba(0,0,0,0.25))" : "none",
          flexShrink: 0,
        }}
        priority
      />
    </Link>
  );
}
