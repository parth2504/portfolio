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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-6">My Story</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a creative and detail-oriented Frontend Developer with over 2 years of experience, 
                  I specialize in building modern, responsive web applications that deliver exceptional 
                  user experiences. My journey in web development began with a passion for combining 
                  technical excellence with creative design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I thrive on transforming complex problems into elegant, user-friendly solutions. 
                  My expertise spans across the entire frontend development spectrum, from crafting 
                  pixel-perfect interfaces to implementing complex state management and optimizing 
                  application performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring the latest web technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying at the forefront of web development trends.
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
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-6">Skills & Technologies</h2>
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
                        <div className="flex flex-wrap gap-2">
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
              >
                <h2 className="text-2xl font-heading font-semibold mb-6">Education</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{EDUCATION.degree}</h3>
                        <p className="text-primary">{EDUCATION.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          {EDUCATION.location} • Graduated {EDUCATION.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}