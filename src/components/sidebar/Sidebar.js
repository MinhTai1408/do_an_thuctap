import React, { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  {
    /*sử lý thanh trạng thái đóng mở */
  }
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white shadow-2xl fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex item-center justify-between py-6 border-b ">
        <div className="text-sm font-bold">Shopping Bag ({itemAmount})</div>
        {/*icons */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex item-center justify-center"
        >
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="overflow-auto">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total product */}
          <div className="uppercase font-medium">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
        </div>
        <Link
          to=""
          className="bg-red-600 flex p-4 justify-center items-center text-black w-full font-medium"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
