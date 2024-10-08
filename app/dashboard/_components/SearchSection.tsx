import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='bg-gradient-to-br from-purple-500 via-purple-500 to-blue-600 w-full p-10 flex items-center flex-col justify-center'>
        
            <h2 className='text-[2rem] font-bold tracking-wide'>Browse All Templates</h2>
            <p className='text-[1.1rem] tracking-wide'>
                what would you like to create today?
            </p>

            <div className='w-full flex items-center justify-center '>
              <div className='flex gap-2 items-center p-3  rounded-md my-5 w-[50%] bg-white   '>
                <Search className='w-6 h-6 dark:text-black' />
                <input
                  onChange={(e)=> onSearchInput(e.target.value)}
                
                type="text" placeholder='Search'  className='bg-inherit outline-none dark:text-black'/>

              </div>
            </div>
        
    </div>
  )
}

export default SearchSection