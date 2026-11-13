import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  async redirects() {
    return [
      // Old WordPress site URLs (/index.php/...) still indexed by Google and
      // linked from old profiles — 301 each to its current equivalent; anything
      // else under /index.php goes to the homepage.
      { source: "/blogs", destination: "/blog", statusCode: 301 },
      { source: "/index.php/about-us", destination: "/about", statusCode: 301 },
      { source: "/index.php/career", destination: "/careers", statusCode: 301 },
      { source: "/index.php/contact-us", destination: "/contact", statusCode: 301 },
      { source: "/index.php/services", destination: "/services", statusCode: 301 },
      { source: "/index.php/our-works", destination: "/our-works", statusCode: 301 },
      { source: "/index.php/privacy-policy", destination: "/privacy-policy", statusCode: 301 },
      { source: "/index.php/branding", destination: "/services/brand-designing", statusCode: 301 },
      { source: "/index.php/content-creation", destination: "/services/content-creation", statusCode: 301 },
      { source: "/index.php/marketing", destination: "/services", statusCode: 301 },
      { source: "/index.php/website", destination: "/services/website-development", statusCode: 301 },
      { source: "/index.php/mobile-apps", destination: "/services/app-dev", statusCode: 301 },
      { source: "/index.php/e-commerce", destination: "/sector/e-commerce", statusCode: 301 },
      { source: "/index.php/corporates", destination: "/sector/corporate", statusCode: 301 },
      { source: "/index.php/educationals", destination: "/sector/education", statusCode: 301 },
      { source: "/index.php/fmcg", destination: "/sector/fmcg", statusCode: 301 },
      { source: "/index.php/hospitals", destination: "/sector/healthcare", statusCode: 301 },
      { source: "/index.php/hotels", destination: "/sector/travel-and-tourism", statusCode: 301 },
      { source: "/index.php/travel", destination: "/sector/travel-and-tourism", statusCode: 301 },
      { source: "/index.php/retailers", destination: "/sector/retail", statusCode: 301 },
      { source: "/index.php/professionals", destination: "/sector/personal-services", statusCode: 301 },
      { source: "/index.php/carpets-rugs", destination: "/our-works", statusCode: 301 },
      { source: "/index.php/interiors", destination: "/our-works", statusCode: 301 },
      { source: "/index.php/matrimonial", destination: "/our-works", statusCode: 301 },
      { source: "/index.php/rti-talk", destination: "/our-works", statusCode: 301 },
      { source: "/index.php", destination: "/", statusCode: 301 },
      { source: "/index.php/:path*", destination: "/", statusCode: 301 },
      {
        // The Exploration Call booking admin lives on the booking API host (Hostinger VPS).
        source: "/book/admin",
        destination: "https://book-api.wizards.co.in/admin",
        permanent: false,
      },
      {
        // https://wizards.co.in/worksuite/public/login -> https://work.wizards.co.in/login
        // Matched on path only (no host restriction), so this fires the
        // same way regardless of which attached domain the request comes
        // in on (apex wizards.co.in, www.wizards.co.in, or the vercel.app
        // URL) — one rule covers all of them without depending on exactly
        // how domains/DNS are wired up in Vercel.
        source: "/worksuite/public/login",
        destination: "https://work.wizards.co.in/login",
        permanent: true,
      },
      {
        // The thin social-media client pages were replaced by full case
        // studies; slugs are identical, so one rule covers every client.
        source: "/social-media-clients/:slug",
        destination: "/our-works/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
