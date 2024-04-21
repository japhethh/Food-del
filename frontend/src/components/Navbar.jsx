import React, { useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center py-5  ">
      <img className="w-[150px]" src={assets.logo} alt="" />

      <ul className="navbar-menu flex gap-5 text-[#49557e] cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={
            menu === "home" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu === "menu" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          contact-us
        </li>
      </ul>

      <div className="navbar-right flex items-center gap-10 cursor-pointer">
        <img className="w-5" src={assets.search_icon} alt="" />

        <div className="navbar-search-icon relative">
          <img className="w-5" src={assets.basket_icon} alt="" />

          <div className="dot absolute min-h-[10px] min-w-[10px] bg-orange-500 top-[-8px] right-[-8px] rounded-full">
          </div>

        </div>

        <button className="bg-transparent border-[1px] text-[#49557e] text-lg py-2 px-6 rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-150 ease-in-out">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
