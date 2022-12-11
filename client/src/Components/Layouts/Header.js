import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Button from "../../UI/Button/Button";
import classes from "./Header.module.css";
import { useStateContext } from "../../contexts/ContextProvider";
const Header = (props) => {
  const { setIsLoggedIn, showItemHandler, showOrderHandler } =
    useStateContext();
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("id");

    setIsLoggedIn(false);
  };
  return (
    <>
      <header className={classes.header}>
        <h1>My Resturant</h1>
        <nav>
          <ul>
            <li className={classes.nav} onClick={showItemHandler}>
              All Items
            </li>
            <li className={classes.nav} onClick={showOrderHandler}>
              Order List
            </li>
          </ul>
        </nav>
        <div className={classes.group}>
          <HeaderCartButton />
          <Button type="submit" className={classes.btn} onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
