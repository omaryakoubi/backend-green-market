const router = require("express").Router();
const mongoose = require("mongoose");
const { findOneAndDelete } = require("../../model/product");
const product = require("../../model/product");

router.post("/new-product", async (req, res) => {
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
    res.send(error)
    console.log(error);
  }
});

router.delete("edit-product/:id", async (req,res) => {
  try {
    const id = req.params.id
    await findOneAndDelete(id)
    res.send("product deleted")
  } catch(error) {
    res.send(error)
    console.log(error)
  }
})
