"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Metadata } from 'next'

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { AnimatedShinyText } from "@/components/shared/animated-shiny-text"

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

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Parth Dhameliya | Creative Frontend Developer & React Developer',
  description: 'Portfolio of Parth Dhameliya, a frontend developer in Ahmedabad specializing in React, Next.js, and TypeScript. Hire a freelance frontend developer in India for high-performance web applications.',
})

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <SectionWrapper className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <AnimatedShinyText className="text-sm font-medium text-muted-foreground border border-border/40 rounded-full px-4 py-2 bg-muted/50">
                ✨ Welcome to my digital space
              </AnimatedShinyText>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
            >
              <span className="gradient-text">Parth Dhameliya - Frontend & React Developer</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground mb-4">
                Creative Frontend Developer & Next.js Developer in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I design and build beautiful, responsive, and high-performing web applications 
                with a focus on user-centric solutions and modern technologies.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-4"
            >
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Quick Stats Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}