import { StaticImageData } from "next/image";
import burger from "@/images/home/Special-menu-for-all-time/burger.png";
import chocolateIcecream from "@/images/home/Special-menu-for-all-time/Chocolate-icecream.png";
import chickenSkewers from "@/images/home/Special-menu-for-all-time/chicken-skewers.png";
import coktailGlasses from "@/images/home/Special-menu-for-all-time/coktail-glasses.png";
import dahiPuri from "@/images/home/Special-menu-for-all-time/dahi-puri.png";
import friedChicken from "@/images/home/Special-menu-for-all-time/fried-chicken.png";
import greekSalad from "@/images/home/Special-menu-for-all-time/greek-salad.png";
import grillChicken from "@/images/home/Special-menu-for-all-time/grill-chicken.png";
import hotDog from "@/images/home/Special-menu-for-all-time/hot-dog.png";
import pizza from "@/images/home/Special-menu-for-all-time/pizza.png";

type specialMenuDataType = {
  image: StaticImageData;
  title: string;
};

const SpecialMenuData: specialMenuDataType[] = [
  {
    image: burger,
    title: "Burger",
  },
  {
    image: grillChicken,
    title: "Grill Chicken",
  },
  {
    image: chickenSkewers,
    title: "Chicken Skewers",
  },
  {
    image: pizza,
    title: "Pizza",
  },
  {
    image: greekSalad,
    title: "Greek Salad",
  },
  {
    image: hotDog,
    title: "Hot Dog",
  },
  {
    image: coktailGlasses,
    title: "Coktail Glasses",
  },
  {
    image: friedChicken,
    title: "Fried Chicken",
  },
  {
    image: chocolateIcecream,
    title: "Chocolate Ice-ream",
  },
  {
    image: dahiPuri,
    title: "Dahi Puri",
  },
];

export default SpecialMenuData;
