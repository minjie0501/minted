import express from "express";

import { Product } from "../models/product.js";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.send(error);
  }
});

// Create product
router.post("/", async (req, res) => {
  console.log(req.body);
  const product = new Product({
    title: req.body.title,
    keywords: req.body.keywords,
    description: req.body.description,
  });
  try {
    const newProduct = await product.save();
    res.send("gucci");
  } catch (error) {
    console.log(error);
  }
});

export default router;
