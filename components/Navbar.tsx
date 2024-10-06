"use client";

import React, { useRef, useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { ArrowBigLeft, ArrowBigRightIcon, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Features from "@/app/_components/Features";
import Pricing from "@/app/_components/Pricing";
import { Tooltip  as ReactTooltip} from 'react-tooltip'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);


  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = (event:any) => {
      // Check if the mouse is leaving the entire feature area
      // if (!featureRef.current.contains(event.relatedTarget)) {
      //   setIsVisible(false);
      // }
  };

  return (
    <div className=" max-w-full  backdrop-blur-lg mx-20 my-4 border rounded-2xl px-6 py-6 flex items-center justify-between  z-999">
      <nav className="">
        {/* <h1 className=' font-extrabold text-[1.6rem] tracking-normal'>Multiple AI.</h1> */}
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="w-full h-10 text-blue-300"
        />
      </nav>

      <div className="flex  items-center ">
        <ul className="flex items-center justify-center gap-6 font-light tracking-wider text-lg">
        <li>
          <a href="#" data-tip data-for="featuresTooltip" className="relative  ">
            Features
          </a>
          <ReactTooltip id="featuresTooltip" place="bottom"  className="absolute w-48 bg-white p-4 shadow-lg rounded-lg">
            <h3 className="font-semibold">Feature Details</h3>
            <ul className="mt-2">
              <li className="py-1">Feature 1</li>
              <li className="py-1">Feature 2</li>
              <li className="py-1">Feature 3</li>
            </ul>
          </ReactTooltip>
        </li>

          <li>
            <a href="#" className=" ">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className=" ">
              Get In Touch
            </a>
          </li>
          <li>
          <a href="#" className="">
              Login
            </a>
          </li>
          <li>
            <button className="flex items-center bg-blue-700 text-white  px-4 py-2 rounded-lg  ">
              Try Multiple Free
              <ArrowRight className="w-5 h-5" />
              </button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};
