import CityPage from "@/components/CityPage";

export const metadata = {
  title: "Sports Turf Construction Kozhikode | Turfina Kerala",
  description: "FIFA-certified football turf and sports surfaces in Kozhikode (Calicut). Schools, academies, and private investors. Free site visit within 48 hours.",
};

export default function KozhikodePage() {
  return (
    <CityPage
      city={{
        name: "Kozhikode",
        slug: "kozhikode",
        tagline: "Kerala's football capital.",
        heroDesc: "Kozhikode is the heartbeat of Kerala football — home to passionate club culture, ISL-affiliated academies, and a municipal sports infrastructure that's growing faster than anywhere in the state. Turfina has a permanently stationed crew in Calicut with active projects across the city.",
        population: "21 lakh",
        districts: "Kozhikode District",
        footballFact: "Kozhikode district produces more Kerala state football team players per capita than any other district in India. The city has over 200 registered football clubs — one of the highest densities in the country.",
        keyword: "sports turf Kozhikode",
        activeProjects: 6,
        stats: [
          { label: "Active projects", value: "6" },
          { label: "Response time", value: "24 hrs" },
          { label: "Crew stationed", value: "Calicut" },
          { label: "Projects delivered", value: "2024–2025" },
        ],
        segments: [
          {
            icon: "⚽",
            title: "Football Academies & Clubs",
            desc: "Kozhikode has more football clubs per square kilometre than almost any Indian city. Our FIFA Quality Pro surfaces are the standard for any academy serious about player development.",
          },
          {
            icon: "🏫",
            title: "Government & Private Schools",
            desc: "The Kerala school games circuit runs through Kozhikode. Schools hosting district competitions need certified surfaces — we handle the specification, installation, and certification documentation.",
          },
          {
            icon: "🏗️",
            title: "Real Estate Developers",
            desc: "Premium residential projects in Westhill, Chevayur, and Feroke are incorporating sports courts as key amenity differentiators. We deliver in 3–6 weeks for launch deadlines.",
          },
          {
            icon: "🌐",
            title: "NRI Investors",
            desc: "A significant NRI community with roots in Kozhikode is building private estates with sports facilities. Our managed-turf model offers pay-per-play revenue potential for larger installations.",
          },
        ],
        seoKeywords: [
          "artificial turf Kozhikode",
          "football turf Calicut",
          "synthetic grass Kozhikode",
          "sports surface Calicut",
          "FIFA turf Kerala",
          "turf installation Kozhikode",
          "5-a-side turf Calicut",
          "sports court Kozhikode",
          "football ground construction Kerala",
          "artificial football pitch Kozhikode",
          "turf contractor Calicut",
          "playground surface Kozhikode",
        ],
      }}
    />
  );
}
