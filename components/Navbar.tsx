"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      // Disable scrolling on body when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling again when menu is closed
      document.body.style.overflow = "auto";
    }
  };

  // Ensure to enable scrolling when the component unmounts or the menu is closed
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="max-w-full backdrop-blur-lg md:mx-20 md:my-4 md:border rounded-2xl px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <nav className="z-9">
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="w-full h-10 text-blue-300"
        />
      </nav>

      {/* Desktop Menu */}
      <div className="md:flex hidden items-center">
        <ul className="flex items-center justify-center gap-6 font-light tracking-wider text-lg">
          <li>
            <a href="#" data-tip data-for="featuresTooltip" className="relative">
              Features
            </a>
            <ReactTooltip
              id="featuresTooltip"
              place="bottom"
              className="absolute w-48 bg-white p-4 shadow-lg rounded-lg"
            >
              <h3 className="font-semibold">Feature Details</h3>
              <ul className="mt-2">
                <li className="py-1">Feature 1</li>
                <li className="py-1">Feature 2</li>
                <li className="py-1">Feature 3</li>
              </ul>
            </ReactTooltip>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Get In Touch</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg">
              Try Multiple Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex gap-2">
      <div className=" ">
              <ModeToggle />
            </div>
        <button onClick={toggleMenu}>
          {isVisible ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isVisible && (
        <div className="fixed inset-0 w-full h-screen dark:bg-black bg-white bg-opacity-100 flex flex-col items-center justify-center z-50">
          
         
          <button onClick={toggleMenu} className="absolute top-8 right-8">
            <X className="w-8 h-8" />
          </button>
          <ul className="flex flex-col items-center gap-6 font-medium tracking-widest text-xl ">
            <li>
              <a href="#" onClick={toggleMenu}>
                Features
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Get In Touch
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Login
              </a>
            </li>
            <li>
              <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg">
                Try Multiple Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};
