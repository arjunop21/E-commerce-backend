const express = require("express");
const { loginUser, registerUser, logoutUser } = require("../controllers/authController.js");

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.post("/logout", logoutUser);


module.exports = router;
