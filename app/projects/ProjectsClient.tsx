"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { PROJECTS } from "@/lib/constants"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
}

export default function ProjectsClient() {
  return (
    <main className="min-h-screen pt-16">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              My <span className="gradient-text">React & Next.js Portfolio Projects</span>
            </h1>
            <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <p itemProp="description">
                Showcasing innovative web applications built with React, Next.js, and TypeScript. 
                View my work as a Frontend Developer in Ahmedabad, specializing in modern web development.
              </p>
            </div>
          </motion.div>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            itemScope
            itemType="http://schema.org/CollectionPage"
          >
            {PROJECTS.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                itemScope
                itemType="http://schema.org/CreativeWork"
              >
                <Card className="h-full overflow-hidden group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} live demo`}
                              itemProp="url"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              <span className="sr-only">View Live Demo</span>
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} source code on GitHub`}
                              itemProp="codeRepository"
                            >
                              <Github className="h-4 w-4" aria-hidden="true" />
                              <span className="sr-only">View Source Code</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors" itemProp="name">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4" itemProp="description">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2" itemProp="keywords">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  Looking for a Frontend Developer in Ahmedabad?
                </h2>
                <p className="text-muted-foreground mb-6">
                  I specialize in building modern web applications with React, Next.js, and TypeScript. 
                  Let&apos;s discuss how I can help bring your project to life with clean code and optimal performance.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact" aria-label="Contact me for project inquiries">
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </SectionWrapper>
    </main>
  )
}