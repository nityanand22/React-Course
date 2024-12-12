import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-2 w-[200px] bg-gray-100 max-h-fit flex flex-col justify-evenly rounded-lg hover:scale-105 transition-all">
      <img
        src={LOGO_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
