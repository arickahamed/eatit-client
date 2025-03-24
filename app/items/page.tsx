"use client";
import React, { useEffect, useState } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";
import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { IProductSlice, setProductsData } from "@/lib/redux/features/products/productsSlice";
import ShowToast from "@/components/shared/ShowToast";
import { useAppSelector } from "@/lib/redux/hooks";
import { categoryName, IProductCategory } from './categoryInfo';
import Link from "next/link";

const about = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const dispatch = useDispatch();
     useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/products/getAllProducts"
        );
        const data = response.data;
        // console.log(data.data);
        if(data.success) {
          const formattedData = data.data.map((product: any) => ({
            ...product,
            image: `http://localhost:8080${product.imageURL}`,
            id: product._id
          }));
          dispatch(setProductsData(formattedData));
        }else {
          ShowToast({type: "error", message: "Something went wrong in fetching data from the database"});
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  const heroInfo = {
    img: heroImage,
    title: "Food For You",
    description: "Read our story, How we started and about the team",
  };

  const products = useAppSelector((state) => state.allProducts);
  // console.log(products.map(p => console.log(p.id)));

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product: any) => product.category === selectedCategory
        );

  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <div className="w-full">
        <p className="text-2xl text-center font-bold mt-3">
          What do you want ?
        </p>
        <div className=" md:w-[60%] lg:w-[35%] flex items-center justify-around mx-auto mt-2 mb-4">
          {categoryName.map((category: IProductCategory) => (
            <button
              key={category.code}
              onClick={() => setSelectedCategory(category.code)}
              className={`w-fit border my-2 py-1 px-2 rounded shadow-md transition ease-in-out delay-150 border-primary ${
                selectedCategory === category.code
                  ? "bg-primary text-white "
                  : "text-primary bg-customWhite hover:bg-primary hover:text-customWhite"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="mb-7 flex flex-col flex-wrap md:flex-row lg:flex-row items-center justify-around my-2 py-2">
          {filteredProducts.map((product: any) => (
            <div className="border border-slate-300 cursor-pointer rounded-md shadow-md w-[80%] md:w-[30%] lg:w-[30%] my-2 py-2 px-3">
                  <Link href={`/items/${product.id}`}>

              <img
                className="h-fit my-1 rounded-md"
                src={`${product.image}`}
                alt={product.title}
              />
              <h4 className="my-2 text-xl font-bold">{product.title}</h4>
              {/* <h4 className="text-slate-600 mt-1">{product.description}</h4> */}
              <div className=" flex justify-between items-center mx-auto my-2 w-[90%]">
                <h5>Price: {product.price}</h5>
                <h5>Quantity: {product.quantity}</h5>
              </div>
              <button
                className={`block w-[70%] lg:w-[50%] mx-auto hover:bg-customWhite hover:text-primary border-red-600 bg-primary text-customWhite border  mt-4 mb-2 py-2 px-4 rounded-md shadow-md transition ease-in-out delay-150`}
              >
                Add to Cart
              </button>
            </Link>
            </div>
          ))}
        </div>
      </div>
      <ScrollUp />
    </main>
  );
};

export default about;
