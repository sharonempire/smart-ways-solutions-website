"use client";
import { useState } from "react";

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
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

      if (!res.ok) {
        throw new Error(data.error ?? "Submission failed");
      }

      setState("success");
      setForm(initialForm);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-[#1a1a1a] text-2xl font-black mb-2">Enquiry Received!</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Thank you! Our loan advisor will call you within <strong>24 hours</strong> with the best offers from our bank partners.
        </p>
        <div className="bg-[#FFF8EC] border border-[#F5A623] rounded-xl p-5 text-left mb-6">
          <p className="text-[#1a1a1a] font-bold text-sm mb-2">While you wait, you can also:</p>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li>💬 <a href="https://wa.me/919000000000" className="text-[#F5A623] font-semibold hover:underline">Chat with us on WhatsApp</a></li>
            <li>📞 Call us directly: <strong>+91 00000 00000</strong></li>
          </ul>
        </div>
        <button
          onClick={() => setState("idle")}
          className="border-2 border-[#F5A623] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#F5A623] transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-[#1a1a1a] text-2xl font-black mb-6">Loan Enquiry Form</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Details */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
          Personal Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
              placeholder="Rajan Menon"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
              placeholder="rajan@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              City / District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
              placeholder="Thrissur"
            />
          </div>
        </div>

        {/* Loan Details */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 pt-2">
          Loan Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Loan Type <span className="text-red-500">*</span>
            </label>
            <select
              name="loanType"
              required
              value={form.loanType}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-white"
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Loan Amount Required <span className="text-red-500">*</span>
            </label>
            <select
              name="loanAmount"
              required
              value={form.loanAmount}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-white"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Employment Type <span className="text-red-500">*</span>
            </label>
            <select
              name="employmentType"
              required
              value={form.employmentType}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-white"
            >
              <option value="">Select…</option>
              <option>Salaried — Government</option>
              <option>Salaried — Private</option>
              <option>Self-Employed (Small Business / No ITR)</option>
              <option>Self-Employed (Business with ITR + GST)</option>
              <option>NRI — Salaried Abroad</option>
              <option>NRI — Business Abroad</option>
              <option>Pensioner</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Monthly Income (Approx.)</label>
            <select
              name="monthlyIncome"
              value={form.monthlyIncome}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors bg-white"
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
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Details</label>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
            placeholder="Existing loan bank, preferred lender, property location, or any specific questions…"
          />
        </div>

        {state === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full bg-[#F5A623] text-black py-3.5 rounded-lg font-black hover:bg-[#d4891a] transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Submitting…" : "Submit Enquiry — Get Called Within 24 Hours"}
        </button>
        <p className="text-xs text-gray-400 text-center">
          100% free service. No spam. Your data is never shared with third parties.
        </p>
      </form>
    </div>
  );
}
