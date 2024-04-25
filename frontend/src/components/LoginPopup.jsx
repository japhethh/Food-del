import React, { useState } from "react";
import { assets } from "../assets/assets";
import { IoIosClose } from "react-icons/io";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="bg-slate-600 bg-opacity-50 flex justify-center items-center absolute w-full h-screen z-10 ">
      <form className="login-popup-form max-w-[330px] flex flex-col gap-4 blur-none bg-white p-4 rounded-xl">
        <div className="form-title flex justify-between mb-5">
          <h2 className="text-xl font-semibold">{currState} </h2>

          <IoIosClose
            className="text-4xl cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-inputs flex flex-col gap-3  ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300 "
            type="text"
            placeholder="Your email"
            required
          />
          <input
            className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="cursor-pointer py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start mt-1  gap-2">
          <input className="login-condition" type="checkbox" required />
          <p className="text-gray-500 text-sm">By condituing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p className="text-gray-500 text-sm">
            Create a new Accont? 
            <span
              className="text-md font-semibold cursor-pointer  text-orange-500"
              onClick={() => setCurrState("SignUp")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an Account? 
            <span
              className="text-md font-semibold cursor-pointer  text-orange-500"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
