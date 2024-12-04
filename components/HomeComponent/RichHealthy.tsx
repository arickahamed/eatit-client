import React from "react";
import Button from "../overall/Button";
import { FaStar } from "react-icons/fa";
import image1 from "@/images/home/rich_healthy/image_richHealthy_1.png";
import image2 from "@/images/home/rich_healthy/image_richHealthy_2.png";
import Image from "next/image";

const RichHealthy = () => {
  return (
    <main className="w-full py-5">
      <div className="w-[80%] md:h-[600px] mx-auto py-2 flex flex-col md:flex-row-reverse md:justify-evenly md:items-center">
        <div className="w-full md:w-[50%] h-full flex flex-col justify-evenly items-center">
          <div className="">
            <h3 className="text-primary text-25 md:text-35 font-bold pb-4 md:pb-2">
              Highest quality artisangrains, proteins & seasonal ingredients
            </h3>
            <p className="text-20 pb-2">
              Righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by
              desires, that they cannot foresee.
            </p>
          </div>
          <div className="flex justify-between items-center py-8 md:py-0">
            <div className="w-[48%] h-[200px] flex flex-col justify-between items-center">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <FaStar />
                  <p>Simple and easy to distinguish</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <FaStar />
                  <p className="ml-3">Pleasure of the momentblinded desire</p>
                </div>
                <div className="flex justify-between items-center mt-2 pb-3 md:pb-0">
                  <FaStar />
                  <p>Able to do what we like best</p>
                </div>
              </div>
              <Button>Read More</Button>
            </div>
            <div className="w-[48%]">
              {/* small image is here */}
              <Image src={image2} alt="healty food" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-[38%]">
          {/* image is here */}
          <div className=" w-full h-full">
            <Image src={image1} alt="healthy food" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RichHealthy;
