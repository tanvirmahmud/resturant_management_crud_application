import React from "react";

import Header from "./Layouts/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import Orders from "./Layouts/Orders/Orders";
import Cart from "./Cart/Cart";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { showModal, showItems, showOrders } = useStateContext();
  return (
    <>
      {showModal && <Cart />}
      <Header />
      {showItems && <AvailableMeals />}
      {showOrders && <Orders />}
    </>
  );
};

export default Home;
