import React, { useContext } from "react";
import DishCard from "./DishCard";
import { RestaurantContext } from "../contexts/RestaurantContext";
import "./DishesMenu.css"; // Import the CSS file

const DishesMenu = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);
  return (
    <div className="dishes-menu">
      <h2 className="menu-title">Menu</h2>
      {selectedRestaurant && (
        <div className="dishes-container">
          {selectedRestaurant.menu.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesMenu;
