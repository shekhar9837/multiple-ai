'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center px-6 relative  overflow-hidden '>
      {/* <div className='absolute inset-0 pointer-events-none'>
        <div className='w-[50%] h-full bg-gradient-to-tr from-transparent to-gray-700 opacity-30' />
        <div className='w-[50%] h-[50%] bg-gradient-to-tr from-gray-600 via-transparent to-transparent opacity-40' />
        <div className='w-[50%] h-[50%] bg-gradient-to-tl from-red-500 to-transparent opacity-20' />
      </div> */}
     
      <div className=''>
        <motion.div
          animate={{ x: [0, 4, 0] }}  // Small horizontal movement
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-16 h-16 right-[20%] top-[10%] glow-effect  shadow-lg'
        >
          <Image
            src='/assets/coupan.png'
            width={1000}
            height={1000}
            alt='fire'
            className='glow-effect '
          />
        </motion.div>

        <motion.div
          animate={{ x: [0, -4, 0] }}  // Small horizontal movement in the opposite direction
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-16 h-16 left-[10%] top-[25%] glow-effect'
        >
          <Image
            src='/assets/profile.png'
            width={1000}
            height={1000}
            alt='business'
          />
        </motion.div>

        <motion.div
          animate={{ x: [0, 4, 0] }}  // Small horizontal movement
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-16 h-16 left-[13%] bottom-[20%] glow-effect'
        >
          <Image
            src='/assets/checkmark.png'
            width={1000}
            height={1000}
            alt='credit'
          />
        </motion.div>

        <motion.div
          animate={{ x: [0, -4, 0] }}  // Small horizontal movement in the opposite direction
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-16 h-16 bottom-[4%] right-[20%] glow-effect '
        >
          <Image
            src='/assets/credit-card.png'
            width={1000}
            height={1000}
            alt='firewall'
          />
        </motion.div>
      </div>

      <div className='flex flex-col items-center leading-none text-center'>
        <p className='text-[1.8rem] text-wrap tracking-tight font-semibold text-gray-300'>
          Welcome to
        </p>
        <h1 className='text-[5.8rem] font-extrabold text-wrap tracking-tighter py-4'>
          <span className='text-blue-600'>Multiple</span> AI.
        </h1>
        <p className='text-[1.2rem] font-thin text-wrap tracking-wide text-gray-300'>
          Transform ideas into ready-to-use content—blogs,
          <br /> articles, scripts, and more—in seconds.
        </p>
      </div>
    </div>
  );
};
