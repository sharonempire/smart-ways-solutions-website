export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Buying Guide" | "Technical" | "Case Study" | "Maintenance" | "Industry";
  readMinutes: number;
  date: string;
  featured: boolean;
  svgType: "football" | "multi" | "cricket" | "athletics";
  stripeOffset: number;
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-football-turf-pile-height",
    title: "Pile height 40mm vs 60mm: What actually matters for your football pitch",
    excerpt: "Most buyers focus on brand and price. Pile height is the spec that determines how the ball rolls, how players feel after 90 minutes, and how long your infill lasts. Here's what the data says.",
    category: "Buying Guide",
    readMinutes: 7,
    date: "2025-03-12",
    featured: true,
    svgType: "football",
    stripeOffset: 0,
  },
  {
    slug: "fifa-quality-vs-fifa-quality-pro-difference",
    title: "FIFA Quality vs FIFA Quality Pro: the real difference for academies in Kerala",
    excerpt: "Both carry the FIFA badge. Only one requires ball rebound within 0.5m of a reference point at -10°C. If your pitch is in Kozhikode, that test is irrelevant — but what else does Pro certification actually guarantee?",
    category: "Technical",
    readMinutes: 5,
    date: "2025-02-28",
    featured: false,
    svgType: "football",
    stripeOffset: 1,
  },
  {
    slug: "kozhikode-municipal-5-a-side-case-study",
    title: "How Kozhikode Municipal turned one ground into four 5-a-side pitches — and broke even in 14 months",
    excerpt: "The brief was straightforward: maximize usage on a constrained urban site. The solution involved drainage redesign, retractable netting, and a booking model we'd never tried in Kerala before.",
    category: "Case Study",
    readMinutes: 9,
    date: "2025-01-15",
    featured: true,
    svgType: "multi",
    stripeOffset: 0,
  },
  {
    slug: "infill-maintenance-guide-kerala-climate",
    title: "Infill maintenance in Kerala's monsoon: a practical guide for pitch owners",
    excerpt: "SBR rubber infill migrates. Heavy rain accelerates it. If you don't top up at the right time, you're looking at uneven bounce, increased joint stress, and a voided warranty. Schedule this right.",
    category: "Maintenance",
    readMinutes: 6,
    date: "2024-12-05",
    featured: false,
    svgType: "football",
    stripeOffset: 1,
  },
  {
    slug: "athletic-track-iaaf-level-1-cost-india",
    title: "What an IAAF Level 1 athletic track actually costs in India — and who can justify it",
    excerpt: "At ₹80L–₹3Cr, a full 400m polyurethane track is the largest single sports infrastructure investment most schools ever make. We break down where the money goes and when it's worth it.",
    category: "Buying Guide",
    readMinutes: 8,
    date: "2024-11-20",
    featured: false,
    svgType: "athletics",
    stripeOffset: 0,
  },
  {
    slug: "gcc-turf-standards-india-comparison",
    title: "Why GCC turf standards differ from Indian market norms — and what it means for your pitch",
    excerpt: "Turf sold in India is often tested in European climates. GCC specifications account for 45°C heat, 80% humidity, and UV exposure that degrades fibre at twice the rate. We build to GCC spec in Kerala because the climate demands it.",
    category: "Industry",
    readMinutes: 6,
    date: "2024-10-18",
    featured: true,
    svgType: "cricket",
    stripeOffset: 1,
  },
];
