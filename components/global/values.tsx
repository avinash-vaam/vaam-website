'use client'

import BlurFade from "@/components/magicui/blur-fade"
import { Sparkles, Scale, Users, Lightbulb, Shield } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import HighlightText from "@/components/global/highlight-text"

const values = [
  {
    title: "Empowerment",
    icon: Sparkles,
    description: "At Vaam, empowerment isn't just a value, it's our mission. We're redefining what it means to be a ride-sharing driver by creating a platform that champions fairness, respect, and opportunity.",
    points: [
      "Financial Freedom: 0% commission, drivers keep 100% of their fares",
      "Flexible Schedules: Drive when it suits your lifestyle",
      "Choice in Rides: You control where and what trips you take",
      "A Voice in the Platform: Drivers are stakeholders in our success"
    ]
  },
  {
    title: "Transparency",
    icon: Scale,
    description: "At Vaam, we believe trust is built on openness and clarity. That's why transparency is a cornerstone of everything we do.",
    points: [
      "No Hidden Fees: Simple ��������22 weekly subscription",
      "Upfront Information: Clear fare breakdowns and earnings summaries",
      "Open Communication: Stay informed about updates and changes",
      "Fair and Honest Practices: A level playing field for everyone"
    ]
  },
  {
    title: "Community",
    icon: Users,
    description: "We're not just a ride-sharing platform, we're a thriving community. The success of our drivers and satisfaction of our riders are deeply interconnected.",
    points: [
      "A Family Mindset: Everyone is treated with dignity and respect",
      "Meaningful Connections: Building trust between drivers and riders",
      "24/7 Support: Always here when you need us",
      "Celebrating Diversity: Equal opportunities for all"
    ]
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "Innovation is in our DNA. We believe in constantly challenging the status quo and delivering cutting-edge solutions that redefine the ride-sharing experience.",
    points: [
      "Game-Changing Features: Real-time tracking and driver controls",
      "Driver-Centric Approach: Technology that puts drivers first",
      "Smart Insights: Real-time analytics to optimize earnings",
      "Future-Ready Platform: Always evolving and improving"
    ]
  },
  {
    title: "Safety First",
    icon: Shield,
    description: "Your safety is at the core of everything we do. We uphold the highest standards through thorough background checks, vehicle inspections, and advanced security measures.",
    points: [
      "Real-time ride sharing with loved ones",
      "Thorough background checks for all drivers",
      "Regular vehicle safety inspections",
      "Advanced app security measures"
    ]
  }
]

export default function Values() {
  return (
    <div className="relative py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <BlurFade delay={0.1} inView>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <HighlightText text="Values" />
            </h2>
            <p className="text-muted-foreground mb-8">
              At Vaam, we&apos;re building more than just a ride-sharing platform. We&apos;re creating a community founded on strong values and meaningful connections.
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <Accordion type="single" collapsible className="w-full">
              {values.map((value, index) => (
                <AccordionItem 
                  key={value.title} 
                  value={`item-${index}`}
                  className="border-b border-primary/10"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-left">{value.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pt-2 pb-4">
                      {value.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {value.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <Button className="mt-8" variant="outline">
              Learn more
            </Button>
          </BlurFade>
        </div>

        <BlurFade delay={0.3} inView>
          <div className="relative">
            {/* Main image with proper styling */}
            <div className="relative z-10 rounded-2xl p-1 bg-gradient-to-br from-primary/30 to-primary/10">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-background">
                <img
                  src="/tesla-model-3.png"
                  alt="Vaam Values"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Subtle decorative elements using primary color */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl -z-20" />
            
            {/* Subtle glow effect */}
            <div 
              className="absolute -inset-px bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl"
              style={{
                maskImage: 'radial-gradient(circle at center, white, transparent)',
                WebkitMaskImage: 'radial-gradient(circle at center, white, transparent)',
              }}
            />
          </div>
        </BlurFade>
      </div>
    </div>
  )
} 