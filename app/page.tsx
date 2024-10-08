import Image from "next/image";
import { HeroSection } from "./_components/HeroSection";
import { HomePage } from "./_components/HeroPage";
import { Navbar } from "@/components/Navbar";
import HomePageFeatures from "./_components/HomePageFeatures";
import { HomeTrustedBy } from "@/components/TrustedCard/HomeTrustedBy";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    {/* <HeroSection/> */}
    <HomePage/>
    <HomePageFeatures/>
    <HomeTrustedBy/>
    <Footer/>
   </div>
  );
}
