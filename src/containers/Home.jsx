import React from 'react'
import { HeroSection, MainHeroSection, Testimonials, WhyChooseUs, EmailList } from '../components'

export default function Home() {
  return (
    <div>
      <MainHeroSection />
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <EmailList />
    </div>
  )
}
