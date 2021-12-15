import express from "express";

import { User } from "../models/user.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.send(error);
  }
});

// Get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.send(error);
  }
});


// NOTE: use bcrypt for the password
// // Create product
// router.post("/", async (req, res) => {
//   const product = new Product({
//     title: req.body.title,
//     keywords: req.body.keywords,
//     description: req.body.description,
//   });
//   try {
//     const newProduct = await product.save();
//     res.status(200).send(newProduct);
//   } catch (error) {
//     res.send(error);
//   }
// });

// // Update product route
// router.put("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     product.title = req.body.title;
//     product.keywords = req.body.keywords;
//     product.description = req.body.description;
//     await product.save();
//     res.status(201).send(product)
//   } catch (error) {
//     res.send(error)
//   }
// });

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: `User successfully deleted with id: ${req.params.id}` });
  } catch (error) {
    res.send(error);
  }
});

export default router;
