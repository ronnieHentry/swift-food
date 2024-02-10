import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.595232345933871&lng=76.8937373533845&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const filteredRestaurantList = json?.data?.cards?.filter(
      (item) => item?.card?.card?.id === "top_brands_for_you"
    );
    setRestaurantList(
      filteredRestaurantList[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restaurantList.length
          ? restaurantList.map((restaurant, index) => {
              return (
                <RestaurantCard
                  data={restaurant.info}
                  key={restaurant.info.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Body;
