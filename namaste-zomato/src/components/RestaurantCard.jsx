import React from "react";

const RestaurantCard = ({ name, url }) => {
  return (
    <div
      className="max-w-[300px] p-5 mt-10 rounded-lg bg-slate-100 border 
    hover:border-green-950 cursor-pointer"
    >
      <div className=" p-1 object-contain  max-h-[200px]">
        <img src={url} alt="restaurant" className="rounded-lg " />
      </div>
      <h3 className="mt-5 text-lg font-bold">{name}</h3>
      <h4>Biriyani, North Indian</h4>
      <div className="flex justify-between mt-2">
        <h4>4.4 Stars</h4>
        <h4>38 mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
