"use client"
import BigOffer from "@/components/HomeComponent/BigOffer";
import CustomerReview from "@/components/HomeComponent/CustomerReview";
import Delivery from "@/components/HomeComponent/Delivery";
import OurRestaurant from "@/components/HomeComponent/OurRestaurant";
import RichHealthy from "@/components/HomeComponent/RichHealthy";
import SpecialMenuForAllTime from "@/components/HomeComponent/SpecialMenuForAllTime";
import WeAreBest from "@/components/HomeComponent/WeAreBest";
import ScrollUp from "@/components/shared/ScrollUp";


export default function Home() {
  return (
    <div>
      <RichHealthy />
      <BigOffer />
      <SpecialMenuForAllTime />
      <OurRestaurant />
      <Delivery />
      <WeAreBest />
      <CustomerReview />
      <ScrollUp />
    </div>
  );
}
