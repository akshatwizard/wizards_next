import type { Metadata } from "next";
import { Sora, Poppins, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/header/header";
import SmoothScrollProvider from "@/lib/SmoothScroll";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp_button";
import FirstTouch from "@/components/analytics/first_touch";
import { SITE_URL, BUSINESS, GA_MEASUREMENT_ID, SAME_AS, HAS_MAP } from "@/constant/site";

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
  title: "Wizards Next — Digital Marketing Agency in Varanasi",
  description: BUSINESS.description,
};

// Organization / LocalBusiness structured data, emitted once here so it
// applies site-wide. Built only from details already published on the
// site (contact section, about page) — no invented address or social
// links. `sameAs` lists the official profiles linked in the footer.
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
  sameAs: SAME_AS,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  hasMap: HAS_MAP,
  // Hours as already published on /contact and the Varanasi city page.
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  }],
  // India is the core, physically-served market (office in Varanasi; Hyderabad
  // clients served remotely); the three overseas countries reflect real, current client
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
        <FirstTouch />
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
        <WhatsAppButton />
        {/* Google Analytics 4 — only on the real production domain, so
            local dev and Vercel preview deployments (branches, PRs) never
            send test traffic into your real analytics data. */}
        {isProductionDeployment && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
