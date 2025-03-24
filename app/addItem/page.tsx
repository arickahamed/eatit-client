"use client";
import React, { useState } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";

import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import axios from "axios";
import ShowToast from "@/components/shared/ShowToast";

const addItem = () => {
  const heroInfo = {
    img: heroImage,
    title: "All New Item?",
    description: "Read our story, How we started and about the team",
  };

  const [formData, setFormData] = useState({
    category: "select",
    title: "",
    description: "",
    price: NaN,
    quantity: NaN,
    image: null,
  });

  const isFormValid =
    formData.title.length > 3 &&
    formData.description.length > 15 &&
    formData.price > 0 &&
    formData.quantity > 0 &&
    formData.category !== "select" &&
    formData.image !== null;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (isFormValid) {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price.toString());
      formDataToSend.append("quantity", formData.quantity.toString());
      formDataToSend.append("category", formData.category);
      formDataToSend.append("image", formData.image);

      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/products/createProduct",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const data = res.data;
        if (data.success) {
          ShowToast({ type: "success", message: data.message });
          setFormData({
            category: "select",
            title: "",
            description: "",
            price: NaN,
            quantity: NaN,
            image: null,
          });
        }else {
          ShowToast({type: "error", message: data.message})
        }
      } catch (error) {
        console.error(
          "Something went wrong in the add item catch block",
          error
        );
      }
    }
  };

  return (
    <main className="">
      <HeroSection data={heroInfo} />
      <div className="w-full">
        <div className="w-[90%] mx-auto my-5 sm:w-[80%] md:w-[70%] lg:w-[55%]">
          <h3 className="font-bold pb-3 text-[35px] text-center">
            {" "}
            <span className="text-red-500">New Food</span> Cooked!!
          </h3>
          <form
            className="flex flex-col items-center align-center"
            onSubmit={handleSubmit}
          >
            {/* input filed for the category option */}
            <div className="flex">
              <label className="text-[22px]">Choose category:</label>
              <select
                className="border border-red-500 ml-2 rounded py-1 px-3"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <div className="border border-blue-500 flex flex-col items-center align-center left-5">
                  <option value="select">Select</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="beverage">Beverage</option>
                </div>
              </select>
            </div>
            <input
              className="border border-primary rounded-md mb-2 mt-3 py-2 px-4"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="New Food Name"
            />
            <input
              className="border border-primary rounded-md mb-2 mt-3 py-2 px-4"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="About the food"
            />
            <input
              className="border border-primary rounded-md mb-2 mt-3 py-2 px-4"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Food Price"
            />
            <input
              className="border border-primary rounded-md mb-2 mt-3 py-2 px-4"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Food Quantity"
            />
            <input
              className="border border-primary text-center rounded-md mb-2 py-2 px-4"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              className={`border my-2 mb-3 py-2 px-4 rounded-md shadow-md transition ease-in-out delay-150 ${
                isFormValid
                  ? "border-red-600 bg-primary text-customWhite cursor-pointer"
                  : "border-black bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              <input type="submit" value="Add Food" />
            </button>
          </form>
        </div>
      </div>
      <ScrollUp />
    </main>
  );
};

export default addItem;
