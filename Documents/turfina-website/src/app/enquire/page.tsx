"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";

const projectTypes = [
  { value: "football", label: "Football Turf" },
  { value: "multi-sport", label: "Multi-Sport Court" },
  { value: "cricket", label: "Cricket Outfield" },
  { value: "athletic", label: "Athletic Track" },
  { value: "other", label: "Other / Not sure yet" },
];

const budgetRanges = [
  { value: "under-25", label: "Under ₹25 Lakh" },
  { value: "25-60", label: "₹25L – ₹60L" },
  { value: "60-150", label: "₹60L – ₹1.5Cr" },
  { value: "above-150", label: "Above ₹1.5Cr" },
  { value: "unsure", label: "Not sure yet" },
];

export default function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Nav />
      <main className="bg-[#0D0F0C] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">
                Start Your Project
              </span>
            </div>
            <h1
              className="display-font text-[#F4EFE6] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              Tell us about
              <br />
              <em style={{ fontStyle: "italic" }}>your pitch.</em>
            </h1>
            <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed max-w-lg">
              Fill in the form and an engineer will call you within 24 hours.
              Free site assessment within 48 hours of your call. No obligation.
            </p>
          </div>

          {!submitted ? (
            <div className="grid md:grid-cols-5 gap-px bg-white/5">
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="md:col-span-3 bg-[#0D0F0C] p-10 space-y-8"
              >
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6] px-4 py-3 text-sm font-light outline-none transition-colors duration-200 placeholder-[#F4EFE6]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6] px-4 py-3 text-sm font-light outline-none transition-colors duration-200 placeholder-[#F4EFE6]/20"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6] px-4 py-3 text-sm font-light outline-none transition-colors duration-200 placeholder-[#F4EFE6]/20"
                    placeholder="you@example.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6] px-4 py-3 text-sm font-light outline-none transition-colors duration-200 placeholder-[#F4EFE6]/20"
                    placeholder="e.g. Kozhikode, Malappuram, Kannur"
                  />
                </div>

                {/* Project type */}
                <div>
                  <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                    Surface Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-[#0D0F0C] border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6]/70 px-4 py-3 text-sm font-light outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select surface type...</option>
                    {projectTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-[#0D0F0C] border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6]/70 px-4 py-3 text-sm font-light outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select budget range...</option>
                    {budgetRanges.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-2">
                    Tell us more
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 focus:border-[#4CAF50]/60 text-[#F4EFE6] px-4 py-3 text-sm font-light outline-none transition-colors duration-200 placeholder-[#F4EFE6]/20 resize-none"
                    placeholder="Describe your project — land size, intended use, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2A5C2A] hover:bg-[#3A7C3A] text-[#F4EFE6] py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
                >
                  Submit Enquiry
                </button>

                <p className="text-[#F4EFE6]/25 text-[9px] text-center tracking-[0.1em]">
                  We respond within 24 hours · Your details are kept private
                </p>
              </form>

              {/* Sidebar info */}
              <div className="md:col-span-2 bg-[#0A0C09] p-10 flex flex-col gap-10">
                {/* Process */}
                <div>
                  <p className="text-[#4CAF50] text-[9px] tracking-[0.25em] uppercase mb-6 font-medium">
                    What happens next
                  </p>
                  <div className="space-y-6">
                    {[
                      { step: "24hrs", label: "Engineer calls you to discuss your project" },
                      { step: "48hrs", label: "Free site visit at your location" },
                      { step: "5 days", label: "Full surface specification + fixed-price proposal" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="shrink-0 w-12 text-right">
                          <span className="text-[#4CAF50] text-[10px] tracking-[0.1em] uppercase font-medium">
                            {item.step}
                          </span>
                        </div>
                        <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="border-t border-white/5 pt-8">
                  <p className="text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-4">
                    Prefer WhatsApp?
                  </p>
                  <a
                    href="https://wa.me/918000000000?text=Hi%20Turfina%2C%20I%20want%20to%20enquire%20about%20sports%20turf%20construction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#F4EFE6]/60 hover:text-[#4CAF50] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="text-sm font-light">Message us on WhatsApp</span>
                  </a>
                </div>

                {/* Guarantees */}
                <div className="border-t border-white/5 pt-8 space-y-4">
                  <p className="text-[#F4EFE6]/40 text-[9px] tracking-[0.2em] uppercase mb-4">
                    Our commitments
                  </p>
                  {[
                    "Free site assessment — no obligation",
                    "Fixed-price proposals. No surprises.",
                    "10-year surface performance warranty",
                    "GCC-grade materials only",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-[#4CAF50]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-[#4CAF50]" />
                      </div>
                      <p className="text-[#F4EFE6]/50 text-sm font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Success state */
            <div className="border border-[#4CAF50]/20 bg-[#0D0F0C] p-16 text-center max-w-xl mx-auto">
              <div className="w-12 h-12 border border-[#4CAF50]/30 flex items-center justify-center mx-auto mb-8">
                <div className="w-4 h-4 bg-[#4CAF50]" />
              </div>
              <h2
                className="display-font text-[#F4EFE6] mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                Enquiry received.
              </h2>
              <p className="text-[#F4EFE6]/50 text-sm font-light leading-relaxed mb-8">
                Our engineer will call you within 24 hours to discuss your project.
                Check WhatsApp for a confirmation message from us.
              </p>
              <span className="block w-8 h-px bg-[#4CAF50] mx-auto" />
            </div>
          )}

          {/* ROI Calculator */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#4CAF50]" />
              <p className="text-[#4CAF50] text-[10px] tracking-[0.3em] uppercase font-medium">Estimate Your Investment</p>
            </div>
            <ROICalculator />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
