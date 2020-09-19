const router = require("express").Router();
const mongoose = require("mongoose");

module.exports = router.post("/new-product", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
