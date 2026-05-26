import CityPage from "@/components/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Kannur | Smart Way Solutions Kerala",
  description: "Best home loan rates in Kannur from SBI, HDFC, Federal Bank and more. Plot loans, NRI home loans, KSFE transfer — Smart Way Solutions Kerala.",
  alternates: { canonical: "https://www.smartwaysolutions.in/kannur" },
  openGraph: {
    title: "Home Loan in Kannur | Smart Way Solutions",
    description: "Get the best home loan in Kannur from 16+ banks. Free consultation. Plot loans, NRI loans, KSFE transfer.",
    url: "https://www.smartwaysolutions.in/kannur",
  },
};

export default function KannurPage() {
  return (
    <CityPage
      city="Kannur"
      district="Kannur"
      description="Home loans, plot loans, and NRI loans in Kannur district — sourced from SBI, HDFC, Federal Bank, and 13+ more lenders. Best rate guaranteed. Free service."
      localContext="Kannur has strong property demand driven by Gulf remittances — one of the highest NRI populations in Kerala. Areas like Thalassery, Payyanur, Iritty, Mattannur, and Kannur city are seeing significant construction activity. NRI plot purchase and construction loans are the most common loan type we facilitate in Kannur. We also handle takeovers from local cooperative societies and KSFE."
      popularLoanTypes={[
        "NRI Plot Purchase Loan — Kannur",
        "NRI Plot + Construction Loan",
        "Cooperative Society Loan Takeover",
        "KSFE Loan Transfer",
        "Home Purchase Loan — Kannur City",
        "Renovation Loan",
        "Loan Against Property",
        "Balance Transfer + Top-Up",
      ]}
      lenderHighlights={[
        "SBI — NRI home loan specialist",
        "Federal Bank — strong NRI desk in Kannur",
        "South Indian Bank — local presence",
        "Bank of Baroda — KSFE takeover",
        "HDFC — fast plot loan processing",
        "Muthoot Finance — LAP and top-up",
      ]}
    />
  );
}
