"use client"

import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Code, Lightbulb, Users } from "lucide-react"

import { SKILLS, EDUCATION } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const skillCategories = SKILLS.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []
  }
  acc[skill.category].push(skill.name)
  return acc
}, {} as Record<string, string[]>)

export default function AboutClient() {
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
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <p itemProp="description">
                Dynamic Front-End Developer with 2+ years of experience building responsive web applications using React.js, Next.js, and TypeScript. Proven track record in performance optimization, achieving a 40% reduction in page load times and a 25% increase in user engagement. Skilled in state management, automated testing, and collaborating with cross-functional teams to deliver scalable, high-quality solutions.
              </p>
            </div>
            <div className="mt-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Core Competencies</h2>
              <ul className="list-disc list-inside text-left text-muted-foreground space-y-2">
                <li>Front-End Development</li>
                <li>Web Performance Optimization</li>
                <li>Responsive UI Design</li>
                <li>REST API Integration</li>
                <li>Agile Scrum Collaboration</li>
                <li>Testing Automation</li>
              </ul>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              itemScope
              itemType="http://schema.org/Person"
            >
              <h2 className="text-2xl font-heading font-semibold mb-6">Professional Overview</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4" itemProp="description">
                  As a Frontend Developer with expertise in React.js and Next.js, I specialize in creating 
                  high-performance web applications. Based in Ahmedabad, Gujarat, I bring 2+ years of 
                  experience in developing enterprise-level solutions and optimizing web performance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My focus areas include modern JavaScript frameworks, responsive design, accessibility (WCAG), 
                  and performance optimization. I&apos;ve successfully delivered projects for clients in fintech, 
                  e-commerce, and enterprise sectors.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
                  <ul className="list-none space-y-3">
                    <li>▶ Frontend Architecture & Development</li>
                    <li>▶ React.js & Next.js Applications</li>
                    <li>▶ Performance Optimization</li>
                    <li>▶ Responsive & Mobile-First Design</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Available for frontend development projects in Ahmedabad and remote opportunities worldwide. 
                  Specialized in creating scalable React applications with modern tech stacks.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8">
                <h3 className="text-xl font-heading font-semibold mb-4">What Drives Me</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Clean Code</h4>
                      <p className="text-sm text-muted-foreground">Writing maintainable, scalable code</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Innovation</h4>
                      <p className="text-sm text-muted-foreground">Embracing cutting-edge technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">User-Centric</h4>
                      <p className="text-sm text-muted-foreground">Prioritizing user experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Growth</h4>
                      <p className="text-sm text-muted-foreground">Continuous learning mindset</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-6">Technical Proficiencies</h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-medium mb-3 text-primary">{category}</h3>
                        <div className="flex flex-wrap gap-2" itemProp="knowsAbout">
                          {skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
                itemProp="alumniOf"
                itemScope
                itemType="http://schema.org/CollegeOrUniversity"
              >
                <h2 className="text-2xl font-heading font-semibold mb-6">Education</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold" itemProp="degreeName">{EDUCATION.degree}</h3>
                        <p className="text-primary" itemProp="name">{EDUCATION.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          <span itemProp="address">{EDUCATION.location}</span> • Graduated <span itemProp="endDate">{EDUCATION.year}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}