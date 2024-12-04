"use client"
import React, { useState } from 'react';
import loginHeroImage from "./loginImage/hero-login.png";
import HeroSection from '@/components/shared/HeroSection';
import Link from 'next/link';
import ScrollUp from '../../components/shared/ScrollUp';
import ShowToast from '@/components/shared/ShowToast';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';


const login = () => {
  const router = useRouter();

  // handling the form data
  const [formData, setFormData] = useState({
      email: "",
      password: ""
  });

  const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(formData.email.length > 5 && formData.password.length > 4 ) {
      console.log(formData),
      setFormData({
        email: "",
        password: ""
      })
      ShowToast({ type: "success", message: "Successfully loggedin!" });
      setTimeout(() => {
        router.push("/");
      }, 2000);

    }else{
      ShowToast({ type: "error", message: "Fill the form correctly!" });
    }
  }


    const heroInfo = {
      img: loginHeroImage,
      title: "login-register",
      description: "let's join us",
    };
  return (
    <main className="w-full pb-6">
      <HeroSection data={heroInfo} />
      <div className="border-b border-red-400 w-[90%] md:w-[70%] mx-auto p-4 text-center">
        <h3 className="text-xl">Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="border border-primary rounded-md mb-2 mt-3 py-2 px-4"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <br />
          <input
            className="border border-primary rounded-md mb-3 mt-3 py-2 px-4"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your Password"
          />
          <br />
          <button
            className={`${
              formData.email.length > 5 && formData.password.length > 4
                ? "border-red-600 bg-primary text-customWhite"
                : "disabled border-black bg-gray-300"
            } border  mt-2 py-2 px-4 rounded-md shadow-md transition ease-in-out delay-150`}
          >
            <input type="submit" value="Login" />
          </button>
        </form>
      </div>
      <p className="text-center p-3">
        Don't have a account?{" "}
        <Link className={`text-primary hover:text-orange-500`} href="/Register">
          Register
        </Link>
      </p>
      <ScrollUp />
      <ToastContainer />
    </main>
  );
}

export default login;