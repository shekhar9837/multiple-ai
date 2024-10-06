import Image from "next/image";
import { HeroSection } from "./_components/HeroSection";
import { HomePage } from "./_components/HeroPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
   <div>
    <Navbar/>
    {/* <HeroSection/> */}
    <HomePage/>
   </div>
  );
}
