export default function ProjectLoading() {
  return (
    <div className="bg-[#0D0F0C] min-h-screen">
      {/* Full-bleed hero skeleton */}
      <div className="h-[60vh] bg-[#0A0C09] animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        <div className="grid md:grid-cols-3 gap-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-2 w-20 bg-white/5 rounded animate-pulse" />
              <div className="h-6 w-32 bg-white/5 rounded animate-pulse" />
              <div className="space-y-2 pt-2">
                <div className="h-3 w-full bg-white/5 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-white/5 rounded animate-pulse" />
                <div className="h-3 w-4/6 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        {/* Quote skeleton */}
        <div className="bg-[#0A0C09] p-12 space-y-4 animate-pulse">
          <div className="h-3 w-1/2 bg-white/5 rounded" />
          <div className="h-3 w-3/4 bg-white/5 rounded" />
          <div className="h-3 w-2/3 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  );
}
