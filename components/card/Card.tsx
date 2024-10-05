import Image from 'next/image'
import React from 'react'

interface Cardprops {
  title: string;
  description: string;
  icon: React.ReactNode;
}


const Card: React.FC<Cardprops> = ({title, description, icon}) => {
  return (
    <div className='w-64 p-6 border flex flex-col items-start rounded-xl'>
      <div className=" mb-4">
       {icon}
      </div>
      <h4 className='text-xl font-bold mb-2'>{title}</h4>
      <p className='text-sm font-light line-clamp-3'>{description}</p>
    </div>
  )
}

export default Card
