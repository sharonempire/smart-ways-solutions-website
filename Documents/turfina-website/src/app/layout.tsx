import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MagneticCursor from "@/components/MagneticCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Turfina Sports Construction | Premium Turf Solutions in Kerala",
  description:
    "GCC-grade sports turf construction for Kerala schools, academies, and investors. FIFA-endorsed surfaces, 10-year warranties, ₹40L–₹1.5Cr projects delivered on time.",
  keywords: [
    "sports turf construction Kerala",
    "artificial turf Kozhikode",
    "football turf Malappuram",
    "synthetic grass Kerala",
    "FIFA quality turf India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0F0C] text-[#F4EFE6]">
        <MagneticCursor />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
