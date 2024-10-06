import template from '@/app/(data)/template'
import React from 'react'

const TemplateSection = () => {
  return (
    <div className='p-5 flex justify-center items-center'>
        <div className='gap-4 flex flex-wrap items-center justify- '>
        {template.map((item) =>(
            <div key={item.name} className='p-4 w-[16rem] border rounded-md'>
                <img src={item.icon} alt={item.name} className='w-10 h-10 '/>
                <h2 className='text-[1.1rem] font-bold line-clamp-1'>{item.name}</h2>
                <p className='line-clamp-3 text-sm'>{item.desc}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default TemplateSection