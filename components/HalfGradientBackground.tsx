import React from 'react'

interface SubtleGradientProps {
  children: React.ReactNode
}

export default function SubtleGradient({ children }: SubtleGradientProps) {
  return (
    <div className="min-h-screen relative">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle ,_var(--tw-gradient-stops))] from-transparent via-blue-600/20 to-transparent z-0" /> */}
      <div className="bg-gradient-to-t from-white to-blue-400 ">
      <div className="bg-gradient-to-r from-white to-blue-400 ">
      <div className="bg-gradient-to-l from-white to-blue-400 ">

      <div className="relative z-10 p-4">
        {children}
      </div>
      </div>
      </div>
      </div>
      
    </div>
  )
}