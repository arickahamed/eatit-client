"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setCartClear } from "@/lib/redux/features/cart/cartSlice";
import ShowToast from "@/components/shared/ShowToast";

const OrderHandler = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { email } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cartProducts);
  const total = cartItems.reduce((sum, item) => {
    if (!item || item.price == null || item.quantity == null) return sum;
    return sum + item.price * item.quantity;
  }, 0);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;


  useEffect(() => {
    const placeOrder = async () => {
      if (!email) return router.push("/login?redirect=/orderHandler");
      const orderedData = {email, cartItems, total};
      try {
        
        const res = await axios.post(
          `${API_URL}/api/v1/users/confirmOrder`,
          orderedData
        );
        if(res.data.success) {
          dispatch(setCartClear());
          router.push("/success");
          ShowToast({ type: "success", message: "Order placed" });
      }
    }catch (error) {
        console.error("Order failed", error);
        router.push("/cart");
      }
    };

    placeOrder();
  }, [email]);

  return <p>Placing your order...</p>;
};

export default OrderHandler;
