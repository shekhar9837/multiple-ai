import React from 'react'

interface HalfGradientBackgroundProps {
  children: React.ReactNode
}

export default function HalfGradientBackground({ children }: HalfGradientBackgroundProps) {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-500 to-transparent z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}