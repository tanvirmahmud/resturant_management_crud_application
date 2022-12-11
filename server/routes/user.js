const express = require("express");
const userControler = require("../controler/userMiddleware");

const router = express.Router();

router.post("/login", userControler.getUser);

module.exports = router;
