import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <div className="font-sans">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LayOut;
