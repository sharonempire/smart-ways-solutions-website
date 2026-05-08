import CityPage from "@/components/CityPage";

export const metadata = {
  title: "Sports Turf Construction Malappuram | Turfina Kerala",
  description: "FIFA-certified football turf and sports surfaces in Malappuram. Schools, academies, and private investors. Free site visit within 48 hours.",
};

export default function MalappuramPage() {
  return (
    <CityPage
      city={{
        name: "Malappuram",
        slug: "malappuram",
        tagline: "The district that lives for football.",
        heroDesc: "Malappuram is statistically the most football-obsessed district in India. With the highest Santosh Trophy talent density in South India and a rapidly growing school sports infrastructure, demand for certified surfaces is outpacing supply. Turfina is here to close that gap.",
        population: "43 lakh",
        districts: "Malappuram District",
        footballFact: "Malappuram district has produced more Santosh Trophy (National Football Championship) players than any other district in Kerala over the past decade. Football is not a sport here — it's a cultural institution.",
        keyword: "sports turf Malappuram",
        activeProjects: 4,
        stats: [
          { label: "Active projects", value: "4" },
          { label: "Response time", value: "24 hrs" },
          { label: "District rank", value: "#1 football district" },
          { label: "First project", value: "2025" },
        ],
        segments: [
          {
            icon: "⚽",
            title: "Football Academies",
            desc: "Malappuram's academies are feeder clubs for ISL and I-League sides. The level of play demands FIFA Quality Pro surfaces, not recreational-grade turf. We build to that standard.",
          },
          {
            icon: "🏫",
            title: "Schools & Madresas",
            desc: "Malappuram has a dense network of schools — both government and Islamic institution-affiliated — with active sports programmes. Multi-sport courts serve the full curriculum in one installation.",
          },
          {
            icon: "🌐",
            title: "NRI Private Estates",
            desc: "The highest concentration of NRI-funded residential construction in Kerala is in Malappuram. Sports courts are the premium amenity of choice for villa communities in Tirur, Manjeri, and Perinthalmanna.",
          },
          {
            icon: "🏗️",
            title: "Municipal & Panchayat",
            desc: "Malappuram's local bodies are actively investing in public sports infrastructure under state schemes. We provide full documentation support for government procurement processes.",
          },
        ],
        seoKeywords: [
          "artificial turf Malappuram",
          "football turf Tirur",
          "synthetic grass Malappuram",
          "sports surface Manjeri",
          "FIFA turf Malappuram",
          "turf installation Malappuram",
          "5-a-side turf Perinthalmanna",
          "sports court Malappuram",
          "football ground construction Malappuram",
          "artificial football pitch Malappuram",
          "turf contractor Malappuram",
          "playground surface Tirur",
        ],
      }}
    />
  );
}
