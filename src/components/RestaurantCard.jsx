import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <div className="image-container">
        <img
          className="restaurant-image"
          src={restaurant.image}
          alt={restaurant.name}
        />
      </div>
      <p className="restaurant-rating">Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;
