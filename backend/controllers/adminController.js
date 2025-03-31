const User = require("../models/User");
const Order = require("../models/Order");

// Get All Users (Admin Only)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name email isAdmin createdAt");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Orders (Admin Only)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Export all functions using CommonJS
module.exports = { getUsers, getOrders };
