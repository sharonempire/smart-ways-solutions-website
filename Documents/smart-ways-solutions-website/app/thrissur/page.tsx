import CityPage from "@/components/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Thrissur | Smart Way Solutions Kerala",
  description: "Best home loan rates in Thrissur from SBI, HDFC, ICICI, Federal Bank and more. KSFE transfer, NRI loans, plot loans — Smart Way Solutions, Kerala's trusted DSA.",
  alternates: { canonical: "https://www.smartwaysolutions.in/thrissur" },
  openGraph: {
    title: "Home Loan in Thrissur | Smart Way Solutions",
    description: "Get the best home loan in Thrissur from 16+ banks and NBFCs. Free consultation. KSFE transfer, NRI loans, plot loans.",
    url: "https://www.smartwaysolutions.in/thrissur",
  },
};

export default function ThrissurPage() {
  return (
    <CityPage
      city="Thrissur"
      district="Thrissur"
      description="Get the best home loan rates in Thrissur — the Cultural Capital of Kerala — from SBI, HDFC, ICICI, and 13+ more lenders. KSFE transfers, NRI loans, and property loans all covered."
      localContext="Thrissur is home to KSFE's headquarters and has one of the highest concentrations of KSFE loan holders in Kerala — making it a prime market for loan takeovers. Areas like Guruvayur, Kunnamkulam, Irinjalakuda, Chalakudy, and Thrissur city have strong property demand. We help Thrissur residents switch from KSFE and cooperative societies to banks at better rates, as well as facilitating new home loans across all categories."
      popularLoanTypes={[
        "KSFE Loan Transfer — Thrissur Specialist",
        "Cooperative Society Loan Takeover",
        "Home Purchase Loan — Thrissur City",
        "Plot Purchase + Construction Loan",
        "NRI Home Loan (Gulf Workers)",
        "Loan Against Property — Thrissur",
        "Under Construction Loan",
        "Balance Transfer + Top-Up",
      ]}
      lenderHighlights={[
        "SBI — best rates for salaried borrowers",
        "HDFC — fast processing in Thrissur",
        "Federal Bank — strong local presence",
        "Bank of Baroda — KSFE takeover accepted",
        "Bajaj Finserv — LAP and balance transfer",
        "LIC Housing Finance — competitive tenures",
      ]}
    />
  );
}
