"use client";

import { useState, useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const steps = [
  { id: 1, label: "Project Type", short: "Type" },
  { id: 2, label: "Location & Size", short: "Location" },
  { id: 3, label: "Budget & Timeline", short: "Budget" },
  { id: 4, label: "Your Details", short: "You" },
];

const projectTypes = [
  {
    value: "football",
    label: "Football Turf",
    sub: "5-a-side or 11-a-side",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,1"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    value: "multi-sport",
    label: "Multi-Sport Court",
    sub: "Basketball · Futsal · Volleyball",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    value: "cricket",
    label: "Cricket Outfield",
    sub: "Club · Academy · School",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="3.5" ry="6" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    value: "athletic",
    label: "Athletic Track",
    sub: "400m · IAAF Certified",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="10" rx="5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="6" y="9.5" width="12" height="5" rx="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
  {
    value: "other",
    label: "Not sure yet",
    sub: "We'll help you decide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M9 9.5C9 8 10.5 7 12 7s3 1 3 2.5-1.5 2-3 3v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="12" cy="16.5" r="0.7" fill="currentColor"/>
      </svg>
    ),
  },
];

const budgetRanges = [
  { value: "under-25", label: "Under ₹25 Lakh" },
  { value: "25-60", label: "₹25L – ₹60L" },
  { value: "60-150", label: "₹60L – ₹1.5Cr" },
  { value: "above-150", label: "Above ₹1.5Cr" },
  { value: "unsure", label: "Not sure yet" },
];

const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "3months", label: "Within 3 months" },
  { value: "6months", label: "3–6 months" },
  { value: "planning", label: "Still planning" },
];

