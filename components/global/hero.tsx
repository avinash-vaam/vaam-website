'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from 'lucide-react'
import BlurFade from "@/components/magicui/blur-fade"
import HighlightText from "@/components/global/highlight-text"

export default function Hero() {
  return (
    <div className="relative py-20 sm:py-20 md:py-20 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0">
          <BlurFade delay={0.1} inView>
            <div className="">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Your Fare.{" "}
                <span className="text-muted-foreground">Your Money.</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <HighlightText text="Zero Commission!" />
              </h2>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed max-w-lg">
              VAAM is a revolutionary ride-sharing company with zero commission, empowering drivers to earn more and take control.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 mb-10">
              <Input 
                type="email" 
                placeholder="Enter work email" 
                className="h-12 text-base bg-background/60 backdrop-blur-sm"
              />
              <Button 
                size="lg"
                className="h-12 px-8 text-black font-medium text-base"
              >
                Become a driver
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="grid grid-cols-2 gap-12 mb-10">
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold">0%</h3>
                <p className="text-sm text-muted-foreground">Commission on rides</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold">£22</h3>
                <p className="text-sm text-muted-foreground">Weekly subscription</p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">4.5 Average driver rating</span>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square relative max-w-sm mx-auto md:max-w-none md:w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <img
                src="/tesla-model-3.png"
                alt="Tesla Model 3"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

