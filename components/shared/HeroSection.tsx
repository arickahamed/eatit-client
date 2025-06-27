import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroSectionProps {
  data: {
    img: StaticImageData;
    title: string;
    description?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <div className="relative">
      <div className=" h-20 md:h-[50%]">
        <Image src={data.img} alt={data.title} layout="responsive" />
      </div>
      <div className="absolute top-[10%] md:top-[45%] lg:top-[10vh] w-[80%] md:w-[90%] mx-auto text-customWhite">
        <h2 className="text-center text-25 md:text-35">{data.title}</h2>
        {data?.description ? (
          <p className="text-[10px] md:text-16 text-center">
            {data.description}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeroSection;
