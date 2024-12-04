import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "eat-it",
  description: "Restaurant you can relay on!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto text-secondary bg-customWhite flex flex-col min-h-screen">
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
