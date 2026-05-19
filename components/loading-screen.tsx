"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full gold-gradient flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-primary-foreground font-bold text-4xl">S</span>
          </div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-24 h-24 border-2 border-transparent border-t-primary rounded-full animate-spin" />
        </div>
        
        {/* Text */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold gold-shimmer">SVR GOLD TRADERS</h2>
          <p className="text-muted-foreground text-sm mt-2">Loading excellence...</p>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
