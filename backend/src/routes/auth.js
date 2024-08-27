const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* --------------------------------------------------------------*/
//Register

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* --------------------------------------------------------------*/
//Login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const { passowrd, ...others } = user._doc;
    res.cookie("token", token).status(200).json(others);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* --------------------------------------------------------------*/
//Logout

router.get("/logout", (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .json("Logged out successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
