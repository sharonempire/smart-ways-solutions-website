"use client";

const WHATSAPP_NUMBER = "919000000000"; // Replace with actual number: 91XXXXXXXXXX
const MESSAGE = encodeURIComponent(
  "Hi Smart Way Solutions, I'm interested in a loan. Can you help me?"
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-lg hover:bg-[#1ebe57] transition-all hover:scale-105 group"
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 shrink-0"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.829.737 5.484 2.027 7.789L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.782-1.857l-.487-.29-5.002 1.191 1.22-4.873-.316-.501A13.253 13.253 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.63-.199-.896.199-.265.398-1.03 1.294-1.262 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.201-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.896-2.162-1.228-2.96-.323-.777-.652-.672-.896-.685l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.362-1.394 3.323s1.428 3.854 1.627 4.12c.199.265 2.81 4.291 6.808 6.017.951.411 1.693.656 2.271.84.954.303 1.823.26 2.51.158.765-.114 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.464z" />
      </svg>
      {/* Label — visible on hover on desktop, always on mobile */}
      <span className="text-sm font-bold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 md:hidden">
        WhatsApp Us
      </span>
      <span className="hidden md:block text-sm font-bold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
        WhatsApp Us
      </span>
    </a>
  );
}
