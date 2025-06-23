"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"

import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8])
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 12])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40"
      style={{
        backgroundColor: `rgba(var(--background) / ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-heading font-bold text-xl gradient-text hover:scale-105 transition-transform"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}