import AboutUs from '@/components/about'
import ClientMarquee from '@/components/client_marquee'
import Testimonials from '@/components/client_testimonials'
import HeroSection from '@/components/hero'
import NumberStrip from '@/components/numbers_strip'
import Services from '@/components/services'
import PortfolioBentoGrid from '@/components/work'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <NumberStrip />
      <Services />
      <ClientMarquee/>
      <PortfolioBentoGrid/>
      <Testimonials/>
      <AboutUs/>
    </main>
  )
}
