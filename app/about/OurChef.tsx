import Button from "@/components/overall/Button";
import React from "react";
import chef from "./about_images/image_ourChef.png";
import Image from "next/image";

const OurChef = () => {
  return (
    <main className="bg-[#FFDFDF] py-3">
      <div className="w-[90%] md:w-[70%] mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-[65%]">
            <p className="text-25 text-primary">TASTY AND CRUNCHY</p>
            <h2 className="text-secondary font-bold text-35">Our Chef</h2>
            <p className="text-18 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incidition ullam.
            </p>
            <div className="py-3 w-fit mx-auto md:text-2">
              <Button>View Our All Menu</Button>
            </div>
          </div>
          <div>
            <Image src={chef} alt="Our Chef" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurChef;
