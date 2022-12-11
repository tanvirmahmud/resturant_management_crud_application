const db = require("../util/database");

exports.findAllItems = () => {
  return db.execute("SELECT * FROM items");
};

exports.addItem = (itemName, price, description) => {
  return db.execute(
    "INSERT INTO items (name,price,description) VALUES(?,?,?)",
    [itemName, price, description]
  );
};
