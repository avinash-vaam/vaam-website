'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ShineBorder from "@/components/ui/shine-border"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

interface PricingCardProps {
  className?: string
}

export function PricingCard({ className }: PricingCardProps) {
  return (
    <ShineBorder
      className={cn(
        "relative overflow-hidden rounded-xl",
        className
      )}
      color={[
        "hsl(var(--shine-1))",
        "hsl(var(--shine-2))",
        "hsl(var(--shine-3))"
      ]}
      borderWidth={4}
      borderRadius={10}
    >
      <Card className="border bg-background/50 shadow-sm">
        <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-8">
          <div>
            <h3 className="text-2xl font-bold">Weekly Subscription</h3>
            <p className="text-muted-foreground mt-1">Everything you need to succeed</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-bold">£25</span>
            <p className="text-sm text-muted-foreground">per week</p>
          </div>
        </CardHeader>

        <CardContent className="pb-8">
          <div className="space-y-3">
            {[
              '3-week free trial',
              '24/7 Customer Support',
              'Discounted Insurance, MOTs, repairs and parts',
              'Platform welcomes all drivers'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3">
          <Button 
            className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" 
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline"
            className="w-full h-11 border-primary hover:bg-primary/10" 
          >
            Contact Sales
          </Button>
          <p className="text-center text-sm text-muted-foreground pt-3">
            No hidden fees. Cancel anytime.
          </p>
        </CardFooter>
      </Card>
    </ShineBorder>
  )
} 