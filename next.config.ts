import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  async redirects() {
    return [
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
