import mongoose from "mongoose";

// TODO: validation
const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgs: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model("Items", itemSchema);
