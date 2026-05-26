export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.smartwaysolutions.in/#business",
        name: "Smart Way Solutions",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "2500",
          bestRating: "5",
          worstRating: "1",
        },
        description:
          "Kerala's trusted loan DSA — home loans, KSFE takeover, loan against property, and business loans from 16+ nationalised banks, private banks, and NBFCs.",
        url: "https://www.smartwaysolutions.in",
        telephone: "+91-00000-00000",
        email: "loans@smartwaysolutions.com",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/smartwaysolutionsloanservices",
        ],
        areaServed: {
          "@type": "State",
          name: "Kerala",
          containedInPlace: {
            "@type": "Country",
            name: "India",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Loan Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Loan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plot Purchase Loan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loan Takeover from KSFE" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loan Against Property" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Loan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Home Loan Kerala" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.smartwaysolutions.in/#website",
        url: "https://www.smartwaysolutions.in",
        name: "Smart Way Solutions",
        description: "Kerala home loan DSA — best rates from 16+ banks and NBFCs",
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
