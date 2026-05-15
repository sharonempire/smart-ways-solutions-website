import CityPage from "@/components/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Kozhikode | Smart Way Solutions Kerala",
  description: "Best home loan rates in Kozhikode from SBI, HDFC, ICICI, Federal Bank and more. KSFE transfer, NRI loans, plot loans — Smart Way Solutions, Kerala's trusted DSA.",
  alternates: { canonical: "https://www.smartwaysolutions.in/kozhikode" },
  openGraph: {
    title: "Home Loan in Kozhikode | Smart Way Solutions",
    description: "Get the best home loan in Kozhikode from 16+ banks and NBFCs. Free consultation. KSFE transfer, NRI loans, plot loans.",
    url: "https://www.smartwaysolutions.in/kozhikode",
  },
};

export default function KozhikodePage() {
  return (
    <CityPage
      city="Kozhikode"
      district="Kozhikode"
      description="Get the best home loan rates in Kozhikode from SBI, HDFC, ICICI, Federal Bank, and 12+ more lenders. One enquiry — we compare all and get you the lowest rate."
      localContext="Kozhikode (Calicut) is one of Kerala's most active property markets, driven by a large NRI population (Gulf returnees) and strong demand in areas like Mavoor Road, Medical College, Feroke, Ramanattukara, and Calicut Beach. We facilitate home loans for Kozhikode residents buying plots, constructing homes, or transferring high-interest KSFE and cooperative society loans to banks."
      popularLoanTypes={[
        "Plot Purchase Loan — Kozhikode",
        "Home Purchase Loan — Ready Flats & Villas",
        "KSFE Loan Transfer to Bank",
        "Cooperative Society Loan Takeover",
        "NRI Home Loan (Gulf Workers)",
        "Loan Against Property — Kozhikode",
        "Home Renovation Loan",
        "Business Loan — Kozhikode Traders",
      ]}
      lenderHighlights={[
        "SBI — lowest home loan rates from 8.35%",
        "Federal Bank — strong NRI loan desk in Kozhikode",
        "South Indian Bank — Kozhikode headquarters",
        "HDFC & ICICI — fast approvals",
        "Muthoot & Manappuram — gold loan + LAP",
        "Bank of Baroda — KSFE takeover accepted",
      ]}
    />
  );
}
