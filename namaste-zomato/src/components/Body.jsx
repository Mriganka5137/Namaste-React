import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Optional Chaining
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fourStar = restaurants.filter((res) => res?.info?.avgRating > 4);

  useEffect(() => {
    // console.log("Inside effect");
    fetchRestaurant();
  }, []);

  // Fetch Restaurant function
  const fetchRestaurant = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const res = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await res.json();

    // console.log(data);
    let restaurantsData =
      data?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(restaurantsData);

    if (restaurantsData === undefined) {
      restaurantsData =
        data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    }
    // console.log(restaurantsData);

    setRestaurants(restaurantsData);
    setFilteredRestaurant(restaurantsData);
  };

  // const handleFilter = () => {
  //   setRestaurants(filteredRestaurants);
  // };
  // console.log(filteredRestaurant);

  return (
    <div className="flex flex-col justify-start max-w-[1440px] px-10 py-5 max-sm:px-2 mx-auto pt-36">
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
            className="px-4 py-2 text-gray-400 uppercase border rounded-lg bg-slate-50"
            onClick={() => {
              const searchRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              // setRestaurants(searchRestaurants);
              setFilteredRestaurant(searchRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 text-gray-400 uppercase border rounded-lg bg-slate-50"
            onClick={() => {
              setFilteredRestaurant(fourStar);
            }}
          >
            Filter
          </button>
        </div>
      </div>

      {restaurants?.length === 0 ? (
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
          {filteredRestaurant?.map((restaurant) => (
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
