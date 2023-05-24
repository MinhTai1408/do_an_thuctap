/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-grey h-[300px] mb-4 relative overflow-hidden group transition">
        {/* image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110"
              src={image}
              slot=""
            />
          </div>
        </div>
        {/* shop and detai*/}
        <div className="absolute top-0 right-0 p-2 flex-col item-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 ">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary "
          >
            <i className="fa-solid fa-circle-info"></i>
          </Link>
        </div>
        {/*category and title & price */}
      </div>
      <div>
        <div className="text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="mb-1 font-bold">{title}</h2>
        </Link>

        <div className="mb-1 font-medium">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
