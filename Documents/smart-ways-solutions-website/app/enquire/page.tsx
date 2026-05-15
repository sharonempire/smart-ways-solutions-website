import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Apply for a Loan | Smart Way Solutions Kerala",
  description: "Submit your home loan or property loan enquiry. Our advisor calls within 24 hours with the best offers from 16+ banks and NBFCs — free service.",
};

export default function EnquirePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Get Started
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Apply for a Loan</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-base">
          Fill in your details. Our advisor calls within 24 hours with the best offers from our bank partners — 100% free service.
        </p>
      </section>

      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-white">
              <p className="text-[#F5A623] font-bold text-sm mb-4">What Happens Next?</p>
              <ol className="space-y-3">
                {[
                  "You submit this form",
                  "Our advisor calls within 24 hours",
                  "We compare offers from 16+ lenders",
                  "We handle all documentation",
                  "Loan sanctioned in 7–15 working days",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 items-start text-sm text-gray-300">
                    <span className="text-[#F5A623] font-black shrink-0 w-5">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {[
              { icon: "📞", label: "Call Us", value: "+91 00000 00000" },
              { icon: "📧", label: "Email", value: "loans@smartwaysolutions.com" },
              { icon: "📍", label: "Location", value: "Kerala, India" },
              { icon: "🕐", label: "Hours", value: "Mon–Sat: 9 AM – 7 PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-center bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-[#1a1a1a] font-bold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#F5A623] rounded-xl p-5 text-center">
              <p className="text-black font-black text-2xl">98%</p>
              <p className="text-black/70 text-xs mt-1">of our clients get approved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
