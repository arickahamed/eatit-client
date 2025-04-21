"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../overall/Button";
import { WeAreBestData } from "@/data/WeAreBestData";
import Link from "next/link";

const WeAreBest = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index: any) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);
  return (
    <main>
      <h3 className="text-center text-18 text-primary font-bold py-3">
        Why we are the best
      </h3>
      <div className="flex flex-col justify-center items-center py-5 max-w-[85%] mx-auto md:flex-row md:justify-between md:items-center">
        {WeAreBestData.map((info, index) => {
          const isHovered = hoverIndex === index;
          return (
            <div
              className={`mt-4 md:mt-0 md:mr-4 rounded-lg px-5 relative ${
                isHovered
                  ? "bg-primary text-customWhite"
                  : "bg-customWhite text-secondary shadow-lg"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={"/items"}>
                <div className=" py-2 mt-3 flex flex-col justify-center items-center z-10 top-0 left-[50%]">
                  <Image
                    className="flex flex-col justify-center items-center relative z-10"
                    src={info.image}
                    alt="cooking image"
                    width={100}
                    height={100}
                  />
                </div>
                <div
                  className={`absolute top-0 left-[55%] w-[6rem] h-[6rem] mt-2 rounded-full  z-0 flex justify-center items-center ${
                    isHovered
                      ? "bg-customWhite text-primary"
                      : "bg-primary text-customWhite"
                  }`}
                >
                  <h3
                    className={` text-35 font-bold ${
                      isHovered ? "bg-customWhite text-primary" : ""
                    }`}
                  >
                    {index + 1}
                  </h3>
                </div>

                <h3
                  className={`text-20 font-bold py-4 text-center ${
                    isHovered ? "text-customWhite" : "text-secondary"
                  }`}
                >
                  {info.title}
                </h3>

                <p>{info.description}</p>
                <div
                  className={`mx-auto w-[60%] sm:w-[70%] py-3 text-center ${
                    isHovered ? "font-bold" : ""
                  } `}
                >
                  <button
                    className={`mt-1 px-4 py-1 rounded-md ${
                      isHovered
                        ? "bg-customWhite text-primary font-bold"
                        : "bg-primary text-customWhite"
                    }`}
                  >
                    {info.btnText}
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default WeAreBest;
