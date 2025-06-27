"use client";
import React, { useEffect } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setOrderPlaced } from "@/lib/redux/features/cart/cartSlice";

const orders = () => {
    const dispatch = useDispatch();
    const router = useRouter();
  const heroInfo = {
    img: heroImage,
    title: "Order Done, Congratulations",
    description: "Thank you for being with us.",
  };

  useEffect(() => {
    dispatch(setOrderPlaced(true));
  }, [])

    setTimeout(() => {
        router.push("/cart")
    }, 3000);
  
  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p>Order is placed successfully.</p>
      <ScrollUp />
    </main>
  );
};

export default orders;
