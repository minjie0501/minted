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

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect("/");
});

export const authRouter = router;
