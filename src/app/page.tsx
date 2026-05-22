import HeroSection from '@/components/hero'
import NumberStrip from '@/components/numbers_strip'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <NumberStrip />
    </main>
  )
}
