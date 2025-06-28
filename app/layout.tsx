import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from './StoreProvider';

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
        <StoreProvider>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
