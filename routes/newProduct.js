const router = require("express").Router();
const mongoose = require("mongoose");
const product = require("../model/product");

module.exports = router.post("/new-product", async (req, res) => {
  try {
    const { name, category, description, price } = req.body
    await new product({
      name,
      category,
      description,
      price,
    }).save();
    res.status(201).send("product saved");
  } catch (error) {
    console.log(error);
    res.status(406);
  }
});
