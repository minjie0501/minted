import mongoose from "mongoose";

// TODO: validation
const userSchema = new mongoose.Schema(
  {
    providerId: {
      type: String,
    },
    username: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
