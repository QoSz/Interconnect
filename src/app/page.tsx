import Link from 'next/link'
import { Button } from "@/components/ui/button"
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </div>
  )
}
