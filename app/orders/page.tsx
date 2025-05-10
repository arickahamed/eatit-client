"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useAppSelector } from "@/lib/redux/hooks";

const orders = () => {
  const heroInfo = {
    img: heroImage,
    title: "Orders",
    description: "Read our story, How we started and about the team",
  };

  const cartProducts = useAppSelector((state) => state.cartProducts);
  const orderPlaced = cartProducts.orderPlaced;
  const cartItems = cartProducts.cartItems;
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p>all orders are here</p>
      <ScrollUp />
    </main>
  );
};

export default orders;
