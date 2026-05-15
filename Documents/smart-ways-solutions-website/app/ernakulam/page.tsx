import CityPage from "@/components/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan in Ernakulam | Smart Way Solutions Kerala",
  description: "Best home loan rates in Ernakulam (Kochi) from SBI, HDFC, ICICI, Axis Bank and more. Flat loans, KSFE transfer, NRI loans — Smart Way Solutions Kerala.",
  alternates: { canonical: "https://www.smartwaysolutions.in/ernakulam" },
  openGraph: {
    title: "Home Loan in Ernakulam | Smart Way Solutions",
    description: "Get the best home loan in Ernakulam (Kochi) from 16+ banks and NBFCs. Free consultation. Flat loans, KSFE transfer, NRI loans.",
    url: "https://www.smartwaysolutions.in/ernakulam",
  },
};

export default function ErnakulamPage() {
  return (
    <CityPage
      city="Ernakulam"
      district="Ernakulam"
      description="Home loans and property loans in Ernakulam (Kochi) — Kerala's commercial capital. We source the best rates for flats, villas, plots, and commercial properties from all major banks."
      localContext="Ernakulam is Kerala's fastest-growing property market with active demand in Kakkanad, Edapally, Aluva, Angamaly, Perumbavoor, Thrippunithura, and Kochi city. The area has a significant IT and corporate workforce as well as a large NRI population. We facilitate home loans for flat purchases (under construction and ready), plot loans, and high-value property transactions in Ernakulam district."
      popularLoanTypes={[
        "Flat Purchase Loan — Kochi / Kakkanad",
        "Under Construction Loan — Builder Tie-ups",
        "NRI Home Loan (Gulf + Global)",
        "Plot Purchase Loan — Aluva, Angamaly",
        "Home Loan Balance Transfer",
        "Loan Against Property — Ernakulam",
        "Business Loan — Kochi Entrepreneurs",
        "KSFE Loan Transfer to Bank",
      ]}
      lenderHighlights={[
        "HDFC & ICICI — market leaders in Kochi",
        "Axis Bank — fast flat loan approvals",
        "SBI — best rates for IT sector salaried",
        "Kotak Mahindra — high-value property loans",
        "Federal Bank — strong NRI desk",
        "Bajaj Finserv & Tata Capital — LAP specialists",
      ]}
    />
  );
}
