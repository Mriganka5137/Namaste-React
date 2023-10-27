import { useState } from "react";
import logo from "../assets/react.svg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between px-10 py-8 text-white bg-cyan-900">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" width={45} />
        <p className="text-xl font-bold">Namaste Zomato</p>
      </div>
      <ul className="flex items-center gap-10 uppercase">
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="px-5 py-2 text-black uppercase rounded-md bg-slate-300 max-lg:hidden"
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
