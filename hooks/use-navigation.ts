'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function useNavigation() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isNavigating = useRef(false)
  const [currentPath, setCurrentPath] = useState(pathname || '/')

  useEffect(() => {
    setMounted(true)
    if (pathname) {
      setCurrentPath(pathname)
    }
  }, [pathname])

  const navigate = useCallback((href: string) => {
    if (isNavigating.current) return

    isNavigating.current = true
    setCurrentPath(href)

    // Use Next.js router for navigation
    try {
      router.push(href)
    } catch (error) {
      window.location.href = href
    } finally {
      // Reset navigation lock after a short delay
      setTimeout(() => {
        isNavigating.current = false
      }, 100)
    }
  }, [router])

  return {
    currentPath,
    navigate,
    mounted
  }
}