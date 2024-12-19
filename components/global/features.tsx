import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Eye, Lightbulb, Shield } from 'lucide-react'

const features = [
  {
    title: 'Empowerment',
    description: 'Keep 100% of your fares with our 0% commission model.',
    icon: CheckCircle
  },
  {
    title: 'Transparency',
    description: 'Simple £22 weekly subscription. No hidden fees.',
    icon: Eye
  },
  {
    title: 'Community',
    description: 'Join a thriving community of empowered drivers.',
    icon: Users
  },
  {
    title: 'Innovation',
    description: 'Cutting-edge features that put you in control.',
    icon: Lightbulb
  },
  {
    title: 'Safety',
    description: 'Advanced security features for peace of mind.',
    icon: Shield
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why drivers choose Vaam</h2>
          <p className="text-muted-foreground">Experience the future of ride-sharing with features designed for driver success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-none bg-background">
              <CardContent className="pt-6">
                <feature.icon className="w-10 h-10 text-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

