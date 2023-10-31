import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(MENU_API + id);
    // const res = await fetch(MENU_API + "43836");

    const data = await res.json();
    // console.log(data);
    setResInfo(data?.data);
  };

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

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(name, cuisines, costForTwoMessage);

  let data;
  if (itemCards) {
    data = itemCards;
  }

  if (itemCards?.itemCards === undefined) {
    data =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
  }
  // console.log(data);
  return (
    <div className="px-10 py-5 pt-36 max-w-[1440px] mx-auto max-sm:p-3">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-2 text-sm font-light text-gray-500">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm font-medium text-gray-500">{areaName}</p>

        <p className="mt-2 font-bold"> ₹{costForTwo / 100} for two</p>
      </div>

      <div className="mt-10 ">
        <hr />
        <h2 className="mt-5 mb-10 font-bold">Menu</h2>
        <ul className="flex flex-col gap-10 ">
          {data.itemCards.map((item) => (
            <ItemCard key={item.card.info.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
