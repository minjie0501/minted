import express from "express";

import { Item } from "../models/item.js";
import { User } from "../models/user.js";

const router = express.Router();

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(products);
  } catch (error) {
    res.json(error);
  }
});

// Get item by id
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('sellerId');
    res.status(200).json(item);
  } catch (error) {
    res.json(error);
  }
});

// Create item
router.post("/", async (req, res) => {
  const item = await new Item({...req.body, sellerId: req.user.id});
  try {
    const newItem = await item.save();
    res.status(200).json(newItem);
  } catch (error) {
    res.json(error);
  }
});


// TODO: change this
// Update item route
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.title = req.body.title;
    item.keywords = req.body.keywords;
    item.description = req.body.description;
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.json(error);
  }
});

// Delete item
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: `Item successfully deleted with id: ${req.params.id}` });
  } catch (error) {
    res.json(error);
  }
});

export const itemRouter = router;
