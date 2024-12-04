"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import ScrollToTop from "react-scroll-to-top";
import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";

const about = () => {
  const heroInfo = {
    img: heroImage,
    title: "Food For You",
    description: "Read our story, How we started and about the team",
  };
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <ScrollUp />
    </main>
  );
};

export default about;
