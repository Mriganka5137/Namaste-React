import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Optional Chaining
  const [restaurants, setRestaurants] = useState([]);

  // const filteredRestaurants = restaurants.filter(
  //   (res) => res.data.avgRating > 4
  // );

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

    const restaurantsData =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantsData[0].info);

    setRestaurants(restaurantsData);
  };

  const handleFilter = () => {
    setRestaurants();
  };

  return (
    <div className="flex flex-col justify-start w-full px-10 py-5">
      <div className="flex items-center justify-center gap-3 px-10">
        <input
          type="search"
          name="search"
          id="search"
          className="flex-1 w-full px-5 py-2 rounded-md bg-slate-200"
          placeholder="Search"
        />
        <button
          className="px-4 py-2 text-black uppercase rounded-lg bg-slate-200"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>

      {restaurants.length === 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-10 max-sm:flex-col max-sm:items-center">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-10 max-sm:flex-col max-sm:items-center">
          {restaurants?.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
