"use client";
import SpecialMenuData from "@/data/SpecialMenuData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SpecialMenuForAllTime = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleMouseEnter = (index: any) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);
  return (
    <main className=" pt-5 w-full">
      <h3 className="text-35 font-bold text-primary text-center py-2 font-bold">
        Special Menus For All Time
      </h3>
      <div className="w-[80%] flex flex-wrap justify-evenly items-center mx-auto">
        {SpecialMenuData.map((info, index) => {
          const isHovered = hoverIndex === index;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg flex flex-col justify-center items-center mr-2 mt-2 transition ease-in-out duration-300 delay-150 ${
                isHovered ? "text-customWhite bg-primary" : "text-primary"
              } ${index == SpecialMenuData.length - 1 ? "mb-3 md:mb-0" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={`/items`}>
                <Image src={info.image} alt={info.title} width={70} />
                <h3 className="text-20 text-center pt-2">{info.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SpecialMenuForAllTime;
