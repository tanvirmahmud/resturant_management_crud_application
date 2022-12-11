const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const userRoute = require("./routes/user");
const itemsRoute = require("./routes/items");
const orderRoute = require("./routes/order");
app.use(bodyParser.json());

// Routing
app.use(userRoute);
app.use(itemsRoute);
app.use(orderRoute);

app.listen(5000, () => {
  console.log("Connect to backend!");
});
