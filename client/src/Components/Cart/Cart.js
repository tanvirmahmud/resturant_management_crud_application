import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";

import CartItem from "./CartItem";
import { useStateContext } from "../../contexts/ContextProvider";
import Axios from "axios";

const Cart = (props) => {
  const {
    totalAmount,
    setTotalAmount,
    items,
    setItems,
    addItem,
    removeItem,
    closeModalHandler,
  } = useStateContext();
  const amount = totalAmount.toFixed(2);
  const hasItems = items.length > 0;
  const cartItemAddHandler = (item) => {
    const newItem = { ...item };
    newItem.amount = 1;
    addItem(newItem);
  };
  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const sentOrderHandler = () => {
    const employId = localStorage.getItem("id");
    Axios.post("http://localhost:5000/order", {
      items,
      employId,
      totalAmount: amount,
    }).then((res) => console.log(res));
    setItems([]);
    setTotalAmount(0);

    closeModalHandler();
  };
  const cartItems = (
    <div className={classes["cart-items"]}>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </div>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={sentOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
