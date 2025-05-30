import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //* Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="font-semibold">{item.card.info.name} - </span>
              <span className="text-sm">Rs. {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-1 mx-16 bg-white shadow-lg m-auto rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            {item.card.info.imageId ? (
              <img src={LOGO_URL + item.card.info.imageId} className="w-full" />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
