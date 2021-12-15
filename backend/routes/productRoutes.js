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

// Get product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.send(error);
  }
});

// Create product
router.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    keywords: req.body.keywords,
    description: req.body.description,
  });
  try {
    const newProduct = await product.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.send(error);
  }
});

// Update product route
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.title = req.body.title;
    product.keywords = req.body.keywords;
    product.description = req.body.description;
    await product.save();
    res.status(201).send(product)
  } catch (error) {
    res.send(error)
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: `Product successfully deleted with id: ${req.params.id}` });
  } catch (error) {
    res.send(error);
  }
});

export default router;
