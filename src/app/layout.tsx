import type { Metadata } from "next";
import { Sora, Poppins, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import SmoothScrollProvider from "@/lib/SmoothScroll";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

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
      className={cn("antialiased", "bg-zinc-950", sora.variable, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="antialiased">
        <Header />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
