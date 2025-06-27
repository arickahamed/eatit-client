// components/global/OrderPolling.tsx
"use client";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setNewOrderCount } from "@/lib/redux/features/admin/adminSlice";

const OrderPolling = () => {
  const dispatch = useAppDispatch();
  const previousCount = useRef<number | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const currentReduxCount = useAppSelector(
    (state) => state.adminData.newOrderCount
  );

  useEffect(() => {
    const fetchNewOrders = async () => {
      try {
        const res = await fetch(`${API_URL}/api/v1/admin/getPendingOrders`);
        const data = await res.json();
        const pendingCount = data.length;

        if (previousCount.current === null) {
          previousCount.current = pendingCount;
          return;
        }

        // new orders = current - previous
        const diff = pendingCount - previousCount.current;

        if (diff > 0) {
          dispatch(setNewOrderCount(currentReduxCount + diff));
        }

        previousCount.current = pendingCount;
      } catch (err) {
        console.error("Polling error:", err);
      }
    };

    fetchNewOrders();
    const interval = setInterval(fetchNewOrders, 3000);
    return () => clearInterval(interval);
  }, [dispatch, API_URL, currentReduxCount]);

  return null;
};

export default OrderPolling;
