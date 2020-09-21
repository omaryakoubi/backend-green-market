const router = require("express").Router();
const mongoose = require("mongoose");
const product = require("../model/product");

module.exports = router.post("/new-product", async (req, res) => {
  try {
    await new product({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
    }).save();
    res.status(201).send("product saved");
  } catch (error) {
    console.log(error);
    res.status(406);
  }
});
