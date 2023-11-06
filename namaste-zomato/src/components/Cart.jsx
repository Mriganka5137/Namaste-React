import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartDetails = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-col justify-start max-w-[1440px] px-10 py-5 max-sm:px-2 mx-auto pt-36 ">
      <h1 className="text-xl font-bold text-green-800">Cart</h1>
      <ul className="flex flex-col gap-10 ">
        {cartDetails.map((item) => (
          <ItemCard item={item} key={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
