const partners = [
  { name: "SBI", type: "Nationalised" },
  { name: "Bank of Baroda", type: "Nationalised" },
  { name: "Canara Bank", type: "Nationalised" },
  { name: "Union Bank", type: "Nationalised" },
  { name: "Indian Bank", type: "Nationalised" },
  { name: "ICICI Bank", type: "Private" },
  { name: "HDFC Bank", type: "Private" },
  { name: "Axis Bank", type: "Private" },
  { name: "Federal Bank", type: "Private" },
  { name: "South Indian Bank", type: "Private" },
  { name: "Kotak Mahindra", type: "Private" },
  { name: "Muthoot Finance", type: "NBFC" },
  { name: "Manappuram Finance", type: "NBFC" },
  { name: "Bajaj Finserv", type: "NBFC" },
  { name: "Tata Capital", type: "NBFC" },
  { name: "LIC Housing Finance", type: "NBFC" },
];

const badges: Record<string, string> = {
  Nationalised: "bg-blue-100 text-blue-800 border border-blue-200",
  Private: "bg-green-100 text-green-800 border border-green-200",
  NBFC: "bg-amber-100 text-amber-800 border border-amber-200",
};

export default function BankPartners() {
  return (
    <section className="py-16 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            Our Lending Partners
          </span>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
            16+ Banks & NBFCs — One Application
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            One enquiry from you. We compare offers from all our partners and bring you the best rate, fastest approval.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["Nationalised", "Private", "NBFC"].map((cat) => (
            <span key={cat} className={`text-xs font-semibold px-3 py-1 rounded-full ${badges[cat]}`}>
              ● {cat} Banks/NBFCs
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold ${badges[p.type]}`}
            >
              {p.name}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          We also facilitate balance transfers from KSFE, cooperative societies, and employer/departmental loans.
        </p>
      </div>
    </section>
  );
}
