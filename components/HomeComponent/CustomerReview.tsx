"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "@/app/about/about_images/image_ourTeam_1.png";
import image2 from "@/app/about/about_images/image_ourTeam_2.png";
import image3 from "@/app/about/about_images/image_ourTeam_3.png";

const CustomerReview: React.FC = () => {
  return (
    <main className="w[80%] py-10">
      <div className="text-center pb-5">
        <p className="text-18 text-primary font-bold">Testimonial</p>
        <h2 className="text-35 font-bold text-secondary">
          Review <span className="text-primary"> from our guests </span>
        </h2>
      </div>
      <Swiper
        className={`w-[80%] flex flex-col items-center justify-center text-center`}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="flex flex-col items-center justify-center w-[80%]">
          <div className="flex flex-col items-center pb-2">
            <Image width={100} height={100} src={image1} alt="Hello" />
          </div>
          <h3 className="text-18 font-bold text-primary">Ali Ahmed</h3>
          <h5 className="text-16 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            debitis ullam sint, neque minus praesentium repudiandae quisquam
            laboriosam inventore temporibus?
          </h5>
          <h5>3.7</h5>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-[80%]">
          <div className="flex flex-col items-center pb-2">
            <Image width={100} height={100} src={image2} alt="Hello" />
          </div>
          <h3 className="text-18 font-bold text-primary">Forhad Ahmed</h3>
          <h5 className="text-16 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            debitis ullam sint, neque minus praesentium repudiandae quisquam
            laboriosam inventore temporibus?
          </h5>
          <h5>4.7</h5>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-[80%]">
          <div className="flex flex-col items-center pb-2">
            <Image width={100} height={100} src={image3} alt="Hello" />
          </div>
          <h3 className="text-18 font-bold text-primary">Mozammel</h3>
          <h5 className="text-16 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            debitis ullam sint, neque minus praesentium repudiandae quisquam
            laboriosam inventore temporibus?
          </h5>
          <h5>4.3</h5>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-[80%]">
          <div className="flex flex-col items-center pb-2">
            <Image width={100} height={100} src={image2} alt="Hello" />
          </div>
          <h3 className="text-18 font-bold text-primary">Forhad Ahmed</h3>
          <h5 className="text-16 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            debitis ullam sint, neque minus praesentium repudiandae quisquam
            laboriosam inventore temporibus?
          </h5>
          <h5>4.7</h5>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default CustomerReview;