export default function EnquirePage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    type: "",
    city: "",
    area: "",
    budget: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const goStep = (next: number, dir: "forward" | "back") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 280);
  };

  const canAdvance = () => {
    if (step === 1) return !!form.type;
    if (step === 2) return !!form.city;
    if (step === 3) return !!form.budget;
    if (step === 4) return !!form.name && !!form.phone;
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const exitX = direction === "forward" ? "-40px" : "40px";
  const enterX = direction === "forward" ? "40px" : "-40px";

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Start Your Project</span>
            </div>
            <h1
              className="text-[#F4EFE6] leading-none mb-4"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
              }}
            >
              Tell us about
              <br />
              <em style={{ fontStyle: "italic" }}>your pitch.</em>
            </h1>
            <p className="text-[#F4EFE6]/40 text-sm font-light max-w-md">
              4 quick steps. Engineer calls you within 24 hours. Free site visit within 48.
            </p>
          </div>

          {!submitted ? (
            <div className="grid md:grid-cols-12 gap-8">

              {/* Left: step wizard */}
              <div className="md:col-span-8">

                {/* Step indicator */}
                <div className="flex items-center gap-0 mb-10">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex items-center flex-1">
                      <button
                        onClick={() => s.id < step && goStep(s.id, "back")}
                        disabled={s.id > step}
                        className="flex items-center gap-2.5 group"
                      >
                        <div
                          className="w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-400"
                          style={{
                            border: `1px solid ${
                              s.id < step ? "#4CAF50" :
                              s.id === step ? "rgba(74,175,80,0.6)" :
                              "rgba(255,255,255,0.1)"
                            }`,
                            background:
                              s.id < step ? "rgba(74,175,80,0.2)" :
                              s.id === step ? "rgba(74,175,80,0.08)" :
                              "transparent",
                            boxShadow: s.id === step ? "0 0 8px rgba(74,175,80,0.25)" : "none",
                          }}
                        >
                          {s.id < step ? (
                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l2.5 2.5 5.5-5" stroke="#4CAF50" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <span
                              className="font-mono"
                              style={{
                                fontSize: "0.6rem",
                                color: s.id === step ? "#4CAF50" : "rgba(244,239,230,0.2)",
                              }}
                            >
                              {s.id}
                            </span>
                          )}
                        </div>
                        <span
                          className="hidden sm:block text-[9px] tracking-[0.12em] uppercase transition-colors duration-200"
                          style={{
                            color: s.id === step ? "#F4EFE6" : s.id < step ? "rgba(74,175,80,0.7)" : "rgba(244,239,230,0.2)",
                          }}
                        >
                          {s.short}
                        </span>
                      </button>
                      {i < steps.length - 1 && (
                        <div className="flex-1 mx-3 h-px transition-all duration-500" style={{ background: i < step - 1 ? "rgba(74,175,80,0.4)" : "rgba(255,255,255,0.07)" }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step content with slide animation */}
                <form onSubmit={handleSubmit}>
                  <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
                    <div
                      ref={contentRef}
                      style={{
                        opacity: animating ? 0 : 1,
                        transform: animating ? `translateX(${exitX})` : "translateX(0)",
                        transition: animating ? "opacity 0.25s ease, transform 0.25s ease" : "opacity 0.3s ease 0.05s, transform 0.3s cubic-bezier(0.22,1,0.36,1) 0.05s",
                      }}
                    >

                      {/* Step 1: Project type */}
                      {step === 1 && (
                        <div>
                          <p className="text-[#F4EFE6]/50 text-sm font-light mb-6">What are you building?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {projectTypes.map((t) => (
                              <button
                                key={t.value}
                                type="button"
                                onClick={() => setForm({ ...form, type: t.value })}
                                className="flex items-center gap-4 p-5 text-left transition-all duration-200 group"
                                style={{
                                  border: `1px solid ${form.type === t.value ? "rgba(74,175,80,0.5)" : "rgba(255,255,255,0.06)"}`,
                                  background: form.type === t.value ? "rgba(74,175,80,0.08)" : "transparent",
                                }}
                              >
                                <span
                                  className="shrink-0 transition-colors duration-200"
                                  style={{ color: form.type === t.value ? "#4CAF50" : "rgba(244,239,230,0.25)" }}
                                >
                                  {t.icon}
                                </span>
                                <div>
                                  <p
                                    className="font-medium transition-colors duration-200"
                                    style={{
                                      fontSize: "0.9rem",
                                      color: form.type === t.value ? "#F4EFE6" : "rgba(244,239,230,0.55)",
                                    }}
                                  >
                                    {t.label}
                                  </p>
                                  <p className="text-[9px] tracking-[0.08em] mt-0.5" style={{ color: form.type === t.value ? "#4CAF50" : "rgba(244,239,230,0.2)" }}>
                                    {t.sub}
                                  </p>
                                </div>
                                {form.type === t.value && (
                                  <div className="ml-auto">
                                    <div className="w-4 h-4 flex items-center justify-center" style={{ background: "rgba(74,175,80,0.2)", border: "1px solid rgba(74,175,80,0.4)" }}>
                                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                                        <path d="M2 5l2 2 4-4" stroke="#4CAF50" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </div>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Location */}
                      {step === 2 && (
                        <div className="space-y-6">
                          <p className="text-[#F4EFE6]/50 text-sm font-light mb-6">Where is your project located?</p>
                          <div>
                            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Project Location *</label>
                            <input
                              type="text"
                              value={form.city}
                              onChange={(e) => setForm({ ...form, city: e.target.value })}
                              required
                              className="w-full bg-transparent text-[#F4EFE6] px-4 py-4 text-sm font-light outline-none transition-colors duration-200 placeholder:text-[#F4EFE6]/20"
                              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                              placeholder="e.g. Kozhikode, Malappuram, Kannur, Dubai..."
                              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                          </div>
                          <div>
                            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Approximate area (m²)</label>
                            <input
                              type="text"
                              value={form.area}
                              onChange={(e) => setForm({ ...form, area: e.target.value })}
                              className="w-full bg-transparent text-[#F4EFE6] px-4 py-4 text-sm font-light outline-none transition-colors duration-200 placeholder:text-[#F4EFE6]/20"
                              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                              placeholder="e.g. 600, 5000, not sure yet..."
                              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                          </div>
                          <p className="text-[#F4EFE6]/25 text-xs font-light">
                            Don't know the exact area? Our engineer measures on-site — this is just to give us a starting point.
                          </p>
                        </div>
                      )}

                      {/* Step 3: Budget + Timeline */}
                      {step === 3 && (
                        <div className="space-y-8">
                          <div>
                            <p className="text-[#F4EFE6]/50 text-sm font-light mb-5">What's your approximate budget?</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {budgetRanges.map((b) => (
                                <button
                                  key={b.value}
                                  type="button"
                                  onClick={() => setForm({ ...form, budget: b.value })}
                                  className="flex items-center justify-between px-5 py-4 text-left transition-all duration-200"
                                  style={{
                                    border: `1px solid ${form.budget === b.value ? "rgba(74,175,80,0.5)" : "rgba(255,255,255,0.06)"}`,
                                    background: form.budget === b.value ? "rgba(74,175,80,0.08)" : "transparent",
                                    color: form.budget === b.value ? "#F4EFE6" : "rgba(244,239,230,0.45)",
                                    fontSize: "0.85rem",
                                    fontWeight: 300,
                                  }}
                                >
                                  {b.label}
                                  {form.budget === b.value && (
                                    <svg className="w-3 h-3 text-[#4CAF50]" viewBox="0 0 12 12" fill="none">
                                      <path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[#F4EFE6]/50 text-sm font-light mb-5">When are you looking to build?</p>
                            <div className="grid grid-cols-2 gap-2">
                              {timelineOptions.map((t) => (
                                <button
                                  key={t.value}
                                  type="button"
                                  onClick={() => setForm({ ...form, timeline: t.value })}
                                  className="flex items-center justify-between px-5 py-4 text-left transition-all duration-200"
                                  style={{
                                    border: `1px solid ${form.timeline === t.value ? "rgba(74,175,80,0.5)" : "rgba(255,255,255,0.06)"}`,
                                    background: form.timeline === t.value ? "rgba(74,175,80,0.08)" : "transparent",
                                    color: form.timeline === t.value ? "#F4EFE6" : "rgba(244,239,230,0.45)",
                                    fontSize: "0.82rem",
                                    fontWeight: 300,
                                  }}
                                >
                                  {t.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Personal details */}
                      {step === 4 && (
                        <div className="space-y-5">
                          <p className="text-[#F4EFE6]/50 text-sm font-light mb-6">How do we reach you?</p>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Full Name *</label>
                              <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full bg-transparent text-[#F4EFE6] px-4 py-3.5 text-sm font-light outline-none placeholder:text-[#F4EFE6]/20 transition-colors duration-200"
                                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                                placeholder="Your full name"
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                              />
                            </div>
                            <div>
                              <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Phone Number *</label>
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                required
                                className="w-full bg-transparent text-[#F4EFE6] px-4 py-3.5 text-sm font-light outline-none placeholder:text-[#F4EFE6]/20 transition-colors duration-200"
                                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                                placeholder="+91 XXXXX XXXXX"
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Email Address</label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="w-full bg-transparent text-[#F4EFE6] px-4 py-3.5 text-sm font-light outline-none placeholder:text-[#F4EFE6]/20 transition-colors duration-200"
                              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                              placeholder="you@example.com (optional)"
                              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                          </div>
                          <div>
                            <label className="block text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-2">Anything else to add?</label>
                            <textarea
                              rows={3}
                              value={form.message}
                              onChange={(e) => setForm({ ...form, message: e.target.value })}
                              className="w-full bg-transparent text-[#F4EFE6] px-4 py-3.5 text-sm font-light outline-none placeholder:text-[#F4EFE6]/20 resize-none transition-colors duration-200"
                              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                              placeholder="Site constraints, special requirements, any questions..."
                              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(74,175,80,0.5)")}
                              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                            />
                          </div>

                          {/* Summary recap */}
                          <div className="border border-white/5 p-5 flex flex-wrap gap-4">
                            {form.type && (
                              <div>
                                <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.1em] uppercase mb-0.5">Surface</p>
                                <p className="text-[#4CAF50] text-xs capitalize">{projectTypes.find(t => t.value === form.type)?.label}</p>
                              </div>
                            )}
                            {form.city && (
                              <div>
                                <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.1em] uppercase mb-0.5">Location</p>
                                <p className="text-[#F4EFE6]/60 text-xs">{form.city}</p>
                              </div>
                            )}
                            {form.budget && (
                              <div>
                                <p className="text-[#F4EFE6]/25 text-[8px] tracking-[0.1em] uppercase mb-0.5">Budget</p>
                                <p className="text-[#F4EFE6]/60 text-xs">{budgetRanges.find(b => b.value === form.budget)?.label}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4 mt-8">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => goStep(step - 1, "back")}
                        className="flex items-center gap-2 text-[#F4EFE6]/40 hover:text-[#F4EFE6] text-[10px] tracking-[0.15em] uppercase transition-colors duration-200"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back
                      </button>
                    )}
                    <div className="flex-1" />
                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={() => canAdvance() && goStep(step + 1, "forward")}
                        disabled={!canAdvance()}
                        className="flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-200"
                        style={{
                          background: canAdvance() ? "#2A5C2A" : "rgba(255,255,255,0.04)",
                          color: canAdvance() ? "#F4EFE6" : "rgba(244,239,230,0.2)",
                          border: `1px solid ${canAdvance() ? "transparent" : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        Continue
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canAdvance() || submitting}
                        className="flex items-center gap-3 px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-200"
                        style={{
                          background: canAdvance() ? "#F4EFE6" : "rgba(255,255,255,0.04)",
                          color: canAdvance() ? "#0D0F0C" : "rgba(244,239,230,0.2)",
                        }}
                      >
                        {submitting ? (
                          <>
                            <div className="w-3 h-3 border border-[#0D0F0C]/40 border-t-[#0D0F0C] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Right: sidebar */}
              <div className="md:col-span-4 flex flex-col gap-6">

                {/* What happens next */}
                <div className="border border-white/5 p-6" style={{ background: "#0A0C09" }}>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-5 font-medium">What happens next</p>
                  <div className="space-y-5">
                    {[
                      { step: "24hrs", label: "Engineer calls to discuss your project" },
                      { step: "48hrs", label: "Free site visit at your location" },
                      { step: "5 days", label: "Fixed-price proposal + full spec" },
                    ].map((item, i) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <div className="shrink-0 flex flex-col items-center gap-1">
                          <div
                            className="w-6 h-6 flex items-center justify-center"
                            style={{ border: "1px solid rgba(74,175,80,0.3)", background: "rgba(74,175,80,0.05)" }}
                          >
                            <span className="text-[#4CAF50] text-[8px] font-medium">{i + 1}</span>
                          </div>
                          {i < 2 && <div className="w-px h-5 bg-white/8" />}
                        </div>
                        <div className="pt-0.5">
                          <p className="text-[#4CAF50] text-[9px] tracking-wider uppercase mb-0.5">{item.step}</p>
                          <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commitments */}
                <div className="border border-white/5 p-6" style={{ background: "#0A0C09" }}>
                  <p className="text-[#F4EFE6]/35 text-[9px] tracking-[0.2em] uppercase mb-4">Our commitments</p>
                  {[
                    "Free site assessment — no obligation",
                    "Fixed-price proposals. Zero surprises.",
                    "10-year surface performance warranty",
                    "GCC-grade materials only",
                    "Response within 24 hours",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 mb-3">
                      <span
                        className="shrink-0 mt-1.5"
                        style={{ display: "inline-block", width: "4px", height: "4px", background: "#4CAF50", transform: "rotate(45deg)", opacity: 0.7 }}
                      />
                      <p className="text-[#F4EFE6]/45 text-xs font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* WhatsApp shortcut */}
                <a
                  href="https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20want%20to%20enquire%20about%20sports%20turf%20construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/8 hover:border-[#4CAF50]/30 p-5 transition-all duration-200 group"
                  style={{ background: "#0A0C09" }}
                >
                  <svg className="w-5 h-5 text-[#4CAF50] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div>
                    <p className="text-[#F4EFE6]/60 text-sm font-light group-hover:text-[#F4EFE6] transition-colors duration-200">Prefer to message?</p>
                    <p className="text-[#F4EFE6]/25 text-[9px] tracking-[0.08em]">WhatsApp · Replies in 2 hours</p>
                  </div>
                </a>
              </div>
            </div>

          ) : (
            /* Success state */
            <div className="max-w-lg mx-auto text-center py-20">
              <div
                className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
                style={{ border: "1px solid rgba(74,175,80,0.4)", background: "rgba(74,175,80,0.08)", boxShadow: "0 0 32px rgba(74,175,80,0.2)" }}
              >
                <svg className="w-7 h-7 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h2
                className="text-[#F4EFE6] mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, fontStyle: "italic", lineHeight: 1.1 }}
              >
                Enquiry received.
              </h2>
              <p className="text-[#F4EFE6]/45 text-sm font-light leading-relaxed mb-2">
                Our engineer will call you within 24 hours. Check WhatsApp for a confirmation message.
              </p>
              <p className="text-[#F4EFE6]/25 text-xs font-light mb-12">
                Reference: TRF-{Date.now().toString().slice(-6)}
              </p>
              <div className="w-8 h-px bg-[#4CAF50] mx-auto" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
