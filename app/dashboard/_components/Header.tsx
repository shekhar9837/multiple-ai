import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-md border-b-2'>
        <div className='flex gap-2 items-center  border rounded-md   max-w-md p-2 '>
            <Search width={20}/>
            <input type="text" placeholder='Search...' className='outline-none  w-full bg-inherit' />
        </div>

    </div>
  )
}

export default Header