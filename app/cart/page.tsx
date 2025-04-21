"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useAppSelector } from "@/lib/redux/hooks";
import { useDispatch } from "react-redux";

const about = () => {
  const dispatch = useDispatch();
  const heroInfo = {
    img: heroImage,
    title: "Your Cart",
    description: "Read our story, How we started and about the team",
  };
    const cartProducts = useAppSelector((state) => state.cartProducts);
    console.log(cartProducts); 
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <ScrollUp />
    </main>
  );
};

export default about;
