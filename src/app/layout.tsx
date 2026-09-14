import type { Metadata } from "next";
import { Sora, Poppins, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import SmoothScrollProvider from "@/lib/SmoothScroll";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { SITE_URL, BUSINESS } from "@/constant/site";

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
  areaServed: "IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </body>
    </html>
  );
}
