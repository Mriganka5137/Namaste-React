import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartDetails = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-start max-w-[1440px] px-10 py-5 max-sm:px-2 mx-auto pt-36 mb-20">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-green-800 ">Cart</h1>
        <button
          className="flex items-center gap-2 px-2 border py-1.5 border-gray-300 rounded-lg text-gray-400"
          onClick={handleClearCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <span>clear</span>
        </button>
      </div>
      <hr />
      {cartDetails.length === 0 && (
        <div className="flex flex-col items-center mx-auto mt-10 ">
          <h2 className="text-2xl ">Cart is Empty</h2>
          <Link
            to="/"
            className="bg-yellow-600 px-4 py-1.5 rounded-lg mt-4 text-white"
          >
            Explore now!
          </Link>
        </div>
      )}
      <ul className="flex flex-col w-3/4 gap-2 mx-auto mt-5">
        {cartDetails.map((item) => (
          <ItemCard item={item} key={item} type="cart" />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
