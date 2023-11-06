import { useState } from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="fixed z-10 flex justify-between w-full px-10 py-8 bg-white shadow-md text-slate-500 max-sm:justify-center">
      <NavLink to="/" className="flex items-center gap-2 ">
        <img src={logo} alt="logo" width={45} />
        <p className="text-xl italic font-bold text-green-900">
          Namaste Swiggy
        </p>
      </NavLink>

      <ul className="flex items-center gap-10 text-sm font-medium text-green-800 uppercase max-sm:hidden">
        <li>
          <NavLink to="/grocery">Grocery</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="flex items-center justify-center w-2 h-2 p-2.5 text-xs text-white bg-green-600 rounded-full">
              {cartItems.length}
            </span>
          </NavLink>
        </li>

        <button
          className="px-5 py-2 font-semibold uppercase bg-green-600 rounded-lg text-slate-100 max-lg:hidden hover:bg-green-500"
          onClick={() => {
            if (btnName === "Login") {
              setBtnName("Logout");
            } else {
              setBtnName("Login");
            }
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
