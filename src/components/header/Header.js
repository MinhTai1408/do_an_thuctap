import React, { useContext } from "react";

import { CartContext } from "./../../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer ">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to={`product`} className="mr-5 hover:bg-red-300">
            First Link
          </Link>
          <Link className="mr-5 hover:bg-red-300">Second Link</Link>
          <Link className="mr-5 hover:bg-red-300">Third Link</Link>
          <Link className="hover:bg-red-300">Fourth Link</Link>
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">FPM Shop</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {/* cart */}
          <Link
            // onClick={() => setIsOpen(!isOpen)}
            to={`cart`}
            className=" cursor-pointer flex relative max-w-[50px] ml-3"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="bg-red-500 rounded-full -rigth-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center ">
              {itemAmount}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
