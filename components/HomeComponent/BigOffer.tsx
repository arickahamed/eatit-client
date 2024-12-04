"use client";
import React from "react";
import bigOffer1 from "@/images/home/big_offer/image_bigOffer_1.png";
import bigOffer2 from "@/images/home/big_offer/image_bigOffer_2.png";
import bigOffer3 from "@/images/home/big_offer/image_bigOffer_3.png";
import Image from "next/image";

const BigOffer = () => {
  return (
    <main className=" w-full -y-5">
      <h3 className="pt-4 text-primary text-35 font-bold text-center">
        <i>Big Offer</i>
      </h3>
      <p className="text-20 py-4 text-center w-[80%] mx-auto">
        For in this week, take your food, buy your best one.
      </p>
      <div className=" py-4 w-[80%] m-auto flex flex-col flex-wrap md:flex-row justify-evenly items-center ">
        <Image src={bigOffer1} alt="image" />
        <Image src={bigOffer2} alt="image" className="mt-2 md:mt-0" />
        <Image src={bigOffer3} alt="image" className="mt-2" />
      </div>
    </main>
  );
};

export default BigOffer;
