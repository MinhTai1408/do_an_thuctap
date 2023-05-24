import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOprn, setIsOpen] = useState(false);
  return (
    <header className="border-b border-gray-300 py-2 ">
      <div className="  flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full drop-shadow-md ">
        <img
          src="./img/img-logo/anh-logo-shop-quan-ao_111916060.jpg"
          height={30}
          width={150}
        />
        <div
          className="lg:hidden block h-6 w-6 cursor-pointer "
          onClick={() => setIsOpen(!isOprn)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav
          className={`${
            isOprn ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto  `}
        >
          <ul className="text-base text-gray-600 lg:flex lg:justify-between lg:items-center left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-100">
            <li>
              <Link
                to={``}
                className="lg:px-5 py-2 block hover:text-blue-700 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleDropdown}
                className="lg:px-5 py-2 block hover:text-blue-700 font-semibold"
              >
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 focus:outline-none"
                >
                  Menu
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
                    <Link
                      to={`men's clothing`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Men's clothing
                    </Link>
                    <Link
                      to={`women's clothing`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Women's clothing
                    </Link>
                    <Link
                      to={`jewelery`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Jewelery
                    </Link>
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link className="lg:px-5 py-2 block hover:text-blue-700 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link className="lg:px-5 py-2 block hover:text-blue-700 font-semibold">
                Home
              </Link>
            </li>
          </ul>
          <Link to={`cart`}>
            <button className=" lg:block px-6 mx-2 py-2  bg-blue-400 hover:bg-black text-white rounded-xl ml-3">
              <i className="fa-solid fa-cart-shopping"></i>

              <div className="bg-red-500 rounded-full rigth-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center ">
                {itemAmount}
              </div>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
