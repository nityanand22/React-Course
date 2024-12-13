import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-1/2 mx-auto bg-gray-50 p-4 m-4 shadow-lg  cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
