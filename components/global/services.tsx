'use client'

import BlurFade from "@/components/magicui/blur-fade"
import { Card } from "@/components/ui/card"
import HighlightText from "./highlight-text"

const services = [
  {
    title: "City Rides",
    description: "Book your ride ahead or get your driver right away.",
    image: "/illustrations/city-rides.svg",
    tags: ["Passengers", "Drivers"]
  },
  {
    title: "City to City",
    description: "Comfortable rides to other cities on your schedule and for a fair rate.",
    image: "/illustrations/intercity.svg",
    tags: ["Passengers", "Drivers"]
  },
  {
    title: "EV Charging",
    description: "Keep your electric vehicle ready for the road with our reliable charging network.",
    image: "/illustrations/ev-charging.svg",
    tags: ["Charging"]
  }
]

export default function Services() {
  return (
    <div className="relative py-16 md:py-24">
      <BlurFade delay={0.1} inView>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <HighlightText text="Service" />
            </h2>
            <p className="text-muted-foreground mt-4">
              Comprehensive solutions for all your transportation needs
            </p>
          </div>
          <button className="text-primary hover:underline hidden md:block">
            See more →
          </button>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <BlurFade key={service.title} delay={0.2 + index * 0.1} inView>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-background border">
              <div className="aspect-[4/3] relative mb-6 bg-primary/10 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.4} inView>
        <button className="text-primary hover:underline mt-8 md:hidden w-full text-center">
          See more →
        </button>
      </BlurFade>
    </div>
  )
} 