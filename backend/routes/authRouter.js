import passport from "passport";
import express from "express";

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/google/failure",
  })
);

export const authRouter = router;
