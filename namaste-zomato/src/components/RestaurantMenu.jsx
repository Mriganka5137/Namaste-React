import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0);
  // console.log(resInfo);
  if (resInfo === null)
    return (
      <div className="flex flex-wrap items-center justify-center gap-10 max-sm:flex-col max-sm:items-center pt-36">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );

  const { name, cuisines, costForTwo, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-10 py-5 pt-36 max-w-[1440px] mx-auto max-sm:p-3 ">
      <div>
        <h1 className="text-2xl font-bold text-yellow-800">{name}</h1>
        <p className="mt-2 text-sm font-light text-gray-500">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm font-medium text-gray-500">{areaName}</p>

        <p className="mt-2 font-bold text-gray-700 ">
          {" "}
          ₹{costForTwo / 100} for two
        </p>
      </div>

      <div className="mt-10 ">
        <hr />
        <h2 className="mt-5 mb-10 font-bold text-yellow-800">Menu</h2>
        <ul>
          {category.map((c, index) => (
            <RestaurantCategory
              key={c.title}
              data={c?.card?.card}
              showAccordion={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
