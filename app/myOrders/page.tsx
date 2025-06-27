"use client";
import React, { useEffect, useState } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";
import { format } from "date-fns";
import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useAppSelector } from "@/lib/redux/hooks";
import axios from "axios";
import ShowToast from "@/components/shared/ShowToast";


const orders = () => {
    const [finalMyOrders, setFinalMyOrders] = useState([]);
    // console.log(finalMyOrders);
    const user = useAppSelector((state) => state.auth);
    const heroInfo = {
    img: heroImage,
    title: "Your Orders",
    description: "Read our story, How we started and about the team",
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
      const fetchMyOrders = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/api/v1/users/getMyOrders`,
            {
              params: { email: user.email },
            }
          );
          const data = response.data;
          if(data.success) {
            setFinalMyOrders(data.data);
          }else {
            ShowToast({type: "error", message: "Something went wrong in fetching data from the database"});
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchMyOrders();
    }, []);
  
    // {finalMyOrders.map(order => {
    //     console.log(order)
    // })}

  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <p className="text-center my-3 font-semibold text-xl">
        You have ordered {finalMyOrders.length} times
      </p>
      <div className="w-[90%] flex flex-col items-center justify-center bg-gray-200 py-3 rounded-md px-2 my-3 mx-auto">
        {finalMyOrders.length === 0 ? (
          <p className="text-center mt-4 text-gray-500">
            You haven’t placed any orders yet.
          </p>
        ) : (
          finalMyOrders.map((orders, index) => (
            <div key={index} className="mb-6 w-full">
              <p className="text-center text-gray-700">
                {"-".repeat(7)}{" "}
                {format(new Date(orders.createdAt), "h:mm:ss a, do MMMM yyyy")}{" "}
                {"-".repeat(7)}
              </p>
              <hr className="mb-2 border-black w-full" />
              <h4 className="text-center font-semibold" >
                Total Price = {orders.total} tk
              </h4>
              <div className="ml-4 list-disc text-sm text-gray-600 text-center">
                {orders.items.length > 0 ? (
                  orders.items.map((item, i) => (
                    <div key={i}>
                      <h3>
                        {item.title} ({item.quantity} pcs) ({item.price} tk) ={" "}
                        {item.quantity * item.price}
                      </h3>
                    </div>
                  ))
                ) : (
                  <p>No items found in this order.</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <ScrollUp />
    </main>
  );
};

export default orders;
