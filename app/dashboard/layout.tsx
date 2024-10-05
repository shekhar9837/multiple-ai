import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

export default function layout({children}:Readonly<{children: React.ReactNode}>) {
  return (
    <div>
        <div className='fixed md:w-64  hidden md:block'>
            <SideNav/>
        </div>

        <div className='md:ml-64'>
            <Header />
            {children}

        </div>

    </div>
  )
}

