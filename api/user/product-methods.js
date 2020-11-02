const router = require("express").Router();
const product = require("../../model/product");

router.get("all-products", async (req, res) => {
  try {
    const productsList = await product.find({});
    res.send(productsList);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

router.get("product-informations/:id", async (req, res) => {
  const id = req.params.id;
  const productInformations = await product.findById({ id });
  res.json({
    message: productInformation,
    productInformations,
  });
});

module.exports = router;
