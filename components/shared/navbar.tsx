"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useNavigation } from "@/hooks/use-navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { navigate } = useNavigation()
  const { scrollY } = useScroll()
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.5, 0.9])
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 12])

  const handleNavigation = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (!(e.ctrlKey || e.metaKey)) {
      setIsOpen(false)
      if (href === "/" && pathname === "/") {
        // If already on home page, just prevent default
        return
      }
      navigate(href)
    } else {
      window.open(href, '_blank')
    }
  }, [navigate, pathname])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      style={{
        // fallback for framer-motion scroll effect
        backgroundColor: undefined,
        backdropFilter: undefined,
      }}
    >
      <nav className="container mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          <motion.a
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className="font-heading text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            {SITE_CONFIG.name}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-md select-none transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted/50 hover:text-primary"
                  )}
                  initial={false}
                  animate={{}}
                  whileHover={{
                    scale: 1.04
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut"
                  }}
                >
                  {link.name}
                </motion.a>
              )
            })}
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
              <SheetContent side="right" className="w-[80vw] sm:w-[385px] bg-background/95 border-border">
                {/* Accessibility: Add SheetHeader and SheetTitle for DialogContent */}
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {NAVIGATION_LINKS.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavigation(e, link.href)}
                        className={cn(
                          "w-full px-4 py-2 text-lg font-medium rounded-md select-none transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted/50 hover:text-primary"
                        )}
                        initial={false}
                        animate={{}}
                        whileHover={{
                          scale: 1.04
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "easeOut"
                        }}
                      >
                        {link.name}
                      </motion.a>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}