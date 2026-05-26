export default function SurfaceLoading() {
  return (
    <div className="bg-[#0D0F0C] min-h-screen">
      {/* Hero skeleton */}
      <div className="h-80 bg-[#0A0C09] animate-pulse relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)", animation: "shimmer 1.5s infinite" }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-12">
        {/* Text skeletons */}
        <div className="space-y-4 max-w-2xl">
          <div className="h-3 w-24 bg-white/5 rounded animate-pulse" />
          <div className="h-10 w-3/4 bg-white/5 rounded animate-pulse" />
          <div className="h-10 w-1/2 bg-white/5 rounded animate-pulse" />
          <div className="space-y-2 pt-4">
            <div className="h-3 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-3 w-5/6 bg-white/5 rounded animate-pulse" />
            <div className="h-3 w-4/6 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
        {/* Grid skeletons */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#0D0F0C] p-8 h-32 animate-pulse">
              <div className="h-2 w-16 bg-white/5 rounded mb-3" />
              <div className="h-5 w-24 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
}
