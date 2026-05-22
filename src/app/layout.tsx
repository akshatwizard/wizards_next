import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import SmoothScrollProvider from "@/lib/SmoothScroll";

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
  title: "Wizards Next LLP",
  description: "Wizards Next LLP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${poppins.variable} antialiased bg-zinc-950`}
    >
      <body className="antialiased">
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
