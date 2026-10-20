import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero - Animated gradient, film grain, water image */}
      <HeroSection />

      {/* Propuesta de Valor - Gray with texture, wave divider */}
      <SocialProof />

      {/* Servicios - Dark with glow, wave divider */}
      <BentoSection />

      {/* Metodologia - White, wave timeline, wave divider */}
      <LargeTestimonial />

      {/* CTA - Gradient dark, emotional close */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </main>
  )
}
