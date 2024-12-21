import { Header } from '@/components/global/header-alt'
import Hero from '@/components/global/hero'
import Values from '@/components/global/values'
import Services from '@/components/global/services'
import Footer from '@/components/global/footer'
import About from '@/components/global/about'
import Pricing from '@/components/global/pricing'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full">
        <div className="bg-background dark:bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <Hero />
          </div>
        </div>
        
        <div className="bg-[hsl(var(--about-bg))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <About />
          </div>
        </div>

        <div className="bg-background dark:bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <Values />
          </div>
        </div>

        <div className="bg-[hsl(var(--about-bg))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <Services />
          </div>
        </div>

        <div className="bg-background dark:bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <Pricing />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

