'use client'

import { useCallback, useEffect, useState } from 'react'

export function useNavigation() {
  const [currentPath, setCurrentPath] = useState('/')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    setCurrentPath(path)

    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((href: string) => {
    if (href === currentPath) return
    
    setIsTransitioning(true)
    
    // Try to use History API first
    try {
      window.history.pushState({}, '', href)
      setCurrentPath(href)
      // Force a page reload for static site
      window.location.href = href
    } catch (e) {
      // Fallback to direct navigation
      window.location.href = href
    }
  }, [currentPath])

  return {
    currentPath,
    isTransitioning,
    navigate
  }
}