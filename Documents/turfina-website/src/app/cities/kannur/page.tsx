import CityPage from "@/components/CityPage";

export const metadata = {
  title: "Sports Turf Construction Kannur | Turfina Kerala",
  description: "FIFA-certified football turf and sports surfaces in Kannur. Schools, academies, and NRI private investors. Launching 2025. Free site visit within 48 hours.",
};

export default function KannurPage() {
  return (
    <CityPage
      city={{
        name: "Kannur",
        slug: "kannur",
        tagline: "Northern Kerala rising.",
        heroDesc: "Kannur is the fastest-growing sports infrastructure market in North Kerala. A booming NRI investor community, a strong school sports culture, and municipal bodies actively upgrading public facilities make Kannur a key expansion market for Turfina in 2025.",
        population: "26 lakh",
        districts: "Kannur District",
        footballFact: "Kannur district is home to the Northern Kerala football circuit, with clubs competing at the state-level Durand Cup qualifiers. The district's NRI community — predominantly Gulf returnees — is investing heavily in sports amenities on their estates.",
        keyword: "sports turf Kannur",
        activeProjects: 2,
        stats: [
          { label: "Active projects", value: "2" },
          { label: "Response time", value: "48 hrs" },
          { label: "Market status", value: "Launching 2025" },
          { label: "First project", value: "Q3 2025" },
        ],
        segments: [
          {
            icon: "⚽",
            title: "Football Clubs & Academies",
            desc: "Kannur's football circuit is competitive and growing. Clubs qualifying for state-level tournaments need certified surfaces to host home fixtures and retain their status.",
          },
          {
            icon: "🏫",
            title: "Schools & Colleges",
            desc: "Several CBSE and state board schools in Kannur are expanding their sports infrastructure as part of new campus builds. Multi-sport courts are the most requested facility type.",
          },
          {
            icon: "🌐",
            title: "NRI Gulf Returnees",
            desc: "Kannur has one of the largest Gulf returnee populations in Kerala. Private estates being built in Thalassery, Iritty, and Payyanur are incorporating premium sports facilities as status amenities.",
          },
          {
            icon: "🏗️",
            title: "Hospitality & Resorts",
            desc: "Kannur's growing tourism sector — particularly backwater and heritage resorts — is adding sports facilities to compete with Kovalam and Wayanad properties for the premium traveller segment.",
          },
        ],
        seoKeywords: [
          "artificial turf Kannur",
          "football turf Thalassery",
          "synthetic grass Kannur",
          "sports surface Kannur",
          "FIFA turf Kannur",
          "turf installation Kannur",
          "5-a-side turf Iritty",
          "sports court Kannur",
          "football ground construction Kannur",
          "artificial football pitch Kannur",
          "turf contractor Kannur",
          "playground surface Payyanur",
        ],
      }}
    />
  );
}
