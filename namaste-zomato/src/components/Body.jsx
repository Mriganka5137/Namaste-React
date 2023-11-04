import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurants from "../hooks/useRestaurants";
import { useState } from "react";

const Body = () => {
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();
  const [searchText, setSearchText] = useState("");
  const fourStar = restaurants?.filter((res) => res?.info?.avgRating > 4);
  console.log(restaurants);

  // const RestaurantcardPromoted = withPrometedLabel(RestaurantCard);

  return (
    <div className="flex flex-col justify-start max-w-[1440px] px-10 py-5 max-sm:px-2 mx-auto pt-36 ">
      <div className="flex flex-wrap items-center justify-around gap-3 px-10 max-sm:px-2">
        <input
          type="search"
          name="search"
          id="search"
          className="flex-1 px-5 py-2 text-sm border rounded-lg bg-slate-50"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="flex gap-2 text-sm">
          <button
            className="px-4 py-2 text-green-400 uppercase border border-green-200 rounded-lg bg-green-50 "
            onClick={() => {
              const searchRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(searchRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 text-yellow-500 uppercase border border-yellow-200 rounded-lg bg-yellow-50"
            onClick={() => {
              setFilteredRestaurants(fourStar);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      {!restaurants ? (
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
          {filteredRestaurants?.map((restaurant) => (
            <RestaurantCard
              resData={restaurant?.info}
              key={restaurant.info.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
