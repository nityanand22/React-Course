import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151649&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu</h2>
      <h3>{resInfo.cuisines.join(", ")}</h3>
      <p>{resInfo.costForTwoMessage}</p>
      <p>{resInfo.sla.slaString}</p>
    </div>
  );
};

export default RestaurantMenu;
