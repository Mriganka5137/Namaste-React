import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div
      className="max-lg:w-[200px] max-md:w-full w-[280px] p-5 mt-10 rounded-lg bg-slate-100 border 
    hover:border-green-950 cursor-pointer shadow-md hover:translate-y-1 transition-all flex flex-col  justify-center"
    >
      <div className=" p-1 object-contain  max-h-[200px]">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="restaurant"
          className="rounded-lg "
          width={250}
          height={200}
        />
      </div>
      <h3 className="mt-5 text-lg font-bold">{name}</h3>
      <h4 className="text-sm line-clamp-1">{cuisines.join(", ")}</h4>
      <div className="flex justify-between gap-2 mt-4">
        <h4 className="text-[14px] font-semibold text-red-800">
          {" "}
          {avgRating} ⭐️
        </h4>
        <h4 className="text-[14px] font-bold">₹{costForTwo / 100} FOR TWO</h4>
      </div>
      <h4 className="text-[10px] text-end">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
