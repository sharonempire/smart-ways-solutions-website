const stats = [
  { value: "16+", label: "Bank & NBFC Partners" },
  { value: "2,500+", label: "Loans Sanctioned" },
  { value: "98%", label: "Approval Rate" },
  { value: "₹500 Cr+", label: "Loans Facilitated" },
];

export default function Stats() {
  return (
    <section className="bg-[#F5A623] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-black text-3xl md:text-4xl font-black">{s.value}</p>
            <p className="text-black/70 text-sm mt-1 font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
