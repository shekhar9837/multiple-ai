import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { ThemeProvider } from '@/components/theme-provider'

export default function layout({children}:Readonly<{children: React.ReactNode}>) {
  return (
      <div>
<ThemeProvider

            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >

        <div className='fixed md:w-64  hidden md:block'>
            <SideNav/>
        </div>

        <div className='md:ml-64'>
            <Header />
            {children}

        </div>

          </ThemeProvider>
    </div>
  )
}

