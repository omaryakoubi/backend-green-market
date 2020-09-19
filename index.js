const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, async () => {
  try {
    console.log("DB ✅");
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on port ${process.env.PORT || 5000}`);
});
