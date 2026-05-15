import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Guide Kerala | Smart Way Solutions Blog",
  description: "Expert articles on home loans in Kerala — KSFE transfer, NRI loans, top-up loans, CIBIL score tips, and more from Smart Way Solutions.",
  alternates: { canonical: "https://www.smartwaysolutions.in/blog" },
};

export const posts = [
  {
    slug: "ksfe-loan-transfer",
    title: "How to Transfer Your KSFE Home Loan to a Bank in Kerala",
    description: "KSFE charges 9%–9.75% on home loans. Banks offer 8.35%–9%. Here's exactly how to transfer your KSFE loan and save thousands every month.",
    date: "May 10, 2025",
    readTime: "5 min read",
    tag: "KSFE Transfer",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    slug: "home-loan-without-itr",
    title: "Can You Get a Home Loan Without ITR in Kerala?",
    description: "Small business owners and traders without ITR are often turned away by banks. Here's how NBFCs and Housing Finance Companies can still get you approved.",
    date: "May 8, 2025",
    readTime: "4 min read",
    tag: "Self-Employed",
    tagColor: "bg-amber-50 text-amber-700",
  },
  {
    slug: "nri-home-loan-guide",
    title: "NRI Home Loan Guide for Gulf Workers — Kerala 2025",
    description: "Everything a Kerala NRI in UAE, Saudi, Qatar, or Kuwait needs to know about getting a home loan in India — eligibility, documents, PoA, and repayment.",
    date: "May 5, 2025",
    readTime: "6 min read",
    tag: "NRI Loans",
    tagColor: "bg-green-50 text-green-700",
  },
  {
    slug: "what-is-top-up-loan",
    title: "What Is a Top-Up Loan and Should You Take One?",
    description: "A top-up loan lets you borrow extra funds on top of a balance transfer at home loan rates — far cheaper than a personal loan. Here's when it makes sense.",
    date: "May 2, 2025",
    readTime: "4 min read",
    tag: "Takeover & Top-Up",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    slug: "cibil-score-home-loan",
    title: "CIBIL Score and Home Loans in Kerala — What You Need to Know",
    description: "Your CIBIL score determines your interest rate and whether you get approved at all. Here's what score you need and how to improve it fast.",
    date: "April 28, 2025",
    readTime: "5 min read",
    tag: "CIBIL & Credit",
    tagColor: "bg-red-50 text-red-700",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Knowledge Base
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Home Loan Guides</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-base">
          Plain-language guides to help Kerala homebuyers and NRIs make smarter loan decisions.
        </p>
      </section>

      <section className="py-20 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#F5A623] hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-[#1a1a1a] font-black text-lg mb-2 group-hover:text-[#d4891a] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
                </div>
                <span className="text-[#F5A623] text-2xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
