import React, { useState } from "react";
import { assets } from "../assets/assets";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

const FoodItems = ({ _id, name, image, price, description, category }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div key={name} className="food-item w-full  shadow-md py-2 px-2 ">
      <div className="relative">
        <img
          className="rounded-tr-xl rounded-tl-xl w-full"
          src={image}
          alt=""
        />
         <div className="absolute right-2 bottom-2 cursor-pointer ">
        {!itemCount ? (
          <IoIosAddCircleOutline
            className="flex justify-end items-center text-4xl gap-2 text-green-500 bg-white rounded-full border-2 border-green-600"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="flex justify-end items-center gap-2">
            <CiCircleMinus className="text-red-500 text-4xl " onClick={() => setItemCount((prev) => prev - 1)} />
            <p>{itemCount}</p>
            <IoIosAddCircleOutline className="text-green-500 text-4xl" onClick={() => setItemCount((prev) => prev + 1)}/>
          </div>
        )}
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <h1 className="text-[17px] font-medium">{name}</h1>
        <img className="w-[70px] " src={assets.rating_starts} alt="" />
      </div>
      <p className="text-slate-500 text-sm font-medium">{description}</p>
      <p className="text-lg font-semibold text-orange-500">${price}</p>
    </div>
  );
};

export default FoodItems;
