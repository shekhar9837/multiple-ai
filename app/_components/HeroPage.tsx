"use client";

import Image from "next/image";
import React from "react";
import { BookOpenText, ChevronsRight } from "lucide-react";

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
    <div className="flex w-full  justify-center items-center md:px-12 px-6">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center  py-16 md:pl-16 md:px-2">
      <h1 className="text-4xl  font-medium tracking-wide leading-snug">
      
      <span className="inline-block text-blue-600 pr-2 font-bold">
      Relax,

      </span>
       let AI create your content effortlessly.
</h1>
      

        <p className="text-xl py-4 leading-relaxed">
          Transform ideas into ready-to-use content—blogs, articles, scripts,
          and more—in seconds.
        </p>
        {/* Buttons */}
        <div className="flex md:flex-row flex-col gap-5 mt-8">
          <button className="flex items-center px-8 py-4 font-semibold tracking-widest text-white bg-blue-600 rounded-md
          hover:-translate-y-1 transition-all 
          ">
            Get Started Free <ChevronsRight className="ml-2" />
          </button>
          <button className="flex items-center px-8 py-4 font-semibold  tracking-widest text-blue-800 bg-blue-100 dark:bg-blue-100 hover:bg-blue-200 dark:hover:bg-blue-200 hover:-translate-y-1 transition-all rounded-md">
            Get a Demo
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 md:flex  hidden items-center justify-center">
        <Image
          src="/assets/cubes-man-on-a-surfboard-conquers-social-media.gif"
          width={1920}
          height={1080}
          alt="3D animation of man surfing social media"
          className="w-[30rem] h-auto"
        />
      </div>
    </div>
  );
};
