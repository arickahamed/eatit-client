"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setCartClear } from "@/lib/redux/features/cart/cartSlice";
import ShowToast from "@/components/shared/ShowToast";

const orderHandler = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { email } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cartProducts);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const placeOrder = async () => {
      if (!email) return router.push("/login?redirect=/orderHandler");
      const orderedData = {email, cartItems, total};
      try {
        
        const res = await axios.post(
          "http://localhost:8080/api/v1/users/confirmOrder",
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

export default orderHandler;
