"use client"
import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import contactHeroImage from "./contactImage/contact_hero_image.png";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import Link from "next/link";
import Map from "./Map";
import ScrollToTop from "react-scroll-to-top";
import ScrollUp from "@/components/shared/ScrollUp";

const Contact = () => {
  const heroInfo = {
    img: contactHeroImage,
    title: "About Us",
    description: "Read our story, How we started and about the team",
  };
  return (
    <main>
      <HeroSection data={heroInfo} />
      <div className="pt-3 sm:mt-5 pb-10 flex justify-center items-center">
        <div className="w-[80%] sm:mt-12 flex flex-col-reverse md:flex-row-reverse justify-center items-center md:justify-evenly">
          <div className="md:w-[50%] py-4">
            <Map />
          </div>
          <div className="pt-5 sm:pt-0 md:pt-0 md:pr-5">
            <div className="mb-4">
              <h3 className="text-35 text-primary">ADDRESS</h3>
              <div className="w-[90%] mx-auto">
                <div className="text-secondary flex justify-evenly items-center w-max mt-2">
                  <FaLocationDot />
                  <p className="text-18 pl-3">Mirbah, Mogbazar, Dhaka</p>
                </div>
                <div className=" text-secondary flex justify-evenly items-center w-max mt-2">
                  <FaPhoneAlt />
                  <p className="text-18 pl-3">+8801774887213</p>
                </div>
                <div className=" text-secondary flex justify-evenly items-center w-max mt-2">
                  <MdEmail />
                  <p className="text-18 pl-3">arickahamed700@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <h3 className="text-35 text-primary">WORKING HOURS</h3>
              <div className="w-[90%] mx-auto">
                <div className=" text-secondary flex justify-evenly items-center w-max">
                  <FaClock />
                  <p className="text-18 pl-3">7:30 am to 9:30pm on Weekdays</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-35 text-primary">FOLLOW US</h3>
              <div className="py-3 text-secondary w-full md:w-[70%] flex justify-evenly md:justify-between items-center mx-auto">
                <Link href="https://www.facebook.com/arickahamedjoy">
                  <FaTwitter className="w-[25px] h-[25px] hover:text-primary" />
                </Link>
                <Link href="https://www.facebook.com/arickahamedjoy">
                  <FaFacebookSquare className="w-[25px] h-[25px] hover:text-primary" />
                </Link>
                <Link href="https://www.instagram.com/arickahamedjoy/">
                  <FaInstagram className="w-[25px] h-[25px] hover:text-primary" />
                </Link>
                <Link href="https://www.linkedin.com/in/arickahamed/">
                  <FaLinkedinIn className="w-[25px] h-[25px] hover:text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollUp />
    </main>
  );
};

export default Contact;
