"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"

import { SITE_CONFIG } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

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

export default function ContactClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent successfully! I'll get back to you soon.")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <main className="min-h-screen pt-16" itemScope itemType="http://schema.org/ContactPage">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact <span className="gradient-text">Frontend Developer</span> in Ahmedabad
            </h1>
            <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <p itemProp="description">
                Looking for a React.js and Next.js expert in Gujarat? Let&apos;s discuss your web development 
                needs and create exceptional digital experiences together.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
              itemScope
              itemType="http://schema.org/Person"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-heading font-semibold mb-6">
                  Frontend Development Services
                </h2>
                <div className="text-muted-foreground leading-relaxed mb-8 space-y-4">
                  <p>
                    Specializing in modern web development with React.js, Next.js, and TypeScript. 
                    Available for projects in Ahmedabad and remote collaboration worldwide.
                  </p>
                  <ul className="list-none space-y-2">
                    <li>✓ Custom React.js Application Development</li>
                    <li>✓ Next.js Website Development</li>
                    <li>✓ Frontend Performance Optimization</li>
                    <li>✓ Responsive Web Design</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <Link
                      href={`mailto:${SITE_CONFIG.links.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      itemProp="email"
                    >
                      {SITE_CONFIG.links.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      <span itemProp="addressRegion">Gujarat</span>, 
                      <span itemProp="addressCountry">India</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={SITE_CONFIG.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={SITE_CONFIG.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`mailto:${SITE_CONFIG.links.email}`}
                      aria-label="Send Email"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              itemScope
              itemType="http://schema.org/ContactPoint"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Project Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6"
                    itemProp="contactType"
                    content="Project Inquiry Form"
                  >
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-2"
                        placeholder="Your full name"
                        aria-required="true"
                        itemProp="name"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-2"
                        placeholder="your.email@example.com"
                        aria-required="true"
                        itemProp="email"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="mt-2 min-h-32"
                        placeholder="Tell me about your project requirements..."
                        aria-required="true"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending message..." : "Send project inquiry"}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                          Send Project Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}