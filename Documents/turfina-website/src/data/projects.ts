export type Project = {
  slug: string;
  name: string;
  location: string;
  city: string;
  country: string;
  surface: string;
  surfaceSlug: string;
  area: string;
  year: string;
  duration: string;
  budget: string;
  tag: string;
  tagGreen: boolean;
  client: string;
  clientType: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: string;
  quoteName: string;
  quoteTitle: string;
  specs: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "al-manamah-football-academy",
    name: "Al Manamah Football Academy",
    location: "Manama, Bahrain",
    city: "Manama",
    country: "Bahrain",
    surface: "Football Turf",
    surfaceSlug: "football-turf",
    area: "7,140 m²",
    year: "2022",
    duration: "9 weeks",
    budget: "₹1.1 Cr",
    tag: "GCC Reference",
    tagGreen: true,
    client: "Al Manamah FC Development Trust",
    clientType: "Football Academy",
    challenge: "A full 11-a-side academy pitch on reclaimed coastal land with poor sub-base bearing capacity and high water table. Previous contractor had failed to solve the drainage problem over two seasons.",
    solution: "We redesigned the drainage system from scratch — installing a French drain perimeter ring and a herringbone lateral drain network at 500mm centres before laying the sub-base. A 15mm shock-pad was specified to compensate for the softer ground conditions below.",
    outcome: "Surface passed FIFA Quality Pro testing on first inspection. The academy now hosts Bahrain Premier League youth fixtures and runs 6 training sessions per day across the pitch.",
    quote: "Turfina solved in 9 weeks what two previous contractors couldn't fix in two years. The drainage has performed through two Bahrain rainy seasons without a single waterlogged session.",
    quoteName: "Ahmed Al Farsi",
    quoteTitle: "Academy Director, Al Manamah FC",
    specs: [
      { label: "Surface", value: "FIFA Quality Pro" },
      { label: "Pile Height", value: "55mm monofilament PE" },
      { label: "Area", value: "7,140 m²" },
      { label: "Shock Pad", value: "15mm foam underlay" },
      { label: "Drainage", value: "Herringbone lateral + perimeter ring" },
      { label: "Line Marking", value: "Inlaid white — FIFA 2022 spec" },
      { label: "Duration", value: "9 weeks" },
      { label: "Handover", value: "March 2022" },
    ],
  },
  {
    slug: "kozhikode-municipal-ground",
    name: "Kozhikode Municipal Football Ground",
    location: "Kozhikode, Kerala",
    city: "Kozhikode",
    country: "India",
    surface: "Football Turf",
    surfaceSlug: "football-turf",
    area: "2,800 m²",
    year: "2024",
    duration: "5 weeks",
    budget: "₹48L",
    tag: "Kerala Launch",
    tagGreen: true,
    client: "Kozhikode Municipal Corporation",
    clientType: "Municipal Body",
    challenge: "Replacing a deteriorated natural grass ground used by 4 local clubs and a school. The client needed 4 × 5-a-side courts in the same footprint, operational within 6 weeks for the district league season opener.",
    solution: "We divided the 2,800m² footprint into 4 equal 5-a-side courts with shared perimeter fencing and individual gate access per court. A single unified drainage system was designed beneath all four courts for cost efficiency. All works completed in 5 weeks.",
    outcome: "All 4 courts opened on schedule for the district league. Combined utilisation across all courts exceeds 14 hours per day. The municipal corporation has since commissioned 2 additional courts at a second site.",
    quote: "We expected delays. There were none. The quality is comparable to what I've seen in Dubai — I didn't expect that standard in Kozhikode.",
    quoteName: "Pradeep K.",
    quoteTitle: "Sports Officer, Kozhikode Municipal Corporation",
    specs: [
      { label: "Surface", value: "FIFA Quality" },
      { label: "Pile Height", value: "40mm" },
      { label: "Courts", value: "4 × 5-a-side" },
      { label: "Area", value: "2,800 m² total" },
      { label: "Drainage", value: "Unified sub-surface system" },
      { label: "Fencing", value: "4m GI chain-link perimeter" },
      { label: "Duration", value: "5 weeks" },
      { label: "Handover", value: "September 2024" },
    ],
  },
  {
    slug: "nri-villa-complex-malappuram",
    name: "NRI Villa Complex Sports Court",
    location: "Malappuram, Kerala",
    city: "Malappuram",
    country: "India",
    surface: "Multi-Sport Courts",
    surfaceSlug: "multi-sport-courts",
    area: "1,200 m²",
    year: "2025",
    duration: "3 weeks",
    budget: "₹32L",
    tag: "Private Estate",
    tagGreen: false,
    client: "Private NRI Developer",
    clientType: "Residential Developer",
    challenge: "A premium 24-villa gated community needed a sports amenity court as the anchor feature for their marketing launch. The developer had 3 weeks before the launch event and a strict aesthetic brief — it had to photograph like a five-star resort.",
    solution: "We selected a premium blue/green dual-colour polypropylene tile system with tennis and basketball dual markings. The court was framed with a perimeter LED strip channel designed for evening photography. Installed and handover-ready in 19 days.",
    outcome: "The court became the hero image of the developer's launch campaign. All 24 villas were sold within 6 weeks of launch. The developer has since engaged Turfina for their second project in Kannur.",
    quote: "Every buyer who walked the site asked about the court first. It did more selling than any brochure.",
    quoteName: "Confidential",
    quoteTitle: "Project Developer, Malappuram",
    specs: [
      { label: "Surface", value: "Premium polypropylene tiles" },
      { label: "Sports", value: "Tennis + Basketball" },
      { label: "Area", value: "1,200 m²" },
      { label: "Colour", value: "Blue court / green surround" },
      { label: "Lighting", value: "LED perimeter channel provision" },
      { label: "Line Marking", value: "Dual-sport inlaid" },
      { label: "Duration", value: "19 days" },
      { label: "Handover", value: "February 2025" },
    ],
  },
  {
    slug: "ghss-calicut-athletic-track",
    name: "GHSS Calicut — Full Athletic Track",
    location: "Kozhikode, Kerala",
    city: "Kozhikode",
    country: "India",
    surface: "Athletic Tracks",
    surfaceSlug: "athletic-tracks",
    area: "11,000 m²",
    year: "2025",
    duration: "13 weeks",
    budget: "₹1.4 Cr",
    tag: "Institutional",
    tagGreen: false,
    client: "Government Higher Secondary School, Calicut",
    clientType: "Government School",
    challenge: "A government school with a 400m natural grass track that had become unusable during monsoon. The school hosts the district athletics championship and needed IAAF-certifiable surfaces to retain hosting rights.",
    solution: "Full 400m polyurethane track in 8 lanes with a combined inner football pitch in FIFA Quality turf. The dual-use design gave the school both an athletics track and a competitive football ground within the same construction contract.",
    outcome: "The track passed IAAF Level 1 certification on first inspection — the first IAAF-certified track in Malappuram district. The school retained hosting rights for the district championship and added inter-school football to its calendar.",
    quote: "This track changed what our school means to this district. Students who would have gone elsewhere for athletics training now stay. That's the real return on this investment.",
    quoteName: "M. Suresh Kumar",
    quoteTitle: "Headmaster, GHSS Calicut",
    specs: [
      { label: "Track Surface", value: "Polyurethane full-pour 13mm" },
      { label: "Lanes", value: "8 lanes × 400m" },
      { label: "Certification", value: "IAAF Level 1" },
      { label: "Inner Pitch", value: "FIFA Quality football turf" },
      { label: "Total Area", value: "11,000 m²" },
      { label: "Field Events", value: "Long jump, high jump, shot put zones" },
      { label: "Duration", value: "13 weeks" },
      { label: "Handover", value: "April 2025" },
    ],
  },
];
