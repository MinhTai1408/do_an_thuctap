import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image */}
        <Link to={`/product/${id}`}>
          <img src={image} className="max-w-[80px]" alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icons */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm font-medium max-w-[140px] text-dark hover:underline"
            >
              {title}
            </Link>
            {/* remove icons */}
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeCart(id)}
            >
              <i className="fa-sharp fa-solid fa-trash text-gray-600 hover:text-red-500 transition"></i>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black fornt-medium">
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <i className="fa-solid fa-minus"></i>
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-black font-medium">
              $ {parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
