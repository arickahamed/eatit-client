"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";

const orders = () => {
  const heroInfo = {
    img: heroImage,
    title: "dashboard",
    description: "Read our story, How we started and about the team",
  };
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p>all orders are here</p>
      <ScrollUp />
    </main>
  );
};

export default orders;
