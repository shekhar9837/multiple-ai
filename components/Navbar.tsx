import React from 'react'
import { ModeToggle } from './theme-toggle'
import { User } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className=' max-w-full  backdrop-blur-lg mx-20 my-4 border rounded-2xl px-6 py-6 flex items-center justify-between  z-999'>
         <nav className=''>
          <h1 className=' font-extrabold text-[1.6rem] tracking-normal'>Multiple AI.</h1>
        </nav>

        
        <div className='flex gap-4 items-center text-[2rem]'>
            <ModeToggle/>
            <User/>
            
        </div>
    </div>
  )
}
