import HeroSection from './components/HeroSection'
import AboutPreview from './components/AboutPreview'
import ServicesPreview from './components/ServicesPreview'
import TestimonialsSection from './components/TestimonialsSection'
import LeadMagnet from './components/LeadMagnet'
import BlogPreview from './components/BlogPreview'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <LeadMagnet />
      <BlogPreview />
      <CTASection />
    </div>
  )
}
