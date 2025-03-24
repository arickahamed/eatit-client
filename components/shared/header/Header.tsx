"use client";
import Link from "next/link";
import clockIcon from "@/images/header/clock_icon.png";
import phoneIcon from "@/images/header/phone_icon.png";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../overall/Button";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { clearAuthData } from "@/lib/redux/features/auth/authSlice";
import { persistor } from "@/lib/redux/store";
import { useHeaderData } from "./HeaderData";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (window.scrollY > 5) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpenNav(!openNav);
    } else {
      setOpenNav(!openNav);
    }
  };

  const user = useAppSelector((state) => state.auth);

   const dispatch = useAppDispatch();
   const HeaderData = useHeaderData();


   const handleLogout = async () => {
     try {
       dispatch(clearAuthData());
       await persistor.purge(); // Purge the storage
       localStorage.removeItem("user");
       console.log("Logout successful: State purged");
     } catch (error) {
       console.error("Error during logout: ", error);
     }
   };

  const isActive = (href: string) => pathName == href;

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  return (
    <section>
      <main>
        {/* top section */}
        <div className="bg-primary text-customWhite text-[8px] sm:text-12 md:text-12 lg:text-12">
          <div className="text-12 p-2 w-[90%] m-auto flex justify-between items-center">
            <div
              className={`sm:w-[60%] md:w-[55%] w-[40%] sm:flex md:flex justify-between`}
            >
              <div className="flex md:w-[40%] sm:w-[47%] items-center">
                <Image
                  src={clockIcon}
                  width={10}
                  height={10}
                  alt="clock icon"
                />
                <p className="pl-2">7.30AM - 9.30PM</p>
              </div>
              <div className="flex md:w-[40%] sm:w-[47%] items-center">
                <Image
                  src={phoneIcon}
                  width={10}
                  height={10}
                  alt="clock icon"
                />
                <p className="pl-2">+8801774887213</p>
              </div>
              {user.email && (
                <div>
                  <p>{user.email}</p>
                </div>
              )}
            </div>
            <p>Get 20% off on first order!</p>
          </div>
        </div>

        {/* navbar */}
        <header
          className={` ${
            openNav
              ? "text-secondary bg-gray-300 shadow-xl sticky "
              : "text-secondary bg-customWhite shadow-xl"
          } `}
        >
          <div
            className={`${
              openNav
                ? "h-[95vh] overflow-hidden"
                : "justify-between items-center"
            } w-[90%] flex m-auto py-5 transition duration-200 delay-150 ease-in-out`}
          >
            <div
              onClick={() => {
                router.push("/");
                if (openNav) {
                  setOpenNav(false);
                }
              }}
              className={`${
                openNav ? " text-35" : "text-25 "
              } text-primary font-bold  cursor-pointer`}
            >
              eat<span className="text-secondary">it</span>{" "}
            </div>
            <div
              onClick={() => {
                if (openNav) {
                  setOpenNav(false);
                }
              }}
              className={`${
                openNav
                  ? "flex flex-col self-center justify-center w-screen h-[65%] text-35"
                  : "hidden"
              } sm:flex md:flex  {user.role == "admin"? "sm:w-[55%] md:w-[55%] lg:w-[50%]" : "sm:w-[55%] md:w-[45%] lg:w-[35%]" } justify-between items-center font-bold`}
            >
              {/* dynamic header data */}
              {HeaderData.map((info, index) => {
                return (
                  <Link
                    key={info.id || index}
                    className={`${
                      isActive(info.pathName)
                        ? "active"
                        : "hover:border-b hover:border-primary"
                    }`}
                    onClick={() => {
                      if (openNav) {
                        setOpenNav(false);
                      }
                    }}
                    href={info.pathName}
                  >
                    {info.name}
                  </Link>
                );
              })}
              {/* Login Logout button  */}
              <Button>
                <Link
                  href="/login"
                  onClick={() => {
                    openNav && setOpenNav(false);
                    user.email && handleLogout();
                  }}
                >
                  {user.email ? "Logout" : "Login"}
                </Link>
              </Button>
            </div>
            <div
              onClick={handleOpenNavMenu}
              className="block sm:hidden md:hidden lg:hidden"
            >
              <div className={` ${openNav ? "opacity-0" : "opacity-100"}`}>
                <HiMenuAlt3 />
              </div>
              <div
                className={` ${
                  openNav ? " opacity-100 text-[25px] font-bold" : "opacity-0"
                } text-primary`}
              >
                <RxCross2 />
              </div>
            </div>
          </div>
        </header>
      </main>
    </section>
  );
};

export default Header;
