import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // Optional Chaining
  const [restaurants, setRestaurant] = useState(resList);

  const filteredRestaurants = restaurants.filter(
    (res) => res.data.avgRating > 4
  );

  const handleFilter = () => {
    setRestaurant(filteredRestaurants);
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
      <div className="flex flex-wrap items-center justify-center gap-10 max-sm:flex-col max-sm:items-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
