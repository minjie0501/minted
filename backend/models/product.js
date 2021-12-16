import mongoose from "mongoose";

// NOTE: let the user upload pics later later later
//NOTE: add seller later
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
