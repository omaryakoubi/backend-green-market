const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const add_product = require("./routes/newProduct");
const productList = require("./routes/productList");
require("dotenv").config();

const app = express();

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    try {
      console.log("DB ✅");
    } catch (error) {
      console.log(error);
    }
  }
);

// MIDDLEWARES
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(helmet());
app.use("/admin", add_product);
app.use("/user", productList);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
