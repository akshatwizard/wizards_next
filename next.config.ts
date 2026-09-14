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
    ];
  },
};

export default nextConfig;
