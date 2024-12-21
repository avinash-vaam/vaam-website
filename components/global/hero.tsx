'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from 'lucide-react'
import BlurFade from "@/components/magicui/blur-fade"
import HighlightText from "@/components/global/highlight-text"
export default function Hero() {
  return (
    <div className="relative py-20 sm:py-20 md:py-32 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Your Fare. Your Money.{" "}
              <HighlightText text="Zero Commission!" />
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              VAAM is a revolutionary ride-sharing company with zero commission, empowering drivers to earn more and take control.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Input 
                type="email" 
                placeholder="Enter work email" 
                className="h-10 sm:h-11 md:h-12 text-base"
              />
              <Button className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 text-black">
                Become a driver
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">0%</h3>
                <p className="text-sm text-muted-foreground">Commission on rides</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">£22</h3>
                <p className="text-sm text-muted-foreground">Weekly subscription</p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star <= 4 ? 'fill-foreground text-foreground' : 'fill-muted text-muted'}`}
                />
              ))}
              <span className="text-xs sm:text-sm text-muted-foreground ml-2">4.5 Average driver rating</span>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square relative max-w-sm mx-auto md:max-w-md">
              <img
                src="/tesla-model-3.png?height=600&width=600"
                alt="Vaam app interface"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

