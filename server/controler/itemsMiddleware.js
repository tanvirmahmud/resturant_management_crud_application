const itemsList = require("../model/itemsList");

exports.getItems = (req, res) => {
  itemsList
    .findAllItems()
    .then(([rows, fieldData]) => {
      if (rows.length > 0) {
        res.send({ items: rows, status: true });
      } else {
        res.send({ status: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addItem = (req, res) => {
  itemsList
    .addItem(req.body.name, req.body.price, req.body.description)
    .then(([rows, filedData]) => {});
};
