const router = require("express").Router();
const mongoose = require("mongoose");
const product = require("../model/product");

module.exports = router.get("/all-products", async (req, res) => {
  try {
    await product.find({}, (data) => {
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});
