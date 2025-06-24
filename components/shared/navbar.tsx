"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu } from "lucide-react"

import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.5, 0.9])
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 12])

  // Fix hydration error: only render after mount
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgb(0 0 0 / ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      <nav className="container mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          <Button 
            variant="link" 
            className="font-heading text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-0"
            asChild
          >
            <Link href="/" scroll={false}>
              {SITE_CONFIG.name}
            </Link>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href 
                    ? "text-white before:absolute before:inset-0 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-80" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
                asChild
              >
                <Link href={link.href} scroll={false}>
                  {link.name}
                </Link>
              </Button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[385px] bg-black/95 border-gray-800">
                <nav className="flex flex-col gap-4 mt-8">
                  {NAVIGATION_LINKS.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-lg font-medium",
                        pathname === link.href 
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" 
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      )}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={link.href} scroll={false}>
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}