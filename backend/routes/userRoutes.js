import express from "express";
import bcrypt from "bcrypt";

import { User } from "../models/user.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.json(error);
  }
});

// Get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});


// Get user by provider id
router.get("/provider/:id", async (req, res) => {
  try {
    const user = await User.findOne({providerId: req.params.id});
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});



// Create user
router.post("/", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.json(error);
  }
});

// Update user route
router.put("/:id", async (req, res) => {
  //NOTE: for now i just assume that the user is logged in and authorized to change the password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.password = hashedPassword;
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.json(error);
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: `User successfully deleted with id: ${req.params.id}` });
  } catch (error) {
    res.json(error);
  }
});

export const userRouter = router;
