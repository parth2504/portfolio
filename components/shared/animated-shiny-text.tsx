"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps {
  children: React.ReactNode
  className?: string
  shimmerWidth?: number
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 -top-1 -bottom-1 opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)`,
          width: `${shimmerWidth}px`,
        }}
        animate={{
          x: ["-100px", "calc(100% + 100px)"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </div>
  )
}