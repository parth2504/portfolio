'use client'

import { useState, useEffect, useCallback } from 'react'

export function useStaticRouter() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const navigate = useCallback((href: string) => {
    if (href === currentPath) return

    // Use a full page navigation for static sites
    window.location.href = href
  }, [currentPath])

  return {
    currentPath,
    navigate
  }
}