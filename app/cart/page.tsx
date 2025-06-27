"use client";
import React from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";
import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useAppSelector } from "@/lib/redux/hooks";
import { useDispatch } from "react-redux";
import { setCartClear, setCartData } from "@/lib/redux/features/cart/cartSlice";
import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import { useRouter } from "next/navigation";
import axios from "axios";
import ShowToast from "@/components/shared/ShowToast";
import Link from "next/link";

const cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const heroInfo = {
    img: heroImage,
    title: "Your Cart",
    description: "Read our story, How we started and about the team",
  };
  const cartProducts = useAppSelector((state) => state.cartProducts);
  const cartItems = cartProducts.cartItems;
  const orderPlaced = cartProducts.orderPlaced;
  // console.log(orderPlaced);

  const user = useAppSelector((state) => state.auth);
  const email = user.email;
  // console.log(email);

  const total = cartItems?.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  // console.log(total);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;


  // console.log(cartItems);
  const handleClearAll = () => {
    dispatch(setCartClear());
  };

  // add button clicked
  const clickAddToCart = (id: number) => {
    const cart = [...cartItems];
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setCartData(updatedCart));
  };

  // subtract button clicked
  const clickRemoveFromCart = (id: number) => {
    const cart = [...cartItems];
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove items with 0 quantity

    dispatch(setCartData(updatedCart));
  };

  const handleConfirmOrder = async() => {
    const orderedData = {email, cartItems, total};
    if(email) {
      // console.log(email);
      try {
        const res = await axios.post(
          `${API_URL}/api/v1/users/confirmOrder`,
          orderedData
        );
        if(res.data.success) {
          dispatch(setCartClear());
          router.push("/success");
          ShowToast({ type: "success", message: "Order placed" });
        }else {
          console.log("error in orderd in cart page");
          ShowToast({ type: "error", message: "Some issues occur" });
        }
      } catch (error) {
        console.error("Order failed:", error);
      }
    }else {
      router.push("/login?redirect=/orderHandler");
    }
  }
  // console.log(orderPlaced);
  return (
    <main className="w-full">
      <HeroSection data={heroInfo} />
      {cartItems?.length > 0 ? (
        cartItems.map((product, index) => (
          <div
            className="w-[90%] mx-auto my-2 shadow-md border border-slate-300 rounded-md p-2 flex items-center justify-between"
            key={index}
          >
            <img
              className="w-[10%] h-[10%] md:w-[7%] md:h-[7%] lg:w-[5%] lg:h-[5%] rounded-md"
              src={product.image}
              alt=""
            />
            <div className="font-semibold">{product.title}</div>
            <div className="font-semibold">
              ${product.price} * {product.quantity} ={" "}
              <span className="text-green-800 font-bold">
                ${product.price * product.quantity}
              </span>
            </div>
            <div className={`${orderPlaced ? "hidden" : "flex"}`}>
              <button
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md p-1"
                onClick={() => clickAddToCart(product.id)}
              >
                <MdAdd />
              </button>
              <button
                className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md ml-2 p-1"
                onClick={() => clickRemoveFromCart(product.id)}
              >
                <GrFormSubtract />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center my-4 text-lg">
          No Product Added.
          <br />
          <Link href="/items" className="underline">Want to have a meal Items ?</Link>
        </div>
      )}

      <hr className="text-green-600" />
      {cartItems?.length > 0 ? (
        <div className="w-[80%] mx-auto my-3 p-2 bg-slate-200 rounded-md text-center font-semibold text-lg md:flex lg:flex items-center justify-evenly block">
          <button
            className={`hidden md:block lg:block border border-slate-400 rounded-md px-2 py-1`}
            onClick={handleClearAll}
          >
            Cancel Order
          </button>
          <p>
            Payable Total = <span className="font-semibold"> {total} </span>{" "}
          </p>
          <button
            className={`hidden md:block lg:block border border-slate-400 rounded-md px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-white hover:to-white hover:border-blue-700 transition shadow-md ease-in-out delay-100 text-customWhite hover:text-blue-700`}
            onClick={() => handleConfirmOrder()}
          >
            Place Order
          </button>
        </div>
      ) : null}
      {cartItems.length && (
        <div
          className={`md:hidden lg:hidden flex justify-evenly items-center w-[80%] mx-auto`}
        >
          <button
            className="border border-slate-400 rounded-md px-2 py-1"
            onClick={handleClearAll}
          >
            Cancel Order
          </button>
          <button
            className="border border-slate-400 rounded-md px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-white hover:to-white hover:border-blue-700 transition shadow-md ease-in-out delay-100 text-customWhite hover:text-blue-700"
            onClick={() => handleConfirmOrder()}
          >
            Place Order
          </button>
        </div>
      )}

      {/* <p onClick={() => handleClearAll()}>c</p> */}

      <ScrollUp />
    </main>
  );
};

export default cart;
