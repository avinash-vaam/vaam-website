'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Put <span className="underline decoration-[3px] underline-offset-4">drivers</span> first
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Fast, user-friendly and engaging - transform ride-sharing with a platform that empowers drivers and streamlines your daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Input 
                type="email" 
                placeholder="Enter work email" 
                className="h-12 text-base"
              />
              <Button className="h-12 px-8">
                Book a demo
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">0%</h3>
                <p className="text-sm text-muted-foreground">Commission on rides</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">£22</h3>
                <p className="text-sm text-muted-foreground">Weekly subscription</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= 4 ? 'fill-foreground text-foreground' : 'fill-muted text-muted'}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.5 Average driver rating</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative">
              <img
                src="/tesla-model-3.png?height=600&width=600"
                alt="Vaam app interface"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

