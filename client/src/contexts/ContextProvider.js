import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showItems, setShowItems] = useState(true);
  const [showOrders, setShowOrders] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const showAddItemModalHandler = () => {
    setShowAddItemModal(true);
  };
  const closeAddItemModalHandler = () => {
    setShowAddItemModal(false);
  };
  const showItemHandler = () => {
    setShowItems(true);
    setShowOrders(false);
  };
  const showOrderHandler = () => {
    setShowItems(false);
    setShowOrders(true);
  };
  const addItem = (newItem) => {
    const updateAmount = totalAmount + newItem.amount * newItem.price;
    setTotalAmount(updateAmount);
    for (const item of items) {
      if (item.id === newItem.id) {
        item.amount = item.amount + newItem.amount;
        return;
      }
    }
    setItems((oldItems) => [...oldItems, newItem]);
  };
  const removeItem = (id) => {
    let updateItems;
    for (const item of items) {
      if (item.id === id) {
        const updateAmount = totalAmount - item.price;
        setTotalAmount(updateAmount);
        if (item.amount === 1) {
          updateItems = items.filter((item) => item.id !== id);
          setItems(updateItems);
        } else {
          for (const item of items) {
            if (item.id === id) {
              item.amount -= 1;
            }
          }
        }
      }
    }
  };

  return (
    <stateContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        showModalHandler,
        closeModalHandler,
        showModal,
        addItem,
        items,
        setItems,
        totalAmount,
        setTotalAmount,
        removeItem,
        showAddItemModal,
        showAddItemModalHandler,
        closeAddItemModalHandler,
        showItemHandler,
        showOrderHandler,
        showItems,
        showOrders,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
