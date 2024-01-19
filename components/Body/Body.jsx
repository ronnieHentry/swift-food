import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import { restaurantData } from "../../public/RestaurantData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restaurantData.map((restaurant, index) => {
          return <RestaurantCard data={restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
