"use client";

import cooking from "@/images/wearebest/cooking 1.png";
import candle from "@/images/wearebest/candle 1.png";
import diet from "@/images/wearebest/diet 1.png";
import { StaticImageData } from "next/image";

type wearebestdatatype = {
  image: StaticImageData;
  title: string;
  description: string;
  btnText: string;
};

export const WeAreBestData: wearebestdatatype[] = [
  {
    image: cooking,
    title: "Passionate Chefs",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusamus placeat tenetur possimus eum ducimus consequatur veniam,error sit magni!",
    btnText: "Read More",
  },
  {
    image: diet,
    title: "100 % Fresh Foods",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusamus placeat tenetur possimus eum ducimus consequatur veniam,error sit magni!",
    btnText: "Read More",
  },
  {
    image: candle,
    title: "Memorable Ambience",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusamus placeat tenetur possimus eum ducimus consequatur veniam,error sit magni!",
    btnText: "Read More",
  },
];
