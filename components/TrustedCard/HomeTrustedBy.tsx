import { desc } from 'framer-motion/m'
import { ChevronsRight } from 'lucide-react'
import React from 'react'

export const HomeTrustedBy = () => {
    const TrustedBy = [
        {
            name:"2.5x",
            description:"Content Creation Productivity Boost"
        },
        {
            name:"100s",
            description:"Resource Hours Saved"
        },
        {
            name:"90%",
            description:"Lower Content Creation Costs"
        },
    ]


  return (
    <div>

        <div className='flex flex-col items-center justify-center gap-4 py-10'>
            <h1 className='text-2xl font-light py-8'>Multiple Customers are seeing</h1>
            <div className='flex md:flex-row flex-col md:gap-20 gap-5'>
                {TrustedBy.map((item) => (
                    <div key={item.name} className='flex  flex-col items-center gap-5 justify-center '>
                        <h1 className='text-5xl font-semibold text-blue-500'>{item.name}</h1>
                        <p className='text-lg'>{item.description}</p>
                    </div>
                 ))}
            </div>
            <div className=' flex items-center gap-2 py-6 cursor-pointer text-blue-500 hover:text-blue-700 '>
                <p className=''>Customer Success Stories</p><ChevronsRight />
            </div>
        </div>


        {/* <div>
            <h1 className='text-2xl font-light'>Reviews</h1>

        </div> */}

    </div>
  )
}
