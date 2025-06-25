"use client"

import { SectionWrapper } from "@/components/shared/section-wrapper"

export default function NotFound() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a 
          href="/"
          className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = "/"
          }}
        >
          Go Home
        </a>
      </div>
    </SectionWrapper>
  )
}