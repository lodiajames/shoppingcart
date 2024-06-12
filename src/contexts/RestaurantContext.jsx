import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://shoppingcart-backend-3jfw.onrender.com/api/restaurants"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.log("Error fetching restaurants:", error.message);
      }
    };

    fetchRestaurants();
  }, []);

  const handleAddItems = (dish) => {
    console.log("Dish:", dish);

    const existingItemIndex = cartItems.findIndex(
      (item) => item._id === dish._id
    );

    if (existingItemIndex !== -1) {
      console.log(
        `Dish already exists in the cart. You may want to update the quantity.`
      );

      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      console.log("Dish does not exist in the cart. Adding to the cart.");
      console.log("Cart", cartItems.length);

      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
    setTotalPrice((prev) => prev + dish.price);
  };
  const handleRemoveItems = (dish) => {
    console.log("Dish ID to remove:", dish);

    const existingItemIndex = cartItems.findIndex(
      (item) => item._id === dish._id
    );
    if (existingItemIndex !== -1) {
      console.log(
        `Dish exists in the cart. You may want to decrease the quantity or remove it.`
      );

      const updatedCartItems = [...cartItems];

      if (updatedCartItems[existingItemIndex].quantity > 1) {
        // decrement the quantityif the quantity is greater than 1,

        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity - 1,
        };
      } else {
        updatedCartItems.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCartItems);
      setTotalPrice((prev) => prev - dish.price);
    } else {
      console.log("Dish does not exist in the cart.");
    }
  };

  const value = {
    restaurants,
    selectedRestaurant,
    setSelectedRestaurant,
    handleAddItems,
    handleRemoveItems,
    totalPrice,
  };
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantProvider, RestaurantContext };
