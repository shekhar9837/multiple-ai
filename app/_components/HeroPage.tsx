"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpenText, ChevronsRight, ExpandIcon } from "lucide-react";
import HomeButton from "@/components/HomeButton/HomeButton";
import HalfGradientBackground from "@/components/HalfGradientBackground";
import  Card from "@/components/card/Card";

export const HomePage = () => {

  const contentTypes = [
    {
      title: "Article",
      description: "Well-researched and engaging articles on various topics.",
      icon:   <BookOpenText  />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Blog Post",
      description: "Captivating blog posts to attract and retain readers.",
      icon:   <BookOpenText  />,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Script",
      description: "Scripts for videos, podcasts, or presentations.",
      icon:   <BookOpenText  />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media",
      description: "Engaging posts for various social media platforms.",
      icon:   <BookOpenText  />,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Custom",
      description: "Any other type of content tailored to your needs.",
      icon:   <BookOpenText  />,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]
  return (
    <>
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden  ">
      {/* Navbar - Positioned in front */}
      <div className="absolute top-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Animated Icons - Positioned behind the Navbar */}
      <div className="absolute inset-0 z-10 ">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 right-[20%] top-[10%] glow-effect "
        >
          <Image
            src="/assets/coupan.png"
            width={1000}
            height={1000}
            alt="fire"
            className="glow-effect"
          />
        </motion.div>

        {/* <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 left-[10%] top-[25%] glow-effect"
        >
          <Image
            src="/assets/profile.png"
            width={1000}
            height={1000}
            alt="profile"
          />
        </motion.div> */}

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 left-[13%] bottom-[20%] glow-effect"
        >
          <Image
            src="/assets/checkmark.png"
            width={1000}
            height={1000}
            alt="checkmark"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-16 h-16 bottom-[4%] right-[20%] glow-effect"
        >
          <Image
            src="/assets/credit-card.png"
            width={1000}
            height={1000}
            alt="credit-card"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-10  items-center justify-center w-full z-20 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-center leading-none"
        >
          <h1 className="text-[3rem] md:text-[4rem] font-extrabold text-center flex">
            Let
            <span className="block -rotate-6 font-extrabold text-yellow-400 mx-6">
              AI
            </span>
            do your <br />
          </h1>
          <div className="flex items-center gap-4 justify-center">
            <h1>
              <span className="text-[6rem] font-extrabold text-blue-600 px-6 rounded-2xl tracking-tighter">
                work
              </span>
            </h1>

            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-auto  glow-effect"
            >
              <Image
                src="/assets/3d-ai.png"
                width={1000}
                height={900}
                alt="hero-image"
                className="w-auto h-[6rem]"
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center leading-none text-center my-4">
          <p className="text-[1.2rem] font-thin text-wrap tracking-wide dark:text-gray-300 ">
            Transform ideas into ready-to-use content—blogs,
            <br /> articles, scripts, and more—in seconds.
          </p>
        </div>

        {/* Base */}
        <div className=" mt-10">
          <button className="flex font-semibold text-[1.2rem] tracking-wide items-center px-16 py-4 border rounded-2xl ">
            Explore <ChevronsRight />
          </button>
        </div>
      </div>
    </div>

    <div className='flex flex-wrap items-center justify-center w-full gap-4'>

            {
              contentTypes.map((item) =>
                <div   key={item.title}>
                  <Card 
                
                      title={item.title} 
                      description={item.description} 
                      icon={item.icon} 
                      />
                </div>
              
              )
            }
    </div>

    </>

  );
};
