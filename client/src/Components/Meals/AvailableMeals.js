import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
// import ItemAddModal from "../../UI/ItemAddModal";
import AddItemCart from "../Cart/AddItemCart";
import { useStateContext } from "../../contexts/ContextProvider";
import Axios from "axios";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const { showAddItemModalHandler, showAddItemModal } = useStateContext();
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/items").then((res) => {
      const updateItems = res.data.items;
      setAllItems(updateItems);
    });
  }, []);

  const availableMeals = allItems.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section>
      {showAddItemModal && <AddItemCart />}
      <Card className={classes.meals}>
        <div>{availableMeals}</div>
        <div className={classes.btn}>
          <Button onClick={showAddItemModalHandler}>Add New Item</Button>
        </div>
      </Card>
    </section>
  );
};

export default AvailableMeals;
