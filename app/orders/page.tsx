"use client";
import React, { useEffect, useState } from "react";
import heroImage from "@/app/about/about_images/hero_about-bg.png";
import HeroSection from "@/components/shared/HeroSection";
import ScrollUp from "@/components/shared/ScrollUp";
import { useDispatch } from "react-redux";

// ✅ Define types
type OrderItem = {
  title: string;
  quantity: number;
};

type PendingOrder = {
  _id: string;
  email: string;
  total: number;
  items: OrderItem[];
};

const Orders = () => {
  const dispatch = useDispatch();
  const [pendingOrders, setPendingOrders] = useState<PendingOrder[]>([]);

  const heroInfo = {
    img: heroImage,
    title: "Orders",
    description: "Read our story, How we started and about the team",
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ✅ Fetch pending orders with type
  const fetchPendingOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/api/v1/admin/getPendingOrders`);
      const data = await res.json();
      setPendingOrders(data); // Assume data is an array of PendingOrder
    } catch (err) {
      console.error("Error fetching pending orders:", err);
    }
  };

  useEffect(() => {
    fetchPendingOrders(); // initial call
    const interval = setInterval(fetchPendingOrders, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, [dispatch]);

  // ✅ Handle approve
  const approveOrder = async (id: string) => {
    try {
      await fetch(`${API_URL}/api/v1/admin/approvePendingOrder/${id}`, {
        method: "PATCH",
      });
      setPendingOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error approving order:", error);
    }
  };

  // ✅ Handle dismiss
  const dismissOrder = async (id: string) => {
    try {
      await fetch(`${API_URL}/api/v1/admin/deletePendingOrder/${id}`, {
        method: "DELETE",
      });
      setPendingOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error dismissing order:", error);
    }
  };

  return (
    <main>
      <HeroSection data={heroInfo} />
      <div className="p-6 max-w-3xl mx-auto">
        {pendingOrders.length === 0 ? (
          <p>No pending orders.</p>
        ) : (
          <ul className="space-y-4">
            {pendingOrders.map((order) => (
              <li key={order._id} className="border p-4 rounded shadow">
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Total:</strong> ${order.total}
                </p>
                <p>
                  <strong>Items:</strong>
                </p>
                <ul className="list-disc ml-6">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.title} × {item.quantity}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex gap-4">
                  <button
                    onClick={() => approveOrder(order._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => dismissOrder(order._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Dismiss
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ScrollUp />
    </main>
  );
};

export default Orders;
