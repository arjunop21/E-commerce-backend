const express = require("express");
const { addProduct, getProducts, updateStock } = require("../controllers/productController.js");
const { protect, adminOnly } = require("../middleware/auth.js");

const router = express.Router();

// Get all products (Accessible to everyone)
router.get("/", getProducts);

// Add a new product (Admin only)
router.post("/", protect, adminOnly, addProduct);

// Update product stock (Admin only)
router.put("/:id", protect, adminOnly, updateStock);

module.exports = router;
