'use client'

import { FileClock, HistoryIcon, HomeIcon, SettingsIcon, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {

    const menuList = [
        {
            title: 'Home',
            icon: HomeIcon,
             path: '/dashboard',
        },
        {
            title: 'History',
            icon: HistoryIcon,
             path: '/dashboard/history',
        },
        {
            title: 'Billing',
            icon: WalletCards,
             path: '/dashboard/billing',
        },
        {
            title: 'Settings',
            icon:SettingsIcon, 
             path: '/dashboard/settings',
        },
       
      
    ]

    const path = usePathname()

  return (
    <div className='h-screen p-5 shadow-lg border'>

        <div className='p-5 text-[1.2rem] font-bold cursor-pointer'>
            <h1>Multiple </h1>
        </div>

        <div className=''>
            {menuList.map(item => (
                <div className={`flex items-center gap-2 p-3 mb-2 *:first-letter:
                    hover:bg-blue-600 rounded-lg cursor-pointer
                    ${path == item.path && 'bg-blue-600'}
                    
                 `}key={item.title}>
                    {/* <Link href={item.path}> */}
                        <item.icon  className="h-6 w-6" />
                        <h1 className='text-[1.1rem]'>
                        {item.title}

                        </h1>
                    {/* </Link> */}
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default SideNav