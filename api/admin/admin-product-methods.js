const router = require("express").Router();
const product = require("../../model/product");

router.post("/new-product", async (req, res) => {
  try {
    const { name, category, description, price } = req.body;
    const newProduct = await new product({
      name,
      category,
      description,
      price,
    }).save();
    res.status(201).json({
      message: "product saved",
      newProduct,
    });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.put("edit-product:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productEdited = await findByIdAndUpdate(id, req.body);
    res.status(200).json({
      message: "product edited",
      product: productEdited,
    });
  } catch (error) {
    res.json({ error });
  }
});

router.delete("delete-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await findOneAndDelete(id);
    res.json({ message: "product deleted" });
  } catch (error) {
    res.json({ error });
    console.log(error);
  }
});

module.exports = router;

