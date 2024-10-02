import { Navbar } from '@/components/Navbar'
import React from 'react'
import { HomePage } from './_components/HeroPage'

 const GlobalProvider = ({children}:any) => {
  return (
    <div>
        {/* <Navbar/> */}
        {children}
        {/* <HomePage/> */}
    </div>
  )
}
export default GlobalProvider
