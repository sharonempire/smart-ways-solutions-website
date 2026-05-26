interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:border-[#F5A623] transition-all group card-lift">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[#1a1a1a] font-black text-lg mb-2 group-hover:text-[#d4891a] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
