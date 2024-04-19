import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="h-screen mt-[100px] mb-[547px] px-4 sm:px-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
