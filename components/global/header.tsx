'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Vaam
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#product" className="text-sm text-gray-600 hover:text-black">Product</Link></li>
            <li><Link href="#why-us" className="text-sm text-gray-600 hover:text-black">Why us</Link></li>
            <li><Link href="#about" className="text-sm text-gray-600 hover:text-black">About us</Link></li>
            <li><Link href="#blog" className="text-sm text-gray-600 hover:text-black">Blog</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Book a demo
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-gray-900">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}

