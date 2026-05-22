import ClientMarquee from '@/components/client_marquee'
import HeroSection from '@/components/hero'
import NumberStrip from '@/components/numbers_strip'
import Services from '@/components/services'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <NumberStrip />
      <Services />
      <ClientMarquee/>
    </main>
  )
}
