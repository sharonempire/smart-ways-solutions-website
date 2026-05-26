import Link from "next/link";

interface LoanCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function LoanCard({ icon, title, description, features }: LoanCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:border-[#F5A623] transition-all group flex flex-col card-lift">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[#1a1a1a] font-black text-lg mb-2 group-hover:text-[#d4891a] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <ul className="space-y-1.5 mb-5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="text-[#F5A623] font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/enquire"
        className="text-center border-2 border-[#1a1a1a] text-[#1a1a1a] py-2 rounded-lg text-sm font-bold hover:bg-[#1a1a1a] hover:text-white transition-colors"
      >
        Enquire Now
      </Link>
    </div>
  );
}
