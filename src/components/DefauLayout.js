import React from "react";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";

import ProductDetails from "./../pages/ProductDetails";

import ShopCart from "./shop/ShopCart";

import Hero from "./hero/Hero";
import ProductsMen from "../pages/ProductsMen";
import ProductsWomen from "../pages/ProductsWomen";
import ProductsJewelery from "../pages/ProductsJewelery";
import Contact from "./contact/Contact";
import BlogFashion from "./blog/BlogFashion";

const DefauLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="men's clothing" element={<ProductsMen />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="women's clothing" element={<ProductsWomen />} />
        <Route path="jewelery" element={<ProductsJewelery />} />
        <Route path="cart" element={<ShopCart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<BlogFashion />} />
      </Routes>
    </>
  );
};

export default DefauLayout;
