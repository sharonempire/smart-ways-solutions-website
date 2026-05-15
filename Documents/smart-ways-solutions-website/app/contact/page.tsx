import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Smart Ways Solutions",
  description: "Get in touch with Smart Ways Solutions to book a free consultation or ask any questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f44] text-white py-20 px-6 text-center">
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Book your free 30-minute consultation or send us a message — we respond within one business day.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-[#0a1f44] text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder="+1 (000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors bg-white">
                  <option value="">Select a service…</option>
                  <option>Wealth Management</option>
                  <option>Tax Advisory</option>
                  <option>Investment Planning</option>
                  <option>Business Finance</option>
                  <option>Real Estate Finance</option>
                  <option>Risk & Insurance</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  placeholder="Tell us about your financial goals or questions…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c9a84c] text-[#0a1f44] py-3 rounded-lg font-semibold hover:bg-[#e2c97e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[#0a1f44] text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Our advisors are available Monday to Friday, 9 AM – 6 PM. We aim to respond to all enquiries within one business day.
              </p>
            </div>

            {[
              {
                icon: "📧",
                label: "Email",
                value: "info@smartwayssolutions.com",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+1 (800) 000-0000",
              },
              {
                icon: "📍",
                label: "Office",
                value: "123 Finance Street, Business District, City, 00000",
              },
              {
                icon: "🕐",
                label: "Office Hours",
                value: "Monday – Friday: 9:00 AM – 6:00 PM",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-[#0a1f44] font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#0a1f44] rounded-xl p-6 text-white">
              <p className="text-[#c9a84c] font-semibold text-sm mb-2">Free Consultation</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Not sure where to start? Book a free 30-minute discovery call with one of our senior advisors. No obligation — just clear, honest guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
