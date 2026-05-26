import CityPage from "@/components/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Malappuram | Smart Way Solutions Kerala",
  description: "Best home loan rates in Malappuram from SBI, Federal Bank, HDFC and more. NRI home loans, plot loans, KSFE transfer — Smart Way Solutions Kerala.",
  alternates: { canonical: "https://www.smartwaysolutions.in/malappuram" },
  openGraph: {
    title: "Home Loan in Malappuram | Smart Way Solutions",
    description: "Get the best home loan in Malappuram from 16+ banks. Free consultation. NRI loans, plot loans, KSFE transfer, business loans.",
    url: "https://www.smartwaysolutions.in/malappuram",
  },
};

export default function MalappuramPage() {
  return (
    <CityPage
      city="Malappuram"
      district="Malappuram"
      description="Home loans and NRI loans in Malappuram — one of Kerala's fastest-growing property markets. We source the best rates from SBI, Federal Bank, HDFC, and 13+ more lenders."
      localContext="Malappuram district has Kerala's highest NRI concentration with a large Gulf worker population in areas like Tirur, Kondotty, Manjeri, Perinthalmanna, Ponnani, and Malappuram city. NRI plot purchase and construction loans dominate the market here. We also facilitate loans for the growing business community in Malappuram, including small traders who may not have ITR documentation."
      popularLoanTypes={[
        "NRI Plot Purchase Loan — Malappuram",
        "NRI Construction Loan",
        "Home Purchase Loan",
        "Business Loan (Without ITR) — Malappuram Traders",
        "KSFE Loan Transfer to Bank",
        "Cooperative Society Loan Takeover",
        "Loan Against Property",
        "Balance Transfer + Top-Up",
      ]}
      lenderHighlights={[
        "Federal Bank — largest NRI presence in Malappuram",
        "SBI — best NRI home loan rates",
        "South Indian Bank — strong local network",
        "HDFC Bank — fast processing",
        "Axis Bank — plot loan approvals",
        "Bajaj Finserv — small business loans",
      ]}
    />
  );
}
