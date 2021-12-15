if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";


import { Product } from "./models/product.js";
import productRouter from "./routes/productRoutes.js";

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to mongoose"));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/products", productRouter);

app.listen(3000);
