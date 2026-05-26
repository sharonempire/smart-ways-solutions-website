"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Lead, LeadStatus } from "@/lib/supabase";

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS: Record<LeadStatus, { label: string; color: string; bg: string; border: string; dot: string }> = {
  new:         { label: "New",         color: "text-blue-700",   bg: "bg-blue-50",   border: "border-blue-200",   dot: "bg-blue-500" },
  called:      { label: "Called",      color: "text-amber-700",  bg: "bg-amber-50",  border: "border-amber-200",  dot: "bg-amber-500" },
  in_progress: { label: "In Progress", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200", dot: "bg-purple-500" },
  closed:      { label: "Closed",      color: "text-green-700",  bg: "bg-green-50",  border: "border-green-200",  dot: "bg-green-500" },
};

const LOAN_ICONS: Record<string, string> = {
  "home": "🏠", "plot": "🏡", "construction": "🏗️", "renovation": "🔨",
  "balance": "🔄", "takeover": "🔄", "ksfe": "🏛️", "cooperative": "🤝",
  "property": "🏦", "lap": "🏦", "business": "💼", "new car": "🚗", "used car": "🚙", "car": "🚗",
};

function loanIcon(type: string) {
  const t = type.toLowerCase();
  for (const [k, v] of Object.entries(LOAN_ICONS)) if (t.includes(k)) return v;
  return "📄";
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata",
  });
}
function fmtShort(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", timeZone: "Asia/Kolkata",
  });
}
function fmtDay(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short", day: "2-digit", month: "short", timeZone: "Asia/Kolkata",
  });
}

type View = "dashboard" | "leads" | "pipeline";

