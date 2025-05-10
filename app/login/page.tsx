"use client"
import React, { useEffect, useState } from 'react';
import loginHeroImage from "./loginImage/hero-login.png";
import HeroSection from '@/components/shared/HeroSection';
import Link from 'next/link';
import ScrollUp from '../../components/shared/ScrollUp';
import ShowToast from '@/components/shared/ShowToast';
import { useRouter, useSearchParams } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { setWithExpiry } from '@/utils/localStorage';
import { getWithExpiry } from "@/utils/localStorage";
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setAuthData } from '@/lib/redux/features/auth/authSlice';
interface User {
  email: string;
  [key: string]: any; 
}

const login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [localStorageKey, setLocalStorageKey] = useState(0);
  const dispatch = useAppDispatch();

  const updateEmailFromStorage = () => {
      const stringifyUser = getWithExpiry("user");
      if (stringifyUser) {
        const user: User = JSON.parse(stringifyUser);

        dispatch(setAuthData({ email: user.email, role: user.role }));
        setLocalStorageKey(() => localStorageKey + 1);
      } else {
        dispatch(setAuthData({ email: null, role: null }));
      }
    };


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (formData.email.length > 5 && formData.password.length > 4) {
      const collectedData = {
        email: formData.email,
        password: formData.password,
      };
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/users/login",
          collectedData
        );
        const data = res.data;
        if (data.success) {
          setWithExpiry("user", JSON.stringify(data.data), 5);
          updateEmailFromStorage();
          ShowToast({ type: "success", message: data.message });
          setFormData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            router.push(redirect || "/");
            // here will be redirect router
          }, 1000);
        } else {
          ShowToast({ type: "error", message: data.message });
          console.log(data);
        }
      } catch (err) {
        console.log("something  went wrong");
        ShowToast({ type: "error", message: "Fill the form correctly!" });
      }
    } else {
      ShowToast({ type: "error", message: "Fill the form correctly!" });
    }
  };

  useEffect(() => {
    updateEmailFromStorage();
  }, [])

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
        <Link
          className={`text-primary hover:text-orange-500`}
          href={`/Register?redirect=/orderHandler`}
        >
          Register
        </Link>
      </p>
      <ScrollUp />
      <ToastContainer />
    </main>
  );
}
export default login;

