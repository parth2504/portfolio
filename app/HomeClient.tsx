"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { AnimatedShinyText } from "@/components/shared/animated-shiny-text"
import { useNavigation } from "@/hooks/use-navigation"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 1.11, 0.81, 0.99],
    },
  },
}

export default function HomeClient() {
  const { navigate } = useNavigation()

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    navigate(href)
  }, [navigate])

  return (
    <main className="min-h-screen">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center pt-24 md:pt-32"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <AnimatedShinyText className="text-sm font-medium text-muted-foreground border border-border/40 rounded-full px-4 py-2 bg-muted/50">
                <span role="text" aria-label="Welcome message">✨ Welcome to my digital space</span>
              </AnimatedShinyText>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              <span className="gradient-text">Parth Dhameliya - Frontend & React Developer</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground mb-4">
              Innovative Frontend Developer & Next.js Expert in Ahmedabad, Gujarat
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Specialized in building modern web applications using React.js, Next.js, and TypeScript. 
                  Creating responsive, accessible, and high-performance digital experiences.
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  <strong>Technologies:</strong> React, Next.js, TypeScript, Tailwind CSS, Redux, Node.js
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="group" asChild>
                <a 
                  href="/projects" 
                  onClick={(e) => handleClick(e, "/projects")}
                  className="inline-flex items-center"
                  aria-label="View my portfolio projects"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="/contact"
                  onClick={(e) => handleClick(e, "/contact")}
                  aria-label="Contact me for work opportunities"
                >
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-4"
              role="navigation"
              aria-label="Social links"
            >
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.section 
              variants={itemVariants}
              className="mt-16 text-left bg-muted/30 rounded-lg p-6"
              aria-label="Key achievements"
            >
              <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
              <ul className="space-y-3">
                <li>🚀 Reduced load times by 100% through performance optimization</li>
                <li>💼 Developed enterprise solutions for Dubai Pulse project</li>
                <li>📈 Built high-frequency trading platform features</li>
              </ul>
            </motion.section>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  )
}