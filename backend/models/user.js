import mongoose from "mongoose";

// TODO: validation
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
