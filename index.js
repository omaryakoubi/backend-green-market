const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
const app = express();

// # DATABESE CONNECTION #
const DB_URL = process.env.MONGODB_URL
mongoose.connect(DB_URL, {useNewUrlParser: true, useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

// MIDDLEWARES
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(helmet());


// # ADMIN API MIDDLEWARES #
const adminProductMethods = require("./api/admin/admin-product-methods");
const productMethods = require("./api/user/product-methods")
app.use("/app/admin", adminProductMethods);
app.use("/app",productMethods)


//# PORT VARIABLE AND SERVER LISTENING #
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
