import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for a Loan | Smart Ways Solutions",
  description: "Submit your loan enquiry and our advisors will reach out within 24 hours with the best offers from our bank partners.",
};

export default function EnquirePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for a Loan</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Fill in your details below. Our loan advisor will call you within 24 hours with the best offers from our bank partners — completely free.
        </p>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-[#0a1f44] text-2xl font-bold mb-6">Loan Enquiry Form</h2>
            <form className="space-y-5">
              {/* Personal Info */}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">
                Personal Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="Rajan Menon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="rajan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="Thrissur"
                  />
                </div>
              </div>

              {/* Loan Info */}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest border-b pb-2 pt-2">
                Loan Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type *</label>
                  <select
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white"
                  >
                    <option value="">Select loan type…</option>
                    <optgroup label="Home Loans">
                      <option>Plot Purchase Loan</option>
                      <option>Plot Purchase + Construction Loan</option>
                      <option>Home Purchase Loan</option>
                      <option>Under Construction Loan</option>
                      <option>Renovation / Extension Loan</option>
                      <option>Home Loan Refinance / Balance Transfer</option>
                    </optgroup>
                    <optgroup label="Property Loans">
                      <option>Loan Against Property (LAP)</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount Required *</label>
                  <select
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type *</label>
                  <select
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white"
                  >
                    <option value="">Select…</option>
                    <option>Salaried — Government</option>
                    <option>Salaried — Private</option>
                    <option>Self-Employed / Business</option>
                    <option>NRI</option>
                    <option>Pensioner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (Approx.)</label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  placeholder="Any specific requirements, existing loans, preferred bank, or questions for our advisor…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c9a84c] text-[#0a1f44] py-3 rounded-lg font-semibold hover:bg-[#e2c97e] transition-colors text-base"
              >
                Submit Enquiry — Get Called Within 24 Hours
              </button>
              <p className="text-xs text-gray-400 text-center">
                Our service is 100% free. No spam. Your data is never shared.
              </p>
            </form>
          </div>

          {/* Side Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#0a1f44] rounded-xl p-6 text-white">
              <p className="text-[#c9a84c] font-semibold text-sm mb-3">What Happens Next?</p>
              <ol className="space-y-3">
                {[
                  "You submit this form",
                  "Our advisor calls within 24 hours",
                  "We match you with the best bank offer",
                  "We handle all documentation",
                  "Loan sanctioned & disbursed",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 items-start text-sm text-gray-300">
                    <span className="text-[#c9a84c] font-bold shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {[
              { icon: "📞", label: "Call Us", value: "+91 00000 00000" },
              { icon: "📧", label: "Email", value: "loans@smartwayssolutions.com" },
              { icon: "📍", label: "Office", value: "Kerala, India" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-center bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-[#0a1f44] font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
              <p className="text-[#0a1f44] font-semibold text-sm mb-1">Approval Rate</p>
              <p className="text-[#c9a84c] text-4xl font-bold">98%</p>
              <p className="text-gray-500 text-xs mt-1">of our clients get their loan approved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
