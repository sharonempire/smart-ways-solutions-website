"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/components/TrackEvent";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  loanType: "",
  loanAmount: "",
  employmentType: "",
  monthlyIncome: "",
  message: "",
};

export default function EnquiryForm() {
  const pathname = usePathname();
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // sliding direction: 1 = forward (step 1→2), -1 = back (step 2→1)
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const [animating, setAnimating] = useState(false);
  const [visibleStep, setVisibleStep] = useState(1);
  const animRef = useRef(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function transitionTo(nextStep: 1 | 2, dir: 1 | -1) {
    if (animRef.current) return;
    animRef.current = true;
    setSlideDir(dir);
    setAnimating(true);
    // after exit animation, swap content and play entrance
    setTimeout(() => {
      setVisibleStep(nextStep);
      setStep(nextStep);
      setTimeout(() => {
        setAnimating(false);
        animRef.current = false;
      }, 320);
    }, 220);
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    transitionTo(2, 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBack() {
    transitionTo(1, -1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: pathname }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setState("success");
      setForm(initialForm);
      setStep(1);
      setVisibleStep(1);
      trackEvent("enquiry_submitted", { loan_type: form.loanType, city: form.city });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  // Progress bar gradient sweep keyframe injected once
  const progressPct = step === 1 ? 50 : 100;

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5"
          style={{ animation: "success-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }}>
          ✅
        </div>
        <h2 className="text-[#1a1a1a] text-2xl font-black mb-2"
          style={{ animation: "fade-up 0.4s ease 0.1s both" }}>
          Enquiry Received!
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6"
          style={{ animation: "fade-up 0.4s ease 0.18s both" }}>
          Our loan advisor will call you within <strong>24 hours</strong> with the best offers from our bank partners.
        </p>
        <div className="bg-[#FFF8EC] border border-[#F5A623]/40 rounded-xl p-5 text-left mb-6"
          style={{ animation: "fade-up 0.4s ease 0.26s both" }}>
          <p className="text-[#1a1a1a] font-bold text-sm mb-3">While you wait, you can also:</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-600">💬</span>
              <a href="https://wa.me/919000000000" className="text-[#d4891a] font-semibold hover:underline">Chat with us on WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>Call us: <strong>+91 00000 00000</strong></span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setState("idle")}
          className="border-2 border-[#F5A623] text-[#1a1a1a] px-6 py-2.5 rounded-xl font-black text-sm hover:bg-[#F5A623] transition-colors"
          style={{ animation: "fade-up 0.4s ease 0.32s both" }}
        >
          Submit Another Enquiry
        </button>

        <style>{`
          @keyframes success-pop {
            from { opacity:0; transform:scale(0.4); }
            to   { opacity:1; transform:scale(1); }
          }
          @keyframes fade-up {
            from { opacity:0; transform:translateY(12px); }
            to   { opacity:1; transform:translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  // Slide animation styles
  // Exit: slide out in slideDir direction; Enter: slide in from opposite
  const exitX = slideDir === 1 ? "-100%" : "100%";
  const enterX = slideDir === 1 ? "100%" : "-100%";

  const contentStyle = animating
    ? {
        animation: `form-exit-${slideDir === 1 ? "left" : "right"} 0.22s ease forwards`,
      }
    : {
        animation: `form-enter-${slideDir === 1 ? "right" : "left"} 0.32s cubic-bezier(0.22,1,0.36,1) both`,
      };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress header */}
      <div className="bg-[#1a1a1a] px-8 pt-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <p className="text-white font-black text-lg">Loan Enquiry</p>
          <span className="text-[#F5A623] text-xs font-bold">Step {step} of 2</span>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-3 mb-4">
          {[
            { n: 1, label: "Your Details" },
            { n: 2, label: "Loan Info" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all duration-300 ${
                    step > s.n
                      ? "bg-[#F5A623] text-black"
                      : step === s.n
                      ? "bg-[#F5A623] text-black ring-4 ring-[#F5A623]/30"
                      : "bg-white/10 text-gray-500"
                  }`}
                  style={{
                    transform: step === s.n ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
                  }}
                >
                  {step > s.n ? "✓" : s.n}
                </div>
                <span className={`text-xs font-semibold hidden sm:block transition-colors duration-300 ${step >= s.n ? "text-white" : "text-gray-500"}`}>
                  {s.label}
                </span>
              </div>
              {i === 0 && (
                <div className="flex-1 h-0.5 bg-white/10 mx-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: step > 1 ? "100%" : "0%",
                      background: "linear-gradient(90deg, #F5A623, #ffd07a, #F5A623)",
                      backgroundSize: "200% 100%",
                      animation: step > 1 ? "shimmer-bar 1.8s linear infinite" : "none",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/10 -mx-8 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-600"
            style={{
              width: `${progressPct}%`,
              background: "linear-gradient(90deg, #d4891a, #F5A623, #ffd07a, #F5A623)",
              backgroundSize: "300% 100%",
              animation: "shimmer-bar 2s linear infinite",
            }}
          />
        </div>
      </div>

      {/* Sliding form body */}
      <div className="overflow-hidden">
        <div key={visibleStep} style={contentStyle} className="p-8">
          {/* ── Step 1 ── */}
          {visibleStep === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <p className="text-[#1a1a1a] font-black text-base mb-1">Tell us about yourself</p>
              <p className="text-gray-400 text-xs mb-5">Your advisor needs these details to call you back with the right offers.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Full Name <span className="text-[#F5A623]">*</span>
                  </label>
                  <input type="text" name="fullName" required value={form.fullName} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                    placeholder="Rajan Menon" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Phone Number <span className="text-[#F5A623]">*</span>
                  </label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                    placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                    placeholder="rajan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    City / District <span className="text-[#F5A623]">*</span>
                  </label>
                  <input type="text" name="city" required value={form.city} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                    placeholder="Thrissur" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Employment Type <span className="text-[#F5A623]">*</span>
                  </label>
                  <select name="employmentType" required value={form.employmentType} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white">
                    <option value="">Select…</option>
                    <option>Salaried — Government</option>
                    <option>Salaried — Private</option>
                    <option>Self-Employed (Small / No ITR)</option>
                    <option>Self-Employed (With ITR + GST)</option>
                    <option>NRI — Salaried Abroad</option>
                    <option>NRI — Business Abroad</option>
                    <option>Pensioner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Monthly Income (Approx.)</label>
                  <select name="monthlyIncome" value={form.monthlyIncome} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white">
                    <option value="">Select range…</option>
                    <option>Below ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹2,00,000</option>
                    <option>Above ₹2,00,000</option>
                  </select>
                </div>
              </div>

              <button type="submit"
                className="w-full bg-[#F5A623] text-black py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm flex items-center justify-center gap-2">
                Continue to Loan Details
                <span className="text-base">→</span>
              </button>
              <p className="text-xs text-gray-400 text-center">Step 1 of 2 — takes 60 seconds total</p>
            </form>
          )}

          {/* ── Step 2 ── */}
          {visibleStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-[#1a1a1a] font-black text-base mb-1">Tell us about the loan</p>
              <p className="text-gray-400 text-xs mb-5">This helps us find the exact right product and lender for you.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Loan Type <span className="text-[#F5A623]">*</span>
                  </label>
                  <select name="loanType" required value={form.loanType} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white">
                    <option value="">Select loan type…</option>
                    <optgroup label="🏠 Home Loans">
                      <option>Plot Purchase Loan</option>
                      <option>Plot Purchase + Construction Loan</option>
                      <option>Home Purchase Loan</option>
                      <option>Under Construction Loan</option>
                      <option>Renovation / Extension Loan</option>
                      <option>Home Loan Balance Transfer</option>
                    </optgroup>
                    <optgroup label="🔄 Takeover + Top-Up">
                      <option>Takeover from KSFE</option>
                      <option>Takeover from Cooperative Society</option>
                      <option>Bank-to-Bank Takeover</option>
                      <option>Takeover + Top-Up Loan</option>
                    </optgroup>
                    <optgroup label="🏦 Property Loans">
                      <option>Loan Against Property (LAP)</option>
                    </optgroup>
                    <optgroup label="💼 Business Loans">
                      <option>Business Loan (No ITR / No GST)</option>
                      <option>Business Loan (With ITR + GST)</option>
                    </optgroup>
                    <optgroup label="🚗 Car Loans">
                      <option>New Car Loan</option>
                      <option>Used Car Loan</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Loan Amount Required <span className="text-[#F5A623]">*</span>
                  </label>
                  <select name="loanAmount" required value={form.loanAmount} onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white">
                    <option value="">Select range…</option>
                    <option>Up to ₹20 Lakhs</option>
                    <option>₹20 – ₹50 Lakhs</option>
                    <option>₹50 – ₹1 Crore</option>
                    <option>₹1 – ₹2 Crore</option>
                    <option>Above ₹2 Crore</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Details</label>
                <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white resize-none"
                  placeholder="Existing loan bank, preferred lender, property location, or any specific questions…" />
              </div>

              {state === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm"
                  style={{ animation: "fade-up 0.3s ease both" }}>
                  {errorMsg}
                </div>
              )}

              <div className="flex gap-3">
                <button type="button" onClick={handleBack}
                  className="border-2 border-gray-200 text-gray-600 px-5 py-3.5 rounded-xl font-bold text-sm hover:border-gray-400 transition-colors">
                  ← Back
                </button>
                <button type="submit" disabled={state === "submitting"}
                  className="flex-1 bg-[#F5A623] text-black py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {state === "submitting" ? "Submitting…" : "Submit — Get Called Within 24 Hours"}
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center">
                100% free service · No spam · Your data is never shared
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes form-exit-left {
          from { opacity:1; transform:translateX(0); }
          to   { opacity:0; transform:translateX(-48px); }
        }
        @keyframes form-exit-right {
          from { opacity:1; transform:translateX(0); }
          to   { opacity:0; transform:translateX(48px); }
        }
        @keyframes form-enter-right {
          from { opacity:0; transform:translateX(48px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes form-enter-left {
          from { opacity:0; transform:translateX(-48px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes shimmer-bar {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}
