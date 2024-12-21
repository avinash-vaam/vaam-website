'use client'

import BlurFade from '@/components/magicui/blur-fade'
import HighlightText from './highlight-text'
import { PricingCard } from '../pricing/pricing-card'

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left content */}
        <BlurFade delay={0.1} inView className="w-full md:w-5/12">
          <div className="max-w-xl md:max-w-none">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Our Success-Driven{" "}
              <HighlightText text="Approach" />
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Vaam, we&apos;ve reimagined ride-hailing to give drivers full control! Our business model ensures drivers keep{" "}
              <span className="font-medium text-foreground">100% of their fare earnings</span>, no commission cuts, ever.
            </p>
            <p className="text-lg text-muted-foreground">
              Instead of losing out to middlemen like Uber or Bolt, drivers simply pay a flat weekly subscription. 
              It&apos;s simple, fair, and designed to{" "}
              <span className="font-medium text-foreground">empower drivers to earn more and own their success!</span>
            </p>
          </div>
        </BlurFade>

        {/* Right pricing card */}
        <BlurFade delay={0.2} inView className="w-full md:w-5/12">
          <PricingCard />
        </BlurFade>
      </div>
    </div>
  )
} 