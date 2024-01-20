import { CLOUDINARY_URL } from "../../../public/constants";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props?.data;
  const { deliveryTime } = props?.data?.sla;
  return (
    <div className="res-card">
      <div className="image-container">
        <img
          alt="res-logo"
          className="res-logo"
          src={CLOUDINARY_URL + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
