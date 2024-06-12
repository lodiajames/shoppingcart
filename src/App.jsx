import { useContext } from "react";
import "./App.css";
import Cart from "./components/Cart";
import RestaurantList from "./components/RestaurantList";
import { RestaurantContext } from "./contexts/RestaurantContext";
import DishesMenu from "./components/DishesMenu";

function App() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  return (
    <>
      <div className="container">
        <h1 className="app-title">EatsExpress</h1>
        <Cart />
        <div className="main-content">
          <RestaurantList />
          {selectedRestaurant && <DishesMenu />}
        </div>
      </div>
    </>
  );
}

export default App;
