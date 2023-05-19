import React from "react";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "./../pages/ProductDetails";
import Sidebar from "./sidebar/Sidebar";

import Slidebars from "./sidebar/Slidebars";

const DefauLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
    </>
  );
};

export default DefauLayout;
