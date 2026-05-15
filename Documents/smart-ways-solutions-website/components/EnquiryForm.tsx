"use client";
import { useState } from "react";
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

const STEP1_FIELDS = ["fullName", "phone", "city"] as const;

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setState("success");
      setForm(initialForm);
      setStep(1);
      trackEvent("enquiry_submitted", { loan_type: form.loanType, city: form.city });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">✅</div>
        <h2 className="text-[#1a1a1a] text-2xl font-black mb-2">Enquiry Received!</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our loan advisor will call you within <strong>24 hours</strong> with the best offers from our bank partners.
        </p>
        <div className="bg-[#FFF8EC] border border-[#F5A623]/40 rounded-xl p-5 text-left mb-6">
          <p className="text-[#1a1a1a] font-bold text-sm mb-3">While you wait, you can also:</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-600">💬</span>
              <a href="https://wa.me/919000000000" className="text-[#d4891a] font-semibold hover:underline">Chat with us on WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>Call us directly: <strong>+91 00000 00000</strong></span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setState("idle")}
          className="border-2 border-[#F5A623] text-[#1a1a1a] px-6 py-2.5 rounded-xl font-black text-sm hover:bg-[#F5A623] transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const progressPct = step === 1 ? 50 : 100;

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
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all ${
                    step > s.n
                      ? "bg-[#F5A623] text-black"
                      : step === s.n
                      ? "bg-[#F5A623] text-black ring-4 ring-[#F5A623]/30"
                      : "bg-white/10 text-gray-500"
                  }`}
                >
                  {step > s.n ? "✓" : s.n}
                </div>
                <span
                  className={`text-xs font-semibold hidden sm:block ${
                    step >= s.n ? "text-white" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i === 0 && (
                <div className="flex-1 h-0.5 bg-white/10 mx-2">
                  <div
                    className="h-full bg-[#F5A623] transition-all duration-500"
                    style={{ width: step > 1 ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/10 -mx-8">
          <div
            className="h-full bg-[#F5A623] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="p-8">
        {/* ── Step 1 ── */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-5">
            <p className="text-[#1a1a1a] font-black text-base mb-1">Tell us about yourself</p>
            <p className="text-gray-400 text-xs mb-5">Your advisor needs these details to call you back with the right offers.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Full Name <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                  placeholder="Rajan Menon"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Phone Number <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                  placeholder="rajan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  City / District <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                  placeholder="Thrissur"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Employment Type <span className="text-[#F5A623]">*</span>
                </label>
                <select
                  name="employmentType"
                  required
                  value={form.employmentType}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                >
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
                <select
                  name="monthlyIncome"
                  value={form.monthlyIncome}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                >
                  <option value="">Select range…</option>
                  <option>Below ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹2,00,000</option>
                  <option>Above ₹2,00,000</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5A623] text-black py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm flex items-center justify-center gap-2"
            >
              Continue to Loan Details
              <span className="text-base">→</span>
            </button>
            <p className="text-xs text-gray-400 text-center">Step 1 of 2 — takes 60 seconds total</p>
          </form>
        )}

        {/* ── Step 2 ── */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-[#1a1a1a] font-black text-base mb-1">Tell us about the loan</p>
            <p className="text-gray-400 text-xs mb-5">This helps us find the exact right product and lender for you.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Loan Type <span className="text-[#F5A623]">*</span>
                </label>
                <select
                  name="loanType"
                  required
                  value={form.loanType}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                >
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
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Loan Amount Required <span className="text-[#F5A623]">*</span>
                </label>
                <select
                  name="loanAmount"
                  required
                  value={form.loanAmount}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white"
                >
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
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-[#f8f8f8] focus:bg-white resize-none"
                placeholder="Existing loan bank, preferred lender, property location, or any specific questions…"
              />
            </div>

            {state === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border-2 border-gray-200 text-gray-600 px-5 py-3.5 rounded-xl font-bold text-sm hover:border-gray-400 transition-colors"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={state === "submitting"}
                className="flex-1 bg-[#F5A623] text-black py-3.5 rounded-xl font-black hover:bg-[#d4891a] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
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
  );
}
