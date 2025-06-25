"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"
import { EXPERIENCE } from "@/lib/constants"

export default function ExperienceClient() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Experience</h1>
        <div className="space-y-8">
          <div className="bg-black/20 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-2">{EXPERIENCE.company}</h2>
            <h3 className="text-xl text-gray-300 mb-1">{EXPERIENCE.role}</h3>
            <p className="text-gray-400 mb-4">{EXPERIENCE.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {EXPERIENCE.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}