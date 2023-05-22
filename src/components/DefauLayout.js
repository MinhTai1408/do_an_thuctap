import React from "react";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "./../pages/ProductDetails";

import ShopCart from "./shop/ShopCart";
import ProductCart from "./../pages/ProductCart";

const DefauLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<ShopCart />} />
        <Route path="product" element={<ProductCart />} />
      </Routes>
    </>
  );
};

export default DefauLayout;
