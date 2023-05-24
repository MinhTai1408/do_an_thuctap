import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cartItem/CartItem";

const ShopCart = () => {
  const { cart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Cart Items: ({itemAmount})
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 overflow-y-auto">
        <div className="rounded-lg md:w-2/3 ">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <hr className="my-4" />
          <div className="flex justify-between">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
