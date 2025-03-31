const express = require("express");
const { placeOrder, getOrders } = require("../controllers/orderController.js");
const { protect, adminOnly } = require("../middleware/auth.js");


const router = express.Router();

// Place an order (Customer only)
router.post("/", protect, placeOrder);

// Get all orders (Admin only)
router.get("/", protect, adminOnly, getOrders);

module.exports = router;
