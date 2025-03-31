const Product = require("../models/Product");

// Add Product (Admin Only)
const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  try {
    const product = new Product({ name, description, price, stock });
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Stock (Admin Only)
const updateStock = async (req, res) => {
  const { stock } = req.body;

  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.stock = stock;
    await product.save();
    res.json({ message: "Stock updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Export functions using CommonJS
module.exports = { addProduct, getProducts, updateStock };
