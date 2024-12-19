"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/global/ModeToggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { NavigationMobile } from "@/components/global/NavigationMobile"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "Product",
    href: "#product",
    description: "Learn about our product features"
  },
  {
    title: "Why us",
    href: "#why-us",
    description: "See what makes us different"
  },
  {
    title: "About us",
    href: "#about",
    description: "Get to know our team"
  },
  {
    title: "Blog",
    href: "#blog",
    description: "Read our latest updates"
  }
]

export function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/60 backdrop-blur-lg border-b">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="relative w-32 h-10">
            <Image
              src="/vaam-logo-full.jpeg"
              alt="Vaam"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent text-sm text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <NavigationMobile components={navigationItems} />
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:inline-flex"
          >
            Book a demo
          </Button>
          <Link href="/register">
          <Button 
            size="sm"
          >
            Sign up
          </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}