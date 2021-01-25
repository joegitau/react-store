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

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(400).send("Could not create product!");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json(product);
  } catch (error) {
    res.status(400).send("Could not update product!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({_id: req.params.id});
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send("Could not delete product!");
  }
});

export default router;

// STATUS CODES
// 200 -> OK
// 201 -> CREATED
// 400 -> BAD REQUEST
// 401 -> UNAUTHORIZED REQUEST
// 403 -> FORBIDDEN ACCESS TO RESOURCE
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR