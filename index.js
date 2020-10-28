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

// # SHARE API MIDDLEWARES#
const sharedProductMethods = require("./routes/shared/product-methods")
app.use("/app",sharedProductMethods)


// # ADMIN API MIDDLEWARES #
const adminProductMethods = require("./routes/admin/product-methods");
app.use("/app/admin", adminProductMethods);


//# PORT VARIABLE AND SERVER LISTENING #
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
