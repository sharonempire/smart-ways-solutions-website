import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const BASE_URL = process.env.SITE_URL ?? "https://www.smartwaysolutions.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Smart Way Solutions | Home Loan & Finance Consultancy Kerala",
    template: "%s | Smart Way Solutions Kerala",
  },
  description:
    "Kerala's trusted loan DSA — home loans, KSFE takeover + top-up, loan against property, and business loans from 16+ nationalised banks, private banks, and NBFCs. Salaried, self-employed, and NRI. Free service.",
  keywords: [
    "home loan Kerala",
    "home loan consultant Kerala",
    "KSFE loan transfer",
    "KSFE balance transfer",
    "loan takeover Kerala",
    "SBI home loan Kerala",
    "HDFC home loan Kerala",
    "NRI home loan Kerala",
    "loan against property Kerala",
    "home loan without ITR Kerala",
    "DSA loan agent Kerala",
    "best home loan rate Kerala",
    "plot purchase loan Kerala",
    "business loan Kerala",
  ],
  authors: [{ name: "Smart Way Solutions" }],
  creator: "Smart Way Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Smart Way Solutions",
    title: "Smart Way Solutions | Home Loan & Finance Consultancy Kerala",
    description:
      "Kerala's trusted loan DSA — home loans, KSFE takeover, LAP, and business loans from 16+ banks. Salaried, self-employed, NRI welcome. Free service.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Way Solutions — Kerala Home Loan Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Way Solutions | Home Loan Kerala",
    description: "Get the best home loan rate from 16+ banks. Kerala DSA — free service.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd />
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
