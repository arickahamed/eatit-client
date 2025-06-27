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
import { IoCartOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import OrderPolling from "@/components/global/OrderPolling";
import { setNewOrderCount } from "@/lib/redux/features/admin/adminSlice";



const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [openNav, setOpenNav] = useState(false);
  // const [orders, setOrders] = useState([]);
  // console.log(orders.length);
  const handleOpenNavMenu = () => {
    if (window.scrollY > 5) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpenNav(!openNav);
    } else {
      setOpenNav(!openNav);
    }
  };

  // const previousOrderCountRef = useRef(0);
  const user = useAppSelector((state) => state.auth);
  const role = user.role;
  const admin = "admin" == role;

  const dispatch = useAppDispatch();
  const HeaderData = useHeaderData();

  // admin -- new order count reset on clicking the order nav
  

  //  cart item
  const cartProducts = useAppSelector((state) => state.cartProducts);
  // const orderPlaced = cartProducts.orderPlaced;
  // console.log(cartProducts);

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

     const adminOrders = useAppSelector((state) => state.adminData);
  console.log(adminOrders.newOrderCount);

  return (
    <section>
      <main>
        {/* for the orders of the user to show it to the admin */}
        {admin && <OrderPolling />}
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

            {/* cart icon for mobile view */}
            {/* <Link href={admin ? "/orders" : "/cart"}>
              <div className="block md:hidden lg:hidden cursor-pointer">
                {cartProducts?.cartItems?.length ? (
                  openNav ? null : orderPlaced && admin ? (
                    <div className="flex relative w-fit">
                      <div className="text-[25px]">
                        <BsBag />{" "}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                        {cartProducts?.cartItems?.length}
                      </div>{" "}
                    </div>
                  ) : (
                    <div className="flex relative w-fit">
                      <div className="text-[25px]">
                        <IoCartOutline />{" "}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                        {cartProducts?.cartItems?.length}
                      </div>{" "}
                    </div>
                  )
                ) : null}
              </div>
            </Link> */}
            <Link
              href={admin ? "/orders" : "/cart"}
              onClick={() => {
                if (admin) {
                  dispatch(setNewOrderCount(0)); // manually reset count when admin clicks orders
                }
              }}
            >
              <div className="block md:hidden lg:hidden cursor-pointer">
                {openNav ? null : (
                  <div className="flex relative w-fit">
                    {admin ? (
                      <>
                        <div className="text-[25px]">
                          <BsBag />
                        </div>
                        {adminOrders?.newOrderCount > 0 && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                            {adminOrders.newOrderCount}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="text-[25px]">
                          <IoCartOutline />
                        </div>
                        {cartProducts?.cartItems?.length > 0 && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                            {cartProducts.cartItems.length}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </Link>

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
              {HeaderData.map((info, index) => (
                <Link
                  key={info.id || index}
                  className={`${
                    isActive(info.pathName)
                      ? "active"
                      : "hover:border-b hover:border-primary"
                  }`}
                  onClick={() => {
                    if (openNav) setOpenNav(false);
                    if (admin && info.name === "Orders") {
                      dispatch(setNewOrderCount(0)); // reset on clicking "Orders"
                    }
                  }}
                  href={info.pathName}
                >
                  {info.name === "Orders" && admin ? (
                    <div className="relative w-fit">
                      <span>{info.name}</span>
                      {adminOrders.newOrderCount > 0 && (
                        <div className="absolute -top-2 -right-4 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                          {adminOrders.newOrderCount}
                        </div>
                      )}
                    </div>
                  ) : info.name === "Cart" ? (
                    <div className="relative w-fit">
                      <div>{info.name}</div>
                      {cartProducts?.cartItems?.length > 0 && (
                        <div className="absolute -top-2 -right-4 md:-top-3 md:-right-4 bg-red-500 text-white text-[15px] md:text-[12px] w-6 h-6 md:w-5 md:h-5 flex items-center justify-center rounded-full">
                          {cartProducts.cartItems.length}
                        </div>
                      )}
                    </div>
                  ) : (
                    info.name
                  )}
                </Link>
              ))}

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
