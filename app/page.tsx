import { Header } from '@/components/global/header-alt'
import Hero from '@/components/global/hero'
import Features from '@/components/global/features'
import Footer from '@/components/global/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

