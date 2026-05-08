export type Surface = {
  slug: string;
  name: string;
  tagline: string;
  spec: string;
  pileHeight: string;
  infill: string;
  drainage: string;
  certification: string;
  lifespan: string;
  priceRange: string;
  idealFor: string[];
  description: string;
  longDesc: string;
  features: { label: string; value: string }[];
  useCases: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const surfaces: Surface[] = [
  {
    slug: "football-turf",
    name: "Football Turf",
    tagline: "FIFA-certified playing surfaces for every level of the game.",
    spec: "FIFA Quality Pro · 40–60mm pile",
    pileHeight: "40mm – 60mm",
    infill: "Crumb rubber + silica sand blend",
    drainage: "Perforated drainage system, 180mm/hr flow rate",
    certification: "FIFA Quality Pro 2025",
    lifespan: "10–12 years",
    priceRange: "₹40L – ₹1.2Cr",
    idealFor: ["Football academies", "Schools & colleges", "Municipal grounds", "Private clubs"],
    description: "Full 11-a-side and 5-a-side surfaces built to FIFA 2025 specifications. Our football turf installations combine the right pile height, infill density, and drainage engineering to deliver consistent ball roll, safe player interaction, and all-weather playability.",
    longDesc: "Every Turfina football surface starts with a detailed site survey and drainage model before a single roll of turf is specified. We install FIFA Quality and FIFA Quality Pro surfaces — the two international standards used by clubs, academies, and national bodies worldwide. Our pile heights range from 40mm for 5-a-side courts to 60mm for full 11-a-side pitches. The shock-pad underlay is calibrated to pass HIC (Head Injury Criterion) testing, and drainage is engineered to handle Kerala's monsoon rainfall without waterlogging. All line markings are inlaid — not painted — for permanence.",
    features: [
      { label: "Pile Height", value: "40mm – 60mm" },
      { label: "Fibre Type", value: "Monofilament polyethylene" },
      { label: "Infill", value: "Crumb rubber + silica sand" },
      { label: "Shock Pad", value: "10mm–15mm foam underlay" },
      { label: "Drainage Rate", value: "180mm/hr" },
      { label: "Certification", value: "FIFA Quality Pro 2025" },
      { label: "Warranty", value: "10 years" },
      { label: "Lead Time", value: "6–8 weeks" },
    ],
    useCases: [
      { title: "11-a-side Academy Pitch", desc: "Full-size 105m × 68m surface with FIFA Quality Pro certification. Includes floodlight provision, perimeter fencing base, and dugout drainage." },
      { title: "5-a-side Multi-Court", desc: "Up to 4 courts in the same footprint as one 11-a-side. Popular with schools and residential developments. Separate line markings for each court." },
      { title: "Training Ground", desc: "Smaller practice pitch with identical surface spec as match pitch. Used by academies for daily drills without wearing out the main surface." },
    ],
    faqs: [
      { q: "Can the turf be used in heavy rain?", a: "Yes. Our drainage system is engineered for Kerala's monsoon rainfall — up to 180mm per hour drains through without surface pooling." },
      { q: "How long does installation take?", a: "A standard 5-a-side court takes 4–5 weeks from ground preparation to handover. A full 11-a-side pitch is 7–9 weeks." },
      { q: "Is FIFA certification mandatory?", a: "Not legally, but FIFA Quality certification is required by most football associations for official match play. We recommend it for all competitive pitches." },
      { q: "What maintenance is required?", a: "Monthly brushing and annual infill top-up. We provide a full maintenance guide and offer annual service contracts." },
    ],
  },
  {
    slug: "multi-sport-courts",
    name: "Multi-Sport Courts",
    tagline: "One surface. Six sports. Maximum return on every square metre.",
    spec: "Polypropylene · 3mm–8mm",
    pileHeight: "3mm – 8mm (hard court)",
    infill: "None — solid modular tile system",
    drainage: "Permeable tile gaps, self-draining",
    certification: "ITF Category 3 · BWF Approved",
    lifespan: "12–15 years",
    priceRange: "₹12L – ₹60L",
    idealFor: ["Schools & colleges", "Residential communities", "Corporate campuses", "NRI private estates"],
    description: "Dual and multi-use courts for basketball, volleyball, tennis, badminton, futsal, and handball. UV-stable polypropylene tiles rated for 15,000+ hours of play. Installed in as little as 3 weeks.",
    longDesc: "Multi-sport courts are the highest-ROI surface we install. A single 28m × 15m footprint can host basketball, volleyball, badminton, and tennis simultaneously with dual-colour line markings. Our polypropylene modular tile system is self-draining, UV-stable, and requires zero maintenance beyond occasional cleaning. The surface is ITF Category 3 certified for tennis and BWF-approved for badminton. For schools, this means one court serves the entire sports curriculum. For residential developers, it becomes the centrepiece amenity photograph.",
    features: [
      { label: "Surface Type", value: "Modular polypropylene tiles" },
      { label: "Tile Thickness", value: "12.5mm interlocking" },
      { label: "Drainage", value: "Permeable tile gaps" },
      { label: "Sports Supported", value: "Basketball, volleyball, tennis, badminton, futsal, handball" },
      { label: "UV Rating", value: "15,000+ hours" },
      { label: "Certification", value: "ITF Cat 3 · BWF Approved" },
      { label: "Warranty", value: "12 years" },
      { label: "Lead Time", value: "3–4 weeks" },
    ],
    useCases: [
      { title: "School Sports Court", desc: "Single court covering basketball, volleyball, and badminton with colour-coded line markings per sport. Government school approval documentation provided." },
      { title: "Residential Amenity Court", desc: "Premium hard court for apartment complexes and villa communities. Becomes the anchor sports amenity photograph for property marketing." },
      { title: "Indoor Conversion", desc: "Same tile system available for indoor sports halls. Installed over concrete with no adhesive — fully reversible if the space is repurposed." },
    ],
    faqs: [
      { q: "How many sports can be marked on one court?", a: "Up to 6 sports with dual-colour line markings. We recommend a maximum of 3 for visual clarity." },
      { q: "Can it be installed indoors?", a: "Yes. The modular tile system works on any flat concrete or timber sub-floor with no adhesive required." },
      { q: "What colours are available?", a: "12 standard colours. Custom RAL colours are available on orders of 500m² and above." },
      { q: "What is the minimum court size?", a: "A badminton court requires 13.4m × 6.1m. We can install a single-sport court from ₹12 lakh upwards." },
    ],
  },
  {
    slug: "cricket-outfields",
    name: "Cricket Outfields",
    tagline: "Outfield and practice surfaces engineered for the subcontinent game.",
    spec: "Nylon 6.6 · 12mm–20mm",
    pileHeight: "12mm – 20mm",
    infill: "Sand infill — natural-look finish",
    drainage: "Stone aggregate base with lateral drains",
    certification: "ECB Approved · BCCI compatible",
    lifespan: "8–10 years",
    priceRange: "₹25L – ₹90L",
    idealFor: ["Cricket clubs", "Academies", "NRI estates", "Schools"],
    description: "Nylon 6.6 outfield surfaces with consistent ball run-out, player-safe fibre density, and natural aesthetics that photograph like grass. Practice nets and pitch surrounds also available.",
    longDesc: "Cricket turf requires a completely different specification to football — lower pile height for true ball run-out, higher fibre density for player safety during diving, and sand-only infill for a natural visual appearance. Our Nylon 6.6 outfield surfaces are used by clubs and academies who demand consistent bounce and a surface that behaves predictably across Kerala's monsoon and dry seasons. We also install practice net turf, pitch surrounds, and run-up strips. Our ECB-approved specification ensures compatibility with any future official match use.",
    features: [
      { label: "Pile Height", value: "12mm – 20mm" },
      { label: "Fibre Type", value: "Nylon 6.6 texturised" },
      { label: "Infill", value: "Washed silica sand" },
      { label: "Base", value: "Stone aggregate with lateral drains" },
      { label: "Certification", value: "ECB Approved" },
      { label: "Ball Pace Rating", value: "Medium–fast" },
      { label: "Warranty", value: "8 years" },
      { label: "Lead Time", value: "5–7 weeks" },
    ],
    useCases: [
      { title: "Full Outfield", desc: "Complete outfield installation with boundary marking, run-up strips, and pitch surround. Includes drainage engineering for monsoon months." },
      { title: "Practice Net Surface", desc: "6m × 22m net lane surfaces for batting and bowling practice. Installed indoors or outdoors. Same Nylon 6.6 spec as the outfield." },
      { title: "NRI Estate Cricket Lawn", desc: "Aesthetic cricket lawn for private estates — natural-look 12mm surface that reads as grass in photography. Doubles as a garden lawn." },
    ],
    faqs: [
      { q: "Can synthetic outfield be used for official matches?", a: "Yes, subject to the relevant governing body approval. Our ECB-approved spec meets the requirements for most domestic tournament levels." },
      { q: "Does the surface get hot in summer?", a: "Nylon 6.6 runs 8–12°C cooler than polyethylene turf under direct sun. Sand-only infill also reduces heat retention compared to rubber infill." },
      { q: "Can we install just the practice nets area?", a: "Absolutely. Minimum installation is a single 6m × 22m net lane. Many academies start with nets and add the outfield in a later phase." },
      { q: "How is the pitch strip handled?", a: "The central pitch strip is left as a standard concrete or matting pitch. We install the turf outfield around it with a seamless perimeter join." },
    ],
  },
  {
    slug: "athletic-tracks",
    name: "Athletic Tracks",
    tagline: "IAAF-grade running tracks for schools, clubs, and competition venues.",
    spec: "IAAF-grade polyurethane · 13mm",
    pileHeight: "13mm (solid PU surface)",
    infill: "No infill — poured polyurethane",
    drainage: "Integrated sub-surface drainage layer",
    certification: "IAAF Level 1 · World Athletics Certified",
    lifespan: "15–20 years",
    priceRange: "₹60L – ₹1.5Cr",
    idealFor: ["Government schools", "Private colleges", "Municipal sports complexes", "Athletics clubs"],
    description: "Full 400m synthetic tracks and sprint straights with IAAF Level 1 certification. Polyurethane surface in full-pour or prefabricated roll systems. Engineered for Kerala's climate and approved for state-level competition.",
    longDesc: "Athletic tracks are our most technically demanding installation — and our most prestigious. A full 400m track requires precise geometry, drainage engineering across 10,000m²+, and a surface material that delivers consistent hardness across the full Kerala temperature range from 20°C to 40°C. Our polyurethane tracks are installed in a full-pour system (mixed on-site) or a prefabricated roll system for tighter timelines. Both achieve IAAF Level 1 certification required for state-level competition. Sprint straights and combined football/athletics grounds are also within our scope.",
    features: [
      { label: "Surface Type", value: "Polyurethane full-pour" },
      { label: "Thickness", value: "13mm" },
      { label: "Number of Lanes", value: "6 or 8 lanes (standard)" },
      { label: "Certification", value: "IAAF Level 1" },
      { label: "Surface Hardness", value: "35–50 Shore A" },
      { label: "Temperature Range", value: "-20°C to +70°C" },
      { label: "Warranty", value: "15 years" },
      { label: "Lead Time", value: "10–14 weeks" },
    ],
    useCases: [
      { title: "Full 400m Competition Track", desc: "8-lane 400m track with IAAF Level 1 certification. Includes throwing circle, long jump run-up, high jump fan, and all field event zones." },
      { title: "Sprint Straight", desc: "100m–200m sprint straight for schools without space for a full oval. 6 lanes, fully certified for district-level sprint events." },
      { title: "Combined Football + Athletics", desc: "400m athletics track surrounding a full football pitch. Dual-use installation maximises the site footprint for schools and municipal grounds." },
    ],
    faqs: [
      { q: "Is IAAF certification required for school use?", a: "Not for physical education. IAAF Level 1 is required for official inter-school and district competition. We recommend it if the school hosts competitive events." },
      { q: "How long does a full 400m track take?", a: "10–14 weeks from ground preparation to handover. Complex sites with poor drainage may require an additional 2 weeks for sub-base work." },
      { q: "Can the inner field be used for football?", a: "Yes. The inner field area can simultaneously be a full-size football pitch with FIFA Quality turf installed in a separate scope." },
      { q: "What colours are available for lane markings?", a: "Standard white lane markings with colour-coded event zones. Custom track colour (red, blue, green, terracotta) is available." },
    ],
  },
];
