import mongoose from "mongoose";


const addressSchema = mongoose.Schema({
  country: String,
  city: String,
  postCode: String,
  houseNb: String
});

// TODO: validation
const userSchema = new mongoose.Schema(
  {
    providerId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    address: addressSchema,
    profileImg: {
      type: String,
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
