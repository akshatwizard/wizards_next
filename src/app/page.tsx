import AboutUs from '@/components/about'
import BlogSection from '@/components/blogs'
import ClientMarquee from '@/components/client_marquee'
import Testimonials from '@/components/client_testimonials'
import Contact from '@/components/contact'
import CTABanner from '@/components/cta_banner'
import FAQ from '@/components/faq'
import HeroSection from '@/components/hero'
import NumberStrip from '@/components/numbers_strip'
import Services from '@/components/services'
import ProcessSection from '@/components/steps'
import Team from '@/components/teams'
import PortfolioBentoGrid from '@/components/work'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <NumberStrip />
      <Services />
      <ClientMarquee />
      <CTABanner />
      <PortfolioBentoGrid />
      <Testimonials />
      <AboutUs />
      <ProcessSection />
      <FAQ />
      <Team />
      <BlogSection />
      <Contact />
    </main>
  )
}
