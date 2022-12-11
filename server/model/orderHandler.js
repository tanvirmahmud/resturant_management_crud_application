const db = require("../util/database");

exports.addOrder = (date, total_amount, employId) => {
  return db.execute(
    "INSERT INTO orders (date,total_amount,employ_id) VALUES(?,?,?)",
    [date, total_amount, employId]
  );
};

exports.addOrdersItems = (order_id, item, amount) => {
  return db.execute(
    "INSERT INTO orders_items (order_id,item,amount) VALUES(?,?,?)",
    [order_id, item, amount]
  );
};

exports.orderByEmployeeId = (employee_id) => {
  return db.execute(
    "SELECT * FROM orders INNER JOIN orders_items  ON orders.id=orders_items.order_id  WHERE employ_id=?",
    [employee_id]
  );
};
