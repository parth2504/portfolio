"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"

export default function AboutClient() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-invert max-w-none">
          {/* About content */}
        </div>
      </div>
    </SectionWrapper>
  )
}