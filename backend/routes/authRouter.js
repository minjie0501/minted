import passport from "passport";
import express from "express";

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/auth/google/failure",
//   }), function (req,res) {
//     console.log(req)
//     res.redirect("http://localhost:3000")
//   }
//   )
// );

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  // TODO: redirect to previous page
  res.redirect("http://localhost:3000");
});

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect("back");
});

router.get("/facebook", passport.authenticate("facebook"));

router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect("back");
});

router.get("/isLoggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user)
    return res.status(200).json(req.user)
  }
  return res.status(200).json({ loggedIn: false });
});

export const authRouter = router;
