import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";

function Layout() {
  return (
    <div className=" bg-main ">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
