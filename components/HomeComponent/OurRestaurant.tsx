import Image from "next/image";
import React from "react";
import cookingRestaurant from "@/images/home/our-restaurant/cooking 1.png";
import growthRestaurant from "@/images/home/our-restaurant/growth 1.png";
import ourResturant1 from "@/images/home/our-restaurant/image_ourResturant_1.png";
import ourResturant2 from "@/images/home/our-restaurant/image_ourResturant_2.png";
import ourResturant3 from "@/images/home/our-restaurant/image_ourResturant_3.png";
import Link from "next/link";

const OurRestaurant = () => {
  return (
    <main className=" py-7 w-full">
      <div className="text-20 font-bold text-primary w-full text-center md:mx-auto md:w-[50%] pb-4">
        <h3>Our Restaurant</h3>
      </div>
      <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row-reverse md:justify-between md:items-center">
        <div className="w-[90%] md:w-[50%] mx-auto">
          <h3 className="text-35 font-bold">
            For every specialoccasion there's heritaste
          </h3>
          <p className="text-18 pt-2">
            Indignation and dislike men who are so beguiled demoralized by the
            charms of pleasure of the moment. Success Story.
          </p>
          <div className="pt-5">
            <div className="flex justify-between items-center pb-3">
              <div className="border-2 border-primary rounded-full p-3 md:p-5">
                <Image src={cookingRestaurant} alt="our restaurant 3" />
              </div>
              <div className="w-[70%] md:w-[80%]">
                <h3 className="text-25 md:text-35 text-primary font-bold py-1">
                  Success Story
                </h3>
                <p>
                  Certain circumstances and owing to the claims of duty
                  obligations of business it will frequently.
                </p>
                <button className="transition ease-in-out duration-300 delay-150 min-w-[40%] py-2 px-4 rounded-lg bg-primary text-customWhite hover:bg-customWhite hover:text-primary hover:border hover:border-primary hover:font-bold mt-2 mb-3">
                  <Link href={"/about"}>Read More</Link>
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="border-2 border-primary rounded-full p-3 md:p-5">
                <Image src={growthRestaurant} alt="our restaurant 3" />
              </div>
              <div className="w-[70%] md:w-[80%]">
                <h3 className="text-25 md:text-35 text-primary font-bold py-2">
                  Passionate Chefs
                </h3>
                <p>
                  Certain circumstances and owing to the claims of duty
                  obligations of business it will frequently.
                </p>
                <button className="transition ease-in-out duration-300 delay-150 min-w-[40%] py-2 px-4 rounded-lg bg-primary text-customWhite hover:bg-customWhite hover:text-primary hover:border hover:border-primary hover:font-bold mt-2 mb-3">
                  <Link href={"/about"}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[90%] md:w-[45%] mx-auto my-4 md:mb-0">
          <div className="flex justify-between items-center w-full">
            <div className="w-[48%]">
              <Image
                src={ourResturant1}
                className="w-full"
                alt="our restaurant 1"
              />
            </div>
            <div className="w-[48%]">
              <Image
                src={ourResturant2}
                className="w-full"
                alt="our restaurant 2"
              />
            </div>
          </div>
          <Image
            src={ourResturant3}
            className="w-full"
            alt="our restaurant 3"
          />
        </div>
      </div>
    </main>
  );
};

export default OurRestaurant;
