import passport from "passport";
import express from "express";
import { User } from "../models/user.js";

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

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect("back");
});

router.get("/isLoggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  return res.status(200).json({ loggedIn: false });
});

router.post("/autoRegister", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.hasOwnProperty("id") && req.user.hasOwnProperty("provider")) {
      const userData = new User({
        providerId: req.user.id,
        name:
          req.user.provider === "github"
            ? req.user._json.name
            : req.user.provider === "facebook"
            ? req.user._json.first_name + " " + req.user._json.last_name
            : req.user._json.given_name + " " + req.user._json.family_name,
        username: req.body.username,
        email: req.user.provider === "github" ? req.user.emails[0].value : req.user._json.email,
        profileImg: req.user.photos[0].value,
      });
      try {
        const newUser = await userData.save();
        res.status(200).json(newUser);
      } catch (error) {
        res.json(error);
      }
    }
  }
});

router.get("/newUser", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.hasOwnProperty("id") && req.user.hasOwnProperty("provider")) {
      const user = await User.find({ providerId: req.user.id });
      if (user.length < 1 || user == null) {
        return res.status(204).json({ message: "New user registration." });
      } else {
        return res.status(200).json(req.user);
      }
    }
  }
});

router.delete("/logout", (req, res) => {
  req.session.destroy(); // NOTE: i do want to do this i think?  deletes session from db after logout/ without this session gets updated
  req.logOut();
  res.status(200).send({ message: "Successfully logged out" });
});

export const authRouter = router;
