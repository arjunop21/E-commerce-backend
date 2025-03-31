const express = require("express");
const { getUsers, getOrders } = require("../controllers/adminController.js");
const { protect, adminOnly } = require("../middleware/auth.js");


const router = express.Router();

// Get all users (Admin only)
router.get("/users", protect, adminOnly, getUsers);

// Get all orders (Admin only)
router.get("/orders", protect, adminOnly, getOrders);

module.exports = router;
