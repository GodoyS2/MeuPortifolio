import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
