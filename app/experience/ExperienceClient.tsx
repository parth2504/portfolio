"use client"

import React from "react"
import { motion } from "framer-motion"
import { Building2, Calendar, CheckCircle } from "lucide-react"

import { EXPERIENCE } from "@/lib/constants"
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

export default function ExperienceClient() {
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
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey and key achievements in frontend development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border"></div>
              
              <Card className="relative">
                <CardContent className="p-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <div className="ml-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-primary">
                          {EXPERIENCE.role}
                        </h2>
                        <h3 className="text-xl font-semibold text-foreground">
                          {EXPERIENCE.company}
                        </h3>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{EXPERIENCE.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Current Position
                      </Badge>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Responsibilities & Achievements</h4>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-3"
                      >
                        {EXPERIENCE.responsibilities.map((responsibility, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">
                              {responsibility}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Card className="bg-background/90 shadow-lg border border-border rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-8 text-center text-primary">
                    Technologies &amp; Tools I Work With
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[ 
                      'React.js', 'Next.js', 'TypeScript', 'JavaScript',
                      'Tailwind CSS', 'Material-UI', 'Redux', 'Zustand',
                      'Git', 'GitHub', 'Cypress', 'Node.js'
                    ].map((tech) => (
                      <motion.div
                        key={tech}
                        className="text-center p-3 rounded-xl bg-muted/80 text-foreground font-semibold text-lg shadow-sm border border-border hover:bg-[#6B26D9] hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <p>{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Career Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
                Career Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">40%</span>
                    </div>
                    <h4 className="font-semibold mb-2">Performance Improvement</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced application load times by 40% through optimization
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">5+</span>
                    </div>
                    <h4 className="font-semibold mb-2">Major Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully delivered multiple high-impact applications
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">100%</span>
                    </div>
                    <h4 className="font-semibold mb-2">Client Satisfaction</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintained excellent client relationships and project delivery
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}