import { CDN_URL } from "../utils/constants";

const ItemCard = ({ item }) => {
  const {
    name,
    description,
    price = 20000,
    imageId,
    category,
  } = item?.card?.info;
  return (
    <div className="flex items-center justify-between gap-3 p-5 border border-gray-100 rounded-lg shadow-sm max-sm:flex-col-reverse max-sm:p-2 hover:shadow-lg">
      <div className=" max-w-1/2">
        <p className="font-bold text-gray-500 text-md">{name}</p>
        <p className="font-medium text-[14px] text-gray-700">₹{price / 100}</p>
        <p className=" text-[11px] font-bold text-gray-400">{category}</p>
        <p className="font-light text-[12px] text-gray-400 mt-5">
          {description}
        </p>
        <button className=" text-sm rounded-lg px-3 py-1.5 bg-yellow-600 font-medium mt-5 text-gray-100">
          Add to Cart
        </button>
      </div>
      <div className="flex items-center max-w-[200px] max-sm:w-full">
        <img
          src={`${CDN_URL}/${imageId}`}
          alt="image"
          //   width={150}
          //   height={150}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ItemCard;
