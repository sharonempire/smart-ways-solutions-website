import Link from "next/link";

interface LoanCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function LoanCard({ icon, title, description, features }: LoanCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#c9a84c] transition-all group flex flex-col">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[#0a1f44] font-semibold text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <ul className="space-y-1.5 mb-5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="text-[#c9a84c] font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/enquire"
        className="text-center border border-[#0a1f44] text-[#0a1f44] py-2 rounded text-sm font-semibold hover:bg-[#0a1f44] hover:text-white transition-colors"
      >
        Enquire Now
      </Link>
    </div>
  );
}
