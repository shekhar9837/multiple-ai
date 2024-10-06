"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpenText, ChevronsRight, ExpandIcon } from "lucide-react";
import HomeButton from "@/components/HomeButton/HomeButton";
import HalfGradientBackground from "@/components/HalfGradientBackground";
import Card from "@/components/card/Card";

export const HomePage = () => {
  const contentTypes = [
    {
      title: "Article",
      description: "Well-researched and engaging articles on various topics.",
      icon: <BookOpenText />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Blog Post",
      description: "Captivating blog posts to attract and retain readers.",
      icon: <BookOpenText />,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Script",
      description: "Scripts for videos, podcasts, or presentations.",
      icon: <BookOpenText />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media",
      description: "Engaging posts for various social media platforms.",
      icon: <BookOpenText />,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Custom",
      description: "Any other type of content tailored to your needs.",
      icon: <BookOpenText />,
      gradient: "from-yellow-500 to-orange-500",
    },
  ];
  return (
    <div className="w-full bg-red   flex flex-row items-start justify-center my-0  px-12">
      {/* Main Content */}
      <div className="w-1/2 flex items-center justify-center flex-col bg-red-900    z-20  py-16">
        <div className="flex flex-col items-start  leading-none ">
          <h1 className="flex text-[3rem]  font-medium tracking-wider text-wrap">
            {/* Let AI make your Content
             */}
             <span className=" ">
             <Image
              width={200}
              height={200}
              alt="realx"
              src='/assets/Relax-removebg-preview.png'
              className="h-16 w-auto"
             />

             </span>
             let AI make your Content
           
          </h1>

         
          

          <p className="text-[1.2rem] py-4">
            Transform ideas into ready-to-use content—blogs,
            <br /> articles, scripts, and more—in seconds.
          </p>
        </div>

        {/* Base */}
        <div className="my-10 flex gap-5">
          <button className="flex font-semibold   tracking-widest items-center px-8 py-4  rounded-md bg-blue-600">
            Get Started Free <ChevronsRight />
          </button>
          <button className="flex font-semibold  tracking-widest items-center px-8 py-4  text-blue-800 rounded-md bg-blue-200">
            Get a Demo 
          </button>
         
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center ">
      <div>

        <Image
          src="/assets/cubes-man-on-a-surfboard-conquers-social-media.gif"
          width={1920}
          height={1080}
          alt="3d-casual-life-young-man-drawing-curve-in-program-for-designers"
          className="w-[30rem] h-auto"
          />
          </div>
      </div>
    </div>
  );
};
