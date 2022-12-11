import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.js";
import { useStateContext } from "../../../contexts/ContextProvider";

const MealItem = (props) => {
  const { addItem } = useStateContext();
  const cartItemHandler = (amount) => {
    if (amount < 1 || amount > 5) {
      return;
    }
    const cartItem = {
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    };
    addItem(cartItem);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onCartItem={cartItemHandler} />
      </div>
    </li>
  );
};
export default MealItem;
