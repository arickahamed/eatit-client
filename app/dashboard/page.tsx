"use client";
import React, { useEffect } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";

const dashboard = () => {
  const heroInfo = {
    img: heroImage,
    title: "dashboard",
    description: "Read our story, How we started and about the team",
  };

  
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p>all activity of your business will be shown here</p>
      <ScrollUp />
    </main>
  );
};

export default dashboard;
