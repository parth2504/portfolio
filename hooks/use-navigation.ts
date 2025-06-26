'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export function useNavigation() {
  const [mounted, setMounted] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const navigationInProgress = useRef(false)

  useEffect(() => {
    setMounted(true)
    setCurrentPath(window.location.pathname)
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      if (!navigationInProgress.current) {
        setCurrentPath(window.location.pathname)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((href: string) => {
    if (href === currentPath || navigationInProgress.current) return

    navigationInProgress.current = true
    setIsTransitioning(true)
    setCurrentPath(href)

    // Perform the navigation in the next frame
    requestAnimationFrame(() => {
      try {
        window.history.pushState({}, '', href)
        window.location.href = href
      } catch (error) {
        navigationInProgress.current = false
        setIsTransitioning(false)
      }
    })
  }, [currentPath])

  return {
    currentPath: mounted ? currentPath : '/',
    isTransitioning,
    navigate,
    mounted
  }
}