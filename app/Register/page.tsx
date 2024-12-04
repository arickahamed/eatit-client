'use client'
import React, { useState } from 'react';
import registerHeroImage from "./registerImage/hero-login.png";
import HeroSection from '@/components/shared/HeroSection';
import Link from 'next/link';
import ScrollUp from '@/components/shared/ScrollUp';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import ShowToast from '@/components/shared/ShowToast';


const Register = () => {
  const router = useRouter();

  // handling the form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: ""
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (formData.email.length > 5 && formData.password.length > 4 && formData.rePassword && formData.password === formData.rePassword) {
      console.log(formData),
        setFormData({
          email: "",
          password: "",
          rePassword: ""
        });
        ShowToast({type: "success", message:"Successfully registered!"});
        setTimeout(() => {
                router.push("/login")
        }, 2000);
    } else {
      ShowToast({ type: "error", message: "Fill the form correctly!" });
    }
  };

  const heroInfo = {
    img: registerHeroImage,
    title: "login-register",
    description: "let's join us",
  };
  return (
    <main className="w-full pb-6">
      <HeroSection data={heroInfo} />
      <div className="border-b border-red-400 w-[90%] md:w-[70%] mx-auto p-4 text-center">
        <h3 className="text-xl">Register</h3>
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
          <input
            className="border border-primary rounded-md mb-3 mt-3 py-2 px-4"
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleInputChange}
            placeholder="Re-enter Your Password"
          />
          <br />
          <button
            className={`${
              formData.email.length > 5 && formData.password.length > 4 && formData.rePassword && formData.password === formData.rePassword
                ? "border-red-600 bg-primary text-customWhite"
                : "disabled border-black bg-gray-300"
            } border  mt-2 py-2 px-4 rounded-md shadow-md transition ease-in-out delay-150 cursor-pointer`}
          >
            <input type="submit" value="Register" />
          </button>
        </form>
      </div>
      <p className="text-center p-3">
        Already have an account?{" "}
        <Link className={`text-primary hover:text-orange-500`} href="/login">
          Login
        </Link>
      </p>
      <ScrollUp />
      <ToastContainer />
    </main>
  );
}

export default Register;