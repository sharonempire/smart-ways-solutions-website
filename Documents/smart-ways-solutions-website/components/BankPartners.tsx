const partners = [
  { name: "SBI", type: "Nationalised" },
  { name: "Bank of Baroda", type: "Nationalised" },
  { name: "Canara Bank", type: "Nationalised" },
  { name: "Union Bank", type: "Nationalised" },
  { name: "Indian Bank", type: "Nationalised" },
  { name: "ICICI Bank", type: "Private" },
  { name: "HDFC Bank", type: "Private" },
  { name: "Axis Bank", type: "Private" },
  { name: "Kotak Mahindra", type: "Private" },
  { name: "Federal Bank", type: "Private" },
  { name: "South Indian Bank", type: "Private" },
  { name: "Muthoot Finance", type: "NBFC" },
  { name: "Manappuram Finance", type: "NBFC" },
  { name: "Bajaj Finserv", type: "NBFC" },
  { name: "Tata Capital", type: "NBFC" },
  { name: "LIC Housing Finance", type: "NBFC" },
];

const categoryColors: Record<string, string> = {
  Nationalised: "bg-blue-50 text-blue-700 border-blue-200",
  Private: "bg-green-50 text-green-700 border-green-200",
  NBFC: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function BankPartners() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">
            Our Lending Partners
          </p>
          <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-bold">
            Tied Up with 16+ Banks & NBFCs
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            We work directly with leading nationalised banks, private banks, and NBFCs to get you the best rates and fastest approvals.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-medium">
          {["Nationalised", "Private", "NBFC"].map((cat) => (
            <span key={cat} className={`px-3 py-1 rounded-full border ${categoryColors[cat]}`}>
              {cat} Bank
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`px-4 py-2.5 rounded-lg border text-sm font-semibold ${categoryColors[p.type]}`}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
