import type { Metadata } from "next";
import { Sora, Poppins, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/header/header";
import SmoothScrollProvider from "@/lib/SmoothScroll";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { SITE_URL, BUSINESS, GA_MEASUREMENT_ID } from "@/constant/site";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // This is only the fallback for any page that doesn't set its own
  // title/description (most pages already do). Every page keeps its own
  // metadata export untouched by this.
  title: "Wizards Next — Digital Marketing Agency in Varanasi & Hyderabad",
  description: BUSINESS.description,
};

// Organization / LocalBusiness structured data, emitted once here so it
// applies site-wide. Built only from details already published on the
// site (contact section, about page) — no invented address or social
// links. `sameAs` is intentionally omitted until the site's social icons
// point to real profile URLs instead of "#".
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo.webp`,
  image: `${SITE_URL}/images/brand/logo.webp`,
  description: BUSINESS.description,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  foundingDate: BUSINESS.foundingDate,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  // India is the core, physically-served market (offices in Varanasi and
  // Hyderabad); the three overseas countries reflect real, current client
  // relationships served remotely — kept in sync with BUSINESS.overseasCountries
  // in constant/site.ts rather than duplicated here.
  areaServed: [
    { "@type": "Country", name: "India" },
    ...BUSINESS.overseasCountries.map((name) => ({ "@type": "Country", name })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Next.js sets NODE_ENV=production for every `next build` — including
  // Vercel preview deployments, not just the real production domain — so
  // that check alone isn't enough to keep preview/PR traffic out of your
  // analytics. VERCEL_ENV is what actually distinguishes them ("production"
  // vs "preview" vs "development"); the fallback covers non-Vercel hosting,
  // where VERCEL_ENV won't exist at all.
  const isProductionDeployment =
    process.env.NODE_ENV === "production" &&
    (process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true);

  return (
    <html
      lang="en"
      className={cn("antialiased", "bg-zinc-950", sora.variable, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
        {/* Google Analytics 4 — only on the real production domain, so
            local dev and Vercel preview deployments (branches, PRs) never
            send test traffic into your real analytics data. */}
        {isProductionDeployment && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
