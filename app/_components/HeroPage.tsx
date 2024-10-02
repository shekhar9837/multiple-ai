'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ExpandIcon } from 'lucide-react';
import HomeButton from '@/components/HomeButton/HomeButton';

export const HomePage = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden ">
      {/* Navbar - Positioned in front */}
      <div className="absolute top-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Animated Icons - Positioned behind the Navbar */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 right-[20%] top-[10%] glow-effect "
        >
          <Image
            src='/assets/coupan.png'
            width={1000}
            height={1000}
            alt='fire'
            className='glow-effect'
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 left-[10%] top-[25%] glow-effect"
        >
          <Image
            src='/assets/profile.png'
            width={1000}
            height={1000}
            alt='profile'
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 left-[13%] bottom-[20%] glow-effect"
        >
          <Image
            src='/assets/checkmark.png'
            width={1000}
            height={1000}
            alt='checkmark'
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 bottom-[4%] right-[20%] glow-effect"
        >
          <Image
            src='/assets/credit-card.png'
            width={1000}
            height={1000}
            alt='credit-card'
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex  items-start justify-center w-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-center leading-none"
        >
          <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold text-center flex">
            Let 
            <span className='block -rotate-6 text-yellow-400 mx-6'>
              AI
              </span>
             do your <br />
          </h1>
          <div className="flex items-center gap-4 ">
            <h1>
              <span className="text-[6rem] font-extrabold text-blue-600 px-6 rounded-2xl tracking-tighter">
                work
              </span>
            </h1>

            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-auto h-28 glow-effect"
            >
              <Image
                src='/assets/3d-ai.png'
                width={1000}
                height={900}
                alt="hero-image"
                className="w-auto h-[6rem]"
              />
            </motion.div>
          </div>


        </motion.div>

      
      </div>
      <div className='my-10'>

      {/* <Button >
          Explore more
        </Button> */}

        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-2xl border transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Click Me 
</button> */}
<HomeButton/>

      </div>
    </div>
  );
};
