import React, { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { RestaurantContext } from "../contexts/RestaurantContext";
import "./DishCard.css"; // Import the CSS file

const DishCard = ({ dish }) => {
  const { handleAddItems, handleRemoveItems } = useContext(RestaurantContext);

  const handleAdd = () => {
    handleAddItems(dish);
  };

  const handleRemove = () => {
    handleRemoveItems(dish);
  };

  return (
    <div className="dish-card">
      <h3 className="dish-name">{dish.name}</h3>
      <img className="dish-image" src={dish.image} alt={dish.name} />
      <p className="dish-price">Price: ${dish.price.toFixed(2)}</p>
      <div className="dish-card-actions">
        <button className="add-button" onClick={handleAdd}>
          <IoMdAddCircle size={24} />
        </button>
        <button className="remove-button" onClick={handleRemove}>
          <IoMdRemoveCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default DishCard;
