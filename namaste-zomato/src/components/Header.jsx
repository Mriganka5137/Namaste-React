import { useState } from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="fixed z-10 flex justify-between w-full px-10 py-8 bg-white shadow-md text-slate-500 max-sm:justify-center">
      <NavLink to="/" className="flex items-center gap-2 ">
        <img src={logo} alt="logo" width={45} />
        <p className="text-xl font-bold text-slate-800">Namaste Swiggy</p>
      </NavLink>

      <ul className="flex items-center gap-10 text-sm font-semibold text-green-800 uppercase max-sm:hidden">
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
          <NavLink to="/cart">cart</NavLink>
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
