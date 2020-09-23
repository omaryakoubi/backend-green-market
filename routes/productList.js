const router = require("express").Router();
const mongoose = require("mongoose");
const product = require("../model/product");

module.exports = router.get("test", async (req, res) => {
  try {
    await product.find({ name: "omar" }, (list) => {
      res.send(list);
    });
  } catch (error) {
    console.log(error);
  }
});
