import { useEffect, useState } from "react";
import logo from "../assets/react.svg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  console.log("header render");
  return (
    <div className="flex justify-between px-10 py-8 text-white bg-cyan-900 max-sm:justify-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" width={45} />
        <p className="text-xl font-bold ">Namaste Zomato</p>
      </div>
      <ul className="flex items-center gap-10 uppercase max-sm:hidden">
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="px-5 py-2 font-semibold uppercase rounded-lg text-slate-600 bg-slate-300 max-lg:hidden"
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
