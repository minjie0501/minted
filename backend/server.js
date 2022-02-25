if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";
import session from "express-session";
import MongoStore from 'connect-mongo'

import { Product } from "./models/product.js";
import { productRouter } from "./routes/productRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { authRouter } from "./routes/authRouter.js";
import { googleStrategy, githubStrategy } from "./strategies/passportStrategy.js";
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to mongoose"));

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
 //update: or "origin: true," if you don't wanna add a specific one
  credentials: true,
};
app.use(cors(corsOptions));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length,Accept, X-Requested-With");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(process.env.PORT);
