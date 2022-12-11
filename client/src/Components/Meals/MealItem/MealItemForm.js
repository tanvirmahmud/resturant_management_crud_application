import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
import { useRef } from "react";
const MealItemForm = (props) => {
  const inputRef = useRef();
  const cartItemHandler = (event) => {
    event.preventDefault();
    const amount = inputRef.current.value;
    const amountNumber = +amount;
    props.onCartItem(amountNumber);
  };
  return (
    <form className={classes.form} onSubmit={cartItemHandler}>
      <Input
        ref={inputRef}
        label="amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add Item</button>
    </form>
  );
};

export default MealItemForm;
