interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#c9a84c] transition-all group">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[#0a1f44] font-semibold text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