// ─── CSV Export ───────────────────────────────────────────────────────────────
function exportCSV(leads: Lead[]) {
  const headers = ["Date", "Name", "Phone", "Email", "City", "Loan Type", "Amount", "Employment", "Income", "Source", "Status", "Notes"];
  const rows = leads.map((l) => [
    fmtDate(l.created_at), l.full_name, l.phone, l.email ?? "", l.city ?? "",
    l.loan_type, l.loan_amount, l.employment_type, l.monthly_income ?? "",
    (l as Lead & { source?: string }).source ?? "",
    l.status, (l.notes ?? "").replace(/,/g, " "),
  ]);
  const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sws-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Table state
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "all">("all");
  const [filterLoan, setFilterLoan] = useState("all");
  const [sortField, setSortField] = useState<"created_at" | "full_name" | "loan_type">("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 15;

  // Drawer state
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // ── Data fetching ──────────────────────────────────────────────────────────
  const fetchLeads = useCallback(async () => {
    const res = await fetch("/api/admin/leads");
    if (res.status === 401) { router.push("/admin/login"); return; }
    setLeads(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  // ── Actions ────────────────────────────────────────────────────────────────
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function updateStatus(id: string, status: LeadStatus) {
    setLeads((p) => p.map((l) => l.id === id ? { ...l, status } : l));
    if (selectedLead?.id === id) setSelectedLead((p) => p ? { ...p, status } : p);
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  async function saveNotes() {
    if (!selectedLead) return;
    setSaving(true);
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedLead.id, notes: notesDraft }),
    });
    const updated = await res.json();
    setLeads((p) => p.map((l) => l.id === updated.id ? updated : l));
    setSelectedLead(updated);
    setSaving(false);
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead? This cannot be undone.")) return;
    setDeleting(true);
    await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setLeads((p) => p.filter((l) => l.id !== id));
    setSelectedLead(null);
    setDeleting(false);
  }

  function openLead(lead: Lead) {
    setSelectedLead(lead);
    setNotesDraft(lead.notes ?? "");
  }

  function toggleSort(field: typeof sortField) {
    if (sortField === field) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
    setPage(1);
  }

  // ── Computed data ──────────────────────────────────────────────────────────
  const loanTypes = useMemo(() => [...new Set(leads.map((l) => l.loan_type))].sort(), [leads]);

  const filtered = useMemo(() => {
    let list = leads.filter((l) => {
      if (filterStatus !== "all" && l.status !== filterStatus) return false;
      if (filterLoan !== "all" && l.loan_type !== filterLoan) return false;
      if (search) {
        const q = search.toLowerCase();
        return l.full_name.toLowerCase().includes(q) || l.phone.includes(q) ||
          (l.email ?? "").toLowerCase().includes(q) || (l.city ?? "").toLowerCase().includes(q) ||
          l.loan_type.toLowerCase().includes(q);
      }
      return true;
    });
    list = [...list].sort((a, b) => {
      const av = a[sortField] ?? "", bv = b[sortField] ?? "";
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    return list;
  }, [leads, filterStatus, filterLoan, search, sortField, sortDir]);

  const paginated = useMemo(() => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [filtered, page]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const stats = useMemo(() => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 86400000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 86400000);
    const thisWeek = leads.filter((l) => new Date(l.created_at) >= weekAgo).length;
    const lastWeek = leads.filter((l) => new Date(l.created_at) >= twoWeeksAgo && new Date(l.created_at) < weekAgo).length;
    const byStatus = Object.fromEntries((["new","called","in_progress","closed"] as LeadStatus[]).map((s) => [s, leads.filter((l) => l.status === s).length])) as Record<LeadStatus, number>;
    const byLoan = loanTypes.map((t) => ({ type: t, count: leads.filter((l) => l.loan_type === t).length })).sort((a,b) => b.count - a.count).slice(0,6);
    const byCity = [...new Set(leads.map((l) => l.city ?? "Unknown"))].map((c) => ({ city: c, count: leads.filter((l) => (l.city ?? "Unknown") === c).length })).sort((a,b) => b.count - a.count).slice(0,5);

    // Last 7 days chart data
    const days: { label: string; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 86400000);
      const start = new Date(d); start.setHours(0,0,0,0);
      const end = new Date(d); end.setHours(23,59,59,999);
      days.push({
        label: d.toLocaleDateString("en-IN", { weekday: "short", timeZone: "Asia/Kolkata" }),
        count: leads.filter((l) => { const t = new Date(l.created_at); return t >= start && t <= end; }).length,
      });
    }
    const maxDay = Math.max(...days.map((d) => d.count), 1);

    return { total: leads.length, thisWeek, lastWeek, byStatus, byLoan, byCity, days, maxDay };
  }, [leads, loanTypes]);

  // Pipeline groups
  const pipeline = useMemo(() => ({
    new:         leads.filter((l) => l.status === "new"),
    called:      leads.filter((l) => l.status === "called"),
    in_progress: leads.filter((l) => l.status === "in_progress"),
    closed:      leads.filter((l) => l.status === "closed"),
  }), [leads]);

  // ── Loading screen ─────────────────────────────────────────────────────────
  if (loading) return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#F5A623] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm font-medium">Loading dashboard…</p>
      </div>
    </div>
  );

  const navItems: { id: View; icon: string; label: string }[] = [
    { id: "dashboard", icon: "◼", label: "Overview" },
    { id: "leads", icon: "☰", label: "All Leads" },
    { id: "pipeline", icon: "⬡", label: "Pipeline" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex">
      {/* ── Sidebar ── */}
      <>
        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <aside className={`fixed top-0 left-0 h-full w-60 bg-[#1a1a1a] z-50 flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto`}>
          {/* Brand */}
          <div className="px-5 py-6 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623] flex items-center justify-center font-black text-black text-base shrink-0">S</div>
              <div>
                <p className="text-white font-black text-sm leading-tight">Smart Way</p>
                <p className="text-gray-500 text-[11px]">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { setView(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left
                  ${view === item.id ? "bg-[#F5A623] text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                <span className="text-base">{item.icon}</span>
                {item.label}
                {item.id === "leads" && stats.byStatus.new > 0 && (
                  <span className="ml-auto bg-blue-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">{stats.byStatus.new}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Bottom */}
          <div className="px-3 py-4 border-t border-white/8 space-y-1">
            <a href="/" target="_blank"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
              <span>↗</span> View Website
            </a>
            <button onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
              <span>⏻</span> Sign Out
            </button>
          </div>
        </aside>
      </>

      {/* ── Main ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 flex items-center gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-800 p-1">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <div className="flex-1">
            <h1 className="text-[#1a1a1a] font-black text-base">
              {view === "dashboard" && "Overview"}
              {view === "leads" && "All Leads"}
              {view === "pipeline" && "Pipeline"}
            </h1>
            <p className="text-gray-400 text-xs">{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          </div>
          <button onClick={() => exportCSV(filtered)}
            className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            ⬇ Export CSV
          </button>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-auto">

          {/* ══════════════════ DASHBOARD VIEW ══════════════════ */}
          {view === "dashboard" && (
            <div className="space-y-6">
              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Leads", value: stats.total, sub: "All time", color: "text-[#1a1a1a]", icon: "👥" },
                  { label: "This Week", value: stats.thisWeek, sub: stats.lastWeek === 0 ? "—" : stats.thisWeek >= stats.lastWeek ? `▲ ${stats.thisWeek - stats.lastWeek} vs last week` : `▼ ${stats.lastWeek - stats.thisWeek} vs last week`, color: "text-[#1a1a1a]", icon: "📅", subColor: stats.thisWeek >= stats.lastWeek ? "text-green-600" : "text-red-500" },
                  { label: "New / Unactioned", value: stats.byStatus.new, sub: "Needs a call", color: "text-blue-600", icon: "🔔" },
                  { label: "Closed", value: stats.byStatus.closed, sub: stats.total > 0 ? `${Math.round((stats.byStatus.closed / stats.total) * 100)}% conversion` : "0% conversion", color: "text-green-600", icon: "✅" },
                ].map((card) => (
                  <div key={card.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{card.label}</p>
                      <span className="text-xl">{card.icon}</span>
                    </div>
                    <p className={`text-3xl font-black ${card.color}`}>{card.value}</p>
                    <p className={`text-xs mt-1 font-medium ${"subColor" in card && card.subColor ? card.subColor : "text-gray-400"}`}>{card.sub}</p>
                  </div>
                ))}
              </div>

              {/* Chart + breakdown row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* 7-day bar chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#1a1a1a] font-black text-sm mb-6">Leads — Last 7 Days</p>
                  <div className="flex items-end gap-3 h-32">
                    {stats.days.map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <span className="text-[10px] font-bold text-gray-500">{d.count > 0 ? d.count : ""}</span>
                        <div className="w-full rounded-t-lg transition-all duration-700 bg-[#F5A623]"
                          style={{ height: `${(d.count / stats.maxDay) * 100}%`, minHeight: d.count > 0 ? "8px" : "2px", opacity: d.count > 0 ? 1 : 0.15 }} />
                        <span className="text-[10px] text-gray-400 font-medium">{d.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status breakdown */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#1a1a1a] font-black text-sm mb-4">Pipeline Status</p>
                  <div className="space-y-3">
                    {(["new","called","in_progress","closed"] as LeadStatus[]).map((s) => {
                      const cfg = STATUS[s];
                      const count = stats.byStatus[s] ?? 0;
                      const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                      return (
                        <div key={s}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                              <span className="text-xs text-gray-600 font-medium">{cfg.label}</span>
                            </div>
                            <span className="text-xs font-black text-gray-800">{count}</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${cfg.dot}`} style={{ width: `${pct}%`, transition: "width 0.7s ease" }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Loan types + cities row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#1a1a1a] font-black text-sm mb-4">Top Loan Types</p>
                  {stats.byLoan.length === 0 ? <p className="text-gray-400 text-xs">No data yet</p> : (
                    <div className="space-y-3">
                      {stats.byLoan.map(({ type, count }) => (
                        <div key={type}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600 font-medium truncate max-w-[75%]">{loanIcon(type)} {type}</span>
                            <span className="text-xs font-black text-gray-800">{count}</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-[#F5A623]" style={{ width: `${(count / stats.total) * 100}%`, transition: "width 0.7s ease" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#1a1a1a] font-black text-sm mb-4">Top Cities</p>
                  {stats.byCity.length === 0 ? <p className="text-gray-400 text-xs">No data yet</p> : (
                    <div className="space-y-3">
                      {stats.byCity.map(({ city, count }) => (
                        <div key={city}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600 font-medium">📍 {city}</span>
                            <span className="text-xs font-black text-gray-800">{count}</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-[#1a1a1a]" style={{ width: `${(count / stats.total) * 100}%`, transition: "width 0.7s ease" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Recent leads */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <p className="text-[#1a1a1a] font-black text-sm">Recent Leads</p>
                  <button onClick={() => setView("leads")} className="text-[#d4891a] text-xs font-bold hover:underline">View all →</button>
                </div>
                <div className="divide-y divide-gray-50">
                  {leads.slice(0, 5).map((lead) => {
                    const cfg = STATUS[lead.status];
                    return (
                      <div key={lead.id} onClick={() => { openLead(lead); setView("leads"); }}
                        className="flex items-center gap-4 px-6 py-3.5 hover:bg-[#FFF8EC]/50 cursor-pointer transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-base shrink-0">{loanIcon(lead.loan_type)}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-gray-800 truncate">{lead.full_name}</p>
                          <p className="text-xs text-gray-400 truncate">{lead.loan_type} · {lead.city ?? "—"}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />{cfg.label}
                          </span>
                          <p className="text-[10px] text-gray-400 mt-1">{fmtShort(lead.created_at)}</p>
                        </div>
                      </div>
                    );
                  })}
                  {leads.length === 0 && <p className="text-center text-gray-400 text-sm py-8">No leads yet. Submit an enquiry from the website to see it here.</p>}
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════ LEADS VIEW ══════════════════ */}
          {view === "leads" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Toolbar */}
              <div className="px-4 lg:px-6 py-4 border-b border-gray-100 flex flex-wrap gap-3 items-center">
                <div className="relative">
                  <input type="text" placeholder="Search name, phone, city…" value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-[#F5A623] w-52" />
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔍</span>
                </div>
                <select value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value as LeadStatus | "all"); setPage(1); }}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#F5A623]">
                  <option value="all">All statuses</option>
                  {(["new","called","in_progress","closed"] as LeadStatus[]).map((s) => <option key={s} value={s}>{STATUS[s].label}</option>)}
                </select>
                <select value={filterLoan} onChange={(e) => { setFilterLoan(e.target.value); setPage(1); }}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#F5A623] max-w-[190px]">
                  <option value="all">All loan types</option>
                  {loanTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {(search || filterStatus !== "all" || filterLoan !== "all") && (
                  <button onClick={() => { setSearch(""); setFilterStatus("all"); setFilterLoan("all"); setPage(1); }}
                    className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 rounded-lg px-3 py-2">
                    ✕ Clear
                  </button>
                )}
                <span className="text-xs text-gray-400 ml-auto">{filtered.length} lead{filtered.length !== 1 ? "s" : ""}</span>
              </div>

              {/* Table */}
              {filtered.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-4xl mb-3">📭</p>
                  <p className="text-gray-500 text-sm font-semibold">No leads match your filters</p>
                  <p className="text-gray-400 text-xs mt-1">Clear filters or search something else</p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          {[
                            { label: "Date", field: "created_at" as const },
                            { label: "Name & Contact", field: "full_name" as const },
                            { label: "Loan Type", field: "loan_type" as const },
                            { label: "Amount", field: null },
                            { label: "City", field: null },
                            { label: "Employment", field: null },
                            { label: "Status", field: null },
                            { label: "", field: null },
                          ].map((h) => (
                            <th key={h.label}
                              onClick={() => h.field && toggleSort(h.field)}
                              className={`text-left text-gray-400 font-bold uppercase tracking-wide px-4 py-3 whitespace-nowrap ${h.field ? "cursor-pointer hover:text-gray-600 select-none" : ""}`}>
                              {h.label}
                              {h.field && sortField === h.field && (sortDir === "asc" ? " ↑" : " ↓")}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {paginated.map((lead) => {
                          const cfg = STATUS[lead.status];
                          return (
                            <tr key={lead.id} onClick={() => openLead(lead)}
                              className="hover:bg-[#FFF8EC]/40 cursor-pointer transition-colors">
                              <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{fmtShort(lead.created_at)}</td>
                              <td className="px-4 py-3">
                                <p className="font-black text-gray-800">{lead.full_name}</p>
                                <a href={`tel:${lead.phone}`} onClick={(e) => e.stopPropagation()} className="text-[#d4891a] hover:underline">{lead.phone}</a>
                                {lead.email && <p className="text-gray-400 truncate max-w-[150px]">{lead.email}</p>}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">{loanIcon(lead.loan_type)} {lead.loan_type}</td>
                              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{lead.loan_amount}</td>
                              <td className="px-4 py-3 text-gray-600">{lead.city ?? "—"}</td>
                              <td className="px-4 py-3 text-gray-500 max-w-[120px] truncate">{lead.employment_type}</td>
                              <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                                <select value={lead.status} onChange={(e) => updateStatus(lead.id, e.target.value as LeadStatus)}
                                  className={`text-xs font-bold border rounded-lg px-2 py-1.5 focus:outline-none cursor-pointer ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                                  {(["new","called","in_progress","closed"] as LeadStatus[]).map((s) => <option key={s} value={s}>{STATUS[s].label}</option>)}
                                </select>
                              </td>
                              <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => openLead(lead)} className="text-[#F5A623] font-bold hover:underline whitespace-nowrap">View →</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-xs text-gray-400">Page {page} of {totalPages}</p>
                      <div className="flex gap-2">
                        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}
                          className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors">← Prev</button>
                        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}
                          className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors">Next →</button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* ══════════════════ PIPELINE VIEW ══════════════════ */}
          {view === "pipeline" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {(["new","called","in_progress","closed"] as LeadStatus[]).map((status) => {
                const cfg = STATUS[status];
                const col = pipeline[status];
                return (
                  <div key={status} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    {/* Column header */}
                    <div className={`px-4 py-3 border-b ${cfg.border} ${cfg.bg} flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                        <p className={`text-xs font-black uppercase tracking-wide ${cfg.color}`}>{cfg.label}</p>
                      </div>
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{col.length}</span>
                    </div>

                    {/* Cards */}
                    <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-[70vh]">
                      {col.length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-300 text-2xl mb-1">○</p>
                          <p className="text-gray-400 text-xs">No leads here</p>
                        </div>
                      )}
                      {col.map((lead) => (
                        <div key={lead.id} onClick={() => openLead(lead)}
                          className="bg-gray-50 border border-gray-100 rounded-xl p-3 cursor-pointer hover:border-[#F5A623]/40 hover:bg-[#FFF8EC]/50 transition-all">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-[#F5A623]/10 flex items-center justify-center text-sm shrink-0">{loanIcon(lead.loan_type)}</div>
                            <div className="min-w-0">
                              <p className="text-xs font-black text-gray-800 truncate">{lead.full_name}</p>
                              <p className="text-[10px] text-gray-400 truncate">{lead.loan_type}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <a href={`tel:${lead.phone}`} onClick={(e) => e.stopPropagation()}
                              className="text-[10px] text-[#d4891a] font-bold hover:underline">{lead.phone}</a>
                            <span className="text-[10px] text-gray-400">{fmtShort(lead.created_at)}</span>
                          </div>
                          {lead.city && <p className="text-[10px] text-gray-400 mt-1">📍 {lead.city}</p>}
                          {lead.notes && <p className="text-[10px] text-gray-500 mt-1.5 bg-white rounded-lg px-2 py-1 border border-gray-100 truncate">📝 {lead.notes}</p>}
                          {/* Quick status change */}
                          <div className="flex gap-1 mt-2" onClick={(e) => e.stopPropagation()}>
                            {(["new","called","in_progress","closed"] as LeadStatus[]).filter((s) => s !== status).map((s) => (
                              <button key={s} onClick={() => updateStatus(lead.id, s)}
                                className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 hover:bg-[#F5A623]/20 hover:text-[#d4891a] transition-colors">
                                → {STATUS[s].label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>

      {/* ── Lead Detail Drawer ── */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40 backdrop-blur-[2px]" onClick={() => setSelectedLead(null)} />
          <div className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
            {/* Header */}
            <div className="bg-[#1a1a1a] px-6 py-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/20 flex items-center justify-center text-xl">{loanIcon(selectedLead.loan_type)}</div>
                <button onClick={() => setSelectedLead(null)} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">✕</button>
              </div>
              <p className="text-white font-black text-xl leading-tight">{selectedLead.full_name}</p>
              <p className="text-[#F5A623] text-xs font-semibold mt-0.5">{selectedLead.loan_type}</p>
              <p className="text-gray-500 text-xs mt-1">{fmtDate(selectedLead.created_at)}</p>
            </div>

            <div className="flex-1 p-5 space-y-5">
              {/* Quick contact CTAs */}
              <div className="grid grid-cols-3 gap-2">
                <a href={`tel:${selectedLead.phone}`}
                  className="flex flex-col items-center gap-1 bg-[#FFF8EC] border border-[#F5A623]/30 rounded-xl py-3 hover:bg-[#F5A623]/15 transition-colors">
                  <span className="text-xl">📞</span>
                  <span className="text-[10px] font-black text-[#d4891a]">Call</span>
                </a>
                <a href={`https://wa.me/91${selectedLead.phone.replace(/\D/g,"").slice(-10)}`} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 bg-green-50 border border-green-200 rounded-xl py-3 hover:bg-green-100 transition-colors">
                  <span className="text-xl">💬</span>
                  <span className="text-[10px] font-black text-green-700">WhatsApp</span>
                </a>
                {selectedLead.email ? (
                  <a href={`mailto:${selectedLead.email}`}
                    className="flex flex-col items-center gap-1 bg-blue-50 border border-blue-200 rounded-xl py-3 hover:bg-blue-100 transition-colors">
                    <span className="text-xl">✉️</span>
                    <span className="text-[10px] font-black text-blue-700">Email</span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl py-3 opacity-40">
                    <span className="text-xl">✉️</span>
                    <span className="text-[10px] font-black text-gray-400">No Email</span>
                  </div>
                )}
              </div>

              {/* Lead details */}
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">Lead Details</p>
                <div className="bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-100">
                  {[
                    ["Phone", selectedLead.phone],
                    ["Email", selectedLead.email ?? "—"],
                    ["City", selectedLead.city ?? "—"],
                    ["Loan Type", `${loanIcon(selectedLead.loan_type)} ${selectedLead.loan_type}`],
                    ["Amount", selectedLead.loan_amount],
                    ["Employment", selectedLead.employment_type],
                    ["Monthly Income", selectedLead.monthly_income ?? "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between px-4 py-2.5">
                      <span className="text-xs text-gray-400">{k}</span>
                      <span className="text-xs font-semibold text-gray-700 text-right max-w-[55%]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedLead.message && (
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">Their Message</p>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-xl border border-gray-100 px-4 py-3 leading-relaxed">{selectedLead.message}</p>
                </div>
              )}

              {/* Status */}
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">Status</p>
                <div className="grid grid-cols-2 gap-2">
                  {(["new","called","in_progress","closed"] as LeadStatus[]).map((s) => {
                    const cfg = STATUS[s];
                    const active = selectedLead.status === s;
                    return (
                      <button key={s} onClick={() => updateStatus(selectedLead.id, s)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border transition-all ${active ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-current/30` : "bg-gray-50 text-gray-400 border-gray-200 hover:border-gray-300"}`}>
                        <span className={`w-2 h-2 rounded-full ${active ? cfg.dot : "bg-gray-300"}`} />
                        {cfg.label}
                        {active && <span className="ml-auto">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">Internal Notes</p>
                <textarea rows={4} value={notesDraft} onChange={(e) => setNotesDraft(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] resize-none transition-colors"
                  placeholder="Call notes, follow-up reminders, bank preferences…" />
                <button onClick={saveNotes} disabled={saving || notesDraft === (selectedLead.notes ?? "")}
                  className="mt-2 w-full bg-[#1a1a1a] text-white text-xs font-black py-2.5 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40">
                  {saving ? "Saving…" : "Save Notes"}
                </button>
              </div>

              {/* Delete */}
              <div className="pt-2 border-t border-gray-100">
                <button onClick={() => deleteLead(selectedLead.id)} disabled={deleting}
                  className="w-full text-xs font-bold text-red-400 border border-red-200 rounded-xl py-2.5 hover:bg-red-50 transition-colors disabled:opacity-40">
                  {deleting ? "Deleting…" : "🗑 Delete Lead"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
