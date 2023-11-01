import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(MENU_API + id);

    const data = await res.json();
    // console.log(data);
    setResInfo(data?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
