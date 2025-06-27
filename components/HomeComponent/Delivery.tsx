import React from "react";
import Button from "../overall/Button";
import Image from "next/image";
import deliveryMan from "@/images/home/food 1.png";
import deliverImage from "@/images/home/image_delivery.png";
import Link from "next/link";

const Delivery = () => {
  return (
    <main className="w-full py-7">
      <div className="w-[90%] md:w-[60%] py-5 text-center text-primary text-20 font-bold">
        <h3>Delivery</h3>
      </div>
      <div className=" max-w-[85%] flex flex-col mx-auto md:flex-row md:justify-between md:items-center ">
        <div className=" flex flex-col justify-between py-5 items-center w-[90%] mx-auto md:w-[45%]">
          <h3 className="text-35 font-bold pb-3">
            A Moments Of <br />{" "}
            <span className="text-primary">
              Delivered On Right Time & Place
            </span>{" "}
          </h3>
          <p className="text-20">
            Food Khan is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdons Exmouth Market. With glazed frontage on
            two sides of the building, overlooking the market and a bustling
            London inteon.
          </p>
          <div className="flex w-full pt-7 pb-4 justify-between md:justify-evenly items-center">
            <div className="flex w-[80%] justify-around">
              <div>
                <p className="font-bold text-20">Delivery Order</p>
                <p>+8801774887213</p>
              </div>
              <div>
                <Image
                  src={deliveryMan}
                  alt="delivery man"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <Button>
              <Link href={"/items"}>Order</Link>
            </Button>
          </div>
        </div>
        <div className="w-[90%] md:w-[40%] h-[100%] mx-auto">
          <Image src={deliverImage} alt="deliver man image" />
        </div>
      </div>
    </main>
  );
};

export default Delivery;
