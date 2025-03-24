"use client";

import HeroSection from '@/components/shared/HeroSection';
import ScrollUp from '@/components/shared/ScrollUp';
import { useAppSelector } from '@/lib/redux/hooks';
import { useParams } from 'next/navigation';
import React from 'react';
import heroImage from "@/app/about/about_images/hero_about-bg.png";


const page = () => {
  const params = useParams();
  const id = params.id;
  // console.log(params.id);
  const products = useAppSelector((state) => state.allProducts);
  const gotFood = products.filter(product => product.id === id);
  const food = gotFood[0];
  
const heroInfo = {
    img: heroImage,
    title: "Food For You",
    description: "Read our story, How we started and about the team",
  };

  return (
    <div>
      <HeroSection data={heroInfo} />

      <div className="w-full mb-7 flex flex-col flex-wrap md:flex-row lg:flex-row items-center justify-around my-2 py-2">
        <div className="border border-slate-300 cursor-pointer rounded-md shadow-md w-[90%] md:w-[80%] lg:w-[70%] my-2 py-2 px-3">
          <img
            className="h-fit my-1 rounded-md block center mx-auto"
            src={`${food.image}`}
            alt={food.id}
          />
          <h4 className="my-3 text-xl font-bold text-center">{food.title}</h4>
          <h4 className="text-slate-600 my-4">{food.description}</h4>
          <div className="font-semibold flex justify-between items-center mx-auto my-2 w-[90%]">
            <h5 className="">Price: {food.price}</h5>
            <h5>Quantity: {food.quantity}</h5>
          </div>
          <button
            className={`block w-[70%] lg:w-[50%] mx-auto hover:bg-customWhite hover:text-primary border-red-600 bg-primary text-customWhite border  mt-4 mb-2 py-2 px-4 rounded-md shadow-md transition ease-in-out delay-150`}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ScrollUp />
    </div>
  );
}

export default page