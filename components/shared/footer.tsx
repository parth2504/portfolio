"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm" suppressHydrationWarning>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {year} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link 
                href={`mailto:${SITE_CONFIG.links.email}`}
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}