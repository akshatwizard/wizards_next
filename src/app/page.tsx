import AboutUs from '@/components/about'
// BlogSection is hidden site-wide until real blog content is ready — see
// note by the booking section at the bottom and src/constant/menu.ts /
// src/components/footer.tsx, where the corresponding nav links are hidden
// the same way. Restore all three together.
// import BlogSection from '@/components/blogs'
import ClientMarquee from '@/components/client_marquee'
import Testimonials from '@/components/client_testimonials'
import BookingApp from '@/components/book/booking_app'
import CTABanner from '@/components/cta_banner'
import FAQ from '@/components/faq'
import HeroSection from '@/components/hero'
import InstagramReels from '@/components/instagram_reels'
import { getInstagramReels } from '@/lib/instagram'
import IndustriesSection from '@/components/industry'
import NumberStrip from '@/components/numbers_strip'
import Services from '@/components/services'
import ProcessSection from '@/components/steps'
// Team is hidden until real, complete team details are ready to publish.
// import Team from '@/components/teams'
import PortfolioBentoGrid from '@/components/work'
import SmmClientsStrip from '@/components/smm_clients_strip'
import React from 'react'

export const metadata = {
  title: 'Wizards Next — Digital Marketing Agency in Varanasi & Hyderabad',
  description:
    'Digital marketing agency in Varanasi & Hyderabad — 50+ projects across India, with overseas clients in the USA, Russia & Spain. Social media, branding, ads, SEO, web development.',
  alternates: {
    canonical: '/',
  },
}

export const revalidate = 21600

export default async function Home() {
  const reels = await getInstagramReels()
  return (
    <main className='w-full'>
      <HeroSection />
      <NumberStrip />
      <Services />
      <ClientMarquee />
      <IndustriesSection />
      <InstagramReels reels={reels} />
      <PortfolioBentoGrid />
      <SmmClientsStrip />
      <Testimonials />
      <CTABanner />
      <AboutUs />
      <ProcessSection />
      <FAQ />
      {/* <Team /> — hidden until real team bios/photos are ready, see import note above */}
      {/* <BlogSection /> — hidden until real blog posts exist, see import note above */}
      {/* Free 30-min Exploration Call booking, embedded inline (replaces the old contact form) */}
      <BookingApp embedded />
    </main>
  )
}
