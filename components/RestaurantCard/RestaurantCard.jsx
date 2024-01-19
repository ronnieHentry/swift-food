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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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
