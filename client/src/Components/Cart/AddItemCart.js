import classes from "./AddItemCart.module.css";
import ItemAddModal from "../../UI/ItemAddModal";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Axios from "axios";

const AddItemCart = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemDescription, setItemDescription] = useState("");
  const { closeAddItemModalHandler } = useStateContext();
  const addItemHandler = () => {
    Axios.post("http://localhost:5000/items", {
      name: itemName,
      price: itemPrice,
      description: itemDescription,
    }).then((res) => {});
  };
  const itemNameChangeHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceChangeHander = (e) => {
    setItemPrice(e.target.value);
  };
  const descriptionHandler = (e) => {
    setItemDescription(e.target.value);
  };
  return (
    <ItemAddModal>
      <form onSubmit={addItemHandler}>
        <div className={classes["control-group"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Item Name</label>
            <input type="text" id="name" onChange={itemNameChangeHandler} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="price">price</label>
            <input
              type="number"
              step="any"
              id="price"
              onChange={priceChangeHander}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              cols="33"
              onChange={descriptionHandler}
            />
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              type="button"
              onClick={closeAddItemModalHandler}
            >
              Cancel
            </button>
            <button className={classes.button} type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </ItemAddModal>
  );
};

export default AddItemCart;
