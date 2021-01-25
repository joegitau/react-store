import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send("Products not found!");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    res.status(400).send("Product with given ID not found!");
  }
});

export default router;
