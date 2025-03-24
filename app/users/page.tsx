"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";

const users = () => {
  const heroInfo = {
    img: heroImage,
    title: "All Users",
    description: "Read our story, How we started and about the team",
  };
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p>Users Are Here.</p>
      <ScrollUp />
    </main>
  );
};

export default users;
