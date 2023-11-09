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
        <img src={logo} alt="logo" width={45} className=" hover:animate-spin" />
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
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
