'use client'

import BlurFade from "@/components/magicui/blur-fade"
import HighlightText from "./highlight-text"

export default function About() {
  return (
    <div className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image column - shows first on desktop, second on mobile */}
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/about-us-stock.png"
                alt="Vaam illustration"
                className="w-full"
              />
            </div>
            <div 
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
                transform: 'scale(1.2)',
              }}
            />
          </div>
        </div>

        {/* Content column - shows second on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Redefining{" "}
              <HighlightText text="Ride-Sharing" />
            </h2>
            <p className="text-lg text-muted-foreground mt-8">
              For too long, the ride-sharing industry has been controlled by a few major players, 
              exploiting drivers with low pay and hefty commission cuts.
            </p>
            <p className="text-lg text-muted-foreground mt-6">
              Vaam was created to disrupt this broken system. Our mission is simple: 
              <span className="text-foreground font-medium"> empower drivers to keep 100% of their fares</span> with 
              a simple weekly subscription. This means drivers earn more, while riders enjoy more 
              affordable, reliable rides.
            </p>
            <p className="text-lg text-muted-foreground mt-6">
              We&apos;re building a platform rooted in fairness, transparency, and innovation — 
              changing the game for drivers, riders, and the future of ride-sharing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 