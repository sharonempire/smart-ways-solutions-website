const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "1,200+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$2B+", label: "Assets Under Advisory" },
];

export default function Stats() {
  return (
    <section className="bg-[#c9a84c] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-[#0a1f44] text-3xl md:text-4xl font-bold">{s.value}</p>
            <p className="text-[#0a1f44] text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
