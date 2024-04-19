import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-[90px] mb-[547px] px-4 sm:px-16">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
