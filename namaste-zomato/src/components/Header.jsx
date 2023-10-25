import React from "react";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-8 text-white bg-cyan-900">
      <img src={logo} alt="logo" />
      <ul className="flex gap-10 uppercase">
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
