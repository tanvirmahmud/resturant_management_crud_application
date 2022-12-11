const orderHandler = require("../model/orderHandler");

exports.addOrder = (req, res) => {
  const items = req.body.items;
  const employId = req.body.employId;
  const total_amount = req.body.totalAmount;
  const date = new Date();
  let order_id;

  orderHandler
    .addOrder(date, total_amount, employId)
    .then(([rows]) => {
      order_id = rows.insertId;
    })
    .then(() => {
      for (const item of items) {
        orderHandler.addOrdersItems(order_id, item.name, item.amount);
      }
    });
};

exports.orderByEmployee = (req, res) => {
  const employee_id = req.body.employee_id;
  // console.log(employee_id);
  orderHandler
    .orderByEmployeeId(employee_id)
    .then(([rows]) => {
      if (rows.length > 0) {
        res.send({ items: rows, status: true });
      } else {
        res.send({ status: false });
      }
    })
    .catch((err) => console.log(err));
};
