import Card from "../../../UI/Card/Card";
import classes from "./Orders.module.css";

import React, { useEffect, useState } from "react";
import Axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const employee_id = localStorage.getItem("id");
  useEffect(() => {
    Axios.post("http://localhost:5000/employeeOrder", { employee_id }).then(
      (res) => {
        const orders = res.data.items;
        setAllOrders(orders);
      }
    );
  }, [employee_id]);
  console.log(allOrders[0]);

  const orderList = allOrders.map((order) => {
    return (
      <Card>
        <div className={classes.orderCart}>
          <div className={classes.order}>
            <h1>{order.item}</h1>
            <p>amount:{order.amount}</p>
            <p>Date:{order.date}</p>
          </div>
        </div>
      </Card>
    );
  });
  return (
    <section>
      <Card className={classes.items}>
        <div className={classes.order}>{orderList}</div>
      </Card>
    </section>
  );
};

export default Orders;
