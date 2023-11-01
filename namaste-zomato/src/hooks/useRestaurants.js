import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

    let restaurantsData =
      data?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurantsData === undefined) {
      restaurantsData =
        data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    }

    setRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  return { restaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurants;
