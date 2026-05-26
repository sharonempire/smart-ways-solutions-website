"use client";

// Call this from client components to fire GA4 + Meta Pixel events
// Usage: trackEvent("enquiry_submitted", { loan_type: "Home Loan" })
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if ("gtag" in window) {
    // @ts-expect-error gtag is injected by Analytics component
    window.gtag("event", eventName, params ?? {});
  }

  // Meta Pixel
  if ("fbq" in window) {
    // @ts-expect-error fbq is injected by Analytics component
    window.fbq("track", eventName, params ?? {});
  }
}
