'use client'
import { useAppSelector } from "@/lib/redux/hooks";

interface IHeaderData {
    id: number,
    name: string,
    pathName: string
};


export const useHeaderData = (): IHeaderData[] => {
  const user = useAppSelector((state) => state.auth);

  if (user.role === "admin") {
    return [
      {
        id: 1,
        name: "Dashboard",
        pathName: "/dashboard",
      },
      {
        id: 2,
        name: "Users",
        pathName: "/users",
      },
      {
        id: 3,
        name: "Items",
        pathName: "/items",
      },
      {
        id: 4,
        name: "Add item",
        pathName: "/addItem",
      },
      {
        id: 5,
        name: "Orders",
        pathName: "/orders",
      },
    ];
  } else {
    return [
      {
        id: 1,
        name: "About",
        pathName: "/about",
      },
      {
        id: 2,
        name: "Items",
        pathName: "/items",
      },
      {
        id: 3,
        name: "Contact",
        pathName: "/contact",
      },
      {
        id: 4,
        name: "Cart",
        pathName: "/cart",
      },
    ];
  }
};

