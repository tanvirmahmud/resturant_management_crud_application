const express = require("express");
const itemsControler = require("../controler/itemsMiddleware");

const router = express.Router();

router.get("/items", itemsControler.getItems);
router.post("/items", itemsControler.addItem);

module.exports = router;
