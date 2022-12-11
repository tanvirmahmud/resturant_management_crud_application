const express = require("express");
const orderControler = require("../controler/orderMiddleware");
const router = express.Router();
router.post("/order", orderControler.addOrder);
router.post("/employeeOrder", orderControler.orderByEmployee);

module.exports = router;
