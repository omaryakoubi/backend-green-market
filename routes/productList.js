const router = require("express").Router();
const mongoose = require("mongoose");
const product = require("../model/product");

module.exports = router.get("all-products", async (req, res) => {
  try {
    const productsList = await product.find({});
    res.send(productsList);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});
