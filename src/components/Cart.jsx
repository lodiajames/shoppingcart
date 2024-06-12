import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RestaurantContext } from "../contexts/RestaurantContext";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const { totalPrice } = useContext(RestaurantContext);
  return (
    <div className="cart">
      <FiShoppingCart className="cart-icon" size={24} />
      <div className="cart-content">
        <span className="total-price">
          Total Price: ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Cart;
