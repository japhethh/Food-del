import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Placeholder = () => {
  const { getTotalFromAmount,URL } = useContext(StoreContext);
  return (
    <div>
      <form className="place-order flex items-start justify-between mt-24" action="">
        <div className="place-order-left w-full max-w-[500px]">
          <p className="title font-semibold text-2xl mb-4">Delivery Information</p>
          <div className="multi-fields flex flex-row gap-3">
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="First Name " />
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="Last Name" />
          </div>
          <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="email" placeholder="Email Address" />
          <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="Street" />
          <div className="multi-fields flex flex-row gap-3">
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="City" />
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="Zip code" />
            <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="Country" />
          </div>
          <input className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm" type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right w-full max-w-[500px]">
          <div>
          <p className="title font-semibold text-2xl mb-4">Cart title</p>

            <div className="cart-total-details flex py-2 justify-between items-center text-gray-400">
              <p className=" ">Subtotal</p>
              <p>{getTotalFromAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex py-2 justify-between items-center text-gray-400">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details flex py-2 justify-between items-center text-gray-700">
              <b>Total</b>
              <b>{0}</b>
            </div>
            <hr className="my-5 " />
            <button
              onClick={() => Navigate("/order")}
              className="flex justify-center items-center py-2 px-4 bg-orange-500 text-white font-semibold text-md mt-4"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeholder;
