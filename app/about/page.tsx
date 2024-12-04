"use client"
import React, { Suspense } from "react";
import heroImage from "./about_images/hero_about-bg.png";
import OurStory from "./OurStory";
import OurChef from "./OurChef";
import SpecialService from "./SpecialService";
import HeroSection from "@/components/shared/HeroSection";
import OurTeam from "./OurTeam";
import ScrollToTop from "react-scroll-to-top";
import ScrollUp from "@/components/shared/ScrollUp";

const about = () => {
  const heroInfo = {
    img: heroImage,
    title: "About Us",
    description: "Read our story, How we started and about the team",
  };
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <OurStory />
      <OurChef />
      <SpecialService />
      <OurTeam />
      <ScrollUp />
    </main>
  );
};

export default about;
