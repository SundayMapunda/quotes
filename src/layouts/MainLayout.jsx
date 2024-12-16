import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Outlet /> 
      {/* allows other components to be rendered act as outlet port */}
    </>
  );
};

export default MainLayout;
