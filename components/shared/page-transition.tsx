"use client"

import { motion } from "framer-motion"
import { useNavigation } from "@/hooks/use-navigation"

export function PageTransition() {
  const { isTransitioning } = useNavigation()

  if (!isTransitioning) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  )
}