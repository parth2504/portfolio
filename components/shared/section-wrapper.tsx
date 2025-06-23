"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export function SectionWrapper({ 
  children, 
  className, 
  id, 
  delay = 0 
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
    >
      {children}
    </motion.section>
  )
}