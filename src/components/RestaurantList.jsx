import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../contexts/RestaurantContext";
import "./RestaurantList.css";

const RestaurantList = () => {
  const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([
    ...restaurants,
  ]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    filterRestaurants();
  }, [ratingFilter, searchTerm, restaurants]);

  const handleRestaurantClick = (restaurantId) => {
    setSelectedRestaurant(
      restaurants.find((restaurant) => restaurant._id === restaurantId)
    );
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterRestaurants = () => {
    let filtered = restaurants;

    if (ratingFilter) {
      filtered = filtered.filter(
        (restaurant) => restaurant.rating >= parseFloat(ratingFilter)
      );
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredRestaurants(filtered);
  };

  return (
    <div className="restaurant-list-container">
      <h2 className="header">Restaurant List</h2>
      <div className="filter-container">
        <label htmlFor="rating" className="filter-label">
          Filter by Rating:
        </label>
        <input
          className="filter-input"
          type="number"
          id="rating"
          value={ratingFilter}
          onChange={handleRatingChange}
        />
        <label htmlFor="search" className="filter-label">
          Search by Name:
        </label>
        <input
          className="filter-input"
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="restaurant-card-grid">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            onClick={() => handleRestaurantClick(restaurant._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
