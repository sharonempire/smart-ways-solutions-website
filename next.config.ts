import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  turbopack: {
    root: __dirname,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(self)",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            // GTM + GA + Facebook Pixel + Google Maps scripts
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://maps.googleapis.com",
            // Inline styles used throughout + Google Fonts (if added later)
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            // Google Fonts files
            "font-src 'self' https://fonts.gstatic.com",
            // Images: self, data URIs, Unsplash (next/image remote pattern)
            "img-src 'self' data: blob: https://images.unsplash.com https://maps.googleapis.com https://maps.gstatic.com https://www.google-analytics.com https://www.facebook.com",
            // fetch() targets: Supabase, GA, Maps
            "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://maps.googleapis.com https://region1.google-analytics.com",
            // Google Maps iframe embed (if used)
            "frame-src https://www.google.com https://www.googletagmanager.com",
            // Block this site from being framed (belt-and-suspenders with X-Frame-Options)
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join("; "),
        },
      ],
    },
    {
      source: "/(.*)\\.(png|jpg|jpeg|gif|svg|ico|webp|avif|woff2|woff|ttf)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
